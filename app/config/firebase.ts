// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-MJUO1I7iUfIG6G57X7Rj1V9QfEHARFU",
  authDomain: "expense-tracker-f63c2.firebaseapp.com",
  projectId: "expense-tracker-f63c2",
  storageBucket: "expense-tracker-f63c2.firebasestorage.app",
  messagingSenderId: "667290540809",
  appId: "1:667290540809:web:c302163fd9a6986a2191d8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const firestore = getFirestore(app);
