// =============================================================
// Power Health Club - Firebase Backend (firebase-db.js)
// Real-time database + Authentication + Admin sync
// =============================================================
// This file auto-activates when PHC_FIREBASE_ACTIVE = true
// in firebase-config.js
// =============================================================

(function initPHCFirebase() {
  'use strict';

  function isConfigured() {
    return typeof PHC_FIREBASE_ACTIVE !== 'undefined' &&
           PHC_FIREBASE_ACTIVE === true &&
           typeof PHC_FIREBASE_CONFIG !== 'undefined' &&
           PHC_FIREBASE_CONFIG.apiKey &&
           !PHC_FIREBASE_CONFIG.apiKey.includes('REPLACE');
  }

  if (!isConfigured()) {
    console.log('[PHC] Firebase not configured — using localStorage (offline mode).');
    window._PHCFirebaseActive = false;
    return;
  }

  // ── Initialize Firebase ────────────────────────────────────
  firebase.initializeApp(PHC_FIREBASE_CONFIG);
  const db   = firebase.firestore();
  const auth = firebase.auth();
  window._PHCFirebaseActive = true;
  console.log('[PHC Firebase] Initializing...');

  // ── Collection names ───────────────────────────────────────
  const COL = {
    users:         'phc_users',
    fees:          'phc_fees',
    notices:       'phc_notices',
    notifications: 'phc_notifications',
    workouts:      'phc_workouts',
    diet:          'phc_diet',
    rules:         'phc_rules',
    supplements:   'phc_supplements',
    settings:      'phc_settings',
    admins:        'phc_admins',
    secret_keys:   'phc_secret_keys',
  };

  // ── Firestore helpers ──────────────────────────────────────
  async function fsGetArray(col) {
    try {
      const snap = await db.collection(col).get();
      return snap.docs.map(d => ({ ...d.data(), id: d.id }));
    } catch (e) { console.warn('[PHC] Read ' + col, e); return null; }
  }

  async function fsSetArray(col, items) {
    if (!Array.isArray(items)) return;
    try {
      // Use batched writes (max 500 per batch)
      const ts = firebase.firestore.FieldValue.serverTimestamp();
      for (let i = 0; i < items.length; i += 400) {
        const batch = db.batch();
        items.slice(i, i + 400).forEach(item => {
          const id = String(item.id || ('doc_' + Date.now() + '_' + Math.random().toString(36).slice(2)));
          batch.set(db.collection(col).doc(id), { ...item, _ts: ts });
        });
        await batch.commit();
      }
    } catch (e) { console.warn('[PHC] Write ' + col, e); }
  }

  async function fsGetDoc(col, docId) {
    try {
      const doc = await db.collection(col).doc(docId).get();
      return doc.exists ? doc.data() : null;
    } catch (e) { return null; }
  }

  async function fsSetDoc(col, docId, data) {
    try {
      await db.collection(col).doc(docId).set({
        ...data, _ts: firebase.firestore.FieldValue.serverTimestamp()
      });
    } catch (e) { console.warn('[PHC] SetDoc ' + col + '/' + docId, e); }
  }

  // ── Patch DB module: every save() also writes to Firestore ─
  function patchArraySave(methodName, collection) {
    const orig = DB[methodName].bind(DB);
    DB[methodName] = function (data) {
      orig(data);                          // keep localStorage in sync
      const arr = Array.isArray(data) ? data : [data];
      fsSetArray(collection, arr);         // async sync to Firestore
    };
  }

  patchArraySave('saveUsers',         COL.users);
  patchArraySave('saveFees',          COL.fees);
  patchArraySave('saveNotices',       COL.notices);
  patchArraySave('saveNotifications', COL.notifications);
  patchArraySave('saveWorkouts',      COL.workouts);
  patchArraySave('saveDiet',          COL.diet);
  patchArraySave('saveRules',         COL.rules);
  patchArraySave('saveSupplements',   COL.supplements);

  // Settings is an object, not array
  const _origSaveSettings = DB.saveSettings.bind(DB);
  DB.saveSettings = function (data) {
    _origSaveSettings(data);
    fsSetDoc(COL.settings, 'main', data);
  };

  // Admin users
  const _origAdmSave = window._admSaveAdmins;
  window._admSaveAdmins = function (admins) {
    if (_origAdmSave) _origAdmSave(admins);
    fsSetDoc(COL.admins, 'list', { admins });
  };

  // Secret keys
  const _origKeySave = window._admSaveSecretKeys;
  window._admSaveSecretKeys = function (keys) {
    if (_origKeySave) _origKeySave(keys);
    fsSetDoc(COL.secret_keys, 'list', { keys });
  };

  // ── Real-time listeners ────────────────────────────────────
  function setupListeners() {

    // 1. Notifications — instant push to all open tabs/devices
    db.collection(COL.notifications).orderBy('_ts', 'desc').limit(50)
      .onSnapshot(snap => {
        const items = snap.docs.map(d => ({ ...d.data(), id: d.id }))
                               .filter(i => !i._deleted);
        localStorage.setItem('phc_notifications', JSON.stringify(items));
        try { updateNotifBadge(); } catch(e) {}
      }, e => console.warn('[PHC] notif listener', e));

    // 2. Notice board — updates everywhere in real-time
    db.collection(COL.notices).orderBy('_ts', 'desc').limit(20)
      .onSnapshot(snap => {
        const items = snap.docs.map(d => ({ ...d.data(), id: d.id }));
        localStorage.setItem('phc_notices', JSON.stringify(items));
        try {
          const sec = document.getElementById('sec-notice');
          if (sec && getComputedStyle(sec).display !== 'none') renderNotices();
        } catch(e) {}
      }, e => console.warn('[PHC] notice listener', e));

    // 3. Settings — gym timing, social links sync
    db.collection(COL.settings).doc('main')
      .onSnapshot(doc => {
        if (!doc.exists) return;
        const data = doc.data();
        localStorage.setItem('phc_settings', JSON.stringify(data));
        try { loadSocialLinks(); } catch(e) {}
        try {
          const el = document.getElementById('timing-text');
          if (el && data.gymTiming) el.textContent = data.gymTiming;
        } catch(e) {}
      }, e => console.warn('[PHC] settings listener', e));

    // 4. Current user membership status — real-time expiry/activation
    const curUser = DB.getCurrentUser();
    if (curUser && curUser.id) {
      db.collection(COL.users).doc(String(curUser.id))
        .onSnapshot(doc => {
          if (!doc.exists) return;
          const updated = { ...doc.data(), id: doc.id };
          const local = DB.getCurrentUser();
          if (!local) return;
          // Update if membership changed
          if (updated.isMember !== local.isMember ||
              updated.membershipExpiry !== local.membershipExpiry ||
              updated.name !== local.name) {
            DB.setCurrentUser(updated);
            try { updateAuthUI(); renderProfile(); } catch(e) {}
            if (updated.isMember && !local.isMember) {
              try { showToast('Membership activated! Welcome!'); } catch(e) {}
            }
          }
        }, e => console.warn('[PHC] user listener', e));
    }
  }

  // ── Load all data from Firestore on startup ────────────────
  async function syncOnLoad() {
    const MAP = {
      users: COL.users, fees: COL.fees, notices: COL.notices,
      notifications: COL.notifications, workouts: COL.workouts,
      diet: COL.diet, rules: COL.rules, supplements: COL.supplements,
    };

    const results = await Promise.allSettled(
      Object.entries(MAP).map(async ([key, col]) => {
        const data = await fsGetArray(col);
        if (data && data.length > 0) {
          localStorage.setItem('phc_' + key, JSON.stringify(data));
        }
      })
    );

    // Settings
    const settings = await fsGetDoc(COL.settings, 'main');
    if (settings) localStorage.setItem('phc_settings', JSON.stringify(settings));

    // Admin users
    const admins = await fsGetDoc(COL.admins, 'list');
    if (admins && admins.admins) localStorage.setItem('phc_admins', JSON.stringify(admins.admins));

    // Secret keys
    const keys = await fsGetDoc(COL.secret_keys, 'list');
    if (keys && keys.keys) localStorage.setItem('phc_secret_keys', JSON.stringify(keys.keys));

    // Re-render UI with fresh data
    const fns = ['renderWorkouts','renderDiet','renderRules','renderStore',
                  'renderNotices','updateNotifBadge','updateAuthUI','loadSocialLinks'];
    fns.forEach(fn => { try { if (typeof window[fn]==='function') window[fn](); } catch(e) {} });

    console.log('[PHC Firebase] Sync complete.');
  }

  // ── Firebase Authentication ────────────────────────────────
  auth.onAuthStateChanged(async fbUser => {
    if (!fbUser) return;
    try {
      const doc = await db.collection(COL.users).doc(fbUser.uid).get();
      if (doc.exists) {
        DB.setCurrentUser({ ...doc.data(), id: fbUser.uid });
        try { updateAuthUI(); renderProfile(); } catch(e) {}
      }
    } catch(e) { console.warn('[PHC] Auth state sync error', e); }
  });

  // ── Override doLogin ───────────────────────────────────────
  const _origLogin = window.doLogin;
  window.doLogin = async function () {
    const inp  = (document.getElementById('login-username')?.value || '').trim();
    const pass = document.getElementById('login-password')?.value || '';
    if (!inp || !pass) { if(_origLogin) _origLogin(); return; }

    // Find email from local users
    const users = DB.getUsers();
    const found = users.find(u =>
      (u.username||'').toLowerCase() === inp.toLowerCase() ||
      u.mobile === inp ||
      (u.email||'').toLowerCase() === inp.toLowerCase()
    );

    if (found && found.email) {
      try {
        await auth.signInWithEmailAndPassword(found.email, pass);
        // onAuthStateChanged will handle the rest
        return;
      } catch(e) {
        if (e.code === 'auth/wrong-password') {
          try { showToast('Wrong password!', 'error'); } catch(ex) {}
          return;
        }
        // Fall through to local auth
      }
    }
    if (_origLogin) _origLogin();
  };

  // ── Override doSignup ──────────────────────────────────────
  const _origSignup = window.doSignup;
  window.doSignup = async function () {
    const name     = (document.getElementById('signup-name')?.value    || '').trim();
    const email    = (document.getElementById('signup-email')?.value   || '').trim();
    const mobile   = (document.getElementById('signup-mobile')?.value  || '').trim();
    const username = (document.getElementById('signup-username')?.value|| '').trim().toLowerCase();
    const pass     = document.getElementById('signup-password')?.value || '';

    if (!name || !mobile || !username || !pass) {
      if (_origSignup) _origSignup();
      return;
    }

    if (email) {
      try {
        const cred = await auth.createUserWithEmailAndPassword(email, pass);
        const uid  = cred.user.uid;

        const userData = {
          id: uid, name, email, mobile, username,
          gymJoinDate: new Date().toISOString().split('T')[0],
          isMember: false, role: 'user', createdAt: Date.now()
        };

        // Save to Firestore
        await db.collection(COL.users).doc(uid).set({
          ...userData, _ts: firebase.firestore.FieldValue.serverTimestamp()
        });

        // Save locally
        const users = DB.getUsers();
        users.push(userData);
        localStorage.setItem('phc_users', JSON.stringify(users));
        DB.setCurrentUser(userData);

        try { closeModal('signup'); updateAuthUI(); renderProfile(); } catch(e) {}
        try { showToast('Account created! Welcome, ' + name + '!'); } catch(e) {}
        return;
      } catch(e) {
        if (e.code === 'auth/email-already-in-use') {
          try { showToast('Email already registered!', 'error'); } catch(ex) {}
          return;
        }
      }
    }
    // Fallback to local signup
    if (_origSignup) _origSignup();
  };

  // ── User logout ────────────────────────────────────────────
  const _origLogout = window.doLogout;
  window.doLogout = async function () {
    try { await auth.signOut(); } catch(e) {}
    if (_origLogout) _origLogout();
  };

  // ── Admin broadcasts — send to Firestore for real-time ─────
  const _origBroadcast = window.admSendBroadcast;
  window.admSendBroadcast = function () {
    _origBroadcast && _origBroadcast();
    // Firestore write is already handled via patchArraySave('saveNotifications')
  };

  // ── Initialize ─────────────────────────────────────────────
  syncOnLoad()
    .then(() => setupListeners())
    .catch(e => console.warn('[PHC Firebase] Init error:', e));

  window._PHCFirebase = { db, auth, fsGetArray, fsSetArray, fsGetDoc, fsSetDoc };
  console.log('[PHC Firebase] Backend ACTIVE!');

})();