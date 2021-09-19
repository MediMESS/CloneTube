// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9uCmgPanAof32X6M7T64N3taYySpmhNA",
  authDomain: "clone-tube-9ea0b.firebaseapp.com",
  databaseURL: "https://clone-tube-9ea0b-default-rtdb.firebaseio.com",
  projectId: "clone-tube-9ea0b",
  storageBucket: "clone-tube-9ea0b.appspot.com",
  messagingSenderId: "537854193312",
  appId: "1:537854193312:web:a5e6409fc5c62453f923c5",
  measurementId: "G-E9T8D4J472",
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);
const analytics = getAnalytics(db);

export default db;
