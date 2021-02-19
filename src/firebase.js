import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAGGlpJyZWLvGC5YoATsiu3vFJPTGC0tSo",
  authDomain: "tinder-clone-b10b3.firebaseapp.com",
  projectId: "tinder-clone-b10b3",
  storageBucket: "tinder-clone-b10b3.appspot.com",
  messagingSenderId: "340085628084",
  appId: "1:340085628084:web:57b9c6a28196ba8a3e0be1",
  measurementId: "G-Q7VXF4KNL5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
