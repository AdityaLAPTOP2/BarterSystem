import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyC0PSQBgkuDci2JVcB_J_m4ZEQ_Zq4-PMU",
  authDomain: "bartersystem-75a9c.firebaseapp.com",
  projectId: "bartersystem-75a9c",
  storageBucket: "bartersystem-75a9c.appspot.com",
  messagingSenderId: "169605383565",
  appId: "1:169605383565:web:96eeda2cda2cfb426f29c4",
  measurementId: "G-373VCQ5WDV"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
