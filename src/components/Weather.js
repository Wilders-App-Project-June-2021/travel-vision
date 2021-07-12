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
                    {props.day}
                </div>
                <div className="weather-detail">
                    <img src={props.icon} alt={props.description} />
                </div>
                <div className="weather-detail pink">
                    {props.temp_max}
                </div>
                <div className="weather-detail blue">
                    {props.temp_min} 
                </div>
            </div>
        </div>
    </div>
  );
}

export default Weather;