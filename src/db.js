import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyASaYmwoVDGoWBx4vraFOpnn3ZrRcyDHDA',
  authDomain: 'seznam-knih.firebaseapp.com',
  projectId: 'seznam-knih',
  storageBucket: 'seznam-knih.appspot.com',
  messagingSenderId: '1074205803908',
  appId: '1:1074205803908:web:f03af9a941441eaa1e49d1',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
