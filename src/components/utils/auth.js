import { initializeApp } from "firebase/app";

import { getAuth, signInWithPopup, signOut } from "firebase/auth";

import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyAO5baWuz_bWrPtlEv90t6BKVCByBoarHg",
  authDomain: "cgc-seller.firebaseapp.com",
  projectId: "cgc-seller",
  storageBucket: "cgc-seller.appspot.com",
  messagingSenderId: "506905444763",
  appId: "1:506905444763:web:c0dd9a3e1fb6232d73613e",
  measurementId: "G-8T1742T2TM",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

const handleAuth = (handleEmail) => {
  signInWithPopup(auth, provider).then((data) => {
    localStorage.setItem("email", data.user.email);
    localStorage.setItem("avatar", data.user.photoURL);
    handleEmail(data.user);
  });
};

signOut(auth, provider)

export { handleAuth };
