// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP11vBC66syv2ndBjy46YrLPdOUTLeGGU",
  authDomain: "ema-john-simple-3106a.firebaseapp.com",
  projectId: "ema-john-simple-3106a",
  storageBucket: "ema-john-simple-3106a.appspot.com",
  messagingSenderId: "1043881880302",
  appId: "1:1043881880302:web:6e4b220606eea2d28ee1ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;