import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyA-nJDGgpEKtNxxgUVV9YcR1WRLA3jUILc",
  authDomain: "new-level-project.firebaseapp.com",
  projectId: "new-level-project",
  storageBucket: "new-level-project.firebasestorage.app",
  messagingSenderId: "359977061859",
  appId: "1:359977061859:web:6362e2a4660c615181e4d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)