importScripts("/precache-manifest.8da78ebf9c090c1e1b7fb4d726026692.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener('push', function (event) {
  console.log('push !');
  let push_message = event.data.json();
  const options = {
    body : push_message.notification.body,
    icon : push_message.notification.icon,
    image: push_message.notification.image,
    tag  : 'alert'
  };
  event.waitUntil(self.registration.showNotification(push_message.notification.title, options));
});

self.addEventListener('notificationclick', function (event) {
  console.log('notification click !');
  const clicked = event.notification;
  clicked.close();
  
  const promiseChain = clients.openWindow('http://www.naver.com');
  event.waitUntil(promiseChain);
});
