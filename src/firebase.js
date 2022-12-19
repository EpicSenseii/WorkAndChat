// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbLP221ldycLZUihbzLCQpOmBPbzBPV68",
  authDomain: "wchat-2fd47.firebaseapp.com",
  projectId: "wchat-2fd47",
  storageBucket: "wchat-2fd47.appspot.com",
  messagingSenderId: "219027968164",
  appId: "1:219027968164:web:c0edb92a197161fe349631"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)