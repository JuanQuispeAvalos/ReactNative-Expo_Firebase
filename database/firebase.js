import firebase from 'firebase'

import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBbPLw6WS0zgiXU7W0B_as9Cx1-7SwIIGY",
    authDomain: "react-native-firebase-250df.firebaseapp.com",
    projectId: "react-native-firebase-250df",
    storageBucket: "react-native-firebase-250df.appspot.com",
    messagingSenderId: "607808919030",
    appId: "1:607808919030:web:39a25c63ac880af6b523d7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

export default {
  firebase,
  db
};