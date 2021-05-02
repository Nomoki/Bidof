import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCEVf6I_cXVhorJdUJGmNeP7dfAzDWNs_g",
  authDomain: "bbiddoff.firebaseapp.com",
  databaseURL: "https://bbiddoff-default-rtdb.firebaseio.com",
  projectId: "bbiddoff",
  storageBucket: "bbiddoff.appspot.com",
  messagingSenderId: "754560189188",
  appId: "1:754560189188:web:a7f62594764d246a2d8651",
  measurementId: "G-04W33XXC55"
  });

export const auth = firebaseConfig.auth();
export const db = firebase.firestore();
export default firebaseConfig;