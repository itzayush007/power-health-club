
const DB={
  get(k,d){try{return JSON.parse(localStorage.getItem('phc_'+k))||d;}catch{return d;}},
  set(k,v){localStorage.setItem('phc_'+k,JSON.stringify(v));},
  getUsers(){return this.get('users',[]);},saveUsers(u){this.set('users',u);},
  getCurrentUser(){return this.get('current_user',null);},
  setCurrentUser(u){this.set('current_user',u);},
  logout(){localStorage.removeItem('phc_current_user');},
  getWorkouts(){return this.get('workouts',DEFAULT_WORKOUTS);},saveWorkouts(d){this.set('workouts',d);},
  getDiet(){return this.get('diet',DEFAULT_DIET);},saveDiet(d){this.set('diet',d);},
  getRules(){return this.get('rules',DEFAULT_RULES);},saveRules(d){this.set('rules',d);},
  getNotices(){return this.get('notices',[]);},saveNotices(d){this.set('notices',d);},
  getSupplements(){return this.get('supplements',DEFAULT_SUPPLEMENTS);},saveSupplements(d){this.set('supplements',d);},
  getSettings(){return this.get('settings',DEFAULT_SETTINGS);},saveSettings(d){this.set('settings',d);},
  getNotifications(){return this.get('notifications',[]);},saveNotifications(d){this.set('notifications',d);},
  getFees(){return this.get('fees',[]);},saveFees(d){this.set('fees',d);},
};
const DEFAULT_SETTINGS={gymTiming:'Monday - Saturday: 5:00 AM - 10:00 AM | 4:00 PM - 10:00 PM\nSunday: 6:00 AM - 9:00 AM',socialLinks:{whatsapp:'https://chat.whatsapp.com/BordoCoPoLABloh1C0sE7u',youtube:'https://youtube.com/@powarhealthclub?si=ki5-9Q_fYG1Gi2ki',instagram:'',telegram:'',twitter:''}};
const DEFAULT_WORKOUTS=[
  {id:'w1',name_en:'Push-Up',name_hi:'à¤ªà¥à¤¶-à¤…à¤ª',category:'beginner',muscles:'Chest, Triceps, Shoulders',description_en:'A classic bodyweight exercise that builds chest, tricep and shoulder strength. Perfect for beginners and all fitness levels.',description_hi:'à¤à¤• à¤•à¥à¤²à¤¾à¤¸à¤¿à¤• à¤¬à¥‰à¤¡à¥€à¤µà¥‡à¤Ÿ à¤à¤•à¥à¤¸à¤°à¤¸à¤¾à¤‡à¤œ à¤œà¥‹ à¤›à¤¾à¤¤à¥€, à¤Ÿà¥à¤°à¤¾à¤‡à¤¸à¥‡à¤ªà¥à¤¸ à¤”à¤° à¤•à¤‚à¤§à¥‹à¤‚ à¤•à¥‹ à¤®à¤œà¤¬à¥‚à¤¤ à¤¬à¤¨à¤¾à¤¤à¥€ à¤¹à¥ˆà¥¤ à¤¬à¤¿à¤—à¤¿à¤¨à¤°à¥à¤¸ à¤•à¥‡ à¤²à¤¿à¤ à¤ªà¤°à¤«à¥‡à¤•à¥à¤Ÿà¥¤',howTo_en:['Get into plank position, hands shoulder-width apart','Keep body straight from head to heels','Lower chest toward the floor slowly','Push back up to starting position','Breathe in going down, out going up'],howTo_hi:['à¤¹à¤¾à¤¥à¥‹à¤‚ à¤•à¥‹ à¤•à¤‚à¤§à¥‡ à¤•à¥€ à¤šà¥Œà¤¡à¤¼à¤¾à¤ˆ à¤ªà¤° à¤°à¤–à¤•à¤° à¤ªà¥à¤²à¥ˆà¤‚à¤• à¤ªà¥‹à¤œà¤¿à¤¶à¤¨ à¤®à¥‡à¤‚ à¤†à¤à¤‚','à¤¸à¤¿à¤° à¤¸à¥‡ à¤à¤¡à¤¼à¥€ à¤¤à¤• à¤¶à¤°à¥€à¤° à¤¬à¤¿à¤²à¥à¤•à¥à¤² à¤¸à¥€à¤§à¤¾ à¤°à¤–à¥‡à¤‚','à¤›à¤¾à¤¤à¥€ à¤•à¥‹ à¤§à¥€à¤°à¥‡-à¤§à¥€à¤°à¥‡ à¤«à¤°à¥à¤¶ à¤•à¥€ à¤¤à¤°à¤« à¤¨à¥€à¤šà¥‡ à¤²à¤¾à¤à¤‚','à¤µà¤¾à¤ªà¤¸ à¤¶à¥à¤°à¥à¤†à¤¤à¥€ à¤¸à¥à¤¥à¤¿à¤¤à¤¿ à¤®à¥‡à¤‚ à¤†à¤à¤‚','à¤¨à¥€à¤šà¥‡ à¤œà¤¾à¤¤à¥‡ à¤¸à¤®à¤¯ à¤¸à¤¾à¤‚à¤¸ à¤²à¥‡à¤‚, à¤Šà¤ªà¤° à¤†à¤¤à¥‡ à¤¸à¤®à¤¯ à¤›à¥‹à¤¡à¤¼à¥‡à¤‚'],sets:'3 Sets Ã— 15-20 Reps',image:'img_pushup.jpg'},
  {id:'w2',name_en:'Barbell Bench Press',name_hi:'à¤¬à¤¾à¤°à¤¬à¥‡à¤² à¤¬à¥‡à¤‚à¤š à¤ªà¥à¤°à¥‡à¤¸',category:'intermediate',muscles:'Chest, Triceps, Front Deltoids',description_en:'The king of chest exercises. Builds massive chest strength and muscle mass. Essential for upper body power.',description_hi:'à¤›à¤¾à¤¤à¥€ à¤•à¥€ à¤¸à¤¬à¤¸à¥‡ à¤ªà¥à¤°à¤­à¤¾à¤µà¤¶à¤¾à¤²à¥€ à¤à¤•à¥à¤¸à¤°à¤¸à¤¾à¤‡à¤œà¥¤ à¤›à¤¾à¤¤à¥€ à¤•à¥€ à¤¤à¤¾à¤•à¤¤ à¤”à¤° à¤®à¤¾à¤‚à¤¸à¤ªà¥‡à¤¶à¤¿à¤¯à¤¾à¤‚ à¤¬à¤¨à¤¾à¤¤à¥€ à¤¹à¥ˆà¥¤ à¤…à¤ªà¤° à¤¬à¥‰à¤¡à¥€ à¤ªà¤¾à¤µà¤° à¤•à¥‡ à¤²à¤¿à¤ à¤œà¤°à¥‚à¤°à¥€à¥¤',howTo_en:['Lie flat on bench, feet firmly on floor','Grip bar slightly wider than shoulder-width','Unrack bar, lower to chest slowly and controlled','Press bar back up explosively','Keep back slightly arched, chest up throughout'],howTo_hi:['à¤¬à¥‡à¤‚à¤š à¤ªà¤° à¤¸à¥€à¤§à¥‡ à¤²à¥‡à¤Ÿà¥‡à¤‚, à¤ªà¥ˆà¤° à¤®à¤œà¤¬à¥‚à¤¤à¥€ à¤¸à¥‡ à¤«à¤°à¥à¤¶ à¤ªà¤°','à¤•à¤‚à¤§à¥‹à¤‚ à¤¸à¥‡ à¤¥à¥‹à¤¡à¤¼à¤¾ à¤šà¥Œà¤¡à¤¼à¤¾ à¤—à¥à¤°à¤¿à¤ª à¤¸à¥‡ à¤¬à¤¾à¤° à¤ªà¤•à¤¡à¤¼à¥‡à¤‚','à¤¬à¤¾à¤° à¤•à¥‹ à¤§à¥€à¤°à¥‡-à¤§à¥€à¤°à¥‡ à¤”à¤° à¤¨à¤¿à¤¯à¤‚à¤¤à¥à¤°à¤£ à¤¸à¥‡ à¤›à¤¾à¤¤à¥€ à¤ªà¤° à¤²à¤¾à¤à¤‚','à¤¬à¤¾à¤° à¤•à¥‹ à¤¤à¥‡à¤œà¥€ à¤¸à¥‡ à¤Šà¤ªà¤° à¤§à¤•à¥‡à¤²à¥‡à¤‚','à¤ªà¥‚à¤°à¥‡ à¤¸à¤®à¤¯ à¤›à¤¾à¤¤à¥€ à¤Šà¤ªà¤°, à¤ªà¥€à¤  à¤¥à¥‹à¤¡à¤¼à¥€ à¤†à¤°à¥à¤š à¤®à¥‡à¤‚ à¤°à¤–à¥‡à¤‚'],sets:'4 Sets Ã— 8-12 Reps',image:'img_bench.jpg'},
  {id:'w3',name_en:'Deadlift',name_hi:'à¤¡à¥‡à¤¡à¤²à¤¿à¤«à¥à¤Ÿ',category:'advanced',muscles:'Lower Back, Hamstrings, Glutes, Traps, Core',description_en:'The ultimate full-body compound movement. Builds incredible overall strength. Master with light weight first.',description_hi:'à¤…à¤²à¥à¤Ÿà¥€à¤®à¥‡à¤Ÿ à¤«à¥à¤²-à¤¬à¥‰à¤¡à¥€ à¤•à¤®à¥à¤ªà¤¾à¤‰à¤‚à¤¡ à¤®à¥‚à¤µà¤®à¥‡à¤‚à¤Ÿà¥¤ à¤…à¤¦à¥à¤­à¥à¤¤ à¤¤à¤¾à¤•à¤¤ à¤¬à¤¨à¤¾à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤ªà¤¹à¤²à¥‡ à¤¹à¤²à¥à¤•à¥‡ à¤µà¤œà¤¨ à¤¸à¥‡ à¤¸à¥€à¤–à¥‡à¤‚à¥¤',howTo_en:['Stand feet hip-width apart, bar over mid-foot','Hinge at hips, grip bar shoulder-width, chest up','Back flat, core tight, take a deep breath','Drive through heels, extend hips and knees simultaneously','Stand tall, then lower with full control'],howTo_hi:['à¤ªà¥ˆà¤°à¥‹à¤‚ à¤•à¥‹ à¤•à¥‚à¤²à¥à¤¹à¥‡ à¤•à¥€ à¤šà¥Œà¤¡à¤¼à¤¾à¤ˆ à¤ªà¤° à¤°à¤–à¥‡à¤‚, à¤¬à¤¾à¤° à¤ªà¥ˆà¤° à¤•à¥‡ à¤¬à¥€à¤š à¤ªà¤°','à¤•à¥‚à¤²à¥à¤¹à¥‹à¤‚ à¤ªà¤° à¤à¥à¤•à¥‡à¤‚, à¤¬à¤¾à¤° à¤•à¥‹ à¤•à¤‚à¤§à¥‡ à¤•à¥€ à¤šà¥Œà¤¡à¤¼à¤¾à¤ˆ à¤¸à¥‡ à¤ªà¤•à¤¡à¤¼à¥‡à¤‚, à¤›à¤¾à¤¤à¥€ à¤Šà¤ªà¤°','à¤ªà¥€à¤  à¤¸à¥€à¤§à¥€, à¤•à¥‹à¤° à¤Ÿà¤¾à¤‡à¤Ÿ, à¤—à¤¹à¤°à¥€ à¤¸à¤¾à¤‚à¤¸ à¤²à¥‡à¤‚','à¤à¤¡à¤¼à¤¿à¤¯à¥‹à¤‚ à¤¸à¥‡ à¤§à¤•à¥‡à¤²à¥‡à¤‚, à¤•à¥‚à¤²à¥à¤¹à¥‡ à¤”à¤° à¤˜à¥à¤Ÿà¤¨à¥‡ à¤à¤• à¤¸à¤¾à¤¥ à¤¸à¥€à¤§à¥‡ à¤•à¤°à¥‡à¤‚','à¤¸à¥€à¤§à¥‡ à¤–à¤¡à¤¼à¥‡ à¤¹à¥‹à¤‚, à¤«à¤¿à¤° à¤¨à¤¿à¤¯à¤‚à¤¤à¥à¤°à¤£ à¤¸à¥‡ à¤¨à¥€à¤šà¥‡ à¤²à¤¾à¤à¤‚'],sets:'3 Sets Ã— 5-8 Reps',image:'img_squat.jpg'},
  {id:'w4',name_en:'Squat',name_hi:'à¤¸à¥à¤•à¥à¤µà¤¾à¤Ÿ',category:'beginner',muscles:'Quadriceps, Hamstrings, Glutes, Core',description_en:'The foundational lower body exercise. Essential for leg strength and overall fitness. Great for all fitness levels.',description_hi:'à¤²à¥‹à¤…à¤° à¤¬à¥‰à¤¡à¥€ à¤•à¥€ à¤¬à¥à¤¨à¤¿à¤¯à¤¾à¤¦à¥€ à¤à¤•à¥à¤¸à¤°à¤¸à¤¾à¤‡à¤œà¥¤ à¤ªà¥ˆà¤°à¥‹à¤‚ à¤•à¥€ à¤¤à¤¾à¤•à¤¤ à¤•à¥‡ à¤²à¤¿à¤ à¤œà¤°à¥‚à¤°à¥€à¥¤ à¤¸à¤­à¥€ à¤«à¤¿à¤Ÿà¤¨à¥‡à¤¸ à¤²à¥‡à¤µà¤² à¤•à¥‡ à¤²à¤¿à¤ à¤…à¤šà¥à¤›à¥€à¥¤',howTo_en:['Stand with feet shoulder-width apart, toes slightly out','Keep chest up and core engaged throughout','Sit back and down as if sitting on a chair','Knees track over toes, dont cave inward','Drive through heels to return to standing'],howTo_hi:['à¤ªà¥ˆà¤°à¥‹à¤‚ à¤•à¥‹ à¤•à¤‚à¤§à¥‡ à¤•à¥€ à¤šà¥Œà¤¡à¤¼à¤¾à¤ˆ à¤ªà¤°, à¤ªà¤‚à¤œà¥‡ à¤¥à¥‹à¤¡à¤¼à¥‡ à¤¬à¤¾à¤¹à¤° à¤°à¤–à¥‡à¤‚','à¤›à¤¾à¤¤à¥€ à¤Šà¤ªà¤° à¤”à¤° à¤•à¥‹à¤° à¤à¤‚à¤—à¥‡à¤œ à¤°à¤–à¥‡à¤‚','à¤œà¥ˆà¤¸à¥‡ à¤•à¥à¤°à¥à¤¸à¥€ à¤ªà¤° à¤¬à¥ˆà¤ à¤¤à¥‡ à¤¹à¥ˆà¤‚ à¤µà¥ˆà¤¸à¥‡ à¤ªà¥€à¤›à¥‡ à¤”à¤° à¤¨à¥€à¤šà¥‡ à¤œà¤¾à¤à¤‚','à¤˜à¥à¤Ÿà¤¨à¥‡ à¤ªà¤‚à¤œà¥‹à¤‚ à¤•à¥€ à¤¦à¤¿à¤¶à¤¾ à¤®à¥‡à¤‚, à¤…à¤‚à¤¦à¤° à¤¨ à¤®à¥à¤¡à¤¼à¤¨à¥‡ à¤¦à¥‡à¤‚','à¤à¤¡à¤¼à¤¿à¤¯à¥‹à¤‚ à¤¸à¥‡ à¤§à¤•à¥‡à¤²à¤•à¤° à¤–à¤¡à¤¼à¥‡ à¤¹à¥‹à¤‚'],sets:'4 Sets Ã— 12-15 Reps',image:'img_squat.jpg'},
  {id:'w5',name_en:'Pull-Up',name_hi:'à¤ªà¥à¤²-à¤…à¤ª',category:'intermediate',muscles:'Lats, Biceps, Rear Deltoids, Core',description_en:'Best bodyweight exercise for building a wide V-shaped back. Improves grip strength significantly.',description_hi:'à¤šà¥Œà¤¡à¤¼à¥€ V-à¤¶à¥‡à¤ª à¤ªà¥€à¤  à¤¬à¤¨à¤¾à¤¨à¥‡ à¤•à¥€ à¤¸à¤¬à¤¸à¥‡ à¤…à¤šà¥à¤›à¥€ à¤¬à¥‰à¤¡à¥€à¤µà¥‡à¤Ÿ à¤à¤•à¥à¤¸à¤°à¤¸à¤¾à¤‡à¤œà¥¤ à¤—à¥à¤°à¤¿à¤ª à¤¸à¥à¤Ÿà¥à¤°à¥‡à¤‚à¤¥ à¤•à¤¾à¤«à¥€ à¤¬à¤¢à¤¼à¤¾à¤¤à¥€ à¤¹à¥ˆà¥¤',howTo_en:['Hang from bar with overhand grip, fully extended','Engage lats and pull chest up toward bar','Squeeze shoulder blades at the top','Lower slowly with full control, full dead hang','Avoid swinging or kipping unless practicing that skill'],howTo_hi:['à¤“à¤µà¤°à¤¹à¥ˆà¤‚à¤¡ à¤—à¥à¤°à¤¿à¤ª à¤¸à¥‡ à¤¬à¤¾à¤° à¤ªà¤° à¤²à¤Ÿà¤•à¥‡à¤‚, à¤ªà¥‚à¤°à¥€ à¤¤à¤°à¤¹ à¤¸à¥€à¤§à¥‡','à¤²à¥ˆà¤Ÿà¥à¤¸ à¤²à¤—à¤¾à¤à¤‚ à¤”à¤° à¤›à¤¾à¤¤à¥€ à¤•à¥‹ à¤¬à¤¾à¤° à¤•à¥€ à¤¤à¤°à¤« à¤–à¥€à¤‚à¤šà¥‡à¤‚','à¤Šà¤ªà¤° à¤¶à¥‹à¤²à¥à¤¡à¤° à¤¬à¥à¤²à¥‡à¤¡ à¤¦à¤¬à¤¾à¤à¤‚','à¤¨à¤¿à¤¯à¤‚à¤¤à¥à¤°à¤£ à¤¸à¥‡ à¤§à¥€à¤°à¥‡ à¤¨à¥€à¤šà¥‡ à¤†à¤à¤‚, à¤ªà¥‚à¤°à¥€ à¤¤à¤°à¤¹ à¤²à¤Ÿà¤•à¥‡à¤‚','à¤à¥‚à¤²à¤¨à¥‡ à¤¸à¥‡ à¤¬à¤šà¥‡à¤‚'],sets:'3 Sets Ã— Max Reps',image:'img_pullup.jpg'},
  {id:'w6',name_en:'Dumbbell Curl',name_hi:'à¤¡à¤®à¥à¤¬à¤² à¤•à¤°à¥à¤²',category:'common',muscles:'Biceps, Forearms, Brachialis',description_en:'The most iconic arm exercise. Isolates and builds impressive bicep peak effectively.',description_hi:'à¤¸à¤¬à¤¸à¥‡ à¤†à¤‡à¤•à¥‰à¤¨à¤¿à¤• à¤†à¤°à¥à¤® à¤à¤•à¥à¤¸à¤°à¤¸à¤¾à¤‡à¤œà¥¤ à¤¬à¤¾à¤‡à¤¸à¥‡à¤ªà¥à¤¸ à¤•à¥‹ à¤ªà¥à¤°à¤­à¤¾à¤µà¥€ à¤¢à¤‚à¤— à¤¸à¥‡ à¤¬à¤¨à¤¾à¤¤à¥€ à¤¹à¥ˆà¥¤',howTo_en:['Stand or sit holding dumbbells at your sides','Keep elbows pinned close to your torso','Curl weights while rotating palm upward (supinate)','Squeeze bicep hard at the top for 1 second','Lower slowly in 3 counts, full range of motion'],howTo_hi:['à¤¡à¤®à¥à¤¬à¤² à¤ªà¤•à¤¡à¤¼à¤•à¤° à¤–à¤¡à¤¼à¥‡ à¤¹à¥‹à¤‚ à¤¯à¤¾ à¤¬à¥ˆà¤ à¥‡à¤‚','à¤•à¥‹à¤¹à¤¨à¤¿à¤¯à¥‹à¤‚ à¤•à¥‹ à¤¶à¤°à¥€à¤° à¤¸à¥‡ à¤¸à¤Ÿà¤¾à¤•à¤° à¤°à¤–à¥‡à¤‚','à¤¹à¤¥à¥‡à¤²à¥€ à¤Šà¤ªà¤° à¤•à¤°à¤¤à¥‡ à¤¹à¥à¤ à¤µà¤œà¤¨ à¤‰à¤ à¤¾à¤à¤‚','à¤Šà¤ªà¤° 1 à¤¸à¥‡à¤•à¤‚à¤¡ à¤•à¥‡ à¤²à¤¿à¤ à¤¬à¤¾à¤‡à¤¸à¥‡à¤ª à¤œà¥‹à¤° à¤¸à¥‡ à¤¦à¤¬à¤¾à¤à¤‚','3 à¤•à¤¾à¤‰à¤‚à¤Ÿ à¤®à¥‡à¤‚ à¤§à¥€à¤°à¥‡ à¤¨à¥€à¤šà¥‡ à¤²à¤¾à¤à¤‚, à¤ªà¥‚à¤°à¥€ à¤°à¥‡à¤‚à¤œ'],sets:'3 Sets Ã— 12-15 Reps',image:'img_curl.jpg'},
  {id:'w7',name_en:'Plank',name_hi:'à¤ªà¥à¤²à¥ˆà¤‚à¤•',category:'beginner',muscles:'Core, Abs, Shoulders, Lower Back',description_en:'Best core stability exercise. Strengthens the entire midsection and improves posture.',description_hi:'à¤¸à¤¬à¤¸à¥‡ à¤…à¤šà¥à¤›à¥€ à¤•à¥‹à¤° à¤¸à¥à¤Ÿà¥‡à¤¬à¤¿à¤²à¤¿à¤Ÿà¥€ à¤à¤•à¥à¤¸à¤°à¤¸à¤¾à¤‡à¤œà¥¤ à¤ªà¥‚à¤°à¥‡ à¤®à¤¿à¤¡à¤¸à¥‡à¤•à¥à¤¶à¤¨ à¤•à¥‹ à¤®à¤œà¤¬à¥‚à¤¤ à¤•à¤°à¤¤à¥€ à¤¹à¥ˆà¥¤',howTo_en:['Get into forearm plank â€” elbows under shoulders','Body completely straight from head to heels','Engage core, squeeze glutes, keep hips level','Breathe normally, dont hold your breath','Start 30 seconds, progressively build to 2 minutes'],howTo_hi:['à¤«à¥‹à¤°à¤†à¤°à¥à¤® à¤ªà¥à¤²à¥ˆà¤‚à¤• à¤®à¥‡à¤‚ à¤†à¤à¤‚ â€” à¤•à¥‹à¤¹à¤¨à¤¿à¤¯à¤¾à¤‚ à¤•à¤‚à¤§à¥‹à¤‚ à¤•à¥‡ à¤¨à¥€à¤šà¥‡','à¤¸à¤¿à¤° à¤¸à¥‡ à¤à¤¡à¤¼à¥€ à¤¤à¤• à¤¶à¤°à¥€à¤° à¤¬à¤¿à¤²à¥à¤•à¥à¤² à¤¸à¥€à¤§à¤¾','à¤•à¥‹à¤° à¤²à¤—à¤¾à¤à¤‚, à¤—à¥à¤²à¥‚à¤Ÿà¥à¤¸ à¤¦à¤¬à¤¾à¤à¤‚, à¤•à¥‚à¤²à¥à¤¹à¥‡ à¤¸à¤®à¤¾à¤¨ à¤°à¤–à¥‡à¤‚','à¤¸à¤¾à¤®à¤¾à¤¨à¥à¤¯ à¤¸à¤¾à¤‚à¤¸ à¤²à¥‡à¤‚, à¤¸à¤¾à¤‚à¤¸ à¤¨ à¤°à¥‹à¤•à¥‡à¤‚','30 à¤¸à¥‡à¤•à¤‚à¤¡ à¤¸à¥‡ à¤¶à¥à¤°à¥‚ à¤•à¤°à¥‡à¤‚, 2 à¤®à¤¿à¤¨à¤Ÿ à¤¤à¤• à¤¬à¤¢à¤¼à¤¾à¤à¤‚'],sets:'3 Sets Ã— 30-60 seconds',image:'img_plank.jpg'},
  {id:'w8',name_en:'Shoulder Press (Dumbbell)',name_hi:'à¤¶à¥‹à¤²à¥à¤¡à¤° à¤ªà¥à¤°à¥‡à¤¸ (à¤¡à¤®à¥à¤¬à¤²)',category:'common',muscles:'Deltoids, Triceps, Upper Traps',description_en:'Primary shoulder building exercise. Creates wide, capped shoulders for that athletic physique.',description_hi:'à¤®à¥à¤–à¥à¤¯ à¤¶à¥‹à¤²à¥à¤¡à¤° à¤¬à¤¨à¤¾à¤¨à¥‡ à¤µà¤¾à¤²à¥€ à¤à¤•à¥à¤¸à¤°à¤¸à¤¾à¤‡à¤œà¥¤ à¤šà¥Œà¤¡à¤¼à¥‡, à¤•à¥ˆà¤ªà¥à¤¡ à¤¶à¥‹à¤²à¥à¤¡à¤° à¤¬à¤¨à¤¾à¤¤à¥€ à¤¹à¥ˆà¥¤',howTo_en:['Sit or stand with dumbbells at shoulder height, palms forward','Core tight, back straight â€” avoid excessive arching','Press weights directly overhead until arms fully extended','Dont shrug shoulders at the top','Lower slowly back to shoulder level in 3 counts'],howTo_hi:['à¤¡à¤®à¥à¤¬à¤² à¤•à¥‹ à¤•à¤‚à¤§à¥‡ à¤•à¥€ à¤Šà¤‚à¤šà¤¾à¤ˆ à¤ªà¤°, à¤¹à¤¥à¥‡à¤²à¤¿à¤¯à¤¾à¤‚ à¤†à¤—à¥‡, à¤¬à¥ˆà¤ à¥‡à¤‚ à¤¯à¤¾ à¤–à¤¡à¤¼à¥‡ à¤¹à¥‹à¤‚','à¤•à¥‹à¤° à¤Ÿà¤¾à¤‡à¤Ÿ, à¤ªà¥€à¤  à¤¸à¥€à¤§à¥€ â€” à¤œà¥à¤¯à¤¾à¤¦à¤¾ à¤†à¤°à¥à¤š à¤¸à¥‡ à¤¬à¤šà¥‡à¤‚','à¤µà¤œà¤¨ à¤¸à¥€à¤§à¥‡ à¤Šà¤ªà¤° à¤§à¤•à¥‡à¤²à¥‡à¤‚ à¤œà¤¬ à¤¤à¤• à¤¬à¤¾à¤œà¥‚ à¤ªà¥‚à¤°à¥€ à¤¨ à¤¹à¥‹','à¤Šà¤ªà¤° à¤•à¤‚à¤§à¥‡ à¤¨ à¤‰à¤ à¤¾à¤à¤‚','3 à¤•à¤¾à¤‰à¤‚à¤Ÿ à¤®à¥‡à¤‚ à¤§à¥€à¤°à¥‡ à¤•à¤‚à¤§à¥‡ à¤•à¥‡ à¤¸à¥à¤¤à¤° à¤ªà¤° à¤µà¤¾à¤ªà¤¸ à¤²à¤¾à¤à¤‚'],sets:'4 Sets Ã— 10-12 Reps',image:'img_shoulder.jpg'},
];
const DEFAULT_DIET=[
  {id:'d1',image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzBhMmUwYSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxYTU1MDAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8ZmlsdGVyIGlkPSJnbG93Ij4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iOCIgcmVzdWx0PSJibHVyIi8+CiAgICAgIDxmZUNvbXBvc2l0ZSBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJibHVyIiBvcGVyYXRvcj0ib3ZlciIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2JnKSIvPgogIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjEzMCIgcj0iNzAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wOCkiIGZpbHRlcj0idXJsKCNnbG93KSIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTU1IiBmb250LXNpemU9IjcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPvCfpaY8L3RleHQ+CiAgPHRleHQgeD0iMjAwIiB5PSIyMzAiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuOSkiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIj5WZWdldGFyaWFuIERpZXQ8L3RleHQ+CiAgPHJlY3QgeD0iODAiIHk9IjI0OCIgd2lkdGg9IjI0MCIgaGVpZ2h0PSIyIiByeD0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjMpIi8+Cjwvc3ZnPg==',type:'veg',title_en:'Vegetarian Muscle Building Diet',title_hi:'à¤¶à¤¾à¤•à¤¾à¤¹à¤¾à¤°à¥€ à¤®à¤¾à¤‚à¤¸à¤ªà¥‡à¤¶à¥€ à¤¨à¤¿à¤°à¥à¤®à¤¾à¤£ à¤¡à¤¾à¤‡à¤Ÿ',description_en:'Complete vegetarian diet plan rich in protein for muscle building and strength.',description_hi:'à¤®à¤¾à¤‚à¤¸à¤ªà¥‡à¤¶à¤¿à¤¯à¤¾à¤‚ à¤¬à¤¨à¤¾à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤ªà¥à¤°à¥‹à¤Ÿà¥€à¤¨ à¤¸à¥‡ à¤­à¤°à¤ªà¥‚à¤° à¤ªà¥‚à¤°à¥à¤£ à¤¶à¤¾à¤•à¤¾à¤¹à¤¾à¤°à¥€ à¤¡à¤¾à¤‡à¤Ÿ à¤¯à¥‹à¤œà¤¨à¤¾à¥¤',meals:[{time:'5:30 AM',food_en:'Banana + 2 glasses water + Black coffee (optional)',food_hi:'à¤•à¥‡à¤²à¤¾ + 2 à¤—à¤¿à¤²à¤¾à¤¸ à¤ªà¤¾à¤¨à¥€ + à¤¬à¥à¤²à¥ˆà¤• à¤•à¥‰à¤«à¥€ (à¤µà¥ˆà¤•à¤²à¥à¤ªà¤¿à¤•)',protein:'3g',calories:'120'},{time:'8:00 AM',food_en:'5 Egg whites + 2 Whole eggs + Oats (50g) + Milk 300ml',food_hi:'5 à¤…à¤‚à¤¡à¥‡ à¤•à¤¾ à¤¸à¤«à¥‡à¤¦ + 2 à¤ªà¥‚à¤°à¥‡ à¤…à¤‚à¤¡à¥‡ + à¤“à¤Ÿà¥à¤¸ (50g) + à¤¦à¥‚à¤§ 300ml',protein:'35g',calories:'450'},{time:'11:00 AM',food_en:'Greek Yogurt 200g + Mixed nuts 30g',food_hi:'à¤—à¥à¤°à¥€à¤• à¤¯à¥‹à¤—à¤°à¥à¤Ÿ 200g + à¤®à¤¿à¤•à¥à¤¸ à¤¡à¥à¤°à¤¾à¤ˆ à¤«à¥à¤°à¥‚à¤Ÿà¥à¤¸ 30g',protein:'20g',calories:'280'},{time:'1:00 PM',food_en:'Brown Rice 150g + Dal 1 bowl + Paneer 100g + Salad',food_hi:'à¤¬à¥à¤°à¤¾à¤‰à¤¨ à¤°à¤¾à¤‡à¤¸ 150g + à¤¦à¤¾à¤² 1 à¤•à¤Ÿà¥‹à¤°à¥€ + à¤ªà¤¨à¥€à¤° 100g + à¤¸à¤²à¤¾à¤¦',protein:'40g',calories:'580'},{time:'4:00 PM',food_en:'Whey Protein shake + Banana',food_hi:'à¤µà¥à¤¹à¥‡ à¤ªà¥à¤°à¥‹à¤Ÿà¥€à¤¨ à¤¶à¥‡à¤• + à¤•à¥‡à¤²à¤¾',protein:'25g',calories:'300'},{time:'7:00 PM',food_en:'Chapati 3 + Rajma/Chhole + Mixed vegetables',food_hi:'à¤šà¤ªà¤¾à¤¤à¥€ 3 + à¤°à¤¾à¤œà¤®à¤¾/à¤›à¥‹à¤²à¥‡ + à¤®à¤¿à¤•à¥à¤¸ à¤¸à¤¬à¥à¤œà¤¿à¤¯à¤¾à¤‚',protein:'35g',calories:'520'},{time:'9:00 PM',food_en:'Milk 300ml + Almonds 10',food_hi:'à¤¦à¥‚à¤§ 300ml + à¤¬à¤¾à¤¦à¤¾à¤® 10',protein:'12g',calories:'220'}],tips_en:'Drink 3-4 liters water daily. Eat at same times each day for best results. Paneer and soy are your best protein sources.',tips_hi:'à¤°à¥‹à¤œà¤¾à¤¨à¤¾ 3-4 à¤²à¥€à¤Ÿà¤° à¤ªà¤¾à¤¨à¥€ à¤ªà¤¿à¤à¤‚à¥¤ à¤¸à¤°à¥à¤µà¥‹à¤¤à¥à¤¤à¤® à¤ªà¤°à¤¿à¤£à¤¾à¤®à¥‹à¤‚ à¤•à¥‡ à¤²à¤¿à¤ à¤¹à¤° à¤¦à¤¿à¤¨ à¤à¤• à¤¹à¥€ à¤¸à¤®à¤¯ à¤ªà¤° à¤–à¤¾à¤à¤‚à¥¤ à¤ªà¤¨à¥€à¤° à¤”à¤° à¤¸à¥‹à¤¯à¤¾ à¤†à¤ªà¤•à¥‡ à¤¸à¤¬à¤¸à¥‡ à¤…à¤šà¥à¤›à¥‡ à¤ªà¥à¤°à¥‹à¤Ÿà¥€à¤¨ à¤¸à¥à¤°à¥‹à¤¤ à¤¹à¥ˆà¤‚à¥¤'},
  {id:'d2',image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzJlMGEwYSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM1NTAwMDAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8ZmlsdGVyIGlkPSJnbG93Ij4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iOCIgcmVzdWx0PSJibHVyIi8+CiAgICAgIDxmZUNvbXBvc2l0ZSBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJibHVyIiBvcGVyYXRvcj0ib3ZlciIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2JnKSIvPgogIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjEzMCIgcj0iNzAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wOCkiIGZpbHRlcj0idXJsKCNnbG93KSIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTU1IiBmb250LXNpemU9IjcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPvCfjZc8L3RleHQ+CiAgPHRleHQgeD0iMjAwIiB5PSIyMzAiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuOSkiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIj5Ob24tVmVnIEhpZ2ggUHJvdGVpbjwvdGV4dD4KICA8cmVjdCB4PSI4MCIgeT0iMjQ4IiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjIiIHJ4PSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMykiLz4KPC9zdmc+',type:'nonveg',title_en:'Non-Vegetarian High Protein Diet',title_hi:'à¤®à¤¾à¤‚à¤¸à¤¾à¤¹à¤¾à¤°à¥€ à¤¹à¤¾à¤ˆ à¤ªà¥à¤°à¥‹à¤Ÿà¥€à¤¨ à¤¡à¤¾à¤‡à¤Ÿ',description_en:'High protein non-veg diet for maximum muscle growth and fast recovery.',description_hi:'à¤…à¤§à¤¿à¤•à¤¤à¤® à¤®à¤¾à¤‚à¤¸à¤ªà¥‡à¤¶à¥€ à¤µà¥ƒà¤¦à¥à¤§à¤¿ à¤”à¤° à¤¤à¥‡à¤œ à¤°à¤¿à¤•à¤µà¤°à¥€ à¤•à¥‡ à¤²à¤¿à¤ à¤¹à¤¾à¤ˆ à¤ªà¥à¤°à¥‹à¤Ÿà¥€à¤¨ à¤®à¤¾à¤‚à¤¸à¤¾à¤¹à¤¾à¤°à¥€ à¤¡à¤¾à¤‡à¤Ÿà¥¤',meals:[{time:'6:00 AM',food_en:'4 Boiled eggs + Black coffee',food_hi:'4 à¤‰à¤¬à¤²à¥‡ à¤…à¤‚à¤¡à¥‡ + à¤¬à¥à¤²à¥ˆà¤• à¤•à¥‰à¤«à¥€',protein:'25g',calories:'250'},{time:'8:00 AM',food_en:'Whey Protein + Oats 50g + Banana',food_hi:'à¤µà¥à¤¹à¥‡ à¤ªà¥à¤°à¥‹à¤Ÿà¥€à¤¨ + à¤“à¤Ÿà¥à¤¸ 50g + à¤•à¥‡à¤²à¤¾',protein:'35g',calories:'400'},{time:'12:00 PM',food_en:'Chicken Breast 200g + Brown Rice + Salad',food_hi:'à¤šà¤¿à¤•à¤¨ à¤¬à¥à¤°à¥‡à¤¸à¥à¤Ÿ 200g + à¤¬à¥à¤°à¤¾à¤‰à¤¨ à¤°à¤¾à¤‡à¤¸ + à¤¸à¤²à¤¾à¤¦',protein:'50g',calories:'600'},{time:'4:00 PM',food_en:'Egg sandwich 2 + Milk 300ml',food_hi:'à¤…à¤‚à¤¡à¤¾ à¤¸à¥ˆà¤‚à¤¡à¤µà¤¿à¤š 2 + à¤¦à¥‚à¤§ 300ml',protein:'30g',calories:'380'},{time:'7:00 PM',food_en:'Fish 200g OR Chicken + Chapati 3 + Vegetables',food_hi:'à¤®à¤›à¤²à¥€ 200g à¤¯à¤¾ à¤šà¤¿à¤•à¤¨ + à¤šà¤ªà¤¾à¤¤à¥€ 3 + à¤¸à¤¬à¥à¤œà¤¿à¤¯à¤¾à¤‚',protein:'45g',calories:'550'},{time:'9:30 PM',food_en:'Paneer 100g + Almonds 10',food_hi:'à¤ªà¤¨à¥€à¤° 100g + à¤¬à¤¾à¤¦à¤¾à¤® 10',protein:'15g',calories:'200'}],tips_en:'Total daily protein 200g+. Stay hydrated. Avoid processed foods and junk. Sleep 8 hours for maximum muscle recovery.',tips_hi:'à¤°à¥‹à¤œà¤¾à¤¨à¤¾ à¤•à¥à¤² à¤ªà¥à¤°à¥‹à¤Ÿà¥€à¤¨ 200g+à¥¤ à¤¹à¤¾à¤‡à¤¡à¥à¤°à¥‡à¤Ÿà¥‡à¤¡ à¤°à¤¹à¥‡à¤‚à¥¤ à¤ªà¥à¤°à¥‹à¤¸à¥‡à¤¸à¥à¤¡ à¤”à¤° à¤œà¤‚à¤• à¤«à¥‚à¤¡ à¤¸à¥‡ à¤¬à¤šà¥‡à¤‚à¥¤ à¤…à¤§à¤¿à¤•à¤¤à¤® à¤®à¤¾à¤‚à¤¸à¤ªà¥‡à¤¶à¥€ à¤°à¤¿à¤•à¤µà¤°à¥€ à¤•à¥‡ à¤²à¤¿à¤ 8 à¤˜à¤‚à¤Ÿà¥‡ à¤¸à¥‹à¤à¤‚à¥¤'},
  {id:'d3',image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzFhMGEyZSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMzYTAwOTkiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8ZmlsdGVyIGlkPSJnbG93Ij4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iOCIgcmVzdWx0PSJibHVyIi8+CiAgICAgIDxmZUNvbXBvc2l0ZSBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJibHVyIiBvcGVyYXRvcj0ib3ZlciIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2JnKSIvPgogIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjEzMCIgcj0iNzAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wOCkiIGZpbHRlcj0idXJsKCNnbG93KSIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTU1IiBmb250LXNpemU9IjcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPvCfkqo8L3RleHQ+CiAgPHRleHQgeD0iMjAwIiB5PSIyMzAiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuOSkiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIj5XZWlnaHQgR2FpbiBEaWV0PC90ZXh0PgogIDxyZWN0IHg9IjgwIiB5PSIyNDgiIHdpZHRoPSIyNDAiIGhlaWdodD0iMiIgcng9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4zKSIvPgo8L3N2Zz4=',type:'gain',title_en:'Weight Gain Diet Plan',title_hi:'à¤µà¤œà¤¨ à¤¬à¤¢à¤¼à¤¾à¤¨à¥‡ à¤•à¥€ à¤¡à¤¾à¤‡à¤Ÿ à¤¯à¥‹à¤œà¤¨à¤¾',description_en:'Caloric surplus diet to pack on lean muscle mass and healthy weight. Eat big to get big!',description_hi:'à¤²à¥€à¤¨ à¤®à¤¸à¤² à¤®à¤¾à¤¸ à¤”à¤° à¤¸à¥à¤µà¤¸à¥à¤¥ à¤µà¤œà¤¨ à¤¬à¤¢à¤¼à¤¾à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤•à¥ˆà¤²à¥‹à¤°à¤¿à¤• à¤¸à¤°à¤ªà¥à¤²à¤¸ à¤¡à¤¾à¤‡à¤Ÿà¥¤ à¤¬à¤¡à¤¼à¤¾ à¤–à¤¾à¤“, à¤¬à¤¡à¤¼à¤¾ à¤¬à¤¨à¥‹!',meals:[{time:'7:00 AM',food_en:'5 eggs + 2 banana + Milk 500ml + Peanut butter toast',food_hi:'5 à¤…à¤‚à¤¡à¥‡ + 2 à¤•à¥‡à¤²à¤¾ + à¤¦à¥‚à¤§ 500ml + à¤ªà¥€à¤¨à¤Ÿ à¤¬à¤Ÿà¤° à¤Ÿà¥‹à¤¸à¥à¤Ÿ',protein:'55g',calories:'750'},{time:'10:00 AM',food_en:'Mass gainer shake OR Dry fruits + Milk + Banana',food_hi:'à¤®à¤¾à¤¸ à¤—à¥‡à¤¨à¤° à¤¶à¥‡à¤• à¤¯à¤¾ à¤¡à¥à¤°à¤¾à¤ˆ à¤«à¥à¤°à¥‚à¤Ÿà¥à¤¸ + à¤¦à¥‚à¤§ + à¤•à¥‡à¤²à¤¾',protein:'30g',calories:'600'},{time:'1:00 PM',food_en:'Rice 2 cups + Chicken/Dal + Paneer + Salad',food_hi:'à¤šà¤¾à¤µà¤² 2 à¤•à¤ª + à¤šà¤¿à¤•à¤¨/à¤¦à¤¾à¤² + à¤ªà¤¨à¥€à¤° + à¤¸à¤²à¤¾à¤¦',protein:'50g',calories:'700'},{time:'4:00 PM',food_en:'Sweet potato + Whey Protein shake',food_hi:'à¤¶à¤•à¤°à¤•à¤‚à¤¦ + à¤µà¥à¤¹à¥‡ à¤ªà¥à¤°à¥‹à¤Ÿà¥€à¤¨ à¤¶à¥‡à¤•',protein:'30g',calories:'400'},{time:'7:30 PM',food_en:'Chapati 4-5 + Chicken curry + Vegetables',food_hi:'à¤šà¤ªà¤¾à¤¤à¥€ 4-5 + à¤šà¤¿à¤•à¤¨ à¤•à¤°à¥€ + à¤¸à¤¬à¥à¤œà¤¿à¤¯à¤¾à¤‚',protein:'55g',calories:'750'},{time:'Before Sleep',food_en:'Milk 300ml + Peanut butter 2 tbsp',food_hi:'à¤¦à¥‚à¤§ 300ml + à¤ªà¥€à¤¨à¤Ÿ à¤¬à¤Ÿà¤° 2 à¤šà¤®à¥à¤®à¤š',protein:'15g',calories:'300'}],tips_en:'Eat 300-500 calories above maintenance. Train hard, sleep 8 hours, be consistent. Track your weight weekly.',tips_hi:'à¤®à¥‡à¤‚à¤Ÿà¥‡à¤¨à¥‡à¤‚à¤¸ à¤¸à¥‡ 300-500 à¤•à¥ˆà¤²à¥‹à¤°à¥€ à¤…à¤§à¤¿à¤• à¤–à¤¾à¤à¤‚à¥¤ à¤•à¤¡à¤¼à¥€ à¤®à¥‡à¤¹à¤¨à¤¤, 8 à¤˜à¤‚à¤Ÿà¥‡ à¤¨à¥€à¤‚à¤¦, à¤¨à¤¿à¤°à¤‚à¤¤à¤°à¤¤à¤¾à¥¤ à¤¹à¤«à¥à¤¤à¥‡à¤µà¤¾à¤° à¤µà¤œà¤¨ à¤Ÿà¥à¤°à¥ˆà¤• à¤•à¤°à¥‡à¤‚à¥¤'},
  {id:'d4',image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzJlMWEwYSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM4ODMzMDAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8ZmlsdGVyIGlkPSJnbG93Ij4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iOCIgcmVzdWx0PSJibHVyIi8+CiAgICAgIDxmZUNvbXBvc2l0ZSBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJibHVyIiBvcGVyYXRvcj0ib3ZlciIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2JnKSIvPgogIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjEzMCIgcj0iNzAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wOCkiIGZpbHRlcj0idXJsKCNnbG93KSIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTU1IiBmb250LXNpemU9IjcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPvCflKU8L3RleHQ+CiAgPHRleHQgeD0iMjAwIiB5PSIyMzAiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuOSkiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIj5XZWlnaHQgTG9zcyBEaWV0PC90ZXh0PgogIDxyZWN0IHg9IjgwIiB5PSIyNDgiIHdpZHRoPSIyNDAiIGhlaWdodD0iMiIgcng9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4zKSIvPgo8L3N2Zz4=',type:'loss',title_en:'Weight Loss Diet Plan',title_hi:'à¤µà¤œà¤¨ à¤˜à¤Ÿà¤¾à¤¨à¥‡ à¤•à¥€ à¤¡à¤¾à¤‡à¤Ÿ à¤¯à¥‹à¤œà¤¨à¤¾',description_en:'Caloric deficit diet to burn fat while preserving valuable muscle mass.',description_hi:'à¤®à¤¾à¤‚à¤¸à¤ªà¥‡à¤¶à¤¿à¤¯à¤¾à¤‚ à¤¬à¤šà¤¾à¤¤à¥‡ à¤¹à¥à¤ à¤šà¤°à¥à¤¬à¥€ à¤œà¤²à¤¾à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤•à¥ˆà¤²à¥‹à¤°à¤¿à¤• à¤¡à¥‡à¤«à¤¿à¤¸à¤¿à¤Ÿ à¤¡à¤¾à¤‡à¤Ÿà¥¤',meals:[{time:'7:00 AM',food_en:'Green tea + 2 boiled eggs + 1 brown bread toast',food_hi:'à¤—à¥à¤°à¥€à¤¨ à¤Ÿà¥€ + 2 à¤‰à¤¬à¤²à¥‡ à¤…à¤‚à¤¡à¥‡ + 1 à¤¬à¥à¤°à¤¾à¤‰à¤¨ à¤¬à¥à¤°à¥‡à¤¡ à¤Ÿà¥‹à¤¸à¥à¤Ÿ',protein:'18g',calories:'250'},{time:'10:00 AM',food_en:'Apple + 10 almonds + Water 500ml',food_hi:'à¤¸à¥‡à¤¬ + 10 à¤¬à¤¾à¤¦à¤¾à¤® + à¤ªà¤¾à¤¨à¥€ 500ml',protein:'5g',calories:'150'},{time:'1:00 PM',food_en:'Grilled chicken 150g + Salad + Dal half bowl',food_hi:'à¤—à¥à¤°à¤¿à¤²à¥à¤¡ à¤šà¤¿à¤•à¤¨ 150g + à¤¸à¤²à¤¾à¤¦ + à¤¦à¤¾à¤² à¤†à¤§à¥€ à¤•à¤Ÿà¥‹à¤°à¥€',protein:'40g',calories:'350'},{time:'4:00 PM',food_en:'Greek yogurt 100g + Cucumber',food_hi:'à¤—à¥à¤°à¥€à¤• à¤¯à¥‹à¤—à¤°à¥à¤Ÿ 100g + à¤–à¥€à¤°à¤¾',protein:'10g',calories:'100'},{time:'7:30 PM',food_en:'Dal 1 bowl + 2 Chapati + Mixed vegetables no oil',food_hi:'à¤¦à¤¾à¤² 1 à¤•à¤Ÿà¥‹à¤°à¥€ + 2 à¤šà¤ªà¤¾à¤¤à¥€ + à¤®à¤¿à¤•à¥à¤¸ à¤¸à¤¬à¥à¤œà¤¿à¤¯à¤¾à¤‚ à¤¬à¤¿à¤¨à¤¾ à¤¤à¥‡à¤²',protein:'25g',calories:'380'}],tips_en:'Avoid sugar, refined carbs, and fried food completely. Do cardio 3-4x per week. Drink 4 liters water daily. Sleep well.',tips_hi:'à¤¶à¤•à¥à¤•à¤°, à¤°à¤¿à¤«à¤¾à¤‡à¤‚à¤¡ à¤•à¤¾à¤°à¥à¤¬à¥à¤¸ à¤”à¤° à¤¤à¤²à¥‡ à¤–à¤¾à¤¨à¥‡ à¤¸à¥‡ à¤¬à¤¿à¤²à¥à¤•à¥à¤² à¤¬à¤šà¥‡à¤‚à¥¤ à¤¹à¤«à¥à¤¤à¥‡ à¤®à¥‡à¤‚ 3-4 à¤¬à¤¾à¤° à¤•à¤¾à¤°à¥à¤¡à¤¿à¤¯à¥‹ à¤•à¤°à¥‡à¤‚à¥¤ à¤°à¥‹à¤œ 4 à¤²à¥€à¤Ÿà¤° à¤ªà¤¾à¤¨à¥€ à¤ªà¤¿à¤à¤‚à¥¤'},
];
const DEFAULT_RULES=[
  {id:'r1',image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzFhMGEyZSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMzYTAwNjAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8ZmlsdGVyIGlkPSJnbG93Ij4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iOCIgcmVzdWx0PSJibHVyIi8+CiAgICAgIDxmZUNvbXBvc2l0ZSBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJibHVyIiBvcGVyYXRvcj0ib3ZlciIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2JnKSIvPgogIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjEzMCIgcj0iNzAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wOCkiIGZpbHRlcj0idXJsKCNnbG93KSIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTU1IiBmb250LXNpemU9IjcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPvCfmqs8L3RleHQ+CiAgPHRleHQgeD0iMjAwIiB5PSIyMzAiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuOSkiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIj5ObyBSdWRlIEJlaGF2aW9yPC90ZXh0PgogIDxyZWN0IHg9IjgwIiB5PSIyNDgiIHdpZHRoPSIyNDAiIGhlaWdodD0iMiIgcng9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4zKSIvPgo8L3N2Zz4=',category:'etiquette',icon:'ðŸŽµ',order:1,text_en:'No loud music without earphones. Use headphones to enjoy music without disturbing fellow members.',text_hi:'à¤‡à¤¯à¤°à¤«à¥‹à¤¨ à¤•à¥‡ à¤¬à¤¿à¤¨à¤¾ à¤¤à¥‡à¤œ à¤†à¤µà¤¾à¤œ à¤®à¥‡à¤‚ à¤¸à¤‚à¤—à¥€à¤¤ à¤¨ à¤¬à¤œà¤¾à¤à¤‚à¥¤ à¤¸à¤¾à¤¥à¥€ à¤¸à¤¦à¤¸à¥à¤¯à¥‹à¤‚ à¤•à¥‹ à¤ªà¤°à¥‡à¤¶à¤¾à¤¨ à¤•à¤¿à¤ à¤¬à¤¿à¤¨à¤¾ à¤¸à¤‚à¤—à¥€à¤¤ à¤¸à¥à¤¨à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤¹à¥‡à¤¡à¤«à¥‹à¤¨ à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤°à¥‡à¤‚à¥¤'},
  {id:'r2',image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzBhMWEyZSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDMzNjYiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8ZmlsdGVyIGlkPSJnbG93Ij4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iOCIgcmVzdWx0PSJibHVyIi8+CiAgICAgIDxmZUNvbXBvc2l0ZSBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJibHVyIiBvcGVyYXRvcj0ib3ZlciIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2JnKSIvPgogIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjEzMCIgcj0iNzAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wOCkiIGZpbHRlcj0idXJsKCNnbG93KSIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTU1IiBmb250LXNpemU9IjcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPvCfkZU8L3RleHQ+CiAgPHRleHQgeD0iMjAwIiB5PSIyMzAiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuOSkiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIj5Qcm9wZXIgRHJlc3MgQ29kZTwvdGV4dD4KICA8cmVjdCB4PSI4MCIgeT0iMjQ4IiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjIiIHJ4PSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMykiLz4KPC9zdmc+',category:'etiquette',icon:'ðŸ¤',order:2,text_en:'No arguments or disputes inside the gym. Keep the atmosphere peaceful, positive and focused on fitness.',text_hi:'à¤œà¤¿à¤® à¤•à¥‡ à¤…à¤‚à¤¦à¤° à¤•à¤¿à¤¸à¥€ à¤­à¥€ à¤ªà¥à¤°à¤•à¤¾à¤° à¤•à¤¾ à¤à¤—à¤¡à¤¼à¤¾ à¤¯à¤¾ à¤¬à¤¹à¤¸ à¤¨ à¤•à¤°à¥‡à¤‚à¥¤ à¤®à¤¾à¤¹à¥Œà¤² à¤¶à¤¾à¤‚à¤¤à¤¿à¤ªà¥‚à¤°à¥à¤£, à¤¸à¤•à¤¾à¤°à¤¾à¤¤à¥à¤®à¤• à¤”à¤° à¤«à¤¿à¤Ÿà¤¨à¥‡à¤¸ à¤ªà¤° à¤•à¥‡à¤‚à¤¦à¥à¤°à¤¿à¤¤ à¤°à¤–à¥‡à¤‚à¥¤'},
  {id:'r3',image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzBhMmUxYSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDY2MzMiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8ZmlsdGVyIGlkPSJnbG93Ij4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iOCIgcmVzdWx0PSJibHVyIi8+CiAgICAgIDxmZUNvbXBvc2l0ZSBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJibHVyIiBvcGVyYXRvcj0ib3ZlciIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2JnKSIvPgogIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjEzMCIgcj0iNzAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wOCkiIGZpbHRlcj0idXJsKCNnbG93KSIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTU1IiBmb250LXNpemU9IjcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPvCfp7k8L3RleHQ+CiAgPHRleHQgeD0iMjAwIiB5PSIyMzAiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuOSkiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIj5LZWVwIENsZWFuPC90ZXh0PgogIDxyZWN0IHg9IjgwIiB5PSIyNDgiIHdpZHRoPSIyNDAiIGhlaWdodD0iMiIgcng9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4zKSIvPgo8L3N2Zz4=',category:'etiquette',icon:'ðŸš«',order:3,text_en:'Absolutely NO abusive, offensive or vulgar language inside the gym premises at any time.',text_hi:'à¤•à¤¿à¤¸à¥€ à¤­à¥€ à¤¸à¤®à¤¯ à¤œà¤¿à¤® à¤ªà¤°à¤¿à¤¸à¤° à¤•à¥‡ à¤…à¤‚à¤¦à¤° à¤•à¤¿à¤¸à¥€ à¤­à¥€ à¤ªà¥à¤°à¤•à¤¾à¤° à¤•à¥€ à¤—à¤¾à¤²à¥€-à¤—à¤²à¥Œà¤œ, à¤…à¤ªà¤®à¤¾à¤¨à¤œà¤¨à¤• à¤¯à¤¾ à¤…à¤¶à¥à¤²à¥€à¤² à¤­à¤¾à¤·à¤¾ à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤¬à¤¿à¤²à¥à¤•à¥à¤² à¤¨ à¤•à¤°à¥‡à¤‚à¥¤'},
  {id:'r4',image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzJlMWEwYSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2NjMzMDAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8ZmlsdGVyIGlkPSJnbG93Ij4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iOCIgcmVzdWx0PSJibHVyIi8+CiAgICAgIDxmZUNvbXBvc2l0ZSBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJibHVyIiBvcGVyYXRvcj0ib3ZlciIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2JnKSIvPgogIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjEzMCIgcj0iNzAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wOCkiIGZpbHRlcj0idXJsKCNnbG93KSIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTU1IiBmb250LXNpemU9IjcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPvCfk7U8L3RleHQ+CiAgPHRleHQgeD0iMjAwIiB5PSIyMzAiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuOSkiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIj5ObyBNb2JpbGUgRHVyaW5nIFNldHM8L3RleHQ+CiAgPHJlY3QgeD0iODAiIHk9IjI0OCIgd2lkdGg9IjI0MCIgaGVpZ2h0PSIyIiByeD0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjMpIi8+Cjwvc3ZnPg==',category:'etiquette',icon:'ðŸ’ª',order:4,text_en:'Help and motivate each other. This gym is a brotherhood â€” support your fellow members in their fitness journey.',text_hi:'à¤à¤• à¤¦à¥‚à¤¸à¤°à¥‡ à¤•à¥€ à¤®à¤¦à¤¦ à¤•à¤°à¥‡à¤‚ à¤”à¤° à¤ªà¥à¤°à¥‡à¤°à¤¿à¤¤ à¤•à¤°à¥‡à¤‚à¥¤ à¤¯à¤¹ à¤œà¤¿à¤® à¤à¤• à¤­à¤¾à¤ˆà¤šà¤¾à¤°à¤¾ à¤¹à¥ˆ â€” à¤…à¤ªà¤¨à¥‡ à¤¸à¤¾à¤¥à¥€ à¤¸à¤¦à¤¸à¥à¤¯à¥‹à¤‚ à¤•à¥€ à¤«à¤¿à¤Ÿà¤¨à¥‡à¤¸ à¤¯à¤¾à¤¤à¥à¤°à¤¾ à¤®à¥‡à¤‚ à¤¸à¤®à¤°à¥à¤¥à¤¨ à¤•à¤°à¥‡à¤‚à¥¤'},
  {id:'r5',image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzFhMmUwYSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMzMzY2MDAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8ZmlsdGVyIGlkPSJnbG93Ij4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iOCIgcmVzdWx0PSJibHVyIi8+CiAgICAgIDxmZUNvbXBvc2l0ZSBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJibHVyIiBvcGVyYXRvcj0ib3ZlciIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2JnKSIvPgogIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjEzMCIgcj0iNzAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wOCkiIGZpbHRlcj0idXJsKCNnbG93KSIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTU1IiBmb250LXNpemU9IjcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPvCfj4vvuI88L3RleHQ+CiAgPHRleHQgeD0iMjAwIiB5PSIyMzAiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuOSkiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIj5SZS1yYWNrIFdlaWdodHM8L3RleHQ+CiAgPHJlY3QgeD0iODAiIHk9IjI0OCIgd2lkdGg9IjI0MCIgaGVpZ2h0PSIyIiByeD0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjMpIi8+Cjwvc3ZnPg==',category:'etiquette',icon:'ðŸ‹ï¸',order:5,text_en:'Always re-rack weights and return equipment to its proper place after use. Keep the gym organized for everyone.',text_hi:'à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¥‡ à¤¬à¤¾à¤¦ à¤¹à¤®à¥‡à¤¶à¤¾ à¤µà¤œà¤¨ à¤µà¤¾à¤ªà¤¸ à¤‰à¤¨à¤•à¥€ à¤¸à¤¹à¥€ à¤œà¤—à¤¹ à¤ªà¤° à¤°à¤–à¥‡à¤‚à¥¤ à¤¸à¤¬à¤•à¥‡ à¤²à¤¿à¤ à¤œà¤¿à¤® à¤µà¥à¤¯à¤µà¤¸à¥à¤¥à¤¿à¤¤ à¤°à¤–à¥‡à¤‚à¥¤'},
  {id:'r6',image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzJlMGExYSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2NjAwMzMiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8ZmlsdGVyIGlkPSJnbG93Ij4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iOCIgcmVzdWx0PSJibHVyIi8+CiAgICAgIDxmZUNvbXBvc2l0ZSBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJibHVyIiBvcGVyYXRvcj0ib3ZlciIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2JnKSIvPgogIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjEzMCIgcj0iNzAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wOCkiIGZpbHRlcj0idXJsKCNnbG93KSIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTU1IiBmb250LXNpemU9IjcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPvCfpKs8L3RleHQ+CiAgPHRleHQgeD0iMjAwIiB5PSIyMzAiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuOSkiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIj5ObyBMb3VkIE5vaXNlPC90ZXh0PgogIDxyZWN0IHg9IjgwIiB5PSIyNDgiIHdpZHRoPSIyNDAiIGhlaWdodD0iMiIgcng9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4zKSIvPgo8L3N2Zz4=',category:'etiquette',icon:'ðŸ§¹',order:6,text_en:'Maintain cleanliness. Wipe down machines, benches and equipment after use. Bring a towel.',text_hi:'à¤¸à¤«à¤¾à¤ˆ à¤¬à¤¨à¤¾à¤ à¤°à¤–à¥‡à¤‚à¥¤ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¥‡ à¤¬à¤¾à¤¦ à¤®à¤¶à¥€à¤¨à¥‡à¤‚, à¤¬à¥‡à¤‚à¤š à¤”à¤° à¤‰à¤ªà¤•à¤°à¤£ à¤ªà¥‹à¤‚à¤›à¥‡à¤‚à¥¤ à¤¤à¥Œà¤²à¤¿à¤¯à¤¾ à¤²à¤¾à¤à¤‚à¥¤'},
  {id:'r7',image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzBhMmUyZSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDY2NjYiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8ZmlsdGVyIGlkPSJnbG93Ij4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iOCIgcmVzdWx0PSJibHVyIi8+CiAgICAgIDxmZUNvbXBvc2l0ZSBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJibHVyIiBvcGVyYXRvcj0ib3ZlciIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2JnKSIvPgogIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjEzMCIgcj0iNzAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wOCkiIGZpbHRlcj0idXJsKCNnbG93KSIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTU1IiBmb250LXNpemU9IjcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPuKPse+4jzwvdGV4dD4KICA8dGV4dCB4PSIyMDAiIHk9IjIzMCIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC45KSIgZm9udC1mYW1pbHk9IkFyaWFsLHNhbnMtc2VyaWYiPlJlc3BlY3QgVGltZSBMaW1pdHM8L3RleHQ+CiAgPHJlY3QgeD0iODAiIHk9IjI0OCIgd2lkdGg9IjI0MCIgaGVpZ2h0PSIyIiByeD0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjMpIi8+Cjwvc3ZnPg==',category:'etiquette',icon:'â°',order:7,text_en:'Respect gym timing. Plan your workout to finish within gym hours. Late arrivals may not get full session.',text_hi:'à¤œà¤¿à¤® à¤•à¥‡ à¤¸à¤®à¤¯ à¤•à¤¾ à¤¸à¤®à¥à¤®à¤¾à¤¨ à¤•à¤°à¥‡à¤‚à¥¤ à¤µà¤°à¥à¤•à¤†à¤‰à¤Ÿ à¤œà¤¿à¤® à¤•à¥‡ à¤˜à¤‚à¤Ÿà¥‹à¤‚ à¤®à¥‡à¤‚ à¤ªà¥‚à¤°à¥€ à¤¹à¥‹ à¤à¤¸à¥‡ à¤ªà¥à¤²à¤¾à¤¨ à¤•à¤°à¥‡à¤‚à¥¤'},
  {id:'r8',image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzFhMGEwYSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2NjAwMDAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8ZmlsdGVyIGlkPSJnbG93Ij4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iOCIgcmVzdWx0PSJibHVyIi8+CiAgICAgIDxmZUNvbXBvc2l0ZSBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJibHVyIiBvcGVyYXRvcj0ib3ZlciIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2JnKSIvPgogIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjEzMCIgcj0iNzAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wOCkiIGZpbHRlcj0idXJsKCNnbG93KSIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTU1IiBmb250LXNpemU9IjcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPvCfpJ08L3RleHQ+CiAgPHRleHQgeD0iMjAwIiB5PSIyMzAiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuOSkiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIj5SZXNwZWN0IEV2ZXJ5b25lPC90ZXh0PgogIDxyZWN0IHg9IjgwIiB5PSIyNDgiIHdpZHRoPSIyNDAiIGhlaWdodD0iMiIgcng9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4zKSIvPgo8L3N2Zz4=',category:'safety',icon:'âš ï¸',order:8,isSpecial:true,text_en:'SAFETY RULE: Do NOT attempt heavy weights without trainer permission or guidance. Any injury caused by self-initiated heavy workout without trainer authorization is SOLELY YOUR RESPONSIBILITY. Power Health Club will NOT be held liable.',text_hi:'à¤¸à¥à¤°à¤•à¥à¤·à¤¾ à¤¨à¤¿à¤¯à¤®: à¤Ÿà¥à¤°à¥‡à¤¨à¤° à¤•à¥€ à¤…à¤¨à¥à¤®à¤¤à¤¿ à¤¯à¤¾ à¤®à¤¾à¤°à¥à¤—à¤¦à¤°à¥à¤¶à¤¨ à¤•à¥‡ à¤¬à¤¿à¤¨à¤¾ à¤­à¤¾à¤°à¥€ à¤µà¤œà¤¨ à¤‰à¤ à¤¾à¤¨à¥‡ à¤•à¥€ à¤•à¥‹à¤¶à¤¿à¤¶ à¤¨ à¤•à¤°à¥‡à¤‚à¥¤ à¤Ÿà¥à¤°à¥‡à¤¨à¤° à¤•à¥€ à¤…à¤¨à¥à¤®à¤¤à¤¿ à¤•à¥‡ à¤¬à¤¿à¤¨à¤¾ à¤­à¤¾à¤°à¥€ à¤µà¤°à¥à¤•à¤†à¤‰à¤Ÿ à¤¸à¥‡ à¤¹à¥‹à¤¨à¥‡ à¤µà¤¾à¤²à¥€ à¤•à¥‹à¤ˆ à¤­à¥€ à¤šà¥‹à¤Ÿ à¤•à¥‡à¤µà¤² à¤†à¤ªà¤•à¥€ à¤œà¤¿à¤®à¥à¤®à¥‡à¤¦à¤¾à¤°à¥€ à¤¹à¥ˆà¥¤ à¤ªà¤¾à¤µà¤° à¤¹à¥‡à¤²à¥à¤¥ à¤•à¥à¤²à¤¬ à¤œà¤¿à¤®à¥à¤®à¥‡à¤¦à¤¾à¤° à¤¨à¤¹à¥€à¤‚ à¤¹à¥‹à¤—à¤¾à¥¤'},
  {id:'r9',image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzBhMWEyZSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDQ0ODgiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8ZmlsdGVyIGlkPSJnbG93Ij4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iOCIgcmVzdWx0PSJibHVyIi8+CiAgICAgIDxmZUNvbXBvc2l0ZSBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJibHVyIiBvcGVyYXRvcj0ib3ZlciIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2JnKSIvPgogIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjEzMCIgcj0iNzAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wOCkiIGZpbHRlcj0idXJsKCNnbG93KSIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTU1IiBmb250LXNpemU9IjcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPvCfkqc8L3RleHQ+CiAgPHRleHQgeD0iMjAwIiB5PSIyMzAiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuOSkiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIj5TdGF5IEh5ZHJhdGVkPC90ZXh0PgogIDxyZWN0IHg9IjgwIiB5PSIyNDgiIHdpZHRoPSIyNDAiIGhlaWdodD0iMiIgcng9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4zKSIvPgo8L3N2Zz4=',category:'safety',icon:'ðŸ”',order:9,isSpecial:true,text_en:'Protect your valuables. Keep belongings safe and secure at all times. Power Health Club is NOT responsible for any lost, stolen or damaged personal items.',text_hi:'à¤…à¤ªà¤¨à¤¾ à¤•à¥€à¤®à¤¤à¥€ à¤¸à¤¾à¤®à¤¾à¤¨ à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤ à¤°à¤–à¥‡à¤‚à¥¤ à¤¸à¤¾à¤®à¤¾à¤¨ à¤–à¥‹à¤¨à¥‡, à¤šà¥‹à¤°à¥€ à¤¹à¥‹à¤¨à¥‡ à¤¯à¤¾ à¤•à¥à¤·à¤¤à¤¿à¤—à¥à¤°à¤¸à¥à¤¤ à¤¹à¥‹à¤¨à¥‡ à¤ªà¤° à¤ªà¤¾à¤µà¤° à¤¹à¥‡à¤²à¥à¤¥ à¤•à¥à¤²à¤¬ à¤œà¤¿à¤®à¥à¤®à¥‡à¤¦à¤¾à¤° à¤¨à¤¹à¥€à¤‚ à¤¹à¥‹à¤—à¤¾à¥¤ à¤µà¤¿à¤¨à¤®à¥à¤°à¤¤à¤¾ à¤¸à¥‡ à¤…à¤ªà¤¨à¥‡ à¤¸à¤®à¥à¤®à¤¾à¤¨ à¤•à¥€ à¤¸à¥à¤°à¤•à¥à¤·à¤¾ à¤¸à¥à¤µà¤¯à¤‚ à¤•à¤°à¥‡à¤‚à¥¤'},
  {id:'r10',image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzFhMmUyZSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDQ0NDQiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8ZmlsdGVyIGlkPSJnbG93Ij4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iOCIgcmVzdWx0PSJibHVyIi8+CiAgICAgIDxmZUNvbXBvc2l0ZSBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJibHVyIiBvcGVyYXRvcj0ib3ZlciIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2JnKSIvPgogIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjEzMCIgcj0iNzAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wOCkiIGZpbHRlcj0idXJsKCNnbG93KSIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTU1IiBmb250LXNpemU9IjcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPvCfp7Q8L3RleHQ+CiAgPHRleHQgeD0iMjAwIiB5PSIyMzAiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuOSkiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIj5Vc2UgRGVvZG9yYW50PC90ZXh0PgogIDxyZWN0IHg9IjgwIiB5PSIyNDgiIHdpZHRoPSIyNDAiIGhlaWdodD0iMiIgcng9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4zKSIvPgo8L3N2Zz4=',category:'safety',icon:'ðŸ©º',order:10,text_en:'If you have any medical condition, injury or health issue, inform the trainer BEFORE starting your workout session.',text_hi:'à¤¯à¤¦à¤¿ à¤†à¤ªà¤•à¥‹ à¤•à¥‹à¤ˆ à¤šà¤¿à¤•à¤¿à¤¤à¥à¤¸à¥€à¤¯ à¤¸à¥à¤¥à¤¿à¤¤à¤¿, à¤šà¥‹à¤Ÿ à¤¯à¤¾ à¤¸à¥à¤µà¤¾à¤¸à¥à¤¥à¥à¤¯ à¤¸à¤®à¤¸à¥à¤¯à¤¾ à¤¹à¥ˆ, à¤¤à¥‹ à¤µà¤°à¥à¤•à¤†à¤‰à¤Ÿ à¤¶à¥à¤°à¥‚ à¤•à¤°à¤¨à¥‡ à¤¸à¥‡ à¤ªà¤¹à¤²à¥‡ à¤Ÿà¥à¤°à¥‡à¤¨à¤° à¤•à¥‹ à¤…à¤µà¤¶à¥à¤¯ à¤¬à¤¤à¤¾à¤à¤‚à¥¤'},
  {id:'r11',image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzJlMWEyZSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0NDAwNjYiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8ZmlsdGVyIGlkPSJnbG93Ij4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iOCIgcmVzdWx0PSJibHVyIi8+CiAgICAgIDxmZUNvbXBvc2l0ZSBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJibHVyIiBvcGVyYXRvcj0ib3ZlciIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2JnKSIvPgogIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjEzMCIgcj0iNzAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wOCkiIGZpbHRlcj0idXJsKCNnbG93KSIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTU1IiBmb250LXNpemU9IjcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPvCfjrU8L3RleHQ+CiAgPHRleHQgeD0iMjAwIiB5PSIyMzAiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuOSkiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIj5ObyBMb3VkIE11c2ljPC90ZXh0PgogIDxyZWN0IHg9IjgwIiB5PSIyNDgiIHdpZHRoPSIyNDAiIGhlaWdodD0iMiIgcng9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4zKSIvPgo8L3N2Zz4=',category:'special',icon:'ðŸ™',order:11,text_en:'This gym welcomes and respects people of ALL religions, castes, communities and backgrounds equally. Discrimination of any kind â€” based on religion, caste, region or language â€” is strictly PROHIBITED.',text_hi:'à¤¯à¤¹ à¤œà¤¿à¤® à¤¸à¤­à¥€ à¤§à¤°à¥à¤®à¥‹à¤‚, à¤œà¤¾à¤¤à¤¿à¤¯à¥‹à¤‚, à¤¸à¤®à¥à¤¦à¤¾à¤¯à¥‹à¤‚ à¤”à¤° à¤ªà¥ƒà¤·à¥à¤ à¤­à¥‚à¤®à¤¿à¤¯à¥‹à¤‚ à¤•à¥‡ à¤²à¥‹à¤—à¥‹à¤‚ à¤•à¤¾ à¤¸à¤®à¤¾à¤¨ à¤°à¥‚à¤ª à¤¸à¥‡ à¤¸à¥à¤µà¤¾à¤—à¤¤ à¤”à¤° à¤¸à¤®à¥à¤®à¤¾à¤¨ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤§à¤°à¥à¤®, à¤œà¤¾à¤¤à¤¿, à¤•à¥à¤·à¥‡à¤¤à¥à¤° à¤¯à¤¾ à¤­à¤¾à¤·à¤¾ à¤•à¥‡ à¤†à¤§à¤¾à¤° à¤ªà¤° à¤•à¤¿à¤¸à¥€ à¤­à¥€ à¤ªà¥à¤°à¤•à¤¾à¤° à¤•à¤¾ à¤­à¥‡à¤¦à¤­à¤¾à¤µ à¤¸à¤–à¥à¤¤ à¤µà¤°à¥à¤œà¤¿à¤¤ à¤¹à¥ˆà¥¤'},
  {id:'r12',image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzJlMmUwYSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM1NTU1MDAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8ZmlsdGVyIGlkPSJnbG93Ij4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iOCIgcmVzdWx0PSJibHVyIi8+CiAgICAgIDxmZUNvbXBvc2l0ZSBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJibHVyIiBvcGVyYXRvcj0ib3ZlciIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2JnKSIvPgogIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjEzMCIgcj0iNzAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wOCkiIGZpbHRlcj0idXJsKCNnbG93KSIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTU1IiBmb250LXNpemU9IjcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPvCflJI8L3RleHQ+CiAgPHRleHQgeD0iMjAwIiB5PSIyMzAiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuOSkiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIj5Mb2NrIExvY2tlcnM8L3RleHQ+CiAgPHJlY3QgeD0iODAiIHk9IjI0OCIgd2lkdGg9IjI0MCIgaGVpZ2h0PSIyIiByeD0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjMpIi8+Cjwvc3ZnPg==',category:'special',icon:'ðŸš­',order:12,text_en:'Smoking, alcohol, tobacco and any intoxicants are strictly prohibited inside and around the gym premises.',text_hi:'à¤œà¤¿à¤® à¤ªà¤°à¤¿à¤¸à¤° à¤•à¥‡ à¤…à¤‚à¤¦à¤° à¤”à¤° à¤†à¤¸à¤ªà¤¾à¤¸ à¤§à¥‚à¤®à¥à¤°à¤ªà¤¾à¤¨, à¤¶à¤°à¤¾à¤¬, à¤¤à¤‚à¤¬à¤¾à¤•à¥‚ à¤”à¤° à¤•à¥‹à¤ˆ à¤­à¥€ à¤¨à¤¶à¥€à¤²à¤¾ à¤ªà¤¦à¤¾à¤°à¥à¤¥ à¤¸à¤–à¥à¤¤ à¤µà¤°à¥à¤œà¤¿à¤¤ à¤¹à¥ˆà¥¤'},
  {id:'r13',image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzBhMmUwYSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDU1MDAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8ZmlsdGVyIGlkPSJnbG93Ij4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iOCIgcmVzdWx0PSJibHVyIi8+CiAgICAgIDxmZUNvbXBvc2l0ZSBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJibHVyIiBvcGVyYXRvcj0ib3ZlciIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2JnKSIvPgogIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjEzMCIgcj0iNzAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wOCkiIGZpbHRlcj0idXJsKCNnbG93KSIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTU1IiBmb250LXNpemU9IjcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPvCfqbo8L3RleHQ+CiAgPHRleHQgeD0iMjAwIiB5PSIyMzAiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuOSkiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIj5JbmZvcm0gb2YgSGVhbHRoIElzc3VlczwvdGV4dD4KICA8cmVjdCB4PSI4MCIgeT0iMjQ4IiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjIiIHJ4PSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMykiLz4KPC9zdmc+',category:'etiquette',icon:'ðŸ‘•',order:13,text_en:'Wear appropriate gym attire â€” proper sportswear is required for safety, hygiene and respect for other members.',text_hi:'à¤‰à¤šà¤¿à¤¤ à¤œà¤¿à¤® à¤ªà¥‹à¤¶à¤¾à¤• à¤ªà¤¹à¤¨à¥‡à¤‚ â€” à¤¸à¥à¤°à¤•à¥à¤·à¤¾, à¤¸à¥à¤µà¤šà¥à¤›à¤¤à¤¾ à¤”à¤° à¤…à¤¨à¥à¤¯ à¤¸à¤¦à¤¸à¥à¤¯à¥‹à¤‚ à¤•à¥‡ à¤¸à¤®à¥à¤®à¤¾à¤¨ à¤•à¥‡ à¤²à¤¿à¤ à¤‰à¤šà¤¿à¤¤ à¤¸à¥à¤ªà¥‹à¤°à¥à¤Ÿà¥à¤¸à¤µà¥‡à¤¯à¤° à¤œà¤°à¥‚à¤°à¥€ à¤¹à¥ˆà¥¤'},
  {id:'r14',image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzJlMGEyZSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM1NTAwNTUiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8ZmlsdGVyIGlkPSJnbG93Ij4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iOCIgcmVzdWx0PSJibHVyIi8+CiAgICAgIDxmZUNvbXBvc2l0ZSBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJibHVyIiBvcGVyYXRvcj0ib3ZlciIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2JnKSIvPgogIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjEzMCIgcj0iNzAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wOCkiIGZpbHRlcj0idXJsKCNnbG93KSIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTU1IiBmb250LXNpemU9IjcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiBmaWx0ZXI9InVybCgjZ2xvdykiPvCfmY88L3RleHQ+CiAgPHRleHQgeD0iMjAwIiB5PSIyMzAiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuOSkiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIj5Gb2xsb3cgVHJhaW5lciBBZHZpY2U8L3RleHQ+CiAgPHJlY3QgeD0iODAiIHk9IjI0OCIgd2lkdGg9IjI0MCIgaGVpZ2h0PSIyIiByeD0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjMpIi8+Cjwvc3ZnPg==',category:'etiquette',icon:'ðŸ“±',order:14,text_en:'Keep phone calls brief inside the gym. Step outside for long calls. Never occupy equipment while talking on phone.',text_hi:'à¤œà¤¿à¤® à¤®à¥‡à¤‚ à¤«à¥‹à¤¨ à¤•à¥‰à¤² à¤¸à¤‚à¤•à¥à¤·à¤¿à¤ªà¥à¤¤ à¤°à¤–à¥‡à¤‚à¥¤ à¤²à¤‚à¤¬à¥€ à¤•à¥‰à¤² à¤•à¥‡ à¤²à¤¿à¤ à¤¬à¤¾à¤¹à¤° à¤œà¤¾à¤à¤‚à¥¤ à¤«à¥‹à¤¨ à¤ªà¤° à¤¬à¤¾à¤¤ à¤•à¤°à¤¤à¥‡ à¤¸à¤®à¤¯ à¤‰à¤ªà¤•à¤°à¤£ à¤ªà¤° à¤¨ à¤¬à¥ˆà¤ à¥‡à¤‚à¥¤'},
];
const DEFAULT_SUPPLEMENTS=[
  {id:'s1',image:'img_whey.jpg',name_en:'Whey Protein',name_hi:'à¤µà¥à¤¹à¥‡ à¤ªà¥à¤°à¥‹à¤Ÿà¥€à¤¨',category:'protein',description_en:'Fast-digesting protein ideal for post-workout recovery and muscle building. Contains all essential amino acids.',description_hi:'à¤µà¤°à¥à¤•à¤†à¤‰à¤Ÿ à¤•à¥‡ à¤¬à¤¾à¤¦ à¤°à¤¿à¤•à¤µà¤°à¥€ à¤”à¤° à¤®à¤¾à¤‚à¤¸à¤ªà¥‡à¤¶à¤¿à¤¯à¤¾à¤‚ à¤¬à¤¨à¤¾à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤¤à¥‡à¤œ à¤ªà¤šà¤¨à¥‡ à¤µà¤¾à¤²à¤¾ à¤ªà¥à¤°à¥‹à¤Ÿà¥€à¤¨à¥¤ à¤¸à¤­à¥€ à¤œà¤°à¥‚à¤°à¥€ à¤…à¤®à¥€à¤¨à¥‹ à¤à¤¸à¤¿à¤¡ à¤¶à¤¾à¤®à¤¿à¤²à¥¤',usage_en:'Take 1 scoop within 30 minutes after workout, mixed with water or milk.',usage_hi:'à¤µà¤°à¥à¤•à¤†à¤‰à¤Ÿ à¤•à¥‡ 30 à¤®à¤¿à¤¨à¤Ÿ à¤•à¥‡ à¤­à¥€à¤¤à¤° 1 à¤¸à¥à¤•à¥‚à¤ª à¤ªà¤¾à¤¨à¥€ à¤¯à¤¾ à¤¦à¥‚à¤§ à¤•à¥‡ à¤¸à¤¾à¤¥ à¤²à¥‡à¤‚à¥¤',dosage_en:'1-2 scoops per day (25-50g protein)',dosage_hi:'à¤ªà¥à¤°à¤¤à¤¿ à¤¦à¤¿à¤¨ 1-2 à¤¸à¥à¤•à¥‚à¤ª (25-50g à¤ªà¥à¤°à¥‹à¤Ÿà¥€à¤¨)',price:2500},
  {id:'s2',image:'img_creatine.jpg',name_en:'Creatine Monohydrate',name_hi:'à¤•à¥à¤°à¤¿à¤à¤Ÿà¤¿à¤¨ à¤®à¥‹à¤¨à¥‹à¤¹à¤¾à¤‡à¤¡à¥à¤°à¥‡à¤Ÿ',category:'creatine',description_en:'Scientifically proven to increase strength, power, and muscle size. Most researched supplement in sports nutrition.',description_hi:'à¤¤à¤¾à¤•à¤¤, à¤ªà¤¾à¤µà¤° à¤”à¤° à¤®à¤¾à¤‚à¤¸à¤ªà¥‡à¤¶à¤¿à¤¯à¥‹à¤‚ à¤•à¤¾ à¤†à¤•à¤¾à¤° à¤¬à¤¢à¤¼à¤¾à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤µà¥ˆà¤œà¥à¤žà¤¾à¤¨à¤¿à¤• à¤°à¥‚à¤ª à¤¸à¥‡ à¤¸à¤¿à¤¦à¥à¤§à¥¤ à¤–à¥‡à¤² à¤ªà¥‹à¤·à¤£ à¤®à¥‡à¤‚ à¤¸à¤¬à¤¸à¥‡ à¤…à¤§à¤¿à¤• à¤¶à¥‹à¤§ à¤•à¤¿à¤¯à¤¾ à¤—à¤¯à¤¾à¥¤',usage_en:'Mix 5g in water or protein shake. Take consistently every day, with or without workout.',usage_hi:'à¤ªà¤¾à¤¨à¥€ à¤¯à¤¾ à¤ªà¥à¤°à¥‹à¤Ÿà¥€à¤¨ à¤¶à¥‡à¤• à¤®à¥‡à¤‚ 5g à¤®à¤¿à¤²à¤¾à¤à¤‚à¥¤ à¤¹à¤° à¤¦à¤¿à¤¨ à¤¨à¤¿à¤¯à¤®à¤¿à¤¤ à¤°à¥‚à¤ª à¤¸à¥‡ à¤²à¥‡à¤‚, à¤µà¤°à¥à¤•à¤†à¤‰à¤Ÿ à¤•à¥‡ à¤¸à¤¾à¤¥ à¤¯à¤¾ à¤¬à¤¿à¤¨à¤¾à¥¤',dosage_en:'5g per day consistently (no cycling needed)',dosage_hi:'à¤ªà¥à¤°à¤¤à¤¿à¤¦à¤¿à¤¨ 5g à¤¨à¤¿à¤¯à¤®à¤¿à¤¤ à¤°à¥‚à¤ª à¤¸à¥‡ (à¤¸à¤¾à¤‡à¤•à¥à¤²à¤¿à¤‚à¤— à¤•à¥€ à¤œà¤°à¥‚à¤°à¤¤ à¤¨à¤¹à¥€à¤‚)',price:800},
  {id:'s3',image:'img_multivit.jpg',name_en:'Multivitamin',name_hi:'à¤®à¤²à¥à¤Ÿà¥€à¤µà¤¿à¤Ÿà¤¾à¤®à¤¿à¤¨',category:'vitamins',description_en:'Essential vitamins and minerals to fill nutritional gaps, support immune system and overall health.',description_hi:'à¤ªà¥‹à¤·à¤£ à¤¸à¤‚à¤¬à¤‚à¤§à¥€ à¤•à¤®à¤¿à¤¯à¥‹à¤‚ à¤•à¥‹ à¤ªà¥‚à¤°à¤¾ à¤•à¤°à¤¨à¥‡, à¤‡à¤®à¥à¤¯à¥‚à¤¨ à¤¸à¤¿à¤¸à¥à¤Ÿà¤® à¤”à¤° à¤¸à¤®à¤—à¥à¤° à¤¸à¥à¤µà¤¾à¤¸à¥à¤¥à¥à¤¯ à¤•à¥‹ à¤¸à¤¹à¤¾à¤°à¤¾ à¤¦à¥‡à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤œà¤°à¥‚à¤°à¥€ à¤µà¤¿à¤Ÿà¤¾à¤®à¤¿à¤¨ à¤”à¤° à¤–à¤¨à¤¿à¤œà¥¤',usage_en:'Take 1 tablet daily with breakfast or largest meal of the day.',usage_hi:'à¤¨à¤¾à¤¶à¥à¤¤à¥‡ à¤¯à¤¾ à¤¦à¤¿à¤¨ à¤•à¥‡ à¤¸à¤¬à¤¸à¥‡ à¤¬à¤¡à¤¼à¥‡ à¤­à¥‹à¤œà¤¨ à¤•à¥‡ à¤¸à¤¾à¤¥ à¤°à¥‹à¤œ 1 à¤Ÿà¥ˆà¤¬à¤²à¥‡à¤Ÿ à¤²à¥‡à¤‚à¥¤',dosage_en:'1 tablet per day with food',dosage_hi:'à¤­à¥‹à¤œà¤¨ à¤•à¥‡ à¤¸à¤¾à¤¥ à¤ªà¥à¤°à¤¤à¤¿à¤¦à¤¿à¤¨ 1 à¤Ÿà¥ˆà¤¬à¤²à¥‡à¤Ÿ',price:600},
  {id:'s4',image:'img_bcaa.jpg',name_en:'BCAA (Branch Chain Amino Acids)',name_hi:'à¤¬à¥€à¤¸à¥€à¤à¤',category:'protein',description_en:'Reduces muscle soreness and fatigue. Supports muscle recovery and prevents muscle breakdown during intense training.',description_hi:'à¤®à¤¾à¤‚à¤¸à¤ªà¥‡à¤¶à¤¿à¤¯à¥‹à¤‚ à¤•à¥€ à¤¦à¤°à¥à¤¦ à¤”à¤° à¤¥à¤•à¤¾à¤¨ à¤•à¤® à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤¤à¥€à¤µà¥à¤° à¤ªà¥à¤°à¤¶à¤¿à¤•à¥à¤·à¤£ à¤•à¥‡ à¤¦à¥Œà¤°à¤¾à¤¨ à¤°à¤¿à¤•à¤µà¤°à¥€ à¤®à¥‡à¤‚ à¤®à¤¦à¤¦ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆà¥¤',usage_en:'Mix 1 scoop in water. Drink during or immediately after workout.',usage_hi:'à¤ªà¤¾à¤¨à¥€ à¤®à¥‡à¤‚ 1 à¤¸à¥à¤•à¥‚à¤ª à¤®à¤¿à¤²à¤¾à¤à¤‚à¥¤ à¤µà¤°à¥à¤•à¤†à¤‰à¤Ÿ à¤•à¥‡ à¤¦à¥Œà¤°à¤¾à¤¨ à¤¯à¤¾ à¤¤à¥à¤°à¤‚à¤¤ à¤¬à¤¾à¤¦ à¤ªà¤¿à¤à¤‚à¥¤',dosage_en:'5-10g per day during training sessions',dosage_hi:'à¤Ÿà¥à¤°à¥‡à¤¨à¤¿à¤‚à¤— à¤¸à¥‡à¤¶à¤¨ à¤•à¥‡ à¤¦à¥Œà¤°à¤¾à¤¨ à¤ªà¥à¤°à¤¤à¤¿ à¤¦à¤¿à¤¨ 5-10g',price:1800},
  {id:'s5',image:'img_gloves.jpg',name_en:'Gym Gloves',name_hi:'à¤œà¤¿à¤® à¤—à¥à¤²à¤µà¥à¤¸',category:'tools',description_en:'Protect your hands from calluses and blisters. Improves grip strength and control during heavy barbell and dumbbell exercises.',description_hi:'à¤¹à¤¾à¤¥à¥‹à¤‚ à¤•à¥‹ à¤›à¤¾à¤²à¥‡ à¤”à¤° à¤•à¤ à¥‹à¤°à¤ªà¤¨ à¤¸à¥‡ à¤¬à¤šà¤¾à¤à¤‚à¥¤ à¤­à¤¾à¤°à¥€ à¤¬à¤¾à¤°à¤¬à¥‡à¤² à¤”à¤° à¤¡à¤®à¥à¤¬à¤² à¤à¤•à¥à¤¸à¤°à¤¸à¤¾à¤‡à¤œ à¤•à¥‡ à¤¦à¥Œà¤°à¤¾à¤¨ à¤—à¥à¤°à¤¿à¤ª à¤¸à¥à¤§à¤¾à¤°à¥‡à¤‚à¥¤',usage_en:'Wear during barbell, dumbbell, pull-up and cable exercises. Wash after every session.',usage_hi:'à¤¬à¤¾à¤°à¤¬à¥‡à¤², à¤¡à¤®à¥à¤¬à¤², à¤ªà¥à¤²-à¤…à¤ª à¤”à¤° à¤•à¥‡à¤¬à¤² à¤à¤•à¥à¤¸à¤°à¤¸à¤¾à¤‡à¤œ à¤•à¥‡ à¤¦à¥Œà¤°à¤¾à¤¨ à¤ªà¤¹à¤¨à¥‡à¤‚à¥¤ à¤¹à¤° à¤¸à¥‡à¤¶à¤¨ à¤•à¥‡ à¤¬à¤¾à¤¦ à¤§à¥‹à¤à¤‚à¥¤',dosage_en:'Use during all heavy grip exercises',dosage_hi:'à¤¸à¤­à¥€ à¤­à¤¾à¤°à¥€ à¤—à¥à¤°à¤¿à¤ª à¤à¤•à¥à¤¸à¤°à¤¸à¤¾à¤‡à¤œ à¤•à¥‡ à¤¦à¥Œà¤°à¤¾à¤¨ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤°à¥‡à¤‚',price:450},
  {id:'s6',image:'img_belt.jpg',name_en:'Gym Belt (Lifting Belt)',name_hi:'à¤œà¤¿à¤® à¤¬à¥‡à¤²à¥à¤Ÿ (à¤²à¤¿à¤«à¥à¤Ÿà¤¿à¤‚à¤— à¤¬à¥‡à¤²à¥à¤Ÿ)',category:'tools',description_en:'Provides crucial lower back support during heavy compound lifts like squats, deadlifts, and overhead press.',description_hi:'à¤¸à¥à¤•à¥à¤µà¤¾à¤Ÿ, à¤¡à¥‡à¤¡à¤²à¤¿à¤«à¥à¤Ÿ à¤”à¤° à¤“à¤µà¤°à¤¹à¥‡à¤¡ à¤ªà¥à¤°à¥‡à¤¸ à¤œà¥ˆà¤¸à¥€ à¤­à¤¾à¤°à¥€ à¤²à¤¿à¤«à¥à¤Ÿ à¤•à¥‡ à¤¦à¥Œà¤°à¤¾à¤¨ à¤ªà¥€à¤  à¤•à¥‡ à¤¨à¤¿à¤šà¤²à¥‡ à¤¹à¤¿à¤¸à¥à¤¸à¥‡ à¤•à¥‹ à¤®à¤¹à¤¤à¥à¤µà¤ªà¥‚à¤°à¥à¤£ à¤¸à¤¹à¤¾à¤°à¤¾ à¤¦à¥‡à¤¤à¥€ à¤¹à¥ˆà¥¤',usage_en:'Wear only for sets above 80% of your 1RM. Do not use for every set â€” let your core develop naturally.',usage_hi:'à¤•à¥‡à¤µà¤² 1RM à¤•à¥‡ 80% à¤¸à¥‡ à¤…à¤§à¤¿à¤• à¤¸à¥‡à¤Ÿ à¤•à¥‡ à¤²à¤¿à¤ à¤ªà¤¹à¤¨à¥‡à¤‚à¥¤ à¤¹à¤° à¤¸à¥‡à¤Ÿ à¤•à¥‡ à¤²à¤¿à¤ à¤¨ à¤ªà¤¹à¤¨à¥‡à¤‚ â€” à¤•à¥‹à¤° à¤•à¥‹ à¤ªà¥à¤°à¤¾à¤•à¥ƒà¤¤à¤¿à¤• à¤°à¥‚à¤ª à¤¸à¥‡ à¤µà¤¿à¤•à¤¸à¤¿à¤¤ à¤¹à¥‹à¤¨à¥‡ à¤¦à¥‡à¤‚à¥¤',dosage_en:'Use for maximum effort sets only',dosage_hi:'à¤•à¥‡à¤µà¤² à¤…à¤§à¤¿à¤•à¤¤à¤® à¤ªà¥à¤°à¤¯à¤¾à¤¸ à¤µà¤¾à¤²à¥‡ à¤¸à¥‡à¤Ÿ à¤•à¥‡ à¤²à¤¿à¤ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤°à¥‡à¤‚',price:700},
];
const STATE={lang:{workout:'en',diet:'en',rules:'en',store:'en'},workoutFilter:'all',dietFilter:'all',storeFilter:'all',currentOTP:null,otpMobile:null};
function doLogin(){
  const id=document.getElementById('login-id').value.trim();
  const pass=document.getElementById('login-pass').value;
  if(!id||!pass){showErr('login-err','Please fill all fields. / à¤¸à¤­à¥€ field à¤­à¤°à¥‡à¤‚à¥¤');return;}
  const users=DB.getUsers();
  if(!users||users.length===0){showErr('login-err','No accounts found. Please Sign Up first. / à¤ªà¤¹à¤²à¥‡ Sign Up à¤•à¤°à¥‡à¤‚à¥¤');return;}
  const idLow=id.toLowerCase();
  const user=users.find(u=>{
    if(!u)return false;
    const uname=(u.username||'').toLowerCase();
    const umobile=(u.mobile||'').replace(/\D/g,'');
    const uemail=(u.email||'').toLowerCase();
    const idMobile=id.replace(/\D/g,'');
    return uname===idLow||umobile===idMobile||uemail===idLow;
  });
  if(!user){showErr('login-err','Account not found. Check username/mobile. / Account à¤¨à¤¹à¥€à¤‚ à¤®à¤¿à¤²à¤¾à¥¤');return;}
  let passMatch=false;
  try{passMatch=user.password===btoa(unescape(encodeURIComponent(pass)));}catch(e){}
  if(!passMatch){try{passMatch=user.password===btoa(pass);}catch(e){}}
  if(!passMatch){showErr('login-err','Wrong password. / Password à¤—à¤²à¤¤ à¤¹à¥ˆà¥¤');return;}
  DB.setCurrentUser(user);
  closeModal();
  updateAuthUI();
  showSection('profile');
  showToast('Welcome back, '+user.name+'! \uD83D\uDCAA');
}
function doSignup(){
  const name=document.getElementById('su-name').value.trim();
  const username=document.getElementById('su-username').value.trim().toLowerCase();
  const mobile=document.getElementById('su-mobile').value.trim();
  const email=document.getElementById('su-email').value.trim();
  const pass=document.getElementById('su-pass').value;
  const pass2=document.getElementById('su-pass2').value;
  const height=document.getElementById('su-height').value;
  const weight=document.getElementById('su-weight').value;
  const gymDate=document.getElementById('su-gymdate').value;
  const memberType=document.getElementById('su-membertype').value;
  if(!name||!username||!mobile||!pass){showErr('signup-err','Please fill all required fields.');return;}
  if(pass!==pass2){showErr('signup-err','Passwords do not match.');return;}
  if(pass.length<6){showErr('signup-err','Password must be at least 6 characters.');return;}
  const users=DB.getUsers();
  if(users.find(u=>u.username===username)){showErr('signup-err','Username already taken.');return;}
  if(users.find(u=>u.mobile&&u.mobile.replace(/\D/g,'')==mobile.replace(/\D/g,''))){showErr('signup-err','Mobile already registered.');return;}
  const preview=document.getElementById('photo-preview');
  const newUser={id:'u'+Date.now(),name,username,mobile:mobile.trim(),email,password:(()=>{try{return btoa(unescape(encodeURIComponent(pass)));}catch(e){return btoa(pass);}})(),height:parseInt(height)||0,weight:parseInt(weight)||0,profilePhoto:preview.classList.contains('show')&&preview.src?preview.src:null,gymJoinDate:gymDate||new Date().toISOString().split('T')[0],registeredAt:new Date().toISOString(),isMember:memberType==='member',membershipExpiry:null,theme:'dark',accentColor:'blue',favorites:[],createdAt:Date.now()};
  users.push(newUser);DB.saveUsers(users);DB.setCurrentUser(newUser);closeModal();updateAuthUI();showSection('profile');showToast('Welcome to Power Health Club, '+name+'!');
}
function sendOTP(){
  const mobile=document.getElementById('forgot-mobile').value.trim();
  if(!mobile){showErr('forgot-err','Please enter mobile number.');return;}
  const users=DB.getUsers();
  const user=users.find(u=>u.mobile&&u.mobile.replace(/\D/g,'')==mobile.replace(/\D/g,''));
  if(!user){showErr('forgot-err','No account found with this mobile number.');return;}
  STATE.currentOTP=Math.floor(100000+Math.random()*900000).toString();
  STATE.otpMobile=mobile;
  document.getElementById('forgot-step1').style.display='none';
  document.getElementById('forgot-step2').style.display='block';
  document.getElementById('forgot-err').style.display='none';
  document.getElementById('forgot-success').textContent='OTP sent! (Demo OTP: '+STATE.currentOTP+')';
  document.getElementById('forgot-success').style.display='block';
}
function verifyOTP(){
  const otp=document.getElementById('otp-input').value.trim();
  const newPass=document.getElementById('new-pass').value;
  if(otp!==STATE.currentOTP){showErr('forgot-err','Invalid OTP.');return;}
  if(!newPass||newPass.length<6){showErr('forgot-err','Password must be at least 6 characters.');return;}
  const users=DB.getUsers();
  const idx=users.findIndex(u=>u.mobile&&u.mobile.replace(/\D/g,'')==STATE.otpMobile.replace(/\D/g,''));
  if(idx>=0){users[idx].password=btoa(newPass);DB.saveUsers(users);}
  document.getElementById('forgot-success').textContent='Password reset successfully!';
  setTimeout(()=>{closeModal();openModal('login');},2000);
}
function previewPhoto(event){
  const file=event.target.files[0];if(!file)return;
  const reader=new FileReader();
  reader.onload=e=>{const p=document.getElementById('photo-preview');p.src=e.target.result;p.classList.add('show');};
  reader.readAsDataURL(file);
}
function getRank(gymJoinDate){
  if(!gymJoinDate)return{rank:'none',label:'Visitor',cls:''};
  const months=Math.floor((Date.now()-new Date(gymJoinDate))/(1000*60*60*24*30));
  if(months<6)return{rank:'none',label:'New Member',cls:''};
  if(months<12)return{rank:'silver',label:'Silver Member',cls:'ring-silver'};
  if(months<36)return{rank:'gold',label:'Gold Member',cls:'ring-gold'};
  if(months<60)return{rank:'platinum',label:'Platinum Member',cls:'ring-platinum'};
  if(months<120)return{rank:'diamond',label:'Diamond Member',cls:'ring-diamond'};
  return{rank:'legendary',label:'Legendary Member',cls:'ring-legendary'};
}
function getMemberAvatar(user,size=100){
  const rank=getRank(user.gymJoinDate);
  const inner=user.profilePhoto?`<img src="${user.profilePhoto}" class="profile-img-circle" style="width:${size}px;height:${size}px;" alt="${user.name}">`:
    `<div class="avatar-default" style="width:${size}px;height:${size}px;font-size:${size/3}px;">${user.name.charAt(0).toUpperCase()}</div>`;
  const tick=user.isMember?`<div class="member-tick">&#10003;</div>`:'';
  return`<div class="profile-ring-wrapper ${rank.cls}">${inner}${tick}</div>`;
}
function showSection(id){
  document.querySelectorAll('section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  const sec=document.getElementById('sec-'+id);
  const nav=document.getElementById('nav-'+id);
  if(sec)sec.classList.add('active');
  if(nav)nav.classList.add('active');
  if(id==='profile')renderProfile();
  if(id==='notice'){renderNotices();renderTodayWorkout();}
  if(id==='store')renderStore();
  if(id==='fee')loadMySubscription();
  if(id==='workout')renderWorkouts();
  if(id==='diet')renderDiet();
  if(id==='rules')renderRules();
  const np=document.getElementById('notif-panel');if(np)np.classList.remove('show');
}
function openModal(type){
  document.getElementById('modal-overlay').classList.add('show');
  document.querySelectorAll('.modal').forEach(m=>m.classList.add('hidden'));
  document.getElementById('modal-'+type).classList.remove('hidden');
  if(type==='signup'){const d=new Date();document.getElementById('su-gymdate').valueAsDate=d;}
}
function closeModal(){document.getElementById('modal-overlay').classList.remove('show');}
function showErr(id,msg){const el=document.getElementById(id);el.textContent=msg;el.style.display='block';setTimeout(()=>el.style.display='none',4000);}
function showToast(msg,type='success'){
  const t=document.createElement('div');
  t.style.cssText=`position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:${type==='success'?'var(--success)':'var(--danger)'};color:#fff;padding:12px 24px;border-radius:var(--radius);font-weight:700;z-index:9999;box-shadow:0 4px 20px rgba(0,0,0,0.4);font-family:var(--font-body);font-size:14px;animation:slideUp 0.3s ease;max-width:90vw;text-align:center;`;
  t.textContent=msg;document.body.appendChild(t);
  setTimeout(()=>{t.style.opacity='0';t.style.transition='opacity 0.3s';setTimeout(()=>t.remove(),300);},3000);
}
function updateAuthUI(){
  const user=DB.getCurrentUser();
  const area=document.getElementById('auth-area');
  if(user){
    const rank=getRank(user.gymJoinDate);
    const inner=user.profilePhoto?`<img src="${user.profilePhoto}" class="header-avatar" alt="${user.name}" style="border-color:${rank.rank==='none'?'var(--primary)':rank.rank==='silver'?'#c0c0c0':rank.rank==='gold'?'#ffd700':rank.rank==='platinum'?'#e5e4e2':rank.rank==='diamond'?'#00d4ff':'#ff00ff'};">`:
      `<div class="header-avatar" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark));display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:16px;">${user.name.charAt(0)}</div>`;
    area.innerHTML=`<div style="position:relative;cursor:pointer;" onclick="showSection('profile')">${inner}${user.isMember?`<div class="member-tick-sm">&#10003;</div>`:''}</div>`;
  }else{
    area.innerHTML=`<button class="auth-btn" onclick="openModal('login')">Login / Sign Up</button>`;
  }
}
function renderProfile(){
  const user=DB.getCurrentUser();
  const cont=document.getElementById('profile-content');
  if(!user){
    cont.innerHTML=`<div class="empty-state"><span class="empty-icon">&#128100;</span><p>Please login to view your profile</p><button class="btn-primary" onclick="openModal('login')" style="width:auto;padding:12px 32px;margin-top:16px;">Login Now</button></div>`;
    return;
  }
  const rank=getRank(user.gymJoinDate);
  const gymMonths=user.gymJoinDate?Math.floor((Date.now()-new Date(user.gymJoinDate))/(1000*60*60*24*30)):0;
  let subsStatus=user.isMember?`<div style="color:var(--success);font-weight:700;">&#10003; Active Gym Member</div>`:
    `<div style="color:var(--text3);">Visitor (Not subscribed)</div>`;
  if(user.membershipExpiry){
    const daysLeft=Math.ceil((new Date(user.membershipExpiry)-Date.now())/(1000*60*60*24));
    subsStatus=daysLeft<=0?`<div style="color:var(--danger);">&#10007; Subscription Expired</div>`:
      `<div style="color:var(--success);">&#10003; Active &mdash; ${daysLeft} days left</div>`;
  }
  const rankBadgeColors={none:'rank-none',silver:'rank-silver',gold:'rank-gold',platinum:'rank-platinum',diamond:'rank-diamond',legendary:'rank-legendary'};
  const rankEmoji={none:'',silver:'&#129352; ',gold:'&#129351; ',platinum:'&#128293; ',diamond:'&#128142; ',legendary:'&#127775; '};
  cont.innerHTML=`<div class="card profile-card">
    ${getMemberAvatar(user,100)}
    <div style="margin-top:12px;"><h2 style="font-size:22px;font-weight:900;">${user.name}</h2><p style="color:var(--text3);font-size:13px;">@${user.username}</p></div>
    <div class="rank-badge ${rankBadgeColors[rank.rank]}" style="margin-top:8px;">${rankEmoji[rank.rank]}${rank.label}</div>
    <div style="margin-top:8px;">${subsStatus}</div>
    <div class="profile-stats">
      <div class="stat-item"><div class="stat-label">Height</div><div class="stat-value">${user.height||'&#8212;'} <small style="font-size:12px;color:var(--text3);">cm</small></div></div>
      <div class="stat-item"><div class="stat-label">Weight</div><div class="stat-value">${user.weight||'&#8212;'} <small style="font-size:12px;color:var(--text3);">kg</small></div></div>
      <div class="stat-item"><div class="stat-label">Gym Since</div><div class="stat-value" style="font-size:13px;">${user.gymJoinDate||'&#8212;'}</div></div>
      <div class="stat-item"><div class="stat-label">Duration</div><div class="stat-value" style="font-size:13px;">${gymMonths>0?gymMonths+' months':'New'}</div></div>
      <div class="stat-item"><div class="stat-label">Mobile</div><div class="stat-value" style="font-size:12px;">${user.mobile}</div></div>
      <div class="stat-item"><div class="stat-label">Member ID</div><div class="stat-value" style="font-size:12px;">#${user.id.slice(-6).toUpperCase()}</div></div>
    </div>
    <div class="theme-switcher">
      <h4>&#127912; Theme Settings</h4>
      <div class="theme-options">
        <button class="theme-opt dark" onclick="setTheme('dark')">&#127769; Dark</button>
        <button class="theme-opt light" onclick="setTheme('light')">&#9728;&#65039; Light</button>
      </div>
      <div class="color-opts" style="margin-top:12px;">
        <div class="color-opt blue ${(user.accentColor||'blue')==='blue'?'active':''}" onclick="setAccent('blue')" title="Blue"></div>
        <div class="color-opt red ${user.accentColor==='red'?'active':''}" onclick="setAccent('red')" title="Red"></div>
        <div class="color-opt green ${user.accentColor==='green'?'active':''}" onclick="setAccent('green')" title="Green"></div>
        <div class="color-opt purple ${user.accentColor==='purple'?'active':''}" onclick="setAccent('purple')" title="Purple"></div>
        <div class="color-opt orange ${user.accentColor==='orange'?'active':''}" onclick="setAccent('orange')" title="Orange"></div>
        <div class="color-opt gold ${user.accentColor==='gold'?'active':''}" onclick="setAccent('gold')" title="Gold"></div>
      </div>
    </div>
    <div style="margin-top:24px;width:100%;display:flex;gap:12px;flex-wrap:wrap;justify-content:center;">
      <button class="btn-primary" onclick="openEditProfile()" style="flex:1;min-width:140px;">&#9999;&#65039; Edit Profile</button>
      <button class="btn-primary" style="flex:1;min-width:140px;background:var(--danger);" onclick="doLogout()">&#128682; Logout</button>
    </div>
  </div>`;
}
function doLogout(){DB.logout();updateAuthUI();showSection('home');showToast('Logged out successfully!');}
function openEditProfile(){
  const u=DB.getCurrentUser();if(!u){showToast('Login required');return;}
  document.getElementById('e-name').value=u.name||'';
  document.getElementById('e-username').value=u.username||'';
  document.getElementById('e-mobile').value=u.mobile||'';
  document.getElementById('e-email').value=u.email||'';
  document.getElementById('e-height').value=u.height||'';
  document.getElementById('e-weight').value=u.weight||'';
  document.getElementById('e-gymdate').value=u.gymJoinDate||'';
  openModal('edit-profile-modal');
}

function editPhotoPreview(e){const file=e.target.files[0];if(!file)return;const r=new FileReader();r.onload=ev=>{const el=document.getElementById('edit-preview');el.src=ev.target.result;el.classList.add('show');};r.readAsDataURL(file);}
function saveEditProfile(){
  const u=DB.getCurrentUser();if(!u)return;
  const newUser=u.username;
  const newMob=document.getElementById('e-mobile')?.value?.trim()||u.mobile||'';
  const enteredUser=(document.getElementById('e-username')?.value||'').trim()||u.username;
  // Check username uniqueness (only if changed)
  if(enteredUser!==u.username){
    const existing=DB.getUsers().find(x=>x.username===enteredUser&&x.id!==u.id);
    if(existing){showToast('Username already taken!');return;}
    u.username=enteredUser;
  }
  u.name=(document.getElementById('e-name')?.value||'').trim()||u.name;
  u.mobile=newMob;
  u.email=(document.getElementById('e-email')?.value||'').trim()||u.email;
  u.height=(document.getElementById('e-height')?.value||'').trim();
  u.weight=(document.getElementById('e-weight')?.value||'').trim();
  u.gymJoinDate=(document.getElementById('e-gymdate')?.value||'').trim();
  // Password
  const np=document.getElementById('e-newpwd')?.value||'';
  if(np.length>=6)u.password=btoa(np);
  // Save
  const users=DB.getUsers();const i=users.findIndex(x=>x.id===u.id);if(i>=0)users[i]=u;
  DB.saveUsers(users);DB.saveCurrentUser(u);
  closeModal('edit-profile-modal');updateAuthUI();renderProfile();showToast('Profile saved!');
}

function setTheme(theme){document.documentElement.setAttribute('data-theme',theme);const user=DB.getCurrentUser();if(user){user.theme=theme;DB.setCurrentUser(user);}}
function setAccent(color){document.documentElement.setAttribute('data-accent',color);const user=DB.getCurrentUser();if(user){user.accentColor=color;DB.setCurrentUser(user);}renderProfile();}
function toggleTranslate(sec){
  STATE.lang[sec]=STATE.lang[sec]==='en'?'hi':'en';
  const label=document.getElementById(sec+'-lang-label');
  if(label)label.textContent=STATE.lang[sec]==='hi'?'English \u092E\u0947\u0902 \u0926\u0947\u0916\u0947\u0902':'\u0939\u093F\u0902\u0926\u0940 \u092E\u0947\u0902 \u0926\u0947\u0916\u0947\u0902';
  if(sec==='workout')renderWorkouts();
  if(sec==='diet')renderDiet();
  if(sec==='rules')renderRules();
  if(sec==='store')renderStore();
}
function filterWorkout(cat,btn){
  STATE.workoutFilter=cat;
  document.querySelectorAll('#sec-workout .tab-btn').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
  renderWorkouts();
}
function renderWorkouts(){
  const workouts=DB.getWorkouts();
  const lang=STATE.lang.workout;
  const filtered=STATE.workoutFilter==='all'?workouts:workouts.filter(w=>w.category===STATE.workoutFilter);
  const grid=document.getElementById('workout-grid');
  if(!filtered.length){grid.innerHTML=`<div class="empty-state" style="grid-column:1/-1;"><span class="empty-icon">&#128170;</span><p>No workouts in this category.</p></div>`;return;}
  grid.innerHTML=filtered.map(w=>{
    const img=w.image?`<img src="${w.image}" alt="${w.name_en}" class="workout-img">`:
      (w.id==='w3'?`<img src="Workout1.png.png" alt="${w.name_en}" class="workout-img" onerror="this.parentElement.innerHTML='<div class=\\'workout-img-ph\\'>&#127947;</div>'">`:
      `<div class="workout-img-ph">&#127947;</div>`);
    const howTo=(lang==='hi'?w.howTo_hi:w.howTo_en)||[];
    return`<div class="workout-card">${img}<div class="workout-body">
      <span class="workout-badge badge-${w.category}">${w.category.charAt(0).toUpperCase()+w.category.slice(1)}</span>
      <h3 class="workout-title">${lang==='hi'?w.name_hi:w.name_en}</h3>
      <p class="workout-muscles">&#128170; ${w.muscles}</p>
      <p class="workout-desc">${lang==='hi'?w.description_hi:w.description_en}</p>
      ${howTo.length?`<div class="workout-howto"><h4>&#9654; ${lang==='hi'?'à¤•à¥ˆà¤¸à¥‡ à¤•à¤°à¥‡à¤‚':'How to Perform'}</h4><ol>${howTo.map(s=>`<li>${s}</li>`).join('')}</ol></div>`:''}
      <p class="workout-sets">&#128202; ${w.sets}</p>
      <p class="workout-disclaimer">&#9888;&#65039; ${lang==='hi'?'à¤Ÿà¥à¤°à¥‡à¤¨à¤° à¤•à¥€ à¤…à¤¨à¥à¤®à¤¤à¤¿ à¤•à¥‡ à¤¬à¤¿à¤¨à¤¾ à¤­à¤¾à¤°à¥€ à¤µà¤œà¤¨ à¤¨ à¤‰à¤ à¤¾à¤à¤‚à¥¤ à¤šà¥‹à¤Ÿ à¤•à¥‡ à¤²à¤¿à¤ à¤†à¤ª à¤œà¤¿à¤®à¥à¤®à¥‡à¤¦à¤¾à¤° à¤¹à¥‹à¤‚à¤—à¥‡à¥¤':'Consult trainer before heavy weights. You are responsible for any self-initiated injury.'}</p>
    </div></div>`;
  }).join('');
}
function calcProtein(){
  const w=parseFloat(document.getElementById('calc-weight').value);
  const h=parseFloat(document.getElementById('calc-height').value);
  const goal=document.getElementById('calc-goal').value;
  if(!w||!h){showToast('Please enter weight and height!','error');return;}
  const factor={maintain:1.6,gain:2.0,loss:1.4}[goal];
  const protein=Math.round(w*factor);
  const bmi=(w/((h/100)**2)).toFixed(1);
  const cals={maintain:Math.round(w*30),gain:Math.round(w*35),loss:Math.round(w*24)}[goal];
  const bmiCat=bmi<18.5?'Underweight':bmi<25?'Normal Weight':bmi<30?'Overweight':'Obese';
  const r=document.getElementById('calc-result');r.classList.add('show');
  r.innerHTML=`<h4>&#128202; Your Daily Requirements</h4>
    <p>&#9878;&#65039; <strong>BMI:</strong> ${bmi} (${bmiCat})</p>
    <p>&#129385; <strong>Daily Protein:</strong> <strong style="color:var(--primary);font-size:18px;">${protein}g</strong> per day</p>
    <p>&#128293; <strong>Daily Calories:</strong> ${cals} kcal</p>
    <p>&#128167; <strong>Daily Water:</strong> ${(w*0.033).toFixed(1)} liters</p>
    <p style="margin-top:8px;font-size:12px;color:var(--text3);">*Estimates only. Consult a nutritionist for personalized advice.</p>`;
}
function filterDiet(cat,btn){
  STATE.dietFilter=cat;
  document.querySelectorAll('#sec-diet .tab-btn').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');renderDiet();
}
function renderDiet(){
  const diet=DB.getDiet();const lang=STATE.lang.diet;
  const filtered=STATE.dietFilter==='all'?diet:diet.filter(d=>d.type===STATE.dietFilter);
  const grid=document.getElementById('diet-grid');
  if(!filtered.length){grid.innerHTML=`<div class="empty-state" style="grid-column:1/-1;"><span class="empty-icon">&#129367;</span><p>No diet plans in this category.</p></div>`;return;}
  const typeLabels={veg:'&#129382; Veg',nonveg:'&#127831; Non-Veg',gain:'&#128200; Weight Gain',loss:'&#128201; Weight Loss'};
  grid.innerHTML=filtered.map(d=>`<div class="diet-card">
    <span class="diet-type-badge diet-${d.type}">${typeLabels[d.type]||d.type}</span>
    <h3 style="font-size:16px;font-weight:700;margin-bottom:8px;">${lang==='hi'?d.title_hi:d.title_en}</h3>
    <p style="font-size:13px;color:var(--text2);margin-bottom:16px;">${lang==='hi'?d.description_hi:d.description_en}</p>
    <table class="meal-table"><thead><tr><th>Time</th><th>Meal</th><th>Protein</th><th>Cal</th></tr></thead>
    <tbody>${d.meals.map(m=>`<tr><td style="white-space:nowrap;font-size:11px;color:var(--text3);">${m.time}</td><td>${lang==='hi'?m.food_hi:m.food_en}</td><td style="color:var(--primary);font-weight:700;">${m.protein}</td><td style="color:var(--text3);">${m.calories}</td></tr>`).join('')}</tbody></table>
    ${(lang==='hi'?d.tips_hi:d.tips_en)?`<div style="margin-top:12px;background:var(--card2);border-radius:6px;padding:10px;font-size:12px;color:var(--text2);">&#128161; <strong>Tips:</strong> ${lang==='hi'?d.tips_hi:d.tips_en}</div>`:''}
  </div>`).join('');
}
function renderRules(){
  const rules=DB.getRules();const lang=STATE.lang.rules;
  const list=document.getElementById('rules-list');
  list.innerHTML=rules.sort((a,b)=>a.order-b.order).map((r,i)=>`
    <div class="rule-item ${r.isSpecial?'rule-special':''}" style="position:relative;overflow:hidden;">
      ${r.image?`<div style="position:absolute;inset:0;background:url('${r.image}') center/cover no-repeat;opacity:0.15;border-radius:inherit;pointer-events:none;"></div>`:''}
      <div style="position:relative;z-index:1;display:flex;align-items:center;gap:12px;width:100%;">
        <div class="rule-num">${i+1}</div>
        <div class="rule-icon">${r.icon}</div>
        <div><p class="rule-text">${lang==='hi'?r.text_hi:r.text_en}</p></div>
      </div>
    </div>`).join('');
}

function filterStore(cat,btn){
  STATE.storeFilter=cat;
  document.querySelectorAll('#sec-store .tab-btn').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');renderStore();
}
function renderStore(filterCat){
  if(typeof filterCat==='undefined')filterCat=window._storeFilter||'all';
  window._storeFilter=filterCat;
  var sups=DB.getSupplements();
  var lang=(typeof currentLang!=='undefined'?currentLang:'en');
  var filtered=(filterCat==='all')?sups:sups.filter(function(s){return s.category===filterCat;});
  var grid=document.getElementById('store-grid');
  if(!grid)return;
  grid.innerHTML='';
  if(!filtered.length){
    var p=document.createElement('p');
    p.style.cssText='text-align:center;color:#888;padding:40px;font-size:15px';
    p.textContent='No products found.';
    grid.appendChild(p);return;
  }
  for(var i=0;i<filtered.length;i++){
    var s=filtered[i];
    var nm=(lang==='hi'&&s.name_hi)?s.name_hi:(s.name_en||'Product');
    var dc=(lang==='hi'&&s.description_hi)?s.description_hi:(s.description_en||s.description||'');
    var lt=nm.charAt(0)||'P';
    var card=document.createElement('div');
    card.style.cssText='background:var(--card,#161b22);border:1px solid var(--border,#30363d);border-radius:16px;overflow:hidden;cursor:pointer;transition:transform .2s,box-shadow .2s';
    card.onmouseenter=function(){this.style.transform='translateY(-4px)';this.style.boxShadow='0 12px 30px rgba(0,0,0,.4)';};
    card.onmouseleave=function(){this.style.transform='';this.style.boxShadow='';};
    (function(sid){card.onclick=function(){openSupDetail(sid);};})(s.id);
    var imgWrap=document.createElement('div');
    imgWrap.style.cssText='width:100%;height:180px;overflow:hidden;background:#0d1117;display:flex;align-items:center;justify-content:center;position:relative';
    if(s.image){
      var img=document.createElement('img');
      img.src=s.image;img.alt=nm;
      img.style.cssText='width:100%;height:100%;object-fit:cover;transition:transform .3s';
      (function(iw,l){img.onerror=function(){this.style.display='none';var d=document.createElement('div');d.style.cssText='display:flex;align-items:center;justify-content:center;font-size:48px;font-weight:900;color:var(--primary,#00b4ff);width:100%;height:100%';d.textContent=l;iw.appendChild(d);};})(imgWrap,lt);
      imgWrap.appendChild(img);
    } else {
      var ph=document.createElement('div');
      ph.style.cssText='display:flex;align-items:center;justify-content:center;font-size:48px;font-weight:900;color:var(--primary,#00b4ff);width:100%;height:100%';
      ph.textContent=lt;imgWrap.appendChild(ph);
    }
    card.appendChild(imgWrap);
    var body=document.createElement('div');body.style.padding='14px';
    var catTag=document.createElement('div');
    catTag.style.cssText='font-size:10px;font-weight:700;color:var(--primary,#00b4ff);letter-spacing:2px;text-transform:uppercase;margin-bottom:5px';
    catTag.textContent=s.category||'supplement';
    var title=document.createElement('h3');
    title.style.cssText='font-size:14px;font-weight:800;color:var(--text1,#e6edf3);margin:0 0 6px;line-height:1.3';
    title.textContent=nm;
    var descEl=document.createElement('p');
    descEl.style.cssText='font-size:12px;color:var(--text3,#8b949e);margin:0 0 10px;line-height:1.5';
    descEl.textContent=dc.substring(0,80)+(dc.length>80?'...':'');
    var priceRow=document.createElement('div');
    priceRow.style.cssText='display:flex;align-items:center;justify-content:space-between';
    var priceEl=document.createElement('span');
    if(s.price&&s.price>0){
      priceEl.style.cssText='font-size:17px;font-weight:900;color:var(--primary,#00b4ff)';
      priceEl.innerHTML='&#8377;'+s.price.toLocaleString('en-IN');
    } else {
      priceEl.style.cssText='font-size:12px;font-weight:700;color:#3fb950;background:rgba(63,185,80,.15);padding:3px 8px;border-radius:6px';
      priceEl.textContent='FREE';
    }
    var detBtn=document.createElement('button');
    detBtn.style.cssText='background:var(--primary,#00b4ff);color:#000;border:none;padding:6px 13px;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer';
    detBtn.textContent='Details';
    (function(sid){detBtn.onclick=function(e){e.stopPropagation();openSupDetail(sid);};})(s.id);
    priceRow.appendChild(priceEl);priceRow.appendChild(detBtn);
    body.appendChild(catTag);body.appendChild(title);body.appendChild(descEl);body.appendChild(priceRow);
    card.appendChild(body);grid.appendChild(card);
  }
}
function filterStore(cat,btn){
  window._storeFilter=cat;
  document.querySelectorAll('#sec-store .tab-btn').forEach(function(b){b.classList.remove('active');});
  if(btn)btn.classList.add('active');
  renderStore(cat);
}

function toggleFav(productId,btn){
  const user=DB.getCurrentUser();
  if(!user){showToast('Please login to save favorites!','error');openModal('login');return;}
  if(!user.favorites)user.favorites=[];
  const idx=user.favorites.indexOf(productId);
  if(idx>=0){user.favorites.splice(idx,1);btn.innerHTML='&#129293;';btn.classList.remove('active');}
  else{user.favorites.push(productId);btn.innerHTML='&#10084;&#65039;';btn.classList.add('active');}
  DB.setCurrentUser(user);const users=DB.getUsers();const ui=users.findIndex(u=>u.id===user.id);
  if(ui>=0){users[ui]=user;DB.saveUsers(users);}
}
function renderNotices(){
  const notices=DB.getNotices();const settings=DB.getSettings();const user=DB.getCurrentUser();
  const timing=settings.gymTiming||DEFAULT_SETTINGS.gymTiming;
  document.getElementById('notice-timing-text').textContent=timing;
  document.getElementById('timing-text').textContent=timing;
  const list=document.getElementById('notice-list');
  if(!notices.length){list.innerHTML=`<div class="empty-state"><span class="empty-icon">&#128203;</span><p>No notices yet. Check back soon!</p></div>`;return;}
  const emojis=['&#128077;','&#10084;&#65039;','&#128170;','&#128293;','&#128588;'];
  list.innerHTML=notices.sort((a,b)=>b.createdAt-a.createdAt).map(n=>{
    const reactionCounts={};
    Object.values(n.reactions||{}).forEach(e=>{reactionCounts[e]=(reactionCounts[e]||0)+1;});
    const userReaction=user?n.reactions?.[user.id]:null;
    return`<div class="notice-card ${n.isImportant?'important':''}">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">
        <span class="notice-date">${new Date(n.createdAt).toLocaleDateString('hi-IN')}</span>
        ${n.isImportant?`<span style="background:var(--warning);color:#000;padding:2px 8px;border-radius:10px;font-size:10px;font-weight:700;">&#128276; IMPORTANT</span>`:''}
      </div>
      <h3 class="notice-title">${n.title}</h3>
      <p class="notice-content">${n.content}</p>
      <div class="notice-reactions">
        ${emojis.map(e=>`<button class="reaction-btn ${userReaction===e?'user-reacted':''}" onclick="reactNotice('${n.id}','${e}',this)">${e} <span class="reaction-count">${reactionCounts[e]||''}</span></button>`).join('')}
      </div>
    </div>`;
  }).join('');
}
function reactNotice(noticeId,emoji,btn){
  const user=DB.getCurrentUser();
  if(!user){showToast('Please login to react!','error');openModal('login');return;}
  const notices=DB.getNotices();const notice=notices.find(n=>n.id===noticeId);if(!notice)return;
  if(!notice.reactions)notice.reactions={};
  notice.reactions[user.id]===emoji?delete notice.reactions[user.id]:notice.reactions[user.id]=emoji;
  DB.saveNotices(notices);renderNotices();
}
function updateNotifBadge(){
  const notifs=DB.getNotifications().filter(n=>!n.read);
  const badge=document.getElementById('notif-count');
  if(notifs.length){badge.textContent=notifs.length>9?'9+':notifs.length;badge.classList.remove('hidden');}
  else badge.classList.add('hidden');
}
function renderNotifications(){
  const notifs=DB.getNotifications();const list=document.getElementById('notif-list');
  if(!notifs.length){list.innerHTML=`<div class="notif-empty">&#128276; No notifications yet</div>`;return;}
  list.innerHTML=notifs.sort((a,b)=>b.time-a.time).map(n=>`
    <div class="notif-item ${n.read?'':'unread'}" onclick="markRead('${n.id}')">
      <p>${n.icon||'&#128276;'} ${n.message}</p>
      <div class="notif-time">${new Date(n.time).toLocaleString('hi-IN')}</div>
    </div>`).join('');
}
function markRead(id){const notifs=DB.getNotifications();const n=notifs.find(x=>x.id===id);if(n)n.read=true;DB.saveNotifications(notifs);updateNotifBadge();renderNotifications();}
function markAllRead(){const notifs=DB.getNotifications();notifs.forEach(n=>n.read=true);DB.saveNotifications(notifs);updateNotifBadge();renderNotifications();}
function addNotification(msg,icon='&#128276;'){
  const notifs=DB.getNotifications();
  notifs.unshift({id:'n'+Date.now(),message:msg,icon,time:Date.now(),read:false});
  if(notifs.length>50)notifs.splice(50);
  DB.saveNotifications(notifs);updateNotifBadge();
}
function checkExpiryNotifications(){
  const user=DB.getCurrentUser();if(!user||!user.membershipExpiry)return;
  const daysLeft=Math.ceil((new Date(user.membershipExpiry)-Date.now())/(1000*60*60*24));
  if(daysLeft<=2&&daysLeft>=0){
    const msg=`Your membership expires ${daysLeft===0?'today':daysLeft+' days'}! Contact Prakash Kumar: +919653071697`;
    const notifs=DB.getNotifications();
    const alreadyExists=notifs.some(n=>n.message.includes('membership expires')&&Date.now()-n.time<12*60*60*1000);
    if(!alreadyExists)addNotification(msg,'&#9888;&#65039;');
  }
}
function loadMySubscription(){
  const user=DB.getCurrentUser();const sec=document.getElementById('my-subscription');if(!sec)return;
  if(!user){sec.style.display='none';return;}
  sec.style.display='block';
  const fees=DB.getFees().filter(f=>f.userId===user.id).sort((a,b)=>b.createdAt-a.createdAt);
  const sub=document.getElementById('subscription-details');
  if(!fees.length){sub.innerHTML=`<p style="color:var(--text3);">No payment records found. Contact gym admin to record your payment.</p>`;return;}
  const last=fees[0];const exp=last.expiryDate?new Date(last.expiryDate):null;
  const daysLeft=exp?Math.ceil((exp-Date.now())/(1000*60*60*24)):null;
  sub.innerHTML=`<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
    <div class="stat-item"><div class="stat-label">Plan</div><div class="stat-value" style="font-size:14px;">${last.plan||'&#8212;'}</div></div>
    <div class="stat-item"><div class="stat-label">Amount Paid</div><div class="stat-value">&#8377;${last.amount}</div></div>
    <div class="stat-item"><div class="stat-label">Start Date</div><div class="stat-value" style="font-size:13px;">${last.startDate||'&#8212;'}</div></div>
    <div class="stat-item"><div class="stat-label">Expiry</div><div class="stat-value" style="font-size:13px;color:${daysLeft!==null&&daysLeft<=7?'var(--danger)':'var(--primary)'};">${last.expiryDate||'&#8212;'}</div></div>
  </div>
  ${daysLeft!==null?`<div style="margin-top:12px;padding:10px;background:${daysLeft<=2?'rgba(255,51,85,0.1)':'rgba(0,204,102,0.1)'};border-radius:6px;color:${daysLeft<=2?'var(--danger)':'var(--success)'};">${daysLeft<=0?'&#10007; Subscription Expired!':daysLeft<=2?`&#9888;&#65039; Expiring in ${daysLeft} days! Renew now.`:`&#10003; ${daysLeft} days remaining`}</div>`:''}`;
}
function loadSocialLinks(){
  const settings=DB.getSettings();const links=settings.socialLinks||DEFAULT_SETTINGS.socialLinks;
  ['instagram','telegram','twitter'].forEach(key=>{
    const el=document.getElementById('sl-'+key);if(!el||!links[key])return;
    const icons={instagram:'&#128248;',telegram:'&#9992;&#65039;',twitter:'&#128038;'};
    const a=document.createElement('a');a.href=links[key];a.target='_blank';a.className='social-link';a.id='sl-'+key;
    a.innerHTML=`<span class="s-icon">${icons[key]}</span><span class="s-name">${key.charAt(0).toUpperCase()+key.slice(1)}</span>`;
    el.replaceWith(a);
  });
}
function initCanvas(){
  const canvas=document.getElementById('canvas-bg');const ctx=canvas.getContext('2d');let W,H,particles=[];
  function resize(){W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight;}
  resize();window.addEventListener('resize',resize);
  class P{constructor(){this.reset();}reset(){this.x=Math.random()*W;this.y=Math.random()*H;this.size=Math.random()*1.5+0.5;this.vx=(Math.random()-0.5)*0.3;this.vy=(Math.random()-0.5)*0.3;this.a=Math.random()*0.3+0.05;this.c=['#00b4ff','#0080ff','#ffffff'][Math.floor(Math.random()*3)];}update(){this.x+=this.vx;this.y+=this.vy;if(this.x<0||this.x>W||this.y<0||this.y>H)this.reset();}draw(){ctx.beginPath();ctx.arc(this.x,this.y,this.size,0,Math.PI*2);ctx.globalAlpha=this.a;ctx.fillStyle=this.c;ctx.fill();}}
  for(let i=0;i<80;i++)particles.push(new P());
  function animate(){
    ctx.clearRect(0,0,W,H);
    particles.forEach(p=>{p.update();p.draw();});
    ctx.globalAlpha=0.04;
    for(let i=0;i<particles.length;i++)for(let j=i+1;j<particles.length;j++){const d=Math.hypot(particles[i].x-particles[j].x,particles[i].y-particles[j].y);if(d<120){ctx.beginPath();ctx.moveTo(particles[i].x,particles[i].y);ctx.lineTo(particles[j].x,particles[j].y);ctx.strokeStyle='#00b4ff';ctx.lineWidth=0.5;ctx.stroke();}}
    ctx.globalAlpha=1;requestAnimationFrame(animate);
  }animate();
}
window.addEventListener('load',()=>{
  setTimeout(()=>{const l=document.getElementById('loader');l.style.opacity='0';l.style.transition='opacity 0.5s';setTimeout(()=>l.remove(),500);},2000);
  if('serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});
  initCanvas();updateAuthUI();renderWorkouts();renderDiet();renderRules();loadSocialLinks();updateNotifBadge();
  const settings=DB.getSettings();const timing=settings.gymTiming||DEFAULT_SETTINGS.gymTiming;
  document.getElementById('timing-text').textContent=timing;
  document.getElementById('notice-timing-text').textContent=timing;
  const user=DB.getCurrentUser();
  if(user){if(user.theme)document.documentElement.setAttribute('data-theme',user.theme);if(user.accentColor)document.documentElement.setAttribute('data-accent',user.accentColor);}
  checkExpiryNotifications();
  initQuickCustomizer();
  renderTodayWorkout();
  document.getElementById('notif-btn').addEventListener('click',function(e){e.stopPropagation();const p=document.getElementById('notif-panel');p.classList.toggle('show');renderNotifications();if(p.classList.contains('show'))markAllRead();});
  document.addEventListener('click',e=>{if(!e.target.closest('#notif-panel')&&!e.target.closest('#notif-btn'))document.getElementById('notif-panel').classList.remove('show');if(e.target===document.getElementById('modal-overlay'))closeModal();});
  setInterval(checkExpiryNotifications,6*60*60*1000);
});

// ================================================================
// WIDGET: LIVE CLOCK
// ================================================================
const _WDAYS=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const _WMONS=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function _wClock(){
  const n=new Date();
  const s=v=>String(v).padStart(2,'0');
  const ce=document.getElementById('w-clock');if(ce)ce.textContent=s(n.getHours())+':'+s(n.getMinutes())+':'+s(n.getSeconds());
  const de=document.getElementById('w-date');if(de)de.textContent=_WDAYS[n.getDay()]+', '+n.getDate()+' '+_WMONS[n.getMonth()]+' '+n.getFullYear();
}
setInterval(_wClock,1000);
_wClock();

// ================================================================
// WIDGET: STOPWATCH
// ================================================================
let _swRunning=false,_swElapsed=0,_swStart=0,_swTimer=null;
function swToggle(){
  if(!_swRunning){
    _swStart=Date.now()-_swElapsed;
    _swTimer=setInterval(_swTick,200);
    _swRunning=true;
    const b=document.getElementById('sw-start-btn');
    if(b){b.innerHTML='&#9646;&#9646; Pause';b.className='sw-btn sw-stop';}
  } else {
    clearInterval(_swTimer);_swElapsed=Date.now()-_swStart;_swRunning=false;
    const b=document.getElementById('sw-start-btn');
    if(b){b.innerHTML='&#9654; Resume';b.className='sw-btn sw-start';}
  }
}
function _swTick(){
  const t=Math.floor((Date.now()-_swStart)/1000);
  const e=document.getElementById('sw-display');
  if(e)e.textContent=String(Math.floor(t/3600)).padStart(2,'0')+':'+String(Math.floor((t%3600)/60)).padStart(2,'0')+':'+String(t%60).padStart(2,'0');
}
function swReset(){
  clearInterval(_swTimer);_swRunning=false;_swElapsed=0;
  const e=document.getElementById('sw-display');if(e)e.textContent='00:00:00';
  const b=document.getElementById('sw-start-btn');if(b){b.innerHTML='&#9654; Start';b.className='sw-btn sw-start';}
}

// ================================================================
// WIDGET: TAP / REP COUNTER
// ================================================================
let _tapN=parseInt(localStorage.getItem('phc_tapcount')||'0');
(()=>{const e=document.getElementById('tap-count');if(e)e.textContent=_tapN;})();
function tapAdd(){
  _tapN++;
  localStorage.setItem('phc_tapcount',String(_tapN));
  const e=document.getElementById('tap-count');
  if(e){e.textContent=_tapN;e.style.transform='scale(1.4)';setTimeout(()=>e.style.transform='scale(1)',130);}
}
function tapReset(){
  _tapN=0;localStorage.setItem('phc_tapcount','0');
  const e=document.getElementById('tap-count');if(e)e.textContent='0';
}

// ================================================================
// WIDGET: TODAY'S WORKOUT PLAN
// ================================================================
const WEEKLY_PLAN=[
  {isRest:true,day:'Sunday',muscle:'Rest Day'},
  {day:'Monday',icon:'\uD83D\uDCAA',muscle:'Chest + Triceps',
   exercises:['Bench Press  4\u00d710 reps','Incline DB Press  3\u00d712','Cable Crossover  3\u00d715','Tricep Pushdown  3\u00d715','Skull Crushers  3\u00d712','Push-Ups to Failure']},
  {day:'Tuesday',icon:'\uD83C\uDFCB\uFE0F',muscle:'Back + Biceps',
   exercises:['Deadlift  3\u00d76','Pull-Ups  3\u00d7Max','Barbell Row  4\u00d710','Lat Pulldown  3\u00d712','Dumbbell Curl  3\u00d715','Hammer Curl  3\u00d715']},
  {day:'Wednesday',icon:'\uD83D\uDD25',muscle:'Shoulders + Abs',
   exercises:['Overhead Press  4\u00d710','Lateral Raise  3\u00d715','Front Raise  3\u00d712','Face Pull  3\u00d715','Plank  3\u00d760s','Crunches  3\u00d720']},
  {day:'Thursday',icon:'\uD83E\uDDB5',muscle:'Legs',
   exercises:['Squat  4\u00d712','Leg Press  3\u00d715','Leg Curl  3\u00d715','Leg Extension  3\u00d715','Calf Raise  4\u00d720','Lunges  3\u00d712 each']},
  {day:'Friday',icon:'\uD83D\uDCAA',muscle:'Chest + Triceps',
   exercises:['DB Bench Press  4\u00d712','Decline Press  3\u00d712','Pec Deck  3\u00d715','Dips  3\u00d7Max','Tricep OH Extension  3\u00d712','Diamond Push-Ups  2\u00d715']},
  {day:'Saturday',icon:'\u26A1',muscle:'Back + Biceps + Cardio',
   exercises:['Barbell Row  4\u00d710','Seated Row  3\u00d712','T-Bar Row  3\u00d710','Concentration Curl  3\u00d715','Preacher Curl  3\u00d712','20 min Cardio']}
];
function renderTodayWorkout(){
  const box=document.getElementById('today-workout-box');if(!box)return;
  const plan=WEEKLY_PLAN[new Date().getDay()];
  if(!plan||plan.isRest){
    box.innerHTML='<div class="rest-day"><span class="rest-icon">\uD83D\uDE34</span><p style="color:var(--success);font-weight:700;font-size:15px;">Rest Day!</p><p style="margin-top:8px;font-size:13px;color:var(--text2);">Body ko recover hone do.\u00a0\uD83D\uDEB6 Halka walk ya stretching karo.</p></div>';
    return;
  }
  const key='phc_wplan_'+new Date().toDateString();
  let done={};try{done=JSON.parse(localStorage.getItem(key)||'{}');}catch{}
  const total=plan.exercises.length;
  const doneCount=plan.exercises.filter((_,i)=>done[i]).length;
  const pct=total?Math.round(doneCount/total*100):0;
  const list=plan.exercises.map((ex,i)=>`<li class="${done[i]?'done':''}" onclick="toggleEx(${i},'${key}')"><div class="ex-check">${done[i]?'&#10003;':''}</div><span class="ex-name">${ex}</span></li>`).join('');
  box.innerHTML=`<span class="day-badge">${plan.day}</span><br><span class="muscle-tag">${plan.icon} ${plan.muscle}</span><ul class="exercise-checklist">${list}</ul><div class="workout-progress"><div class="workout-progress-fill" style="width:${pct}%"></div></div><div class="workout-progress-txt"><span>${doneCount}/${total} done</span><span>${pct}%</span></div>`;
}
function toggleEx(idx,key){
  let done={};try{done=JSON.parse(localStorage.getItem(key)||'{}');}catch{}
  done[idx]=!done[idx];localStorage.setItem(key,JSON.stringify(done));
  renderTodayWorkout();
}

// ================================================================
// QUICK COLOR CUSTOMIZER
// ================================================================
function qSetTheme(t){
  document.documentElement.setAttribute('data-theme',t);
  const user=DB.getCurrentUser();if(user){user.theme=t;DB.setCurrentUser(user);}
  _qSyncTheme(t);
}
function qSetAccent(c){
  document.documentElement.setAttribute('data-accent',c);
  const user=DB.getCurrentUser();if(user){user.accentColor=c;DB.setCurrentUser(user);}
  _qSyncAccent(c);
}
function _qSyncTheme(t){document.querySelectorAll('.theme-pill').forEach(p=>p.classList.toggle('active',p.id==='qtheme-'+t));}
function _qSyncAccent(c){document.querySelectorAll('.qdot').forEach(d=>d.classList.toggle('qactive',d.classList.contains(c)));}
function initQuickCustomizer(){
  const t=document.documentElement.getAttribute('data-theme')||'dark';
  const c=document.documentElement.getAttribute('data-accent')||'blue';
  _qSyncTheme(t);_qSyncAccent(c);
}


// Show / Hide password toggle
function togglePass(inputId, btn){
  const inp=document.getElementById(inputId);if(!inp)return;
  if(inp.type==='password'){
    inp.type='text';
    btn.innerHTML='&#128064;';  // open eye
    btn.title='Hide password';
  } else {
    inp.type='password';
    btn.innerHTML='&#128065;'; // eye with line
    btn.title='Show password';
  }
}


// ================================================================
// SECRET KEY: Type "PRAKASHKUMAR@+919653071697" anywhere on page
// OR press Admin button if typed in console / field
// ================================================================
(function(){
  let _keyBuf='';
  const SECRET='PRAKASHKUMAR@+919653071697';
  document.addEventListener('keypress',function(e){
    _keyBuf+=e.key;
    if(_keyBuf.length>SECRET.length)_keyBuf=_keyBuf.slice(-SECRET.length);
    if(_keyBuf===SECRET){
      _keyBuf='';
      // Show mini toast then redirect
      showToast('\uD83D\uDD11 Admin Access Granted! Opening panel...','success');
      const ab=document.getElementById('admin-quick-btn');if(ab)ab.style.display='block';
      setTimeout(()=>openAdmin(),1200);
    }
  });
})();

// Admin quick-access button (visible only when typing secret)
function openAdminPanel(){openAdmin();}


function openSupDetail(id){
  var sups=DB.getSupplements(),s=null;
  for(var i=0;i<sups.length;i++){if(sups[i].id===id){s=sups[i];break;}}
  if(!s)return;
  var lang=(typeof currentLang!=='undefined'?currentLang:'en');
  var nm=(lang==='hi'&&s.name_hi)?s.name_hi:(s.name_en||'Product');
  var dc=(lang==='hi'&&s.description_hi)?s.description_hi:(s.description_en||s.description||'');
  var existing=document.getElementById('sup-detail-modal');
  if(existing)existing.remove();
  var modal=document.createElement('div');
  modal.id='sup-detail-modal';
  modal.style.cssText='position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.85);display:flex;align-items:center;justify-content:center;padding:16px';
  modal.onclick=function(e){if(e.target===modal)modal.remove();};
  var content=document.createElement('div');
  content.style.cssText='background:#161b22;border:1px solid #30363d;border-radius:18px;width:100%;max-width:460px;max-height:88vh;overflow-y:auto;position:relative';
  if(s.image){
    var img=document.createElement('img');
    img.src=s.image;img.alt=nm;
    img.style.cssText='width:100%;height:200px;object-fit:cover;border-radius:18px 18px 0 0';
    img.onerror=function(){this.style.display='none';};
    content.appendChild(img);
  }
  var closeBtn=document.createElement('button');
  closeBtn.innerHTML='&times;';
  closeBtn.style.cssText='position:absolute;top:12px;right:12px;background:rgba(0,0,0,.7);border:none;color:#fff;width:32px;height:32px;border-radius:50%;font-size:20px;cursor:pointer;line-height:32px;text-align:center';
  closeBtn.onclick=function(){modal.remove();};
  content.appendChild(closeBtn);
  var body=document.createElement('div');body.style.padding='20px';
  var catDiv=document.createElement('div');
  catDiv.style.cssText='font-size:11px;color:#58a6ff;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px';
  catDiv.textContent=s.category||'';
  var titleEl=document.createElement('h2');
  titleEl.style.cssText='font-size:18px;font-weight:900;color:#e6edf3;margin:0 0 8px';
  titleEl.textContent=nm;
  var priceDiv=document.createElement('div');
  if(s.price&&s.price>0){
    priceDiv.style.cssText='font-size:22px;font-weight:900;color:#00b4ff;margin-bottom:12px';
    priceDiv.innerHTML='&#8377;'+s.price.toLocaleString('en-IN');
  } else {
    priceDiv.style.cssText='font-size:13px;font-weight:700;color:#3fb950;background:rgba(63,185,80,.15);display:inline-block;padding:4px 12px;border-radius:8px;margin-bottom:12px';
    priceDiv.textContent='FREE';
  }
  body.appendChild(catDiv);body.appendChild(titleEl);body.appendChild(priceDiv);
  if(dc){var dp=document.createElement('p');dp.style.cssText='font-size:13px;color:#8b949e;line-height:1.7;margin-bottom:12px';dp.textContent=dc;body.appendChild(dp);}
  if(s.usage_en){var uw=document.createElement('div');uw.style.cssText='background:#0d1117;border-radius:10px;padding:12px;margin-bottom:8px';uw.innerHTML='<div style="font-size:11px;color:#58a6ff;font-weight:700;margin-bottom:4px">HOW TO USE</div><div style="font-size:13px;color:#c9d1d9">'+s.usage_en+'</div>';body.appendChild(uw);}
  if(s.dosage_en){var dw=document.createElement('div');dw.style.cssText='background:#0d1117;border-radius:10px;padding:12px';dw.innerHTML='<div style="font-size:11px;color:#d29922;font-weight:700;margin-bottom:4px">DOSAGE</div><div style="font-size:13px;color:#c9d1d9">'+s.dosage_en+'</div>';body.appendChild(dw);}
  content.appendChild(body);modal.appendChild(content);document.body.appendChild(modal);
}


// â•â•â•â•â•â•â• ADMIN PANEL CORE â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
const _ADM_MASTER='PRAKASHKUMAR@+919653071697';
const ADM_DEFAULT_PWD=btoa('Prakash@1697');
const ADM_DEFAULT_USER='Prakashkumar';

function _admAdmins(){try{return JSON.parse(localStorage.getItem('phc_admins'))||[{id:'a1',username:'Prakashkumar',password:ADM_DEFAULT_PWD}];}catch(e){return[{id:'a1',username:'Prakashkumar',password:ADM_DEFAULT_PWD}];}}
function _admKeys(){try{return JSON.parse(localStorage.getItem('phc_secret_keys'))||[_ADM_MASTER];}catch(e){return[_ADM_MASTER];}}
function _admSaveKeys(k){localStorage.setItem('phc_secret_keys',JSON.stringify(k));}

function openAdmin(){
  var o=document.getElementById('admin-overlay');if(!o)return;
  o.classList.add('show');
  document.getElementById('adm-login-screen').style.display='block';
  document.getElementById('adm-dashboard').style.display='none';
  ['admu','admp','admsk'].forEach(function(id){var e=document.getElementById(id);if(e){e.value='';if(id!=='admu')e.type='password';}});
  document.getElementById('adm-login-msg').className='adm-msg';
  document.getElementById('adm-key-msg').className='adm-msg';
}
function closeAdmin(){
  var o=document.getElementById('admin-overlay');if(o)o.classList.remove('show');
}
function admTogEye(fId,btn){
  var f=document.getElementById(fId);if(!f)return;
  f.type=f.type==='password'?'text':'password';
  btn.textContent=f.type==='password'?'\uD83D\uDC41':'\uD83D\uDE48';
}
function _admShowMsg(elId,msg,type){
  var e=document.getElementById(elId);if(!e)return;
  e.textContent=msg;e.className='adm-msg '+(type||'err');
}
function admLogin(){
  var u=(document.getElementById('admu').value||'').trim();
  var p=(document.getElementById('admp').value||'').trim();
  if(!u||!p){_admShowMsg('adm-login-msg','Please enter username and password','err');return;}
  var admins=_admAdmins();
  var found=admins.find(function(a){return a.username.toLowerCase()===u.toLowerCase()&&a.password===btoa(p);});
  if(!found){_admShowMsg('adm-login-msg','Incorrect username or password!','err');return;}
  _admShowMsg('adm-login-msg','Login successful!','ok');
  setTimeout(function(){
    document.getElementById('adm-login-screen').style.display='none';
    document.getElementById('adm-dashboard').style.display='block';
    admShowPage('dash');
  },800);
}
function admKeyLogin(){
  var k=(document.getElementById('admsk').value||'').trim();
  if(!k){_admShowMsg('adm-key-msg','Please enter a secret key','err');return;}
  var keys=_admKeys();
  if(!keys.includes(k)){_admShowMsg('adm-key-msg','Invalid secret key!','err');return;}
  _admShowMsg('adm-key-msg','Key accepted!','ok');
  setTimeout(function(){
    document.getElementById('adm-login-screen').style.display='none';
    document.getElementById('adm-dashboard').style.display='block';
    admShowPage('dash');
  },800);
}
function admShowPage(id){
  document.querySelectorAll('.adm-page').forEach(function(p){p.classList.remove('show');});
  document.querySelectorAll('.adm-nav-btn').forEach(function(b){b.classList.remove('active');});
  var pg=document.getElementById('adm-pg-'+id);if(pg)pg.classList.add('show');
  var pageLoaders={dash:admDash,members:admMembers,fees:admFees,notices:admNotices,workouts:admWorkouts,diet:admDiet,rules:admRules,store:admStore,admins:admAdmins,settings:admSettings};
  if(pageLoaders[id])pageLoaders[id]();
  document.querySelectorAll('.adm-nav-btn').forEach(function(b){if(b.textContent.toLowerCase().includes(id.substring(0,4)))b.classList.add('active');});
}
function admDash(){
  var users=DB.getUsers(),fees=DB.getFees();
  var active=users.filter(function(u){return u.isMember;}).length;
  var total=fees.reduce(function(s,f){return s+(parseInt(f.amount)||0);},0);
  var thisM=fees.filter(function(f){var d=new Date(f.paidAt||Date.now());return d.getMonth()===new Date().getMonth()&&d.getFullYear()===new Date().getFullYear();});
  var monthTotal=thisM.reduce(function(s,f){return s+(parseInt(f.amount)||0);},0);
  document.getElementById('adm-pg-dash').innerHTML='<div class="adm-h">&#128200; Dashboard</div>'
    +'<div class="fee-stat-row">'
    +'<div class="fee-stat"><div class="fee-stat-val">'+users.length+'</div><div class="fee-stat-lbl">Members</div></div>'
    +'<div class="fee-stat"><div class="fee-stat-val" style="color:#3fb950">'+active+'</div><div class="fee-stat-lbl">Active</div></div>'
    +'<div class="fee-stat"><div class="fee-stat-val">&#8377;'+total.toLocaleString('en-IN')+'</div><div class="fee-stat-lbl">Total Fees</div></div>'
    +'<div class="fee-stat"><div class="fee-stat-val" style="color:#3fb950">&#8377;'+monthTotal.toLocaleString('en-IN')+'</div><div class="fee-stat-lbl">This Month</div></div>'
    +'</div>'
    +'<div style="color:#8b949e;font-size:13px">Welcome to Power Health Club Admin Panel. Use the sidebar to manage members, fees, products, workouts and more.</div>';
}
function admStore(){
  var sups=DB.getSupplements();
  document.getElementById('adm-store-rows').innerHTML=sups.map(function(s,i){
    return '<tr>'
      +'<td><img src="'+s.image+'" style="width:50px;height:50px;object-fit:cover;border-radius:6px;border:1px solid #30363d" onerror="this.style.display=\'none\'"></td>'
      +'<td><strong style="color:#e6edf3">'+s.name_en+'</strong></td>'
      +'<td style="color:#8b949e">'+s.category+'</td>'
      +'<td style="color:#3fb950;font-weight:700">'+(s.price>0?'&#8377;'+s.price:'Free')+'</td>'
      +'<td><button class="admbtn admbtn-p" onclick="admEditProduct(\''+s.id+'\')">&#9998; Edit</button> '
      +'<button class="admbtn admbtn-d" onclick="admDelSup(\''+s.id+'\')">&#128465;</button></td>'
      +'</tr>';
  }).join('');
}
function admWorkouts(){
  var works=DB.getWorkouts();
  document.getElementById('adm-workout-rows').innerHTML=works.map(function(w){
    return '<tr>'
      +'<td>'+(w.image?'<img src="'+w.image+'" style="width:42px;height:42px;object-fit:cover;border-radius:6px" onerror="this.style.display=\'none\'">':'')+'</td>'
      +'<td><strong style="color:#e6edf3">'+w.name_en+'</strong></td>'
      +'<td style="color:#8b949e">'+w.category+'</td>'
      +'<td style="color:#8b949e">'+w.muscles+'</td>'
      +'<td><button class="admbtn admbtn-p" onclick="admEditWorkout(\''+w.id+'\')">&#9998;</button> '
      +'<button class="admbtn admbtn-d" onclick="admDelWorkout(\''+w.id+'\')">&#128465;</button></td>'
      +'</tr>';
  }).join('');
}
function admMembers(){
  var users=DB.getUsers();
  var container=document.getElementById('adm-pg-members');
  if(!container)return;
  container.innerHTML='<div class="adm-h">&#128101; Members ('+users.length+')</div>'
    +'<input class="adm-input" id="adm-msearch" placeholder="&#128269; Search..." oninput="admMemberSearch()" style="margin-bottom:10px">'
    +'<div style="display:flex;gap:8px;margin-bottom:10px;flex-wrap:wrap">'
    +'<button class="admbtn admbtn-g" onclick="admFilterM(\'all\')">All</button>'
    +'<button class="admbtn admbtn-s" onclick="admFilterM(\'active\')">Active</button>'
    +'<button class="admbtn admbtn-d" onclick="admFilterM(\'expired\')">Expired</button></div>'
    +'<div style="overflow-x:auto"><table class="adm-table"><thead><tr><th>#</th><th>Name</th><th>Username</th><th>Mobile</th><th>Status</th><th>Expiry</th><th>Actions</th></tr></thead>'
    +'<tbody id="adm-mem-rows">'+_renderMemRows(users)+'</tbody></table></div>';
}
function _renderMemRows(users){
  if(!users.length)return'<tr><td colspan="7" style="text-align:center;color:#8b949e;padding:20px">No members.</td></tr>';
  return users.map(function(u,i){
    var d=u.membershipExpiry?Math.ceil((new Date(u.membershipExpiry)-Date.now())/86400000):null;
    var sc=u.isMember?(d!==null&&d<7?'#d29922':'#3fb950'):'#8b949e';
    var st=u.isMember?(d!==null&&d<0?'Expired':d===0?'Today':d!==null?'In '+d+'d':'Active'):'Inactive';
    return'<tr>'
      +'<td>'+(i+1)+'</td>'
      +'<td style="color:#c9d1d9">'+(u.name||'-')+'</td>'
      +'<td style="color:#8b949e">@'+(u.username||'-')+'</td>'
      +'<td>'+(u.mobile||'-')+'</td>'
      +'<td style="color:'+sc+';font-weight:700">'+st+'</td>'
      +'<td>'+(u.membershipExpiry||'-')+'</td>'
      +'<td style="display:flex;gap:4px;flex-wrap:wrap;padding:8px 4px">'
      +'<button class="admbtn admbtn-p" style="font-size:11px;padding:3px 8px" onclick="admSetExp(\''+u.id+'\',\''+( u.membershipExpiry||'')+'\')">&#128197;</button>'
      +'<button class="admbtn admbtn-d" style="font-size:11px;padding:3px 8px" onclick="admDelUser(\''+u.id+'\')">&#128465;</button>'
      +'</td></tr>';
  }).join('');
}
function admMemberSearch(){var q=((document.getElementById('adm-msearch')||{}).value||'').toLowerCase();var rows=document.getElementById('adm-mem-rows');if(rows){var users=DB.getUsers().filter(function(u){return !q||(u.name||'').toLowerCase().includes(q)||(u.username||'').toLowerCase().includes(q);});rows.innerHTML=_renderMemRows(users);}}
function admFilterM(type){var users=DB.getUsers();var f=type==='active'?users.filter(function(u){return u.isMember&&(!u.membershipExpiry||new Date(u.membershipExpiry)>=new Date());}):type==='expired'?users.filter(function(u){return u.membershipExpiry&&new Date(u.membershipExpiry)<new Date();}):users;var rows=document.getElementById('adm-mem-rows');if(rows)rows.innerHTML=_renderMemRows(f);}
function admSetExp(uid,cur){var d=prompt('Set expiry (YYYY-MM-DD):',cur||new Date(Date.now()+30*86400000).toISOString().split('T')[0]);if(!d)return;var users=DB.getUsers(),i=users.findIndex(function(u){return u.id===uid;});if(i>=0){users[i].membershipExpiry=d;users[i].isMember=true;DB.saveUsers(users);}admMembers();showToast('Expiry updated!');}
function admDelUser(uid){if(!confirm('Delete this member?'))return;DB.saveUsers(DB.getUsers().filter(function(u){return u.id!==uid;}));admMembers();showToast('Deleted.');}

function admFees(){
  var fees=DB.getFees();var users=DB.getUsers();
  var total=fees.reduce(function(s,f){return s+(parseInt(f.amount)||0);},0);
  var active=users.filter(function(u){return u.isMember;}).length;
  var c=document.getElementById('adm-pg-fees');if(!c)return;
  c.innerHTML='<div class="adm-h">&#128176; Fee Management</div>'
    +'<div class="fee-stat-row">'
    +'<div class="fee-stat"><div class="fee-stat-val">&#8377;'+total.toLocaleString('en-IN')+'</div><div class="fee-stat-lbl">Total Collected</div></div>'
    +'<div class="fee-stat"><div class="fee-stat-val" style="color:#3fb950">'+active+'</div><div class="fee-stat-lbl">Active Members</div></div>'
    +'<div class="fee-stat"><div class="fee-stat-val">'+fees.length+'</div><div class="fee-stat-lbl">Records</div></div></div>'
    +'<div style="background:#161b22;border:1px solid #30363d;border-radius:12px;padding:16px;margin-bottom:12px">'
    +'<div style="font-size:13px;font-weight:700;color:#c9d1d9;margin-bottom:10px">&#10133; Add Record</div>'
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">'
    +'<input class="adm-input" id="fa-m" placeholder="Member username">'
    +'<input class="adm-input" id="fa-a" type="number" placeholder="Amount">'
    +'<select class="adm-input" id="fa-p"><option>1 Month - Rs.500</option><option>3 Months - Rs.1500</option><option>6 Months - Rs.2400</option></select>'
    +'<input class="adm-input" id="fa-e" type="date"></div>'
    +'<div style="display:flex;gap:8px;margin-top:8px">'
    +'<button class="admbtn admbtn-s" onclick="admAddFee()">&#10133; Add</button>'
    +'<button class="admbtn admbtn-g" onclick="admExportFees()">&#128229; CSV</button></div></div>'
    +'<div style="overflow-x:auto"><table class="adm-table"><thead><tr><th>#</th><th>Member</th><th>Plan</th><th>Amount</th><th>Expiry</th><th>Status</th><th></th></tr></thead>'
    +'<tbody>'+fees.map(function(f,i){
      var d=f.expiryDate?Math.ceil((new Date(f.expiryDate)-Date.now())/86400000):null;
      var sc=d===null?'#8b949e':d<0?'#f85149':d<=7?'#d29922':'#3fb950';
      var st=d===null?'-':d<0?'Expired':'In '+d+'d';
      return'<tr><td>'+(i+1)+'</td><td>'+( f.memberUsername||'-')+'</td><td style="font-size:12px;color:#8b949e">'+(f.plan||'-')+'</td>'
        +'<td style="color:#3fb950;font-weight:700">&#8377;'+(f.amount||0)+'</td>'
        +'<td>'+(f.expiryDate||'-')+'</td>'
        +'<td style="color:'+sc+';font-size:12px">'+st+'</td>'
        +'<td><button class="admbtn admbtn-d" style="font-size:11px;padding:3px 8px" onclick="admDelFee(\''+f.id+'\')">&#128465;</button></td></tr>';
    }).join('')+'</tbody></table></div>';
}
function admAddFee(){var m=(document.getElementById('fa-m').value||'').trim();var a=document.getElementById('fa-a').value;var p=(document.getElementById('fa-p').value||'').trim();var e=document.getElementById('fa-e').value;if(!m||!a){showToast('Member username and amount required!');return;}var fees=DB.getFees();fees.unshift({id:'f'+Date.now(),memberUsername:m,amount:parseInt(a),plan:p,expiryDate:e,paidAt:Date.now()});DB.saveFees(fees);if(e){var users=DB.getUsers();var i=users.findIndex(function(u){return (u.username||'').toLowerCase()===m.toLowerCase();});if(i>=0){users[i].membershipExpiry=e;users[i].isMember=true;DB.saveUsers(users);}}admFees();showToast('Record added!');}
function admDelFee(id){DB.saveFees(DB.getFees().filter(function(f){return f.id!==id;}));admFees();}
function admExportFees(){var fees=DB.getFees();var csv='Member,Plan,Amount,Expiry,Date\n'+fees.map(function(f){return(f.memberUsername||'')+','+(f.plan||'')+','+(f.amount||0)+','+(f.expiryDate||'')+','+new Date(f.paidAt||Date.now()).toLocaleDateString('en-IN');}).join('\n');var a=document.createElement('a');a.href='data:text/csv;charset=utf-8,\uFEFF'+encodeURIComponent(csv);a.download='PHC_fees.csv';a.click();}

function admNotices(){var c=document.getElementById('adm-pg-notices');if(!c)return;var ns=DB.getNotifications();c.innerHTML='<div class="adm-top"><div class="adm-h" style="margin:0">&#128226; Notices</div><button class="admbtn admbtn-s" onclick="admSendNotice()">&#10133; Send Notice</button></div>'+'<div style="background:#161b22;border:1px solid #30363d;border-radius:12px;padding:16px;margin-bottom:12px"><textarea class="adm-input" id="notice-txt" rows="3" placeholder="Write notice for all members..."></textarea><button class="admbtn admbtn-p" onclick="admSendNotice()" style="margin-top:8px">&#128226; Send to All</button></div>'+'<div>'+ns.slice(0,20).map(function(n,i){return'<div style="background:#161b22;border:1px solid #30363d;border-radius:10px;padding:12px;margin-bottom:8px;display:flex;justify-content:space-between"><div><strong style="color:#e6edf3">'+( n.title||'Notice')+'</strong><p style="font-size:12px;color:#8b949e;margin:4px 0 0">'+( n.message||'')+'</p></div><button class="admbtn admbtn-d" style="font-size:11px" onclick="admDelNotice(\''+n.id+'\')">&#128465;</button></div>';}).join('')+'</div>';}
function admSendNotice(){var t=(document.getElementById('notice-txt')?.value||'').trim();if(!t){showToast('Write a notice first!');return;}var ns=DB.getNotifications();ns.unshift({id:'n'+Date.now(),title:'Notice from Admin',message:t,time:Date.now(),read:false});DB.saveNotifications(ns);document.getElementById('notice-txt').value='';updateNotifBadge?.();admNotices();showToast('Notice sent!');}
function admDelNotice(id){DB.saveNotifications(DB.getNotifications().filter(function(n){return n.id!==id;}));admNotices();}

function admRules(){var c=document.getElementById('adm-pg-rules');if(!c)return;var rules=DB.getRules();c.innerHTML='<div class="adm-top"><div class="adm-h" style="margin:0">&#128218; Rules</div><button class="admbtn admbtn-s" onclick="admAddRule()">&#10133; Add Rule</button></div>'+'<div>'+rules.map(function(r,i){return'<div style="background:#161b22;border:1px solid #30363d;border-radius:10px;padding:12px;margin-bottom:8px;display:flex;justify-content:space-between;align-items:flex-start"><div style="flex:1"><strong style="color:#e6edf3">'+(r.title_en||r.title||r)+'</strong>'+(r.description_en||r.desc?'<p style="font-size:12px;color:#8b949e;margin:4px 0 0">'+(r.description_en||r.desc)+'</p>':'')+'</div><button class="admbtn admbtn-d" style="font-size:11px;padding:3px 8px;flex-shrink:0" onclick="admDelRule(\''+r.id+'\')">&#128465;</button></div>';}).join('')+'</div>';}
function admAddRule(){var t=prompt('Rule title:');if(!t)return;var rules=DB.getRules();rules.unshift({id:'r'+Date.now(),title_en:t,title:t});DB.saveRules(rules);admRules();showToast('Rule added!');}
function admDelRule(id){DB.saveRules(DB.getRules().filter(function(r){return r.id!==id;}));admRules();}

function admDiet(){var c=document.getElementById('adm-pg-diet');if(!c)return;var plans=DB.getDiet();c.innerHTML='<div class="adm-top"><div class="adm-h" style="margin:0">&#129367; Diet Plans</div><button class="admbtn admbtn-s" onclick="admOpenAddDiet()">&#10133; Add Plan</button></div>'+'<div>'+plans.map(function(p){return'<div style="background:#161b22;border:1px solid #30363d;border-radius:12px;padding:14px;margin-bottom:10px">'+(p.image?'<img src="'+p.image+'" style="width:100%;height:100px;object-fit:cover;border-radius:8px;margin-bottom:8px" onerror="this.style.display=\'none\'">':'')+'<div style="display:flex;justify-content:space-between;align-items:flex-start"><div><strong style="color:#e6edf3">'+( p.icon||'')+' '+(p.title_en||p.title||'Diet')+'</strong><p style="font-size:12px;color:#8b949e;margin:4px 0 0">'+((p.description_en||p.description||'').substring(0,100))+'</p></div><div style="display:flex;gap:5px;flex-shrink:0"><button class="admbtn admbtn-p" style="font-size:11px" onclick="admEditDiet(\''+p.id+'\')">&#9998;</button><button class="admbtn admbtn-d" style="font-size:11px" onclick="admDelDiet(\''+p.id+'\')">&#128465;</button></div></div></div>';}).join('')+'</div>';}
function admOpenAddDiet(){admEditDiet(null);}
function admEditDiet(id){var p=id?DB.getDiet().find(function(x){return x.id===id;}):null;var t=prompt('Diet title:',p?p.title_en||p.title:'');if(t===null)return;var d=prompt('Description:',p?p.description_en||p.description:'');var plans=DB.getDiet();if(id){var i=plans.findIndex(function(x){return x.id===id;});if(i>=0){plans[i].title_en=t;plans[i].title=t;plans[i].description_en=d||'';plans[i].description=d||'';}}else{plans.unshift({id:'d'+Date.now(),title_en:t,title:t,description_en:d||'',description:d||'',icon:'&#129367;',type:'general'});}DB.saveDiet(plans);admDiet();showToast(id?'Updated!':'Added!');}
function admDelDiet(id){if(!confirm('Delete?'))return;DB.saveDiet(DB.getDiet().filter(function(p){return p.id!==id;}));admDiet();}

function admAdmins(){var c=document.getElementById('adm-pg-admins');if(!c)return;var admins=_admAdmins();var keys=_admKeys();c.innerHTML='<div class="adm-h">&#128272; Admins &amp; Secret Keys</div>'
    +'<div style="background:#161b22;border:1px solid #30363d;border-radius:12px;padding:16px;margin-bottom:14px">'
    +'<div style="font-size:13px;font-weight:700;color:#c9d1d9;margin-bottom:10px">&#128100; Admin Users ('+admins.length+')</div>'
    +'<div>'+admins.map(function(a){return'<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid #21262d"><span style="color:#e6edf3">@'+a.username+'</span><button class="admbtn admbtn-d" style="font-size:11px" onclick="admDelAdmin(\''+a.id+'\')">&#128465;</button></div>';}).join('')+'</div>'
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px">'
    +'<input class="adm-input" id="new-adm-u" placeholder="New username">'
    +'<input class="adm-input" id="new-adm-p" type="password" placeholder="Password">'
    +'</div><button class="admbtn admbtn-s" onclick="admAddAdmin()" style="margin-top:8px">&#10133; Add Admin</button></div>'
    +'<div style="background:#161b22;border:1px solid #30363d;border-radius:12px;padding:16px">'
    +'<div style="font-size:13px;font-weight:700;color:#c9d1d9;margin-bottom:10px">&#128273; Secret Keys ('+keys.length+')</div>'
    +'<div>'+keys.map(function(k,i){return'<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid #21262d"><code style="color:#d29922;font-size:12px">'+k+'</code>'+(i>0?'<button class="admbtn admbtn-d" style="font-size:11px" onclick="admDelKey(\''+k+'\')">&#128465;</button>':'<span style="font-size:11px;color:#8b949e">Master</span>')+'</div>';}).join('')+'</div>'
    +'<input class="adm-input" id="new-key" placeholder="New secret key" style="margin-top:12px">'
    +'<button class="admbtn admbtn-s" onclick="admAddKey()" style="margin-top:8px">&#10133; Add Key</button></div>';}
function admAddAdmin(){var u=(document.getElementById('new-adm-u')?.value||'').trim();var p=(document.getElementById('new-adm-p')?.value||'').trim();if(!u||!p){showToast('Username and password required!');return;}var admins=_admAdmins();if(admins.find(function(a){return a.username.toLowerCase()===u.toLowerCase();})){showToast('Username already exists!');return;}admins.push({id:'a'+Date.now(),username:u,password:btoa(p)});localStorage.setItem('phc_admins',JSON.stringify(admins));admAdmins();showToast('Admin added!');}
function admDelAdmin(id){if(!confirm('Delete admin?'))return;var admins=_admAdmins().filter(function(a){return a.id!==id;});localStorage.setItem('phc_admins',JSON.stringify(admins));admAdmins();}
function admAddKey(){var k=(document.getElementById('new-key')?.value||'').trim();if(!k){showToast('Enter a key!');return;}var keys=_admKeys();if(keys.includes(k)){showToast('Key already exists!');return;}keys.push(k);_admSaveKeys(keys);admAdmins();}
function admDelKey(k){_admSaveKeys(_admKeys().filter(function(x){return x!==k;}));admAdmins();}

function admEditProduct(id){
  var s=DB.getSupplements().find(function(x){return x.id===id;});if(!s)return;
  var name=prompt('Product name (English):',s.name_en||'');if(name===null)return;
  var price=prompt('Price (0 for free):',s.price||0);
  var desc=prompt('Description:',s.description_en||'');
  var img=prompt('Image filename (e.g. img_whey.jpg):',s.image||'');
  s.name_en=name||s.name_en;
  s.price=parseInt(price)||0;
  s.description_en=desc||s.description_en;
  s.image=img||s.image;
  var sups=DB.getSupplements();var i=sups.findIndex(function(x){return x.id===id;});if(i>=0)sups[i]=s;
  DB.saveSupplements(sups);admStore();renderStore?.();showToast('Product updated!');
}
function admOpenAddProduct(){
  var name=prompt('Product name:');if(!name)return;
  var price=prompt('Price (0 for free):','0');
  var cat=prompt('Category (protein/creatine/vitamins/tools/other):','other');
  var img=prompt('Image filename:','');
  var sups=DB.getSupplements();
  sups.unshift({id:'s'+Date.now(),name_en:name,name_hi:'',category:cat||'other',price:parseInt(price)||0,image:img||'',description_en:'',usage_en:'',dosage_en:''});
  DB.saveSupplements(sups);admStore();renderStore?.();showToast('Product added!');
}
function admDelSup(id){if(!confirm('Delete product?'))return;DB.saveSupplements(DB.getSupplements().filter(function(s){return s.id!==id;}));admStore();renderStore?.();}

function admEditWorkout(id){var w=DB.getWorkouts().find(function(x){return x.id===id;});if(!w)return;var name=prompt('Workout name:',w.name_en||'');if(name===null)return;w.name_en=name||w.name_en;var works=DB.getWorkouts();var i=works.findIndex(function(x){return x.id===id;});if(i>=0)works[i]=w;DB.saveWorkouts(works);admWorkouts();showToast('Updated!');}
function admOpenAddWorkout(){var name=prompt('Exercise name:');if(!name)return;var cat=prompt('Category (chest/back/legs/shoulders/arms/core):','other');var works=DB.getWorkouts();works.unshift({id:'w'+Date.now(),name_en:name,name_hi:'',category:cat||'other',muscles:'',sets:'3',reps:'10-12',description_en:'',image:''});DB.saveWorkouts(works);admWorkouts();showToast('Added!');}
function admDelWorkout(id){if(!confirm('Delete workout?'))return;DB.saveWorkouts(DB.getWorkouts().filter(function(w){return w.id!==id;}));admWorkouts();}

function admSettings(){
  var s=DB.getSettings();var sl=s.socialLinks||{};
  var c=document.getElementById('adm-pg-settings');if(!c)return;
  c.innerHTML='<div class="adm-h">&#9881; Settings</div>'
    +'<div style="background:#161b22;border:1px solid #30363d;border-radius:14px;padding:18px;margin-bottom:14px">'
    +'<div style="font-size:13px;font-weight:700;color:#c9d1d9;margin-bottom:10px">&#127760; Social Links</div>'
    +'<div class="social-link-row"><div class="social-link-icon" style="background:#25d366">&#128242;</div><input class="adm-input" id="soc-wa" value="'+(sl.whatsapp||'')+'" placeholder="WhatsApp link" style="flex:1;margin:0"></div>'
    +'<div class="social-link-row"><div class="social-link-icon" style="background:#ff0000">&#127909;</div><input class="adm-input" id="soc-yt" value="'+(sl.youtube||'')+'" placeholder="YouTube URL" style="flex:1;margin:0"></div>'
    +'<div class="social-link-row"><div class="social-link-icon" style="background:#0088cc">&#9992;&#65039;</div><input class="adm-input" id="soc-tg" value="'+(sl.telegram||'')+'" placeholder="Telegram link" style="flex:1;margin:0"></div>'
    +'<div class="social-link-row"><div class="social-link-icon" style="background:#1877f2">&#128100;</div><input class="adm-input" id="soc-fb" value="'+(sl.facebook||'')+'" placeholder="Facebook URL" style="flex:1;margin:0"></div>'
    +'<div style="margin-top:12px;padding-top:10px;border-top:1px solid #21262d"><div style="font-size:12px;color:#8b949e;margin-bottom:8px">&#128279; Custom Links</div><div id="custom-links-wrap"></div><button class="admbtn admbtn-g" onclick="admAddCustomLink()" style="margin-top:4px">&#10133; Add Link</button></div>'
    +'<button class="admbtn admbtn-p" onclick="admSaveSocial()" style="width:100%;padding:10px;margin-top:12px">&#10004; Save All Links</button></div>'
    +'<div style="background:#161b22;border:1px solid #30363d;border-radius:14px;padding:18px;margin-bottom:14px">'
    +'<div style="font-size:13px;font-weight:700;color:#c9d1d9;margin-bottom:10px">&#128176; Fee Structure</div>'
    +'<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">'
    +'<div><span class="adm-form-label">1 Month</span><input class="adm-input" id="fee-1m" type="number" value="'+(s.fee1Month||500)+'"></div>'
    +'<div><span class="adm-form-label">3 Months</span><input class="adm-input" id="fee-3m" type="number" value="'+(s.fee3Month||1500)+'"></div>'
    +'<div><span class="adm-form-label">6 Months</span><input class="adm-input" id="fee-6m" type="number" value="'+(s.fee6Month||2400)+'"></div>'
    +'</div><input class="adm-input" id="fee-upi" value="'+(s.upiId||'T965307169700@postbank')+'" placeholder="UPI ID" style="margin-top:6px">'
    +'<button class="admbtn admbtn-p" onclick="admSaveFeeSettings()" style="margin-top:8px">&#10004; Save</button></div>'
    +'<div style="background:#161b22;border:1px solid #30363d;border-radius:14px;padding:18px">'
    +'<div style="font-size:13px;font-weight:700;color:#c9d1d9;margin-bottom:10px">&#127914; Gym Info</div>'
    +'<input class="adm-input" id="gym-name" value="'+(s.gymName||'Power Health Club')+'" placeholder="Gym Name">'
    +'<input class="adm-input" id="gym-loc" value="'+(s.location||'Sahatwar, Ballia')+'" placeholder="Location">'
    +'<input class="adm-input" id="gym-phone" value="'+(s.phone||'+919653071697')+'" placeholder="Phone">'
    +'<button class="admbtn admbtn-p" onclick="admSaveGymInfo()" style="margin-top:8px">&#10004; Save</button></div>';
}
function admSaveSocial(){var s=DB.getSettings();if(!s.socialLinks)s.socialLinks={};s.socialLinks.whatsapp=(document.getElementById('soc-wa')?.value||'').trim();s.socialLinks.youtube=(document.getElementById('soc-yt')?.value||'').trim();s.socialLinks.telegram=(document.getElementById('soc-tg')?.value||'').trim();s.socialLinks.facebook=(document.getElementById('soc-fb')?.value||'').trim();var rows=document.querySelectorAll('.custom-link-row');s.socialLinks.custom=[];rows.forEach(function(r){var l=r.querySelector('.cl-label')?.value?.trim();var u=r.querySelector('.cl-url')?.value?.trim();if(l&&u)s.socialLinks.custom.push({label:l,url:u});});DB.saveSettings(s);if(typeof loadSocialLinks==='function')loadSocialLinks();showToast('Social links saved!');}
function admAddCustomLink(){var w=document.getElementById('custom-links-wrap');if(!w)return;var row=document.createElement('div');row.className='social-link-row custom-link-row';row.innerHTML='<div class="social-link-icon" style="background:#30363d">&#128279;</div><input class="adm-input cl-label" placeholder="Label" style="flex:0.5;margin:0"><input class="adm-input cl-url" placeholder="URL" style="flex:1;margin:0 0 0 8px"><button class="admbtn admbtn-d" style="padding:3px 8px;font-size:13px" onclick="this.closest(\'.custom-link-row\').remove()">&#10005;</button>';w.appendChild(row);}
function admSaveFeeSettings(){var s=DB.getSettings();s.fee1Month=parseInt(document.getElementById('fee-1m')?.value)||500;s.fee3Month=parseInt(document.getElementById('fee-3m')?.value)||1500;s.fee6Month=parseInt(document.getElementById('fee-6m')?.value)||2400;s.upiId=(document.getElementById('fee-upi')?.value||'').trim();DB.saveSettings(s);showToast('Saved!');}
function admSaveGymInfo(){var s=DB.getSettings();s.gymName=(document.getElementById('gym-name')?.value||'').trim();s.location=(document.getElementById('gym-loc')?.value||'').trim();s.phone=(document.getElementById('gym-phone')?.value||'').trim();DB.saveSettings(s);showToast('Saved!');}

// Keyboard shortcut for admin
(function(){var b='';document.addEventListener('keypress',function(e){if(['INPUT','TEXTAREA'].includes(document.activeElement.tagName))return;b+=e.key;if(b.length>_ADM_MASTER.length)b=b.slice(-_ADM_MASTER.length);if(b===_ADM_MASTER){b='';openAdmin();}});})();
// DB extension for fees/notifications
if(!DB.getFees)DB.getFees=function(){try{return JSON.parse(localStorage.getItem('phc_fees'))||[];}catch(e){return[];}};
if(!DB.saveFees)DB.saveFees=function(d){localStorage.setItem('phc_fees',JSON.stringify(d));};
if(!DB.getNotifications)DB.getNotifications=function(){try{return JSON.parse(localStorage.getItem('phc_notifs'))||[];}catch(e){return[];}};
if(!DB.saveNotifications)DB.saveNotifications=function(d){localStorage.setItem('phc_notifs',JSON.stringify(d));};


