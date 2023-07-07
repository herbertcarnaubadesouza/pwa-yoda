/// <reference lib="webworker" />
/* eslint-disable no-restricted-globals */
/* eslint-disable import/first */
import firebase from "firebase";

importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyB0YLVsu24Ge4s3Kh83qPaWHuSd0kewkdM",
  authDomain: "service-pwa-a0b8a.firebaseapp.com",
  projectId: "service-pwa-a0b8a",
  storageBucket: "service-pwa-a0b8a.appspot.com",
  messagingSenderId: "864048105713",
  appId: "1:864048105713:web:86495c6b0582557be6c150",
  measurementId: "G-DCNTXD2GR7"
});

const messaging = firebase.messaging();


messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  (self as unknown as ServiceWorkerGlobalScope).registration.showNotification('Título da Notificação', {
    body: 'Conteúdo da Notificação',
    icon: '/caminho/para/icone.png'
  });

});

self.addEventListener('notificationclick', (event) => {
  // Handle the event
  let notificationEvent = event as NotificationEvent;
  console.log('Notification clicked', notificationEvent);
  notificationEvent.notification.close();
  // can also use event.waitUntil() here if needed
});

export { };

