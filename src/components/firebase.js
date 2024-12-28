// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABo7BukH5lCiDg9q6PuMk59LpX-BXgWao",
  authDomain: "react-groot.firebaseapp.com",
  projectId: "react-groot",
  storageBucket: "react-groot.firebasestorage.app",
  messagingSenderId: "269302797986",
  appId: "1:269302797986:web:7ca5af5bf8d10b0274e9fb",
  measurementId: "G-8868JFLKYC",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
