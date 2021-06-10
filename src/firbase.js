
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDjiCOrTyVeQpPBfKcHdcKIA59447O9ZY8",
    authDomain: "disneyplusc-38c5f.firebaseapp.com",
    projectId: "disneyplusc-38c5f",
    storageBucket: "disneyplusc-38c5f.appspot.com",
    messagingSenderId: "773272700427",
    appId: "1:773272700427:web:58e91c52bae9b9e270290e",
    measurementId: "G-VD6BJS0LKB"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };

export default db;


