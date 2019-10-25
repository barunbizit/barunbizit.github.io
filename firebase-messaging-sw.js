importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js');

firebase.initializeApp({
  messagingSenderId: "630604493528"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload) => {
  console.info('[info] Firebase 알림 : ' + JSON.stringify(payload));

  return self.registration.showNotification('[집가계부]', {
    body: JSON.stringify(payload),
    icon: '/favicon-32x32.png'
  });
});
