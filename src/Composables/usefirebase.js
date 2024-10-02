// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy5nVuBX2l_7_aZVHuoUQESOtfmVrdzgM",
  authDomain: "company-directory-316ca.firebaseapp.com",
  projectId: "company-directory-316ca",
  storageBucket: "company-directory-316ca.appspot.com",
  messagingSenderId: "871313667354",
  appId: "1:871313667354:web:a80325aa143e6c9f98a8a3",
  measurementId: "G-6TMPXWJ49Q"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);