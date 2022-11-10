import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnqac_1IB_lc_H1fQPdRWxEwrC55TWmow",
  authDomain: "react-house-marketplace-4962a.firebaseapp.com",
  projectId: "react-house-marketplace-4962a",
  storageBucket: "react-house-marketplace-4962a.appspot.com",
  messagingSenderId: "801816998030",
  appId: "1:801816998030:web:9d6312c590961e648fd9df"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore();