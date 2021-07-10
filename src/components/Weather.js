import "../styles.css";
import React from "react";

function Weather(props) {
  return (
    <div className="Weather weather-container" id={props.key}>

        <div class="weather-div">
            <div class="day-weather">
                {props.day}
            </div>
            <div class="day-weather box">
                <img src={props.icon} alt="" />
            </div>
            <div class="day-weather pink">
                {props.temp_max}
            </div>
            <div class="day-weather blue">
                {props.temp_min} 
            </div>
        </div>

    </div>
  );
}

export default Weather;