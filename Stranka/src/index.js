import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

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

// Inicializácia Firebase aplikácie
const app = initializeApp(firebaseConfig);

// Funkcia na zápis údajov do databázy
function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase(app); // Prepojenie databázy s inicializovanou aplikáciou
  const reference = ref(db, 'users/' + userId); // Vytvorenie referencie na konkrétnu cestu

  set(reference, {
    username: name,
    email: email,
    profile_picture: imageUrl
  }).then(() => {
    console.log("Údaje boli úspešne uložené.");
  }).catch((error) => {
    console.error("Chyba pri ukladaní údajov:", error);
  });
}

// Zavolanie funkcie s konkrétnymi údajmi
writeUserData("apapa", "Jakub", "jakubney27@gmail.com", "myimageUrl");