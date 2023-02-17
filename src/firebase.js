import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAI-YcdKG6okY8EYF9oG4YnSfftsc_rqIs",
  authDomain: "chat-9e278.firebaseapp.com",
  projectId: "chat-9e278",
  storageBucket: "chat-9e278.appspot.com",
  messagingSenderId: "315417302918",
  appId: "1:315417302918:web:3606c7fe6ce40779383e07"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth();
export const storage = getStorage();
export const db = getFirestore()