import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCEVf6I_cXVhorJdUJGmNeP7dfAzDWNs_g",
  authDomain: "bbiddoff.firebaseapp.com",
  databaseURL: "https://bbiddoff-default-rtdb.firebaseio.com",
  projectId: "bbiddoff",
  storageBucket: "bbiddoff.appspot.com",
  messagingSenderId: "754560189188",
  appId: "1:754560189188:web:a7f62594764d246a2d8651",
  measurementId: "G-04W33XXC55"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
