// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";

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
  appId: "1:442708898422:web:4c4f1f4a0865a533a42557",
  measurementId: "G-F0YFHX6JCP"
};


// Initialize Firebase
let app;
try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  if (error.code === 'app/duplicate-app') {
    app = getApp(); // Use the already initialized app
  } else {
    throw error; // Re-throw other errors
document.getElementById("submit").addEventListener("click", function() {
  set(ref(db, 'users/' + document.getElementById("username").value), {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  });

  alert("User login successfully!");
  window.location.href = "index.html";
});
document.getElementById("submit").addEventListener("click", function(e) {
  set(ref(db, 'users/' + document.getElementById("username").value), {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  });

  alert("User login successfully!");
  window.location.href = "index.html";
  });

  }
}
