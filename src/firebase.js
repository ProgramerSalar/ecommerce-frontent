import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmdLdoUfQBRuwGEb5GNwjPnmXpD05B8w8",
  authDomain: "ecomerce-113a6.firebaseapp.com",
  projectId: "ecomerce-113a6",
  storageBucket: "ecomerce-113a6.appspot.com",
  messagingSenderId: "1069295500665",
  appId: "1:1069295500665:web:1313e69caa7f7b2be483a8",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firbase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
