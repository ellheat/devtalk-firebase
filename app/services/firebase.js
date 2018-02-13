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
export default firebase;
