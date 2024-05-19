import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "kalichat-bf3f9.firebaseapp.com",
  projectId: "kalichat-bf3f9",
  storageBucket: "kalichat-bf3f9.appspot.com",
  messagingSenderId: "820365312462",
  appId: "1:820365312462:web:fca567abd811a9f0d6ab9f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()