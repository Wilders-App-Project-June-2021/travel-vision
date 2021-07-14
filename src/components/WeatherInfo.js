import "./Styles.css";
import "./Weather.css";
import React, { useState, useEffect } from "react";
import Weather from "./Weather";
import axios from "axios";

// formatting: https://openweathermap.org/api/hourly-forecast#list/
// full url: https://api.openweathermap.org/data/2.5/forecast?q=Madrid,ES&appid=process.env.EACT_APP_WEATHER_API

function WeatherInfo(props) {
  const [weatherInfo, setWeatherInfo] = useState(null);
  

   useEffect(()=>{
     axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude=hourly,minutely,current,alerts&appid=${process.env.REACT_APP_API_KEY}`)
    // axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude=hourly,minutely,alerts&appid=3bc542e8c782c67d428b24c156b77cab`)
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
          header={item.weather[0].description}
          date={getDate(item.dt)}
          icon={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
          alt={`${item.weather[0].description}`}
          tempMin={convertKelvin(item.temp.min)}
          tempMax={convertKelvin(item.temp.max)}
        />
      ))} 
    </div>
  );
}

export default WeatherInfo;


// Example of data (x40)
// I picked item.list[21] because it's the middle of each day

// "list":[{

//   "dt":1625940000,
//   "main":{"temp":308.91,"feels_like":306.49,"temp_min":308.91,"temp_max":310.47,"pressure":1014,"sea_level":1014,"grnd_level":940,"humidity":15,"temp_kf":-1.56},
//   "weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],
//   "clouds":{"all":0},
//   "wind":{"speed":5.47,"deg":269,"gust":7.4},
//   "visibility":10000,"pop":0,
//   "sys":{"pod":"d"},
//   "dt_txt":"2021-07-10 18:00:00"
//   }]

//   "city":{

//   "id":3117735,
//   "name":"Madrid",
//   "coord":{"lat":40.4165,"lon":-3.7026},
//   "country":"ES",
//   "population":1000000,
//   "timezone":7200,
//   "sunrise":1625892814,
//   "sunset":1625946384
//   }
// Icons: https://openweathermap.org/weather-conditions#How-to-get-icon-URL