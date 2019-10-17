importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyCE9K0X8StAgnxypSg8QTeVs6Mvh7CWHfo",
  authDomain: "pwatest-c4ed0.firebaseapp.com",
  databaseURL: "https://pwatest-c4ed0.firebaseio.com",
  projectId: "pwatest-c4ed0",
  storageBucket: "pwatest-c4ed0.appspot.com",
  messagingSenderId: "218708421207",
  appId: "1:218708421207:web:bcd7ad0373d91bef0b1112"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
