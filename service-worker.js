importScripts("/precache-manifest.f3c42addc097083dc115eab036e94757.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

if (workbox) {
  console.log('workbox loaded');
}else{
  console.log('workbox is not loaded');
}

// workbox.core.setCacheNameDetails({prefix: "pwa"});

// self.addEventListener('message', (event) => {
//   if (event.data && event.data.type === 'SKIP_WAITING') {
//     self.skipWaiting();
//   }
// });

// /**
//  * The workboxSW.precacheAndRoute() method efficiently caches and responds to
//  * requests for URLs in the manifest.
//  * See https://goo.gl/S9QRab
//  */
// self.__precacheManifest = [].concat(self.__precacheManifest || []);
// workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

