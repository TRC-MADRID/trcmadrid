// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOQQGQGA-xOT5UyBl4upndj5KI3IOHPtQ",
  authDomain: "trc-web-ac9b7.firebaseapp.com",
  projectId: "trc-web-ac9b7",
  storageBucket: "trc-web-ac9b7.appspot.com",
  messagingSenderId: "188719940611",
  appId: "1:188719940611:web:a04d04bd78010903e0fa36",
  measurementId: "G-FSNJETSD8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);