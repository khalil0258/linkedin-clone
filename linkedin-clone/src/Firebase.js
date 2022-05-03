// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwAzYuL9KMNHneKEMtVpgzGHfwSsV9Uu8",
  authDomain: "linkedin-clone-b7b13.firebaseapp.com",
  projectId: "linkedin-clone-b7b13",
  storageBucket: "linkedin-clone-b7b13.appspot.com",
  messagingSenderId: "255639491308",
  appId: "1:255639491308:web:c2742aff9812c3b6ec4bc9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const provider = new GoogleAuthProvider();

export { app, auth, provider };
