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

firebase.initializeApp(firebaseConfig);

export default class Firebase {
  static db = firebase.database()

  static updateState(path, setState) {
    Firebase.db.ref(path).once("value", snap => setState(snap.val()))
  }

  static updateStateWithProducts(producerId, setState) {
      Firebase.db.ref("Producers and Products/" + producerId).once("value", snapshot => {
        var productIDsForSelectedProducer = snapshot.val();
        productIDsForSelectedProducer.products.map(id => (Firebase.db.ref("Products/" + id).once("value", snap => {
          setState(state => state.concat( snap.val() ));
        })))
      })
  }

  static findProducerForProduct(productId, setState) {
    Firebase.db.ref("Products/" + productId).once("value", snapshot => {
      var productSnapToGetProducerID = snapshot.val();
      Firebase.db.ref("Producers/" + productSnapToGetProducerID.producerId).once("value", snap => {
        setState(snap.val());
      })
    })
  }

}
