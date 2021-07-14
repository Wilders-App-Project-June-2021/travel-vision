import "./Styles.css";
import "./Weather.css";
import React from "react";

function Weather(props) {
  return (
    <div className="Weather weather-container" id={props.key}>
        <div className="day-weather">
            <div className="weather-header">
                {props.header}
            </div>
            <div className="weather-div">
                <div className="weather-detail">
                    {props.date}
                </div>
                <div className="weather-detail">
                    <img  className="weather-icon" src={props.icon} alt={props.alt} />
                </div>
                <div className="weather-detail pink">
                    {props.tempMax}
                </div>
                <div className="weather-detail blue">
                    {props.tempMin} 
                </div>
            </div>
        </div>
    </div>
  );
}

export default Weather;