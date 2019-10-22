importScripts("/precache-manifest.663072056378372fff4f06387c47637c.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "swcache-v1"});

self.addEventListener('install', (event) => {
  console.info('[info] 서비스워커를 설치합니다 ..');

  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.info('[info] 서비스워커를 활성화합니다 ..');

  self.clients.claim();
});

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
