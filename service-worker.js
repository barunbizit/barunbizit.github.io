importScripts("/precache-manifest.7d68511c8ef7d90a51a07ff4797a73b1.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "pwa"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.routing.registerRoute(/.*(?:barunbizit)*$/, new workbox.strategies.NetworkFirst({
  cacheName:'barunbizit'
}));

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

