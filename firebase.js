// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn_E9L9JYJeM0caKYBLJdGAk7bL-mSClc",
  authDomain: "fun-planet-95e02.firebaseapp.com",
  databaseURL: "https://fun-planet-95e02-default-rtdb.firebaseio.com",
  projectId: "fun-planet-95e02",
  storageBucket: "fun-planet-95e02.appspot.com",
  messagingSenderId: "881612924662",
  appId: "1:881612924662:web:a7434558984b17920a6ed7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
