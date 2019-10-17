importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js');

console.log('firebase-messaging-sw.js !');

var firebaseConfig = {
  apiKey: "AIzaSyCE9K0X8StAgnxypSg8QTeVs6Mvh7CWHfo",
  authDomain: "pwatest-c4ed0.firebaseapp.com",
  databaseURL: "https://pwatest-c4ed0.firebaseio.com",
  projectId: "pwatest-c4ed0",
  storageBucket: "pwatest-c4ed0.appspot.com",
  messagingSenderId: "218708421207",
  appId: "1:218708421207:web:bcd7ad0373d91bef0b1112"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.usePublicVapidKey("BBklpGnkbNHRHx2b9mcv46ezdtSL1CM6Bh7hvgLsu3ifAXbveaK7_HGPMeC1PAHhePggoTqyNybV5O08iF2hO8s");

Notification.requestPermission().then(function (permission) {
  if (permission === 'granted') {
    console.log('Notification granted.');
  } else {
    console.error('Notification denied.');
  }
});

messaging.getToken().then((currentToken) => {
  if (currentToken) {
    sendTokenToServer(currentToken);
    updateUIForPushEnabled(currentToken);
  } else {
    // Show permission request.
    console.log('No Instance ID token available. Request permission to generate one.');
    // Show permission UI.
    updateUIForPushPermissionRequired();
    setTokenSentToServer(false);
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  showToken('Error retrieving Instance ID token. ', err);
  setTokenSentToServer(false);
});

messaging.onTokenRefresh(() => {
  messaging.getToken().then((refreshedToken) => {
    console.log('Token refreshed.');
    // Indicate that the new Instance ID token has not yet been sent to the
    // app server.
    setTokenSentToServer(false);
    // Send Instance ID token to app server.
    sendTokenToServer(refreshedToken);
    // ...
  }).catch((err) => {
    console.log('Unable to retrieve refreshed token ', err);
    showToken('Unable to retrieve refreshed token ', err);
  });
});
