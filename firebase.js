// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);