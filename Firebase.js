import { initializeApp } from '@react-native-firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzUrG6mSMy50UObXL02q1FL82Vq8d2iBQ",
  authDomain: "learnitauth.firebaseapp.com",
  projectId: "learnitauth",
  storageBucket: "learnitauth.appspot.com",
  messagingSenderId: "267511256656",
  appId: "1:267511256656:web:d245c52f4b18eefa5b2355"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);