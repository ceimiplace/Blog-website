import firebase from "firebase/app";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyeAD8yPKCEl_ILAXpp-O6--oLv9Bmyrs",
  authDomain: "blog-posts-cac1e.firebaseapp.com",
  projectId: "blog-posts-cac1e",
  storageBucket: "blog-posts-cac1e.appspot.com",
  messagingSenderId: "74201504181",
  appId: "1:74201504181:web:b6f927b231b7b5fb5221fc",
  measurementId: "G-P7Y9R2ZPRJ",
};

firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();
export { projectFirestore };
