importScripts("/precache-manifest.8bd912ff46643f7d677f449337ca5e40.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js');

var firebaseConfig = {
  apiKey: "AIzaSyCE9K0X8StAgnxypSg8QTeVs6Mvh7CWHfo",
  authDomain: "pwatest-c4ed0.firebaseapp.com",
  databaseURL: "https://pwatest-c4ed0.firebaseio.com",
  projectId: "pwatest-c4ed0",
  storageBucket: "pwatest-c4ed0.appspot.com",
  messagingSenderId: "218708421207",
  appId: "1:218708421207:web:bcd7ad0373d91bef0b1112",
  measurementId: "G-93VWW5Y93Q"
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onMessage((payload) => {
  console.info('[debug] firebase on message. (' + JSON.stringify(payload) + ')');
});

workbox.core.setCacheNameDetails({prefix: "swcache-v1"});

self.addEventListener('install', (event) => {
  console.info('serviceWorker install . . .');

  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.info('serviceWorker activate . . .');

  self.clients.claim();
});

self.addEventListener('message', (event) => {
  console.info('serviceWorker message . . . ', event);
});

self.addEventListener('push', (event) => {
  console.info('serviceWorker push . . . ' + event.data.text());

  event.waitUntil(self.registration.showNotification('PUSH', {body:event.data.text()}));
});

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
