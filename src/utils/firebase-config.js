import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZWaMx04mF-tozA0714kdftS4AqemZAB4",
  authDomain: "netflix-clone-bbe34.firebaseapp.com",
  projectId: "netflix-clone-bbe34",
  storageBucket: "netflix-clone-bbe34.appspot.com",
  messagingSenderId: "279591925610",
  appId: "1:279591925610:web:39de506e84931679c55713",
  measurementId: "G-5ZEQ1T1D07"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);