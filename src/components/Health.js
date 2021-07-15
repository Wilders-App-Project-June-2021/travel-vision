import "./Health.css";
import React from "react";
import logo from './newspaper.svg'

function Health(props) {
  return (
    <div id={props.key}>
      <div className="health-news-wrapper">
        <div className="health-news">
        <h3 className="health-news-title">{props.title}</h3>
        <div className="health-text-icon-wrapper">
        <p className="health-news-description">
          {props.description}
        </p>
        <a href={props.url} className = "health-news-link" ><img className="health-news-icon" src={logo} alt="health-news-link"/></a>
        </div>
        </div>
      </div>

      <h1>Current cases</h1>
      <ul>
        <li>New Confirmed: {props.newConfirmed}</li>
        <li>Total Confirmed: {props.confirmed}</li>
        <li>New Deaths: {props.newDeaths}</li>
        <li>Total Deaths: {props.deaths}</li>
        <li>New Recovered: {props.newRecovered}</li>
        <li>Total Recovered: {props.recovered}</li>
      </ul>
    </div>
  );
}

export default Health;