importScripts("/precache-manifest.4ac95f097dc7210355f6db8a1679a39e.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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
