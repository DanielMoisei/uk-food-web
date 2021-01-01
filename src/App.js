import React, {useState, useEffect} from "react"
import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"
import Homepage from "./Components/Homepage"
import firebase from "./Firebase.js"

var db = firebase.database()
var dbRef = db.ref("Producers")

function App() {
  const [producers, setProducers] = useState([])

  useEffect(() => {
    dbRef.once("value", snap => setProducers(snap.val()))
  }, []);

  console.log(producers)
  return (
    <div id="body">
      <Sidebar />
      <div id="content">
        <Header />
        <Homepage />
        {producers.map(producer => <p key={producer.name}>{producer.name}</p>)}
      </div>
    </div>
  );
}

export default App;
