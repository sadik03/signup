// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD8naNINUZ6wktJOiqeP2aRuDWWkAZ6ds",
  authDomain: "sports-24e33.firebaseapp.com",
  projectId: "sports-24e33",
  storageBucket: "sports-24e33.appspot.com",
  messagingSenderId: "972056713768",
  appId: "1:972056713768:web:b78ec31453c2ea2564f31d",
  measurementId: "G-2GGLTR057X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(app);

export default app;