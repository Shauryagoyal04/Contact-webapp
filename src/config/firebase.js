// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyAmuOuMSKV9KeOjC-eOtE2YyBLmGmkLiEY",
  authDomain: "vite-contact-25787.firebaseapp.com",
  projectId: "vite-contact-25787",
  storageBucket: "vite-contact-25787.firebasestorage.app",
  messagingSenderId: "70815901705",
  appId: "1:70815901705:web:fe7a5ba7e194252291b0d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);