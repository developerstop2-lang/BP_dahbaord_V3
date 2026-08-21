// Firebase imports
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// Your Firebase config

const firebaseConfig = {
apiKey: "AIzaSyBqelWWPnHlxoCiCvxUk61eJcDV7DywjSw",
  authDomain: "bp-official-c3e79.firebaseapp.com",
  projectId: "bp-official-c3e79",
  storageBucket: "bp-official-c3e79.firebasestorage.app",
  messagingSenderId: "129527615991",
  appId: "1:129527615991:web:a69791ad13113f6ab4def2",
  measurementId: "G-V92WWN0VC7"
};


// Initialize
const app = initializeApp(firebaseConfig);

// Firebase services
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);

export default app;
