import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDAD77Si5-XLTxIWidZ8sL3toKLYcDaGWc",
    authDomain: "twitter-clone-ff632.firebaseapp.com",
    databaseURL: "https://twitter-clone-ff632.firebaseio.com",
    projectId: "twitter-clone-ff632",
    storageBucket: "twitter-clone-ff632.appspot.com",
    messagingSenderId: "841786391591",
    appId: "1:841786391591:web:53968b693b8e51fd5f6202",
    measurementId: "G-KQEMZFN8RD"
};
const firebaseApi = firebase.initializeApp(firebaseConfig);

const db = firebaseApi.firestore()

export default db