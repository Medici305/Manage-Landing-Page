import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDLGe7z6dTP7-ip4SaQYObQmnwcwanH9gU",
  authDomain: "manage-landing-page.firebaseapp.com",
  projectId: "manage-landing-page",
  storageBucket: "manage-landing-page.appspot.com",
  messagingSenderId: "720143937260",
  appId: "1:720143937260:web:51c05450848408b43effc9",
  measurementId: "G-BZ94F0JVY3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
