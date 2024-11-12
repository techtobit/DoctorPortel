// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
// const firebaseConfig = {
//  apiKey: process.env.REACT_APP_apiKey,
//  authDomain: process.env.REACT_APP_authDomain,
//  projectId: process.env.REACT_APP_projectId,
//  storageBucket: process.env.REACT_APP_storageBucket,
//  messagingSenderId: process.env.REACT_APP_messagingSenderId,
//  appId: process.env.REACT_APP_appId
// };
const firebaseConfig = {
  apiKey: "AIzaSyCwVriScF6jLqDnyYZ-T_QGpV4Uc4l5uBw",
  authDomain: "doctorsportel.firebaseapp.com",
  projectId: "doctorsportel",
  storageBucket: "doctorsportel.firebasestorage.app",
  messagingSenderId: "267136311419",
  appId: "1:267136311419:web:cca183fa38c5cc4e4882de"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;