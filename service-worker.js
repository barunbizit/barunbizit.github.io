importScripts("/precache-manifest.8dec27be19e5ce2ff67ab531dd6a9c1a.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "swcache-v1"});

self.addEventListener('install', (event) => {
  console.log('service-worker install . . .');
  
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('service-worker activate . . .');

  self.clients.claim();
});

self.addEventListener('message', (event) => {
  console.log('service-worker message . . . ', event);
});

self.addEventListener('push', (event) => {
  console.log('service-worker push . . . ' + event.data.text());

  event.waitUntil(self.registration.showNotification('PUSH', {body:event.data.text()}));
});

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
