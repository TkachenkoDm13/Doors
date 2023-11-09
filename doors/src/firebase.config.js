// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { gerStorage, getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgzFXY4IZ2v35EQu0BCLw8FA7v-2TC7yA",
  authDomain: "doors-c1a89.firebaseapp.com",
  projectId: "doors-c1a89",
  storageBucket: "doors-c1a89.appspot.com",
  messagingSenderId: "265458893895",
  appId: "1:265458893895:web:78455e331b9db757efdd62",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
