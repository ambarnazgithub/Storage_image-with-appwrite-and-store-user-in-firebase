import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";
import {
  getDatabase,
  set,
  ref,push,onChildAdded,
} from "https://www.gstatic.com/firebasejs/11.3.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAAv-kqMbYdPryhc8wktLJVi2TZ7GOs0k8",
  authDomain: "blog-app-23ca2.firebaseapp.com",
  projectId: "blog-app-23ca2",
  storageBucket: "blog-app-23ca2.firebasestorage.app",
  messagingSenderId: "219472455514",
  appId: "1:219472455514:web:8706d8e7c6637cf5007563"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export {
  auth,
  createUserWithEmailAndPassword,
  database,
  ref,
  set,
  onAuthStateChanged,push,onChildAdded
};
