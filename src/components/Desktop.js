import axios from "axios";
import { useState, useEffect } from 'react';
import React from "react";
import Loader from "react-loader-spinner";
import "./vivify.min.css";
import "./Desktop.css";
import nations from "../data/nations";
import Greeting from "./Greeting";
import WeatherInfo from "./WeatherInfo";
import NewsList from "./NewsList";
// import Currency from "./Currency";
import HealthInfo from "./HealthInfo";


const Desktop = (props)=>{

    const tabClasses=[
        {news : true} ,
        {weather : false} ,
        {currency : false} ,
        {health : false} 
       ]

    const [activeTab,setActiveTab]= useState([...tabClasses])
    const [weatherInfo, setWeatherInfo] = useState(null)
    const [cities, setCities]= useState("")
    const [countryName,setCountryName] = useState("")
    const [countryCode, setCountryCode]= useState("-")
    const [cityInfo,setCityInfo]= useState("")
    const [error,setError]=useState(false)
    const [longitude,setLongitude]= useState("")
    const [latitude,setLatitude]=useState("")
    const [countryInfo, setCountryInfo] = useState("");
    const [theGreeting, setTheGreeting] = useState("Hello");

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
    
    }
    
    const handleCountryInput =(e)=>{
      setCountryCode(e.target.value)
      let index = e.target.selectedIndex
      setCountryName(e.target.childNodes[index].getAttribute('id')) 
    } 
    
    const handleCityinput =(e)=>{
        setCities(e.target.value)
    }
    
    const getCountryInfo = () => {
        axios.get(`https://api.countrystatecity.in/v1/countries/${countryCode}`,
        {headers: {"X-CSCAPI-KEY": `${process.env.REACT_APP_API_GEO_INFO}`}})
          .then((result) => setCountryInfo(result.data))
          .catch((error) => console.log("error", error))
    };
    useEffect(() => {
        getCountryInfo();
    }, []);


    useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely,current,alerts&appid=${process.env.REACT_APP_API_KEY}`)
          .then((weather) => {
            setWeatherInfo(weather.data)
          })
          .catch((error) => {
            console.log(error);
          })
      },[])

    const getActive = (e)=>{
        let copy =[...tabClasses]
        copy[0].news=false
        const id = e.target.id;
        const a = copy.find((item)=> item.hasOwnProperty(id) )
        a[e.target.id] = !a[e.target.id]
        setActiveTab(copy)
    }



    return (

        <div className="container-desktop">
        
            <div className="header-desktop">
                <div className="header-filter">
                    <div className="logo-desktop">
                        <img className="logo-img-desktop" src="../img/landscape.png" alt="" />
                        <b className="title-desktop">Travel Vision</b>
                    </div>
                </div>
            </div>
            
            <div className="input-box-desktop">
                New destination? &nbsp;

                <form onSubmit={(e)=>getCityInfo(e)}>
                    <select className="input-country-desktop" id="country" placeholder="Country" required onChange={(e)=>handleCountryInput(e)}>
                        <option value="">Select a Country</option>
                        {nations.map((country,i)=> <option id={country.name} key={i} value={country.code}> {country.name} </option>)}
                    </select>
                    <input className="input-city-desktop" type="text" id="city" placeholder="Enter a City" required onChange={(e)=> handleCityinput(e)}></input>
                    {props.error? <h1>Sorry we couldn't find this city, try again</h1>:null}
                    <button className="go" type="submit">Go</button>
                </form>
            </div>
            
            {/* <div className="greeting">
                {weatherInfo ? <Greeting
                cities={props.cities}
                countryName={props.countryName}
                timeZone={weatherInfo.timezone}
                countryCode={props.countryCode}
                />
                :
                <Loader
                type="Plane"
                color="#00BFFF"
                height={100}
                width={100}
                radius={500}  
                />}
            </div> */}

            <div className="Tabs-desktop">
                <div id="tabs-container-desktop">
                <button className={activeTab[0].news? "tab-div-desktop active":"tab-div-desktop"} id="news" onClick={(e) => getActive(e)} id="news-tab">
                    <h3 className="tab-text-desktop" id="news">News</h3>
                </button>
                <button className={activeTab[1].weather? "tab-div-desktop active":"tab-div-desktop"} id="weather" onClick={(e) => getActive(e)} id="weather-tab">
                    <h3 className="tab-text-desktop" id="weather">Weather</h3>
                </button>
                <button className={activeTab[2].currency? "tab-div-desktop active":"tab-div-desktop"} id="currency" onClick={(e) => getActive(e)} id="currency-tab">
                    <h3 className="tab-text-desktop" id="currency">Currency</h3>
                </button>
                <button className={activeTab[3].health? "tab-div-desktop active":"tab-div-desktop"} id="health" onClick={(e) => getActive(e)} id="health-tab">
                    <h3 className="tab-text-desktop" id="health">Health Watch</h3>
                </button>
                </div>
            </div>
            
            <div className="main-components-desktop">

                {activeTab[1].weather &&
                <WeatherInfo 
                    weatherInfo={weatherInfo.daily}
                    latitude={latitude}
                    longitude={longitude}
                />}
                {activeTab[0].news && countryName &&
                <NewsList
                    countryName={countryName}
                />}
                {activeTab[3].health &&
                <HealthInfo
                    countryName={countryName}
                />}

            </div>

            <div className="footer-wrapper-desktop">
                <div className="footer-desktop">
                        <span className="made-by-desktop">Made by <a href="http://wildcodeschool.com" target="new">Wild Code School</a> Students</span>
                        <div className="students-desktop">
                            <div className="student-box-desktop">
                                <a href="" target="new"><img class="footer-img-desktop" src="" alt="" /></a>
                                <p className="names-desktop">Lorianne</p>
                            </div>
                            <div className="student-box-desktop">
                                <a href="" target="new"><img class="footer-img-desktop" src="" alt="" /></a>
                                <p className="names-desktop">Salvatore</p>
                            </div>
                            <div className="student-box-desktop">
                                <a href="" target="new"><img class="footer-img-desktop" src="" alt="" /></a>
                                <p className="names-desktop">Natalie</p>
                            </div>
                        </div>
                        <span className="small">@ 2021 Travel Vision</span>
                </div>
                <div className="flight-link-desktop">Book a flight</div>
            </div>
        
        </div>

        )
}

export default Desktop