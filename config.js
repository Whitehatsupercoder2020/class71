import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDtL-7RBWlk9qpAht79TRCtZazitywWtIg",
  authDomain: "wily-app-e26da.firebaseapp.com",
  databaseURL: "https://wily-app-e26da-default-rtdb.firebaseio.com",
  projectId: "wily-app-e26da",
  storageBucket: "wily-app-e26da.appspot.com",
  messagingSenderId: "963836305013",
  appId: "1:963836305013:web:7e05288ca32df8ee0f223c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
