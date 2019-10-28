importScripts("/precache-manifest.27e2a4fc7b9b6295234db7bb56e4c9bf.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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

