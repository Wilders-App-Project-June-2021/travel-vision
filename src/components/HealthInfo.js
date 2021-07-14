import React, { useState, useEffect } from "react";
import "./Health.css";
import Health from "./Health";
import axios from "axios";

function HealthInfo(props) {
  const [healthInfo, sethealthInfo] = useState([]);

  const getData = () => {
    axios
      .get(`https://api.covid19api.com/summary`)
      .then((response) => {
        sethealthInfo(response.data);
        // console.log(response.data.Countries);
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
      {healthInfo.length > 0 &&
        healthInfo
          .filter((item) => item.Countries.Country === props.country)
          .map((item, index) =>
            <Health
              key={index}
              item={item}
              confirmed={item.TotalConfirmed}
              new_confirmed={item.NewConfirmed}
              recovered={item.TotalRecovered}
              new_recovered={item.NewRecovered}
              deaths={item.TotalDeaths}
              new_deaths={item.NewDeaths}
            />
          )}
    </div>
  );
}

export default HealthInfo;