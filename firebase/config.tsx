// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//add these three stuf
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//add export
export const firebaseConfig = {
  apiKey: "AIzaSyC6dGTs0b1KtFNif2WSN4kYBvW4A53cH4E",
  authDomain: "scissor-942c5.firebaseapp.com",
  projectId: "scissor-942c5",
  storageBucket: "scissor-942c5.appspot.com",
  messagingSenderId: "115183899305",
  appId: "1:115183899305:web:58e3771d07ff35782bcfb8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//add these three too
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
