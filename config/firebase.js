
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'




const firebaseConfig = {
  apiKey: "AIzaSyAO3qCG326BVWokLUiVD6KNyN1C_M9EAT0",
  authDomain: "fir-movie-9ba57.firebaseapp.com",
  projectId: "fir-movie-9ba57",
  storageBucket: "fir-movie-9ba57.appspot.com",
  messagingSenderId: "189499792305",
  appId: "1:189499792305:web:1cf71cb1fe827444e47b90",
  measurementId: "G-9WJYP70WNN"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app)

export const googleProvider = new GoogleAuthProvider()

export const db = getFirestore(app);