import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyC-cop8ycByJtvx8ECLYSss4hGbYQpREr8",
  authDomain: "bicicleta-eletronica-6dc4d.firebaseapp.com",
  projectId: "bicicleta-eletronica-6dc4d",
  storageBucket: "bicicleta-eletronica-6dc4d.appspot.com",
  messagingSenderId: "451506492817",
  appId: "1:451506492817:web:142a891b4243f080eff630"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
