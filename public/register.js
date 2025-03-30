import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
// Tvoja Firebase konfigurácia
const firebaseConfig = {
  apiKey: "AIzaSyAY0U5myySZ9NTuYirfoeFWgNNLkBqFzqo",
  authDomain: "bytestream-b25c7.firebaseapp.com",
  databaseURL: "https://bytestream-b25c7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bytestream-b25c7",
  storageBucket: "bytestream-b25c7.appspot.com",
  messagingSenderId: "442708898422",
  appId: "1:442708898422:web:4c4f1f4a0865a533a42557",
  measurementId: "G-F0YFHX6JCP"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

sumbit1.addEventListener("click", (e) => {

  var email = document.getElementById("email1").value;
  var password = document.getElementById("password1").value;
  var username = document.getElementById("username").value;

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

    alert("User registered successfully!");
    // Save user data to the database
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

      alert("Error: " + errorMessage);
      // ..
    });
  });
  