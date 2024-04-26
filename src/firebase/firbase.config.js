// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHlipOveygYAdeTwZ5UMy_01MWnsYItiQ",
  authDomain: "coffee-emporium-97626.firebaseapp.com",
  projectId: "coffee-emporium-97626",
  storageBucket: "coffee-emporium-97626.appspot.com",
  messagingSenderId: "420694279282",
  appId: "1:420694279282:web:0628d5ce20735e453feeeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;