// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuPb6_V5Wna72peloEWDt-F54JuDWqDqs",
  authDomain: "spotifytracker-402103.firebaseapp.com",
  projectId: "spotifytracker-402103",
  storageBucket: "spotifytracker-402103.appspot.com",
  messagingSenderId: "934533305030",
  appId: "1:934533305030:web:07d58c0d7d9dfd0a3bfdc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);