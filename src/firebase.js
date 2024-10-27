// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signOut, signInWithEmailAndPassword} from "firebase/auth/cordova";
import { useId } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDSbs6M1qcEz_v7zM2YlCpgy2VCmNDL6RA",
  authDomain: "netflixproject-23358.firebaseapp.com",
  projectId: "netflixproject-23358",
  storageBucket: "netflixproject-23358.appspot.com",
  messagingSenderId: "587615676779",
  appId: "1:587615676779:web:8ff4b86d46405c5bf3042e",
  measurementId: "G-M6PF7KTMZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const signUp = async (name, email, password) => {
    try {
      
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await addDoc(collection(db , "user"), {
        uid : user.uid,
        name,
        authProvider : "local " ,
        email,
      });
    }catch (error) {
        console.error("Error signing up:", error.message);
     toast.error(error.code.split('/')[1].split('-').join(' '));
      }
    }
const login = async (email ,password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      toast.error(error.code.split('/')[1].split('-').join(' '));
    }
}
const logout = () => {
    signOut(auth);

}
export {auth ,db , logout ,login ,signUp }
   