importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

var config = {
  'messagingSenderId': '640825613147',
};
firebase.initializeApp(config);

var messaging = firebase.messaging();
