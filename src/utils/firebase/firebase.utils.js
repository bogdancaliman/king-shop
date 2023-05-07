import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVkv4x-FXOTegpgIm6SXkOgb49RPqeVqA",
  authDomain: "king-shop-db-8f40e.firebaseapp.com",
  projectId: "king-shop-db-8f40e",
  storageBucket: "king-shop-db-8f40e.appspot.com",
  messagingSenderId: "611271018722",
  appId: "1:611271018722:web:8a38b9276f8f2f5ba236bb",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);