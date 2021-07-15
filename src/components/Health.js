import "./Health.css";
import React from "react";
import logo from './newspaper.svg'

function Health(props) {

  const coronaCases =
    <div className="health-cases-wrapper">
    <h1>Current Coronavirus Cases</h1>
    <ul>
      <li>New Confirmed: {`${props.newConfirmed}`}</li>
      <li>Total Confirmed: {`${props.confirmed}`}</li>
      <li>New Deaths: {`${props.newDeaths}`}</li>
      <li>Total Deaths: {`${props.deaths}`}</li>
      <li>New Recovered: {`${props.newRecovered}`}</li>
      <li>Total Recovered: {`${props.recovered}`}</li>
    </ul>
    </div>;

  const noNews =
    <div className="no-news"><h2>We could not find any current Coronavirus news articles for {`${props.countryName}`}.</h2></div>;

  const withNews =
    <div className="health-news-wrapper">
    <div className="health-news">
    <h3 className="health-news-title">{`${props.title}`}</h3>
    <img className="health-news-image" src={`${props.image}`} alt={`${props.title}`} />
    <div className="health-text-icon-wrapper">
    <p className="health-news-description">
    {`${props.description}`}
    </p>
    <a href={`${props.url}`} className = "health-news-link" ><img className="health-news-icon" src={`${logo}`} alt={`${props.title}`}/></a>
    </div>
    </div>
    </div>;

  if(props.description){
  return (
    <div id={props.key}>
        {coronaCases}
        {withNews}
      {noNews}
    </div>
  )
  } else {
    return (
      <div id={props.key}>
      {coronaCases}
      {noNews}
  </div>
    )
  }
}

export default Health;