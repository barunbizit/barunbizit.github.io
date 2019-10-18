importScripts("/precache-manifest.5f2be64d3ddea154ae610ec16c9b51a6.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "vuepwa"});

self.addEventListener('install', (event) => {
  console.log('service-worker install ..');

  self.skipWaiting();
});

self.addEventListener('active', (event) => {
  console.log('service-worker active ..');

  self.clients.claim();
});

self.addEventListener('message', (event) => {
  console.log('service-worker message .. ', event);
});

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
