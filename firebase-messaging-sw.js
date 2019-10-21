importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyCE9K0X8StAgnxypSg8QTeVs6Mvh7CWHfo",
  authDomain: "pwatest-c4ed0.firebaseapp.com",
  databaseURL: "https://pwatest-c4ed0.firebaseio.com",
  projectId: "pwatest-c4ed0",
  storageBucket: "pwatest-c4ed0.appspot.com",
  messagingSenderId: "218708421207",
  appId: "1:218708421207:web:bcd7ad0373d91bef0b1112",
  measurementId: "G-93VWW5Y93Q"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload) => {
  console.info('[info] Firebase 알림 : ' + JSON.stringify(payload));

  return self.registration.showNotification('[MONEYSHIELD.PWA]', {
    body: JSON.stringify(payload),
    icon: '/favicon-32x32.png'
  });
});