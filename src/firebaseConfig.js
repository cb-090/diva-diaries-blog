// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzKNYGRXZQwwvWgmDJ-NJdLdiPQMNittM",
  authDomain: "basic-blog-844d9.firebaseapp.com",
  projectId: "basic-blog-844d9",
  storageBucket: "basic-blog-844d9.appspot.com",
  messagingSenderId: "276229865572",
  appId: "1:276229865572:web:a01a0808a56fda85d25f71"
};

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)