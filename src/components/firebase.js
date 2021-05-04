import firebase from 'firebase';

const config = {
    projectId: "bbiddoff",
    apiKey: "AIzaSyCEVf6I_cXVhorJdUJGmNeP7dfAzDWNs_g",
    databaseURL: "https://bbiddoff-default-rtdb.firebaseio.com"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp({});
 }else {
    firebase.app(); // if already initialized, use that one
 }

export default firebase;

