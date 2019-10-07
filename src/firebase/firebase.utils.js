import firebase, { initializeApp } from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDFPe5QszjIzGau0tZ96wFv6Ru_0RSs0Ts",
    authDomain: "crown-db-cdc76.firebaseapp.com",
    databaseURL: "https://crown-db-cdc76.firebaseio.com",
    projectId: "crown-db-cdc76",
    storageBucket: "",
    messagingSenderId: "672741105153",
    appId: "1:672741105153:web:d9c42b785a200bbd6caa00",
    measurementId: "G-M5TS4FC9X1"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
