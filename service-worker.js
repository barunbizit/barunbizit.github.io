importScripts("/precache-manifest.0668ec55b4b4f8cda5db41f771ed0271.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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
