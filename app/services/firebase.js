import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyA1SI4WKYCuFroAIHJyJGDNMZlWjQTcxbw',
  authDomain: 'czaturbator.firebaseapp.com',
  databaseURL: 'https://czaturbator.firebaseio.com',
  projectId: 'czaturbator',
  storageBucket: 'czaturbator.appspot.com',
  messagingSenderId: '640825613147',
};
firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export const messagesRef = firebase.database().ref('messages');
export const timestamp = firebase.database.ServerValue.TIMESTAMP;

export const messaging = firebase.messaging();

// TODO: code below allow to register custom service worker and pass it to firebase services but idk how to set path
// navigator.serviceWorker.register('service-worker.js')
//   .then((registration) => {
//     messaging.useServiceWorker(registration);
//   });

export default firebase;
