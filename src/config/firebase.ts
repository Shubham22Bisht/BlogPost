// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqTFPSo2vj-6_SEJqY4PRa6msFDKE8PZ0",
  authDomain: "reactapp-395d7.firebaseapp.com",
  projectId: "reactapp-395d7",
  storageBucket: "reactapp-395d7.appspot.com",
  messagingSenderId: "685957221888",
  appId: "1:685957221888:web:8beee3c457328ab3a852e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const provider= new GoogleAuthProvider();
export const db=getFirestore(app);