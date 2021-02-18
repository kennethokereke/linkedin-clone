import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDrx_Drc6_KY21x1Bd0uOGsumAvHYLsdXo",
    authDomain: "linkedinclone-18408.firebaseapp.com",
    projectId: "linkedinclone-18408",
    storageBucket: "linkedinclone-18408.appspot.com",
    messagingSenderId: "1023387522448",
    appId: "1:1023387522448:web:b40fe70fd04d1aa33f4f15",
    measurementId: "G-ZWRRR18C2X"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
//   go to the firebase app and get fire store
  const db = firebaseApp.firestore();
//   get authentication like sign up
  const auth = firebase.auth();

  export {db, auth};