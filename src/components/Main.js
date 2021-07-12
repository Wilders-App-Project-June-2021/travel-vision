import React, {useState}from "react";
import "./Main.css";
import Greeting from "./Greeting";
import WeatherInfo from "./WeatherInfo";
// import Currency from "./Currency";
// import Health from "./Health";
// import Footer from "./Footer"


/* TAB BUTTONS ACTIVE/INACTIVE */
// const tabs = document.getElementsByClassName("tab-div");
// for (let i = 0; i < tabs.length; i++) {
//   tabs[i].addEventListener("click", function() {
//   const current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }

// const tabs = document.getElementsByClassName("tab-div");
// tabs.map((item, index)=>{
//   tabs[index].addEventListener("click", function() {
//     const current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active" })
// })



const Main = ()=>{

    const [activeTab,setActiveTab]= useState(false)

    const getActive = (e)=>{
        console.log(e.target.id)
        setActiveTab(!activeTab)
    }

    return (
    <div className="container">

        <Greeting />

        

        <div className="Tabs">
            <div className="tabs-container">
            <button className={!activeTab? "tab-div active":"tab-div"} id="news-tab" onClick={(e) => getActive(e)}>
                <h3 className="tab-text" id="news-tab">News</h3>
            </button>
            <button className={activeTab? "tab-div active":"tab-div"} id="weather-tab" onClick={(e) => getActive(e)}>
                <h3 className="tab-text">Weather</h3>
            </button>
            <button className={activeTab? "tab-div active":"tab-div"} id="currency-tab" onClick={(e) => getActive(e)}>
                <h3 className="tab-text">Currency</h3>
            </button>
            <button className={activeTab? "tab-div active":"tab-div"} id="health-tab" onClick={(e) => getActive(e)}>
                <h3 className="tab-text">Health Watch</h3>
            </button>
            </div>
        </div>

        <div className="main-components">

        <WeatherInfo />

        </div>

        {/* <Footer /> */}

    </div>
    )
}

export default Main