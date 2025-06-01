// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY
  ,
  authDomain: "mern-estate-2c09c.firebaseapp.com",
  projectId: "mern-estate-2c09c",
  storageBucket: "mern-estate-2c09c.firebasestorage.app",
  messagingSenderId: "530459121017",
  appId: "1:530459121017:web:0a0bcf02bfd860bf38cba8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);