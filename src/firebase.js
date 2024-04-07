// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBveE6kWh6k_yWkZQZT_9QzRiUwF37acQo",
  authDomain: "recipe-finder-f5af4.firebaseapp.com",
  projectId: "recipe-finder-f5af4",
  storageBucket: "recipe-finder-f5af4.appspot.com",
  messagingSenderId: "603389774493",
  appId: "1:603389774493:web:2c25229576f94c39baa274",
  measurementId: "G-HJD33DNNTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);
export {auth,db}