import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDtj5LmdAaKod-d8Dl3-BTNyzI8j3gXSVM',
  authDomain: 'what-want-to-eat.firebaseapp.com',
  databaseURL: 'https://what-want-to-eat.firebaseio.com',
  projectId: 'what-want-to-eat',
  storageBucket: 'what-want-to-eat.appspot.com',
  messagingSenderId: '1022667420600',
  appId: '1:1022667420600:web:252f73279416190a6a954d',
  measurementId: 'G-RTWJB040KX',
};
firebase.initializeApp(firebaseConfig);

export const DB = firebase.firestore();
