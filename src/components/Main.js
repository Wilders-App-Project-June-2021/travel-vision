import React from "react";
import "./Main.css";
import "./Styles.css";
import Greeting from "./Greeting";
// import Weather from "./Weather";
// import Currency from "./Currency";
// import Health from "./Health";
// import Footer from "./Footer"

const Main = ()=>{

    return (
    <div className="container">

        <Greeting />

        <div className="Tabs">
            <div className="tabs-container">
            <div className="div news-tab">
                <h3 className="tab-text">News</h3>
            </div>
            <div className="div weather-tab">
                <h3 className="tab-text">Weather</h3>
            </div>
            <div className="div currency-tab">
                <h3 className="tab-text">Currency</h3>
            </div>
            <div className="div health-tab">
                <h3 className="tab-text">Health Watch</h3>
            </div>
            </div>
        </div>
        
        <div className="main-components">

        {/* {Components /} */}

        </div>

        {/* <Footer /> */}

    </div>
    )
}

export default Main