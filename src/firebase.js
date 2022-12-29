// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7_lwlz4wGeDUng1FC3zDLfnkjHXtk3Go",
  authDomain: "ecommerce-ca4c9.firebaseapp.com",
  projectId: "ecommerce-ca4c9",
  storageBucket: "ecommerce-ca4c9.appspot.com",
  messagingSenderId: "740865927205",
  appId: "1:740865927205:web:3b1a99581b0c2f1cbbf7cc",
  measurementId: "G-48PN7JFNKS",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

export { auth, googleAuthProvider };
export default firebase;
