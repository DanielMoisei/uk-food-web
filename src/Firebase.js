import firebase from "firebase/app"
import "firebase/database"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBRX5wA-4TeuNCkpIPh2tB8_beUQ1g8rm4",
  authDomain: "ukfoodweb-18077.firebaseapp.com",
  databaseURL: "https://ukfoodweb-18077-default-rtdb.firebaseio.com",
  projectId: "ukfoodweb-18077",
  storageBucket: "ukfoodweb-18077.appspot.com",
  messagingSenderId: "1088355223358",
  appId: "1:1088355223358:web:6c62ef8fd6d607db9bce6f",
  measurementId: "G-YXRD82QG33",
};

export default firebase.initializeApp(firebaseConfig);

// var db = firebase.database()
// var dbRef = db.ref("Producers");
