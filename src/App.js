import React from "react";
import './App.css';
import Axios from "axios"
import Cover from "./components/Cover"
import Greeting from "./components/Greeting"
import News from "./components/News";
import { useState } from 'react';
import Main from "./components/Main"

function App() {

  const [cities, setCities]= useState("")
  const [country, setCountry]= useState("-")
  const [cityInfo,setCityInfo]= useState("")
  const [error,setError]=useState(false)

  const getCityInfo=(e)=>{
    e.preventDefault()
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cities},${country}&appid=3bc542e8c782c67d428b24c156b77cab`)
    .then((result) =>{ 
        setCityInfo(result.data)
        setError(false)
      })
    .catch(error => {
      setError(true)
    })
} 

const handleCountryInput =(e)=>{
  setCountry(e.target.value)
  console.log(country)
}

const handleCityinput =(e)=>{
  setCities(e.target.value)
  console.log(cities)
}


  return (
    <div className="App">

     { !cityInfo&&<Cover 
      getCityInfo={getCityInfo}
      handleCityinput={handleCityinput}
      handleCountryInput={handleCountryInput}
      error={error}
      />}
      
      {cityInfo&&<Greeting/>}
      {/* <News/> */}
  

    {/* Main page code */}
      <div>
        <h1>___________Main.js____________</h1>
        <Main />
      </div>


    </div>
  );
}



export default App;
