import React from "react"
import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"
import Homepage from "./Components/Homepage"


function App() {
  return (
    <div id="body">
      <Sidebar />
      <div id="content">
        <Header />
        <Homepage />
      </div>
    </div>
  );
}

export default App;
