import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC6tcyDEFx0OLdv94A_5lRdtduYWUKfcOc",
    authDomain: "crwn-db-944c9.firebaseapp.com",
    databaseURL: "https://crwn-db-944c9.firebaseio.com",
    projectId: "crwn-db-944c9",
    storageBucket: "",
    messagingSenderId: "464358503471",
    appId: "1:464358503471:web:275e32231027ce87"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;