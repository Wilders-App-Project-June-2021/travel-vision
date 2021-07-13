import React from "react";
import './App.css';
import axios from "axios"
import Cover from "./components/Cover"
import Greeting from "./components/Greeting"
import News from "./components/News";
import { useState } from 'react';
import Main from "./components/Main"

function App() {

  const [cities, setCities]= useState("")
  const [countryName,setCountryName] = useState("")
  const [countryCode, setCountryCode]= useState("-")
  const [cityInfo,setCityInfo]= useState("")
  const [error,setError]=useState(false)
  const [longitude,setLongitude]= useState("")
  const [latitude,setLatitude]=useState("")

  const getCityInfo=(e)=>{
    e.preventDefault()
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cities},${countryCode}&appid=${process.env.REACT_APP_API_KEY}`)
    .then((result) =>{ 
      console.log(result)
        setCityInfo(result.data)
        setError(false)
        setLatitude(Number(result.data.coord.lat).toFixed(2))
        setLongitude(Number(result.data.coord.lon).toFixed(2))
      })
    .catch(error => {
      setError(true)
    })
} 

// api.openweathermap.org/data/2.5/forecast/daily?q={city name},{state code}&cnt={cnt}&appid={API key}

const handleCountryInput =(e)=>{
  setCountryCode(e.target.value)
  // setCountryName(e.target) to be completed

  console.log(e)
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
      
      {(longitude && latitude) &&
      <Main
      latitude={latitude}
      longitude={longitude}
      cities={cities}
      countryCode={countryCode}
      />}

      {/* <Main 
      latitude={latitude}
      longitude={longitude}
      /> */}
      {/* <News/> */}

    </div>
  );
}



export default App;
