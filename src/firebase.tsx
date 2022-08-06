import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDP6EFl3VXQ1bpxr7R2bDNO-kJ8AazKNs8",
    authDomain: "invoice-proto-dipayan.firebaseapp.com",
    projectId: "invoice-proto-dipayan",
    storageBucket: "invoice-proto-dipayan.appspot.com",
    messagingSenderId: "148184968134",
    appId: "1:148184968134:web:7a1cf249c10d74a3af20c7",
    measurementId: "G-L0KYG3KYBK"
  };

  export const firebaseApp = initializeApp(firebaseConfig);
  export const db = getFirestore;