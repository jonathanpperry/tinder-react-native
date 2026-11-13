import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtwi9KD4_yUxXEPB-gUEcbMstCjupy2Hs",
  authDomain: "tinder-clone-333101.firebaseapp.com",
  projectId: "tinder-clone-333101",
  storageBucket: "tinder-clone-333101.appspot.com",
  messagingSenderId: "651950064632",
  appId: "1:651950064632:web:c6347087bdfa7826a80c0d",
};

// Initialize firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
