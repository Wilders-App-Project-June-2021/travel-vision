import React, { useState, useEffect } from "react";
import Weather from "./Weather";
import axios from "axios";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


function WeatherInfo(props) {

    const getDate = (date)=>{
        let d = new Date(date * 1000);
        let day = new Intl.DateTimeFormat('en', { weekday: 'short' }).format(d);
        let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        return `${day} ${da}`
    }


    const convertKelvin=(temperature)=>{
      return parseInt(Math.abs(temperature -273.15))
    }

  return (
    <div>
      {props.weatherInfo ? props.weatherInfo.map((item, index) => (
        <Weather
          key={index}
          id={index}
          header={item.weather[0].main}
          date={getDate(item.dt)}
          icon={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
          alt={`${item.weather[0].description}`}
          tempMin={`${convertKelvin(item.temp.min)}°`}
          tempMax={`${convertKelvin(item.temp.max)}°`}
        />
      ))
      :
      <Loader
          type="Plane"
          color="#00BFFF"
          height={100}
          width={100}
          radius={500}  
      />
    } 
    </div>
  );
}

export default WeatherInfo;