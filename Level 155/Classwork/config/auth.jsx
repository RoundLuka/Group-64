// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_xtFrNzZwz6gO-QeH8V4XAnD-aaslnTE",
    authDomain: "group-64.firebaseapp.com",
    projectId: "group-64",
    storageBucket: "group-64.firebasestorage.app",
    messagingSenderId: "820160325483",
    appId: "1:820160325483:web:2547378b080d10ec680e2e",
    measurementId: "G-SNSGHRNJYY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);