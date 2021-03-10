import firebase from "firebase/app"
import "firebase/database"
import "firebase/storage"

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
