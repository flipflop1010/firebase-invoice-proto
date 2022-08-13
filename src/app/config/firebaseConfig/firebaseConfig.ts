// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig: object = {
  apiKey: "AIzaSyD4fRhKCx61S272mHhKnETrJK_2P5Ucs3k",
  authDomain: "indusplat-fire.firebaseapp.com",
  projectId: "indusplat-fire",
  storageBucket: "indusplat-fire.appspot.com",
  messagingSenderId: "730375256041",
  appId: "1:730375256041:web:20cbae07a5eaadad0d7d78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const firebaseDB = getFirestore(app)


export const customerRef = collection(firebaseDB, 'customers')
export const itemRef = collection(firebaseDB, 'items')