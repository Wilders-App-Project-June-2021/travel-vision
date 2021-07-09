import React from "react";
import './App.css';
import Axios from "axios"
import Cover from "./components/Cover"
import Greeting from "./components/Greeting"
import News from "./components/News";

function App() {
  return (
    <div className="App">
      <Cover/>
      {/* <Greeting/> */}
      {/* <News/> */}
    </div>
  );
}

export default App;
