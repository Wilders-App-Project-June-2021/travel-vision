import "./Weather.css";
import React, { useState, useEffect } from "react";
import Weather from "./Weather";
import axios from "axios";


function WeatherInfo(props) {
  const [weatherInfo, setWeatherInfo] = useState(null);
  

   useEffect(()=>{
     axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude=hourly,minutely,current,alerts&appid=${process.env.REACT_APP_API_KEY}`)
       .then((weather) => {
         setWeatherInfo(weather.data.daily);
       })
       .catch((error) => {
         console.log(error);
       });

   },[])

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
      {weatherInfo && weatherInfo.map((item, index) => (
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
      ))} 
    </div>
  );
}

export default WeatherInfo;