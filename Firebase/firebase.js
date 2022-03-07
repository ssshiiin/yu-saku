import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBys5aHjPQaucnrvx5MHS1QJW0f0MuHhIU",
  authDomain: "yusa-ku.firebaseapp.com",
  projectId: "yusa-ku",
  storageBucket: "yusa-ku.appspot.com",
  messagingSenderId: "519090742719",
  appId: "1:519090742719:web:b921a623fa1f9e6ad2ed0a",
  measurementId: "G-J0CRDBT15Z",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
