// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsCOUDFCKo-TerqDICfpWqrm-HuEVbseQ",
  authDomain: "vespgym.firebaseapp.com",
  projectId: "vespgym",
  storageBucket: "vespgym.appspot.com",
  messagingSenderId: "763664137399",
  appId: "1:763664137399:web:4d14c6f790f967dbdc6132",
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

