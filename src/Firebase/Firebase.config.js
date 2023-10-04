// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv8ZvlvTglK_7DFxMTwDXFaiDzeJ1jQE0",
  authDomain: "dragon-news-d37cb.firebaseapp.com",
  projectId: "dragon-news-d37cb",
  storageBucket: "dragon-news-d37cb.appspot.com",
  messagingSenderId: "433007735417",
  appId: "1:433007735417:web:52d3fb5f87a3cdb1e61aa8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;