import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import "firebase/firestore";
import { collection, getFirestore } from 'firebase/firestore';
import { env } from 'process';

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};


const app = initializeApp(clientCredentials);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()

export const db = getFirestore(app);

export const userCollections = collection(db, "users")
export const locationCollections = collection(db, "locations")
export const menuCollections = collection(db, 'menu')
