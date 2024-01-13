// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUR7a-ppDkIiY_DW5eghxXw_AYvuXigZo",
  authDomain: "shopcart-22.firebaseapp.com",
  projectId: "shopcart-22",
  storageBucket: "shopcart-22.appspot.com",
  messagingSenderId: "768333567951",
  appId: "1:768333567951:web:339f56086ad25a608b24ba",
  measurementId: "G-6S6YQ0NQ37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);