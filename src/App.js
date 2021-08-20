import React from "react";
import './App.css';
import axios from "axios"
import Cover from "./components/Cover"
import { useState, useEffect } from 'react';
import Main from "./components/Main"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Header from "./components/Header";
import Footer from "./components/Footer"
import  qs from "querystring"; 
import { useQuery } from "react-query";

function App() {

  const [cities, setCities]= useState("")
  const [countryName,setCountryName] = useState("")
  const [countryCode, setCountryCode]= useState("")
  const [cityInfo,setCityInfo]= useState("")
  const [error,setError]=useState(false)
  const [longitude,setLongitude]= useState("")
  const [latitude,setLatitude]=useState("")
  const [render,setRender]=useState(false)
  const [citiesList,setCitiesList]=useState("")
  const [fullCitiesList,setFullCitiesList]=useState("")
  const [countryCodeInput,setCountryCodeInput] = useState("")
  const [cityInput,setCityInput] = useState("")
  const [countryNameInput,setCountryNameInput] = useState("")
 

  
  const getCityInfo=()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cities},${countryCode}&appid=${process.env.REACT_APP_API_KEY}`)
    .then((result) =>{ 
        
        setCityInfo(result.data)
        setLatitude(Number(result.data.coord.lat).toFixed(2))
        setLongitude(Number(result.data.coord.lon).toFixed(2))
        setFullCitiesList("")
        setCountryCodeInput("")
        setCountryNameInput("")
        setError(false)
        setRender(true)
        
      })

    .catch(error => {
      setError(true)
    })
  }

  useEffect(()=>{
     if(cities.length>0){getCityInfo()}
  },[cities])


  const countryInputHandler=(e)=>{
    let countryCodeInfo = e.target.value
    const index = e.target.selectedIndex
    let countryNameInfo = e.target.childNodes[index].getAttribute('id')
    console.log(e.target.childNodes[index].getAttribute('id'))
    setCountryCodeInput(countryCodeInfo)
    setCountryNameInput(countryNameInfo)
    
  }

  const cityInputHandler = (e) =>{
    let cityName = e.target.value ?
     e.target.value.replace(e.target.value[0],e.target.value[0].toUpperCase()) 
     : ""
    let secondWordIndex = cityName.indexOf(" ")
    
    if(secondWordIndex !== -1 && cityName.length > secondWordIndex+1){
      let secondLetter = cityName[secondWordIndex+1] 
      cityName = cityName.replace(secondLetter, secondLetter.toUpperCase())
    }
    setCityInput(cityName)
    
  }





   

  
  const submitInfo = (e) => {
    e.preventDefault()
    setCountryCode(countryCodeInput)
    setCountryName(countryNameInput)
    setCities(cityInput)
    setTimeout(()=> {
      e.target[0].value = ""
      e.target[1].value = ""
    },1500)
    // getCityInfo()
  }




  // CURRENCY
  // const getCountryInfo = () => {
    // };
    
    useEffect(() => {
     if(countryCodeInput !==  ""){
        setCitiesList("")
        axios
        .get(`https://api.countrystatecity.in/v1/countries/${countryCodeInput}/cities`,
        {headers: {"X-CSCAPI-KEY": `${process.env.REACT_APP_API_GEO_INFO}`}})
          .then((result) => setFullCitiesList(result.data))
          .catch((error) => console.log("error", error))
      }
  }, [countryCodeInput]);

  // Props for Country Info
    // countryLanguage={countryInfo.iso2}
    // countryCurrency={countryInfo.currency}
    // currencySymbol={countryInfo.currency_symbol}
    // flagEmoji1={countryInfo.emojiU}
    // flagEmoji2={countryInfo.emoji}

// api.openweathermap.org/data/2.5/forecast/daily?q={cityName name},{state code}&cnt={cnt}&appid={API key}

// TRAVEL PERK
// useEffect(()=>{

//   axios.get(`https://sandbox.travelperk.com/travelsafe/guidelines?location_type=country_code&location=IT
//   `,
//     {headers: {"Api-Version" : `1`,
//                 "Authorization": `ApiKey ${process.env.REACT_APP_API_CORONA_TEST1}`,
//                 "Accept-Language": 'en'
                
//     }})
//       .then((result) => console.log(result))
//       .catch((error) => console.log("error", error))

// },[])





// result.data['access_token']
  return (
    <div className="App">

    {!render && 
      <Cover 
          error={error}
          cities={cities}
          countryInputHandler={countryInputHandler}
          cityInputHandler={cityInputHandler}
          submitInfo={submitInfo}
          citiesList={citiesList}
          fullCitiesList={fullCitiesList}
          countryCodeInput={countryCodeInput}
          cityInput={cityInput}
      />
    }
      <div className="container">

        {render && 
        <Header
          countryName={countryName}
          error={error}
          countryInputHandler={countryInputHandler}
          cityInputHandler={cityInputHandler}
          submitInfo={submitInfo}

          citiesList={citiesList}
          fullCitiesList={fullCitiesList}
          cityInput={cityInput}
          countryCodeInput={countryCodeInput}
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
        {render &&
         <Footer />
         }
      </div>
    </div>
  );
}

export default App;