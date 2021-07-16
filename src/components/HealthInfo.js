import React, { useState, useEffect } from "react";
import "./Health.css";
import Health from "./Health";
import axios from "axios";
import Loader from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

function HealthInfo(props) {
  const [healthInfo, setHealthInfo] = useState([]);
  const [healthNews, sethealthNews] = useState([]);
  const [apiResponse, setApiResponse] = useState(true)

  const getData = () => {
    axios
      .get(`https://api.covid19api.com/summary`)
      .then((covidData) => {
        axios
        .get(`https://newsapi.org/v2/everything?qInTitle=(${props.countryName}%20AND%20coronaVirus)&pageSize=1&language=en&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_NEWS}`)
        .then((covidNews)=>{
          const filtered = covidData.data.Countries.filter((item) => item.Country === props.countryName)
          setHealthInfo(filtered[0]);
          sethealthNews(covidNews.data.articles[0])
          setApiResponse(false)
         })
      })
      .catch((error) => {
        console.log(error);
      });
  };
 


  useEffect(() => {
    getData();
  }, []);



  return (
    <div>
      {!apiResponse ?
          <Health
            key={healthInfo && healthInfo.ID}
            countryName={props.countryName}
            confirmed={healthInfo && healthInfo.TotalConfirmed}
            newConfirmed={healthInfo && healthInfo.NewConfirmed}
            recovered={healthInfo && healthInfo.TotalRecovered}
            newRecovered={healthInfo && healthInfo.NewRecovered}
            deaths={healthInfo && healthInfo.TotalDeaths}
            newDeaths={healthInfo && healthInfo.NewDeaths}
            title={healthNews && healthNews.title }
            description={healthNews && healthNews.description}
            url={healthNews && healthNews.url}
            image={healthNews && healthNews.urlToImage}
          /> 
        :
        <Loader
          type="Plane"
          color="#00BFFF"
          height={100}
          width={300}
          radius={500}  
        />

          }
    </div>
  );
}

export default HealthInfo;