import "./Styles.css";
import "./Weather.css";
import React, { useState, useEffect } from "react";
import Weather from "./Weather";
import axios from "axios";

// formatting: https://openweathermap.org/api/hourly-forecast#list/
// full url: https://api.openweathermap.org/data/2.5/forecast?q=Madrid,ES&appid=process.env.EACT_APP_WEATHER_API



const cityName = "Madrid";
const countryCode = "ES";

function WeatherInfo() {
  const [weatherArray, setweatherArray] = useState({});

  const fetchWeatherInfo = () => {
    const key = "process.env.EACT_APP_WEATHER_API";

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName},${countryCode}&appid=${key}`
      )
      .then((weather) => {
        setweatherArray(weather.data);
        console.log(weatherArray, weather);
      })
      .catch((error) => {
        console.log(error);
      });
  };


    const getDate = (date)=>{
        let d = new Date(date);
        let day = new Intl.DateTimeFormat('en', { weekday: 'short' }).format(d);
        let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        return `${day} ${da}`
    }


  return (
    <div>
      {!weatherArray&&weatherArray.map((item, index) => (
        <Weather
          item={item}
          key={index}

          city={item.city.name}
          temp={item.list[21].main.temp}
          feelsLike={item.list[21].main.feels_like}

          header={item.list[21].weather[0].main}
          date={getDate(item.list[21].dt_txt)}
          icon={`"https://openweathermap.org/img/wn/${item.list[21].weather[0].icon}.png"`}
          alt={`"item.list[21].weather[0].description"`}
          tempMin={item.list[21].main.temp_min}
          tempMax={item.list[21].main.temp_max}
        />
      ))}
      <button onClick={() => fetchWeatherInfo()}>Call Info</button>
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