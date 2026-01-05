importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDRcvcvaYSsw19ZmcOikz-FBReqJTtI03s",
  messagingSenderId: "1049559335650",
  projectId: "sahyogdelivery",
  appId: "1:1049559335650:web:2cb13685ce3c01b93e94bb"
});

const messaging = firebase.messaging();

self.addEventListener('push', function(event) {
  if (!event.data) return;

  const data = event.data.json();
  const notification = data.notification || {};

  event.waitUntil(
    self.registration.showNotification(
      notification.title || 'Sahyog Delivery',
      {
        body: notification.body || '',
        icon: '/favicon.png',
        badge: '/favicon.png',
        requireInteraction: true
      }
    )
  );
});

