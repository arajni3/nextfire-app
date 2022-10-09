import firebase from "firebase/app";
import 'firebase/auth';
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAWEmZW7nPt94RNw3o7uDRP8_9qDUvEFVg",
    authDomain: "nextfire-app-beb50.firebaseapp.com",
    projectId: "nextfire-app-beb50",
    storageBucket: "nextfire-app-beb50.appspot.com",
    messagingSenderId: "817246100446",
    appId: "1:817246100446:web:811a7e32fbd74da7435b4f",
    measurementId: "G-9CFLMXSM8Q"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
const googleAuthProvider = new firebase.auth().GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();