// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQxsyoH_zAwxdalqgEPJQrp-ntlBR7fsM",
  authDomain: "we-were-natural.firebaseapp.com",
  databaseURL: "https://we-were-natural-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "we-were-natural",
  storageBucket: "we-were-natural.appspot.com",
  messagingSenderId: "162197668988",
  appId: "1:162197668988:web:ac1deea2010c038974b5f9",
  measurementId: "G-07D43BJ0D0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);