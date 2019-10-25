importScripts("/precache-manifest.58f2a526aafd5f41274ef5720e10ac13.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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

