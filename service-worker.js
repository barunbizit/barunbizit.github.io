importScripts("/precache-manifest.199d296c4b3d71ca36727f9accb485ef.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "vuepwa"});

self.addEventListener('install', (event) => {
  workbox.core.skipWaiting();

  console.log('service-worker install ..');

});

self.addEventListener('activate', (event) => {
  console.log('service-worker activate ..');

  workbox.core.clientsClaim();
});

self.addEventListener('message', (event) => {
  console.log('service-worker message .. ', event);
});

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
