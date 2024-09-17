import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'task-manager-250ca.firebaseapp.com',
  projectId: 'task-manager-250ca',
  storageBucket: 'task-manager-250ca.appspot.com',
  messagingSenderId: '821692746705',
  appId: process.env.FIREBASE_APP_ID,
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
