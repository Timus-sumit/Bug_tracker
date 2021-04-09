import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBDwPQZ0rSJJGln87po89b4aRVzsll6CCc",
    authDomain: "bug-tracker-9ccac.firebaseapp.com",
    projectId: "bug-tracker-9ccac",
    storageBucket: "bug-tracker-9ccac.appspot.com",
    messagingSenderId: "842057465078",
    appId: "1:842057465078:web:f83314853c98fd3cc940d7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  export {firebase};