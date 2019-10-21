importScripts("/precache-manifest.38d74f3c6aadff47bb900984d1572767.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "swcache-v1"});

self.addEventListener('install', (event) => {
  console.info('[info] 서비스워커를 설치합니다 ..');

  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.info('[info] 서비스워커를 활성화합니다 ..');

  self.clients.claim();
});

// self.addEventListener('push', (event) => {
//   console.info('[info] 서비스워커 알림 : ' + event);

//   event.waitUntil(self.registration.showNotification('PUSH', {body:event.data.text()}));
// });

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
