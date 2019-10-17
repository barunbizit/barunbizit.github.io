importScripts("/precache-manifest.82c091cc9cc8dc014a89323832f73400.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js');

var firebaseConfig = {
  apiKey: "AIzaSyCOwlwaex-fR4x6TDoILqLWJkUC8kjBsU8",
  authDomain: "pushtest-73403.firebaseapp.com",
  databaseURL: "https://pushtest-73403.firebaseio.com",
  projectId: "pushtest-73403",
  storageBucket: "pushtest-73403.appspot.com",
  messagingSenderId: "824115189424",
  appId: "1:824115189424:web:8de494f9b355171273cd75"
};
firebase.initializeApp(firebaseConfig);
console.log('firebase initialized !');
const messaging = firebase.messaging();

messaging.usePublicVapidKey("BHb_sBj3umZfP8DXRL4lwsnsZFzoPbhEm2xvPefZQUiiDS4tssV8DqyRosr2vFhO4Ct_2SGkNhdgj6-kAmmSZL8");
  console.log('before request permission !');
  Notification.requestPermission().then(function (permission) {
  if (permission === 'granted') {
    console.log('Notification permission granted.');
  } else {
    console.error('Unable to get permission to notify.');
  }
});

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
  return self.registration.showNotification(notificationTitle, notificationOptions);
});

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener('push', function (event) {
  console.log('push !');
  let push_message = event.data.json();
  const options = {
    body : push_message.notification.body,
    icon : push_message.notification.icon,
    image: push_message.notification.image,
    tag  : 'alert'
  };
  event.waitUntil(self.registration.showNotification(push_message.notification.title, options));
});

self.addEventListener('notificationclick', function (event) {
  console.log('notification click !');
  const clicked = event.notification;
  clicked.close();
  
  const promiseChain = clients.openWindow('http://www.naver.com');
  event.waitUntil(promiseChain);
});
