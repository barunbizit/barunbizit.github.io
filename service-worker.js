importScripts("/precache-manifest.e312a6039ac35bce604eedb3ef4cb8c3.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "vuepwa"});

self.addEventListener('install', (event) => {
  self.skipWaiting();

  console.log('service-worker install ...');
  
});

self.addEventListener('activate', (event) => {
  console.log('service-worker activate ...');

  self.clients.claim();
});

self.addEventListener('message', (event) => {
  console.log('service-worker message ... ', event);
});

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
