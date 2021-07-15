import React, { useState, useEffect } from "react";
import "./Health.css";
import Health from "./Health";
import axios from "axios";

function HealthInfo(props) {
  const [healthInfo, sethealthInfo] = useState([]);
  const [healthNews, sethealthNews] = useState([]);

  const getData = () => {
    axios
      .get(`https://api.covid19api.com/summary`)
      .then((response) => {
        const filtered = response.data.Countries.filter((item) => item.Country === props.countryName)
        sethealthInfo(filtered[0]);
      })
      .catch((error) => {
        console.log(error);
      });

      axios.get(`https://newsapi.org/v2/everything?qInTitle=(${props.countryName}%20AND%20coronaVirus)&pageSize=1&language=en&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_NEWS}`)
      .then((response)=>{
        sethealthNews(response.data.articles[0])
    })
    .catch((error) => {
        console.log(error);
      });
   
  };
 
  // https://newsapi.org/v2/top-headlines?country=de&category=health&q=coronavirus&language=en&apiKey=862d686e64564ff38a69a93c176de68e


  useEffect(() => {
    getData();
  }, []);


  return (
    <div>
      {!healthInfo.length > 0 && !healthNews.length > 0 ?
            <Health
            key={healthInfo.ID}
            countryName={props.countryName}
            confirmed={healthInfo.TotalConfirmed}
            newConfirmed={healthInfo.NewConfirmed}
            recovered={healthInfo.TotalRecovered}
            newRecovered={healthInfo.NewRecovered}
            deaths={healthInfo.TotalDeaths}
            newDeaths={healthInfo.NewDeaths}
            title={healthNews.title}
            description={healthNews.description}
            url={healthNews.url}
            image={healthNews.urlToImage}
          /> :null

          }
    </div>
  );
}

export default HealthInfo;