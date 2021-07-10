import "../styles.css";
import React from "react";

function Weather(props) {
  return (
    <div className="Weather" id={props.key}>
      <p>
        <b>City:</b> {props.city}
      </p>
      <p>
        <b>Ap Id:</b> {props.apID}
      </p>
      <p>
        <b>Icon:</b> <img src="{props.icon}" alt="" />
      </p>
      <p>
        <b>Temp:</b> {props.temp}
      </p>
      <p>
        <b>Feels like:</b> {props.feelsLike}
      </p>
      <p>
        <b>Temp Min:</b> {props.temp_min}
      </p>
      <p>
        <b>Temp Max:</b> {props.temp_max}
      </p>
    </div>
  );
}

export default Weather;