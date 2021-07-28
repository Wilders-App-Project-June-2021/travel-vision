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

  
  const getCityInfo=(e)=>{
   
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
      setLatitude(null)
      setLongitude(null)
    })
    e && e.preventDefault() 
    // if(e){e.preventDefault()} else {null}
  }

  useEffect(()=>{
    // setLongitude("")
    // setLatitude("")
    // getCityInfo()
    
    
     if(cities.length>0){getCityInfo()}
     

  },[cities || latitude && longitude])


// const handleCountryInput =(e)=>{
//   setCountryCode(e.target.value)
//   let index = e.target.selectedIndex
//   setCountryName(e.target.childNodes[index].getAttribute('id')) 
//   } 

//   const handleCityinput =(e)=>{
//     let reviewedCity = e.target.value ? e.target.value[0].toUpperCase() : ""
//     for(let i= 1; i<e.target.value.length ; i++){
//       reviewedCity+= e.target.value[i].toLowerCase()
//     }
//     setCities(reviewedCity)
//   }

   let countryCodeInfo = ""
   let countryNameInfo = ""
   let city = ""
  const countryInputHandler=(e)=>{
     countryCodeInfo = e.target.value
    const index = e.target.selectedIndex
    countryNameInfo = e.target.childNodes[index].getAttribute('id')
  }

  

  const cityInputHandler = (e) =>{
    city= e.target.value ? e.target.value[0].toUpperCase() : ""
    for(let i= 1; i<e.target.value.length ; i++){
      city+= e.target.value[i].toLowerCase()
    }
  }

  const submitInfo = (e) => {
    e.preventDefault()
    // setCities("")
    // setCountryCode("")
    // setCountryName("")
    // setLatitude(null)
    // setLongitude(null)
    setCountryCode(countryCodeInfo)
    setCountryName(countryNameInfo)
    setCities(city)
    getCityInfo()
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
          // getCityInfo={getCityInfo}
          // handleCityinput={handleCityinput}
          // handleCountryInput={handleCountryInput}
          error={error}

          countryInputHandler={countryInputHandler}
          cityInputHandler={cityInputHandler}
          submitInfo={submitInfo}
      />}
      
      <div className="container">

        {render && 
        <Header
          // getCityInfo={getCityInfo}
          // handleCityinput={handleCityinput}
          // handleCountryInput={handleCountryInput}
          countryName={countryName}
          error={error}


          countryInputHandler={countryInputHandler}
          cityInputHandler={cityInputHandler}
          submitInfo={submitInfo}
        />}

        {render &&
          <Main
            latitude={latitude}
            longitude={longitude}
            cities={cities}
            countryCode={countryCode}
            countryName={countryName}
          />}

        {
        render &&
         <Footer />
         }

      </div>

    </div>
  );
}

export default App