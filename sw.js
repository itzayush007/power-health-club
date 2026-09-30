// Service Worker for Power Health Club
const CACHE_NAME = 'phc-cache-v1';
const urlsToCache = ['./index.html', './Icon.jpg', './Background.png'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache).catch(()=>{}))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request).catch(()=>{}))
  );
});

self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const options = {
    body: data.body || 'New notification from Power Health Club',
    icon: './Icon.jpg',
    badge: './Icon.jpg',
    vibrate: [200, 100, 200],
    data: { url: data.url || './' },
    actions: [{ action: 'open', title: 'Open App' }]
  };
  event.waitUntil(self.registration.showNotification(data.title || 'Power Health Club', options));
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url || './'));
});

// Background sync for notifications check
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'CHECK_EXPIRY') {
    checkExpiryNotifications(event.data.users);
  }
});

function checkExpiryNotifications(users) {
  if (!users) return;
  const now = new Date();
  users.forEach(user => {
    if (user.membershipExpiry) {
      const expiry = new Date(user.membershipExpiry);
      const daysLeft = Math.ceil((expiry - now) / (1000 * 60 * 60 * 24));
      if (daysLeft <= 2 && daysLeft >= 0) {
        self.registration.showNotification('⚠️ Membership Expiring Soon!', {
          body: `${user.name} ji, aapki membership ${daysLeft === 0 ? 'aaj' : daysLeft + ' din mein'} expire ho rahi hai. Renewal ke liye Prakash Kumar ji se contact karein: +919653071697`,
          icon: './Icon.jpg',
          badge: './Icon.jpg',
          vibrate: [300, 100, 300, 100, 300]
        });
      }
    }
  });
}
