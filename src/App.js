import React from "react";
import './App.css';
import Axios from "axios"
import Cover from "./components/Cover"
import Main from "./components/Main"

function App() {
  return (
    <div className="App">
      <Cover/>



{/* Main page code */}
      <div>
        <h1>___________Main.js____________</h1>
        <Main />
      </div>


    </div>
  );
}

export default App;
