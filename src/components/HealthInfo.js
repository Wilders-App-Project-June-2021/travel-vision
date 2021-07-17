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
        sethealthInfo(filtered[0])
      })
      .catch((error) => {
        console.log(error);
      });

      axios.get(`https://newsapi.org/v2/everything?qInTitle=(${props.countryName}%20AND%20coronaVirus)&pageSize=1&language=en&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_NEWS}`)
      .then((response)=>{
        sethealthNews(response.data.articles[0])
        // console.log(response.data.articles[0])
    })
    .catch((error) => {
        console.log(error);
      });
   
  };
 
  // https://newsapi.org/v2/top-headlines?country=de&category=health&q=coronavirus&language=en&apiKey=862d686e64564ff38a69a93c176de68e


  useEffect(() => {
    getData();
  }, []);

  const notAvailable = (path => path === undefined ?  "caching in progress" : path)
  const  healtComponent=
  <Health
  key={healthInfo.ID}
  countryName={props.countryName}
  confirmed={notAvailable(healthInfo.TotalConfirmed)}
  newConfirmed={notAvailable(healthInfo.NewConfirmed)}
  recovered={notAvailable(healthInfo.TotalRecovered)}
  newRecovered={notAvailable(healthInfo.NewRecovered)}
  deaths={notAvailable(healthInfo.TotalDeaths)}
  newDeaths={notAvailable(healthInfo.NewDeaths)}
/>

  return (
    <div>
      {!healthInfo.length > 0 && !healthNews ?
            healtComponent
            : healthNews ?
          <Health
            key={healthInfo.ID}
            countryName={props.countryName}
            confirmed={notAvailable(healthInfo.TotalConfirmed)}
            newConfirmed={notAvailable(healthInfo.NewConfirmed)}
            recovered={notAvailable(healthInfo.TotalRecovered)}
            newRecovered={notAvailable(healthInfo.NewRecovered)}
            deaths={notAvailable(healthInfo.TotalDeaths)}
            newDeaths={notAvailable(healthInfo.NewDeaths)}
            title={healthNews.title}
            description={healthNews.description}
            url={healthNews.url}
            image={healthNews.urlToImage}
        /> : null

          }
    </div>
  );
}

export default HealthInfo;

/* REPLACE CODE FOR CORONA PROPS
confirmed={healthInfo && notAvailable(healthInfo.TotalConfirmed)}
newConfirmed={healthInfo && notAvailable(healthInfo.NewConfirmed)}
recovered={healthInfo && notAvailable(healthInfo.TotalRecovered)}
newRecovered={healthInfo && notAvailable(healthInfo.NewRecovered)}
deaths={healthInfo && notAvailable(healthInfo.TotalDeaths)}
newDeaths={healthInfo && notAvailable(healthInfo.NewDeaths)}
*/
