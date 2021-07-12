import React from "react";
import "./Main.css";
import "./Styles.css";
import Greeting from "./Greeting";
import WeatherInfo from "./WeatherInfo";
// import Currency from "./Currency";
// import Health from "./Health";
// import Footer from "./Footer"


/* TAB BUTTONS ACTIVE/INACTIVE */
const tabs = document.getElementsByClassName("tab-div");
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function() {
  const current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


const Main = ()=>{

    return (
    <div className="container">

        <Greeting />

        <div className="Tabs">
            <div className="tabs-container">
            <button className="tab-div active" id="news-tab" onClick={() => console.log()}>
                <h3 className="tab-text">News</h3>
            </button>
            <button className="tab-div" id="weather-tab" onClick={() => console.log()}>
                <h3 className="tab-text">Weather</h3>
            </button>
            <button className="tab-div" id="currency-tab" onClick={() => console.log()}>
                <h3 className="tab-text">Currency</h3>
            </button>
            <button className="tab-div" id="health-tab" onClick={() => console.log()}>
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