import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB7z2k-IAAk58SAURzN2l3v1XWxS-2Vqc4",
    authDomain: "eat-now-20b63.firebaseapp.com",
    projectId: "eat-now-20b63",
    storageBucket: "eat-now-20b63.appspot.com",
    messagingSenderId: "727872973954",
    appId: "1:727872973954:web:701b68defb3f2c5e5cd89b",
    measurementId: "G-XFHVTPPX1M"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
