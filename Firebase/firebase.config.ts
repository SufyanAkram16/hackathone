// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrfPXnavHU1AjcBb1y8w6AlGeEVQrjoI0",
  authDomain: "event-planner-2cf40.firebaseapp.com",
  projectId: "event-planner-2cf40",
  storageBucket: "event-planner-2cf40.appspot.com",
  messagingSenderId: "838328490883",
  appId: "1:838328490883:web:868a266d4512fa148134b6",
  measurementId: "G-SFX5NWYM0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {db,storage, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged}