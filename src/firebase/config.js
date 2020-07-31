import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBKokwZbSeUs15BnszG804go2MaFccwZpk",
    authDomain: "firegram-2aa58.firebaseapp.com",
    databaseURL: "https://firegram-2aa58.firebaseio.com",
    projectId: "firegram-2aa58",
    storageBucket: "firegram-2aa58.appspot.com",
    messagingSenderId: "987742965496",
    appId: "1:987742965496:web:37ab2d4a5c687363e1350d",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
