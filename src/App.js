import React from "react";
import './App.css';
import axios from "axios"
import Cover from "./components/Cover"
import { useState, useEffect } from 'react';
import Main from "./components/Main"
import Loader from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  const [cities, setCities]= useState("")
  const [countryName,setCountryName] = useState("")
  const [countryCode, setCountryCode]= useState("-")
  const [cityInfo,setCityInfo]= useState("")
  const [error,setError]=useState(false)
  const [longitude,setLongitude]= useState("")
  const [latitude,setLatitude]=useState("")
  const [countryInfo, setCountryInfo] = useState("");
  const [currency, setCurrency] = useState("");
  
  const getCityInfo=(e)=>{
    e.preventDefault()
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cities},${countryCode}&appid=${process.env.REACT_APP_API_KEY}`)
    .then((result) =>{ 
        setCityInfo(result.data)
        setError(false)
        setLatitude(Number(result.data.coord.lat).toFixed(2))
        setLongitude(Number(result.data.coord.lon).toFixed(2))
      })

    .catch(error => {
      setError(true)
    })
    // if(e){e.preventDefault()} else {null}
  }

  useEffect(()=>{
    // setLongitude("")
    // setLatitude("")
    // getCityInfo()
  },[])

const handleCountryInput =(e)=>{
  setCountryCode(e.target.value)
  let index = e.target.selectedIndex
  setCountryName(e.target.childNodes[index].getAttribute('id')) 
  } 

  const handleCityinput =(e)=>{
    setCities(e.target.value)
  }

  // CURRENCY
  const getCurrency = async (e) => {
    let countryInfoUrl = "https://api.countrystatecity.in/v1/countries/";
    e.preventDefault();
    try {
      const axiosRes = await axios({
        url: countryCode,
        method: "get",
        baseURL: countryInfoUrl,
        headers: {
          "X-CSCAPI-KEY": process.env.REACT_APP_API_GEO_INFO
        }
      })
      let currency = axiosRes.data.currency;
      setCurrency(currency);
      console.log(currency);
    } catch(err) {
      console.log(err);
    }
  }

  const getCountryInfo = (e) => {
    e.preventDefault();
    axios.get(`https://api.countrystatecity.in/v1/countries/`,
    {headers: {"X-CSCAPI-KEY": `${process.env.REACT_APP_API_GEO_INFO}`}})
      .then((result) => {
      console.log("country info here?",result.data),
      setCountryInfo(result.data.currency)
      
      
      })
      .catch((error) => console.log("error", error))
  };

  const submitHandler = (e) => {
    getCityInfo(e);
    getCurrency(e);
  }

  // useEffect(() => {
  //   getCountryInfo();
  // }, []);
   
  // Props for Country Info
    // countryLanguage={countryInfo.iso2}
  //  countryCurrency={countryInfo.currency}
    // currencySymbol={countryInfo.currency_symbol}
    // flagEmoji1={countryInfo.emojiU}
    // flagEmoji2={countryInfo.emoji}

// api.openweathermap.org/data/2.5/forecast/daily?q={city name},{state code}&cnt={cnt}&appid={API key}


  return (
    <div className="App">

    { !cityInfo&&<Cover 
          getCityInfo={getCityInfo}
          handleCityinput={handleCityinput}
          handleCountryInput={handleCountryInput}
          submitHandler={submitHandler}
          error={error}
      />}
      
      <div className="container">

        {latitude && <Header
        //  getCityInfo={getCityInfo}
          handleCityinput={handleCityinput}
          handleCountryInput={handleCountryInput}
          countryName={countryName}
          error={error}
        />}

        {(longitude && latitude && countryCode) && countryName &&
          <Main
            latitude={latitude}
            longitude={longitude}
            cities={cityInfo.name}
            countryCode={countryCode}
            countryName={countryName}
            currency={currency}
          />}

        {/* <Main 
          latitude={latitude}
          longitude={longitude}
        /> */}
        {/* {countryCode && 
        <NewsList
          countryName={countryName}
        />} */}
        {latitude && <Footer />}
        {/* <Route exact path="/currency" render= {()=><Currency currency={countryInfo.currency} />}></Route> */}
      </div>

    </div>
  );
}

export default App