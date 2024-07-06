// src/firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCODgpLERh0hG3qwHgVbcNKoME96ms0cTc",
    authDomain: "hardware-project-app-8a263.firebaseapp.com",
    projectId: "hardware-project-app-8a263",
    storageBucket: "hardware-project-app-8a263.appspot.com",
    messagingSenderId: "404431530365",
    appId: "1:404431530365:web:58bc9dd27a1f9003d00414"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

//const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = firebase.auth();

export { auth, db };
