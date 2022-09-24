import fb from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseApp = fb.initializeApp({
    apiKey: "AIzaSyAHdetcHO0jJiAMSWXwE8wJ2chwzEtNlqE",
    authDomain: "barter4better.firebaseapp.com",
    projectId: "barter4better",
    storageBucket: "barter4better.appspot.com",
    messagingSenderId: "472484487274",
    appId: "1:472484487274:web:25f082f06ce30acc2aea13",
    measurementId: "G-KC93NGTGNK"
});

const db = firebaseApp.firestore();
const auth = fb.auth();
const storage = fb.storage();

export { db, auth, storage, fb };