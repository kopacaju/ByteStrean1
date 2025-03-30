// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY0U5myySZ9NTuYirfoeFWgNNLkBqFzqo",
  authDomain: "bytestream-b25c7.firebaseapp.com",
  databaseURL: "https://bytestream-b25c7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bytestream-b25c7",
  storageBucket: "bytestream-b25c7.firebasestorage.app",
  messagingSenderId: "442708898422",
  appId: "1:442708898422:web:5b3c1cedb2098dcca42557",
  measurementId: "G-F1Q36EN2HJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);