import React from "react";
import './App.css';
import Axios from "axios"
import Cover from "./components/Cover"
import Greeting from "./components/Greeting"

function App() {
  return (
    <div className="App">
      <Cover/>
      <Greeting/>
    </div>
  );
}

export default App;
