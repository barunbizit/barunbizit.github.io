importScripts("/precache-manifest.8708f613023d615bb0fbdadf5abbbc5f.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "swcache-v1"});

self.addEventListener('install', (event) => {
  console.info('[info] 서비스워커를 설치합니다 ..');

  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.info('[info] 서비스워커를 활성화합니다 ..');

  self.clients.claim();
});

self.addEventListener('push', (event) => {
  console.info('serviceWorker push . . . ' + event.data.text());

  event.waitUntil(self.registration.showNotification('PUSH', {body:event.data.text()}));
});

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
