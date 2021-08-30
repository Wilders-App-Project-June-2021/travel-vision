import React, {useState,useEffect}from "react";
import axios from "axios";
import "./Main.css";
import "./vivify.min.css"
import Greeting from "./Greeting";
import WeatherInfo from "./WeatherInfo";
import NewsList from "./NewsList";
import Currency from "./Currency.js";
import HealthInfo from "./HealthInfo";
import Contact from "./Contact";
import About from "./About";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


const Main = (props)=>{

    const tabClasses=[
        {news : true} ,
        {weather : false} ,
        {currency : false} ,
        {health : false} ,
        {contact : false} ,
        {about : false} 
       ]

    const [activeTab,setActiveTab]= useState([...tabClasses])
    const [weatherInfo, setWeatherInfo] = useState(null)
    const [timeZone,setTimeZone] = useState("")
    const [countryName,setCountryName]= useState(props.countryName)


    useEffect(()=>{
        axios
        .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude=hourly,minutely,current,alerts&appid=${process.env.REACT_APP_API_KEY}`)
          .then((weather) => {

            setWeatherInfo(weather.data)
            setTimeZone(weather.data.timezone)
          })
          .catch((error) => {
            console.log(error);
            setWeatherInfo(null)

          })
      },[props.latitude && props.longitude])

    const getActive = (e)=>{
        let copy =[...tabClasses]
        copy[0].news=false
        const id = e.target.id;
        const a = copy.find((item)=> item.hasOwnProperty(id) )
        a[e.target.id] = !a[e.target.id]
        setActiveTab(copy)
    }

    const getDate = () => {
        let today= new Date
    return `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
    }

    const getOlderDate = () => {
        let today= new Date
    return `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()-3}`
    }

    return (
    <div className="main-wrapper">

        {weatherInfo ?
            <Greeting
                cities={props.cities}
                countryName={props.countryName}
                timeZone={timeZone}
                countryCode={props.countryCode}
            />
            :
            <Loader
                type="Plane"
                color="#00BFFF"
                height={100}
                width={100}
                radius={500}  
            />
        }

        
        {props.error && !weatherInfo ?
        <h1>Sorry we couldn't find any information about {props.cities} in {props.countryName}, try again</h1>
        :<span>
        <div className="Tabs">
            <div className="tabs-container">
            <button className={activeTab[0].news? "tab-div active":"tab-div"} id="news" onClick={(e) => getActive(e)}>
                <h3 className="tab-text" id="news">News</h3>
            </button>
            <button className={activeTab[1].weather? "tab-div active":"tab-div"} id="weather" onClick={(e) => getActive(e)}>
                <h3 className="tab-text" id="weather">Weather</h3>
            </button>
            <button className={activeTab[2].currency? "tab-div active":"tab-div"} id="currency" onClick={(e) => getActive(e)}>
                <h3 className="tab-text" id="currency" >Currency</h3>
            </button>
            <button className={activeTab[3].health? "tab-div active":"tab-div"} id="health" onClick={(e) => getActive(e)}>
                <h3 className="tab-text" id="health">Health Watch</h3>
            </button>
            </div>
        </div>

         <div className="main-components">
        

            {activeTab[1].weather &&
                <WeatherInfo 
                weatherInfo={weatherInfo}
                latitude={props.latitude}
                longitude={props.longitude}
                />
            }
            {activeTab[0].news  && 
                <NewsList
                countryName={props.countryName}
                cities={props.cities}
                getDate={getDate}
                getOlderDate={getOlderDate}
                />
            }
            {activeTab[2].currency  && 
                <Currency
                countryName={props.countryName}
                countryCode={props.countryCode}
                
                />}

            {activeTab[3].health && 
                <HealthInfo
                countryName={props.countryName}
                countryCode={props.countryCode}
                getDate={getDate}
                getOlderDate={getOlderDate}
                />
            }

            {activeTab[4].contact && <Contact />}

            {activeTab[5].about && <About />}
            </div>

       </span> }
       <div className="contact-div">
        <button className={activeTab[4].contact? "contact-button-active contact-button":"contact-button"} id="contact" onClick={(e) => getActive(e)}>
            Contact
        </button>
        <button className={activeTab[5].about? "contact-button-active contact-button":"contact-button"} id="about" onClick={(e) => getActive(e)}>
            About
        </button>
       </div>
    </div>
            
    )
}

export default Main