// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKIq6NBJe83-x3j8IrRZ1vdiiHVjpvAzU",
  authDomain: "bookishbazaar-94d85.firebaseapp.com",
  projectId: "bookishbazaar-94d85",
  storageBucket: "bookishbazaar-94d85.appspot.com",
  messagingSenderId: "297313328425",
  appId: "1:297313328425:web:7acbd9795666631009eb38",
  measurementId: "G-TCZFHBN4Y4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const storage = getStorage(app);
export {  app, firebaseConfig,  storage };