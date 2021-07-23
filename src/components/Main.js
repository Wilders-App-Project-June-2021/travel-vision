import React, {useState,useEffect}from "react";
import axios from "axios";
import "./Main.css";
import "./vivify.min.css"
import Greeting from "./Greeting";
import WeatherInfo from "./WeatherInfo";
import NewsList from "./NewsList";
// import Currency from "./Currency";
import HealthInfo from "./HealthInfo";
import Footer from "./Footer"
import Header from "./Header"
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


const Main = (props)=>{

    const tabClasses=[
        {news : true} ,
        {weather : false} ,
        {currency : false} ,
        {health : false} 
       ]

    const [activeTab,setActiveTab]= useState([...tabClasses])
    const [weatherInfo, setWeatherInfo] = useState(null)


    useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude=hourly,minutely,current,alerts&appid=${process.env.REACT_APP_API_KEY}`)
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
    <div className="container container-desktop">


        {/* <Header /> */}

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
      />
         }

        

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
                weatherInfo={weatherInfo.daily}
                latitude={props.latitude}
                longitude={props.longitude}
                />
            }
            {activeTab[0].news && props.countryName && 
                <NewsList
                countryName={props.countryName}
                />}
            {activeTab[3].health && 
                <HealthInfo
                countryName={props.countryName}
                />}

        </div>
       
        {/* <Footer /> */}

    </div>
    )
}

export default Main