// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import for Firebase Auth if needed

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "nestify-realestate.firebaseapp.com",
  projectId: "nestify-realestate",
  storageBucket: "nestify-realestate.appspot.com",
  messagingSenderId: "361231667209",
  appId: "1:361231667209:web:c08957cada7812f4e228d8",
  measurementId: "G-9E63E1592P", // Optional if you're not using analytics
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Optionally initialize Firebase services
export const auth = getAuth(app); // For authentication
