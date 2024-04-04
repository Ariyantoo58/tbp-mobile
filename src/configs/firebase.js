// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCSMMUgybouusIP6Tr3lBJW7PHopUFMirA",
	authDomain: "tdp-mobile.firebaseapp.com",
	projectId: "tdp-mobile",
	storageBucket: "tdp-mobile.appspot.com",
	messagingSenderId: "100827456165",
	appId: "1:100827456165:web:301f373a6d76437678e34c",
	measurementId: "G-6VMXEDE3Z9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, "default");
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, db, storage, auth };
