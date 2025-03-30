import { initializeApp } from './firebase/app';

const firebaseConfig = {
  // Vaša konfigurácia Firebase
};
const app = initializeApp(firebaseConfig);
console.log('Firebase inicializované:', app);
