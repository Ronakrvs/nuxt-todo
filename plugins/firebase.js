// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";


import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNOD8w0L24ZzYlhOD7bHMFVNEyoO89tNo",
  authDomain: "auth-54104.firebaseapp.com",
  databaseURL: "https://auth-54104-default-rtdb.firebaseio.com",
  projectId: "auth-54104",
  storageBucket: "auth-54104.appspot.com",
  messagingSenderId: "12944488785",
  appId: "1:12944488785:web:a3dd542962f0bd25883b70",
  measurementId: "G-J0WR3ELLWJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;