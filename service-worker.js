importScripts("/precache-manifest.46fb8e581b1d508197c205d8111244b5.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* workbox - sw */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "/precache-manifest.46fb8e581b1d508197c205d8111244b5.js"
);

workbox.core.setCacheNameDetails({prefix: "vuepwa"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

/* firebase - sw */
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyCE9K0X8StAgnxypSg8QTeVs6Mvh7CWHfo",
  authDomain: "pwatest-c4ed0.firebaseapp.com",
  databaseURL: "https://pwatest-c4ed0.firebaseio.com",
  projectId: "pwatest-c4ed0",
  storageBucket: "pwatest-c4ed0.appspot.com",
  messagingSenderId: "218708421207",
  appId: "1:218708421207:web:bcd7ad0373d91bef0b1112"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
});

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
