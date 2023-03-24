import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import "firebase/firestore";
import { collection, getFirestore } from 'firebase/firestore';

const clientCredentials = {
  apiKey: "AIzaSyD9xKGViSpeBufoIwCEaVWIYXKBbKQeFWQ",
  authDomain: "chicken-93a5c.firebaseapp.com",
  projectId: "chicken-93a5c",
  storageBucket: "chicken-93a5c.appspot.com",
  messagingSenderId: "33405586872",
  appId: "1:33405586872:web:f935e9021e9112ab6c134d"
};


const app = initializeApp(clientCredentials);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()

export const db = getFirestore(app);

export const userCollections = collection(db, "users")
export const locationCollections = collection(db, "locations")
