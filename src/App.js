import React from "react";
import './App.css';
import axios from "axios"
import Cover from "./components/Cover"
import { useState, useEffect } from 'react';
import Main from "./components/Main"
import Loader from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Header from "./components/Header";
import Footer from "./components/Footer"

function App() {

  const [cities, setCities]= useState("")
  const [countryName,setCountryName] = useState("")
  const [countryCode, setCountryCode]= useState("-")
  const [cityInfo,setCityInfo]= useState("")
  const [error,setError]=useState(false)
  const [longitude,setLongitude]= useState("")
  const [latitude,setLatitude]=useState("")
  const [render,setRender]=useState(false)

  
  const getCityInfo=()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cities},${countryCode}&appid=${process.env.REACT_APP_API_KEY}`)
    .then((result) =>{ 
        setCityInfo(result.data)
        setError(false)
        setLatitude(Number(result.data.coord.lat).toFixed(2))
        setLongitude(Number(result.data.coord.lon).toFixed(2))
        setRender(true)
      })

    .catch(error => {
      setError(true)
      // setLatitude(null)
      // setLongitude(null)
    })
  }

  useEffect(()=>{
     if(cities.length>0){getCityInfo()}
    
  },[cities ])


   let countryCodeInfo = ""
   let countryNameInfo = ""
   let city = ""
  const countryInputHandler=(e)=>{
     countryCodeInfo = e.target.value
    const index = e.target.selectedIndex
    countryNameInfo = e.target.childNodes[index].getAttribute('id')
  }

  const cityInputHandler = (e) =>{
    city = e.target.value ? e.target.value.replace(e.target.value[0],e.target.value[0].toUpperCase()) : ""
    let secondWordIndex = city.indexOf(" ")
   if(secondWordIndex !== -1 && city.length > secondWordIndex+1) {
      let secondLetter = city[secondWordIndex+1] 
    city = city.replace(secondLetter, secondLetter.toUpperCase())
  }
    
    }
  

  const submitInfo = (e) => {
    e.preventDefault()
    setCountryCode(countryCodeInfo)
    setCountryName(countryNameInfo)
    setCities(city)
    e.target[0].value = ""
    e.target[1].value = ""
  }

  // CURRENCY
  // const getCountryInfo = () => {
  //   axios.get(`https://api.countrystatecity.in/v1/countries/${countryCode}`,
  //   {headers: {"X-CSCAPI-KEY": `${process.env.REACT_APP_API_GEO_INFO}`}})
  //     .then((result) => setCountryInfo(result.data))
  //     .catch((error) => console.log("error", error))
  // };
  
  // useEffect(() => {
  //   getCountryInfo();
  // }, []);

  // Props for Country Info
    // countryLanguage={countryInfo.iso2}
    // countryCurrency={countryInfo.currency}
    // currencySymbol={countryInfo.currency_symbol}
    // flagEmoji1={countryInfo.emojiU}
    // flagEmoji2={countryInfo.emoji}

// api.openweathermap.org/data/2.5/forecast/daily?q={city name},{state code}&cnt={cnt}&appid={API key}


  return (
    <div className="App">

    { !render && 
      <Cover 
          error={error}
          cities={cities}
          countryInputHandler={countryInputHandler}
          cityInputHandler={cityInputHandler}
          submitInfo={submitInfo}
      />}
      
      <div className="container">

        {render && 
        <Header
          countryName={countryName}
          error={error}
          countryInputHandler={countryInputHandler}
          cityInputHandler={cityInputHandler}
          submitInfo={submitInfo}
        />}

        {render  &&
          <Main
            latitude={latitude}
            longitude={longitude}
            cities={cities}
            countryCode={countryCode}
            countryName={countryName}
            error={error}
          />
          
            }

        {
        render &&
         <Footer />
         }

      </div>

    </div>
  );
}

export default App