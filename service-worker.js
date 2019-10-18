importScripts("/precache-manifest.88530425addb08b98f44cf7631b11c4d.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "vuepwa"});

self.addEventListener('install', (event) => {
  console.log('service-worker install ..');

  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('service-worker activate ..');

  self.clients.claim();
});

self.addEventListener('message', (event) => {
  console.log('service-worker message .. ', event);
});

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
