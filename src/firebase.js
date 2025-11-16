// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrf7nkJvSleFYKgB1PN4en7Mu62SjvFzg",
  authDomain: "funny-shopping.firebaseapp.com",
  projectId: "funny-shopping",
  storageBucket: "funny-shopping.firebasestorage.app",
  messagingSenderId: "630945281513",
  appId: "1:630945281513:web:125b8262895bb442104778",
  measurementId: "G-0DG322TQ76",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
