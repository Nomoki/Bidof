import firebase from 'firebase';

const config = {
    projectId: 'bbiddoff',
    apiKey: 'AIzaSyCEVf6I_cXVhorJdUJGmNeP7dfAzDWNs_g',
    databaseURL: 'https://bbiddoff-default-rtdb.firebaseio.com'
  };
firebase.initializeApp(config);

export default firebase;