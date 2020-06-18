import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCryoe2yn100bWZ4l2htlQr2gORjG0IePE",
    authDomain: "crwn-db-c8e0b.firebaseapp.com",
    databaseURL: "https://crwn-db-c8e0b.firebaseio.com",
    projectId: "crwn-db-c8e0b",
    storageBucket: "crwn-db-c8e0b.appspot.com",
    messagingSenderId: "882738952973",
    appId: "1:882738952973:web:5b7418de2af2fbcdcece44"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;