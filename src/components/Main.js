import React, {useState}from "react";
import "./Main.css";
import Greeting from "./Greeting";
import WeatherInfo from "./WeatherInfo";
import NewsList from "./NewsList";
// import Currency from "./Currency";
import HealthInfo from "./HealthInfo";
// import Footer from "./Footer"



const Main = (props)=>{

    const tabClasses=[
        {news : true} ,
        {weather : false} ,
        {currency : false} ,
        {health : false} 
       ]

    const [activeTab,setActiveTab]= useState([...tabClasses])

    const getActive = (e)=>{
        let copy =[...tabClasses]
        copy[0].news=false
        const id = e.target.id;
        const a = copy.find((item)=> item.hasOwnProperty(id) )
        a[e.target.id] = !a[e.target.id]
        setActiveTab(copy)
    }

    return (
    <div className="container">

        <Greeting
        cities={props.cities}
        countryName={props.countryName}
         />

        

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
        latitude={props.latitude}
        longitude={props.longitude}
        />
    }
        {activeTab[0].news && <NewsList
        countryName={props.countryName}
        />}
        {activeTab[3].health && <HealthInfo
        countryName={props.countryName}/>}

        </div>

        {/* <Footer /> */}

    </div>
    )
}

export default Main