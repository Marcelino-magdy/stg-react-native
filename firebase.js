// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import { getFirestore, collection, getDocs} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIRs-ht0fnkv1hUNZibzbACX-5w_n6E7Y",
  authDomain: "stg1-cdbc9.firebaseapp.com",
  projectId: "stg1-cdbc9",
  storageBucket: "stg1-cdbc9.appspot.com",
  messagingSenderId: "394708078387",
  appId: "1:394708078387:web:39efb47d0fef71145ef846",
  measurementId: "G-LTRHXKC5HQ"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);

