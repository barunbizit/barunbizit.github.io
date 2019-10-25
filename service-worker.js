importScripts("/precache-manifest.02c2e9617719f356964a4e918ea3052a.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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

