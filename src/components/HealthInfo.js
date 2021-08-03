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
        if(covidData.data.Countries){
          const filtered = covidData.data.Countries.filter((item) => item.CountryCode === props.countryCode)
          console.log(covidData.data)
          setHealthInfo(filtered[0]);
        }
        setApiResponse(false)
        axios
        .get(`https://newsapi.org/v2/everything?qInTitle=(${props.countryName}%20AND%20coronaVirus)&from=${props.getDate()}pageSize=1&language=en&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_NEWS}`)
        .then((covidNews)=>{
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
  }, [props.countryName]);

  const notAvailable = (path => path === undefined ?  "caching in progress" : path)
  
  return (
    <div>
      {!apiResponse ?
          <Health
            id={healthInfo && healthInfo.ID}
            countryName={props.countryName}
            countryCode={props.countryCode}
            confirmed={healthInfo && notAvailable(healthInfo.TotalConfirmed)}
            newConfirmed={healthInfo && notAvailable(healthInfo.NewConfirmed)}
            recovered={healthInfo && notAvailable(healthInfo.TotalRecovered)}
            newRecovered={healthInfo && notAvailable(healthInfo.NewRecovered)}
            deaths={healthInfo && notAvailable(healthInfo.TotalDeaths)}
            newDeaths={healthInfo && notAvailable(healthInfo.NewDeaths)}
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
