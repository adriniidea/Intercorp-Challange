// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUG9CaK12QXJds1FjDLTxeFbSDBWuAIjc",
  authDomain: "incorp-challange.firebaseapp.com",
  projectId: "incorp-challange",
  storageBucket: "incorp-challange.appspot.com",
  messagingSenderId: "8088726721",
  appId: "1:8088726721:web:c7a01988517b5c5795f840"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)