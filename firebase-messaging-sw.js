importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDRcvcvaYSsw19ZmcOikz-FBReqJTtI03s",
  messagingSenderId: "1049559335650",
  projectId: "sahyogdelivery",
  appId: "1:1049559335650:web:2cb13685ce3c01b93e94bb"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body,
      icon: '/favicon.png'
    }
  );
});
