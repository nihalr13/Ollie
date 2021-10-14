// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnXtdpxXg1eYEyGJ3xLKF0C2VnYqTQLNc",
  authDomain: "ollie-70ff1.firebaseapp.com",
  projectId: "ollie-70ff1",
  storageBucket: "ollie-70ff1.appspot.com",
  messagingSenderId: "133461552512",
  appId: "1:133461552512:web:900329aa159323de632565",
  measurementId: "G-1W7ZXJ43V9"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
  }
}

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);
  
export default Firebase;