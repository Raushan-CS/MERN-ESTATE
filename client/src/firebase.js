// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-50653.firebaseapp.com",
  projectId: "mern-estate-50653",
  storageBucket: "mern-estate-50653.appspot.com",
  messagingSenderId: "513284303545",
  appId: "1:513284303545:web:ca679872e1529929b6c968"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);