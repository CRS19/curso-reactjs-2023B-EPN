// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK9hpBBWbs-eeq0Hidj9c2kfcz5O2UG8Q",
  authDomain: "react-auth-f095b.firebaseapp.com",
  projectId: "react-auth-f095b",
  storageBucket: "react-auth-f095b.appspot.com",
  messagingSenderId: "816579154212",
  appId: "1:816579154212:web:49e749dd15afb90ad6a3b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
