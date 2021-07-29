import "./Health.css";
import React from "react";
import logo from './newspaper.svg'

function Health(props) {

  const coronaCases =
    <div className="health-cases-wrapper fadeIn">

      <div className="health-cases-div-container">
        <div className="health-cases-div-title pale-pink bold">
          Current Coronavirus Cases
        </div>
        
        <div className="health-cases-div">
          <div className="health-case-detail bold pale-pink-2">
            New
          </div>
          <div className="health-case-detail bold pale-pink-2">
            Total
          </div>
        </div>
          
        <div className="health-cases-div">
          <div className="health-case-detail pale-pink-3">
            <span className="bold shrink">Confirmed:</span> {`${props.newConfirmed}`}
          </div>
          <div className="health-case-detail pale-pink-3">
            {`${props.confirmed}`}
          </div>
        </div>
            
        <div className="health-cases-div">
          <div className="health-case-detail pale-pink-3">
            <span className="bold shrink">Deaths:</span> {`${props.newDeaths}`}
          </div>
          <div className="health-case-detail pale-pink-3">
            {`${props.deaths}`}
          </div>
        </div>
            
        <div className="health-cases-div">
          <div className="health-case-detail pale-pink-3">
            <span className="bold shrink">Recovered:</span> {`${props.newRecovered}`}
          </div>
          <div className="health-case-detail pale-pink-3">
            {`${props.recovered}`}
          </div>
        </div>
        <img  className ="corona-graph" src={`https://corona.dnsforfamily.com/graph.png?c=${props.countryCode}`}/>
      </div>
    </div>;

  const noNews =
    <div className="no-news pale-pink-3 fadeIn">We could not find any current Coronavirus news articles for {`${props.countryName}`}.</div>;

  const noCoronaCases =
    <div className="no-news pale-pink-3 fadeIn">We could not find any current Coronavirus information for {`${props.countryName}`}.</div>;

  const withNews =
    <div className="health-news-wrapper fadeIn">
      <div className="health-news">
        <h3 className="health-news-title pale-pink-3">{`${props.title}`}</h3>
        <img className="health-news-image pale-pink-2" src={`${props.image}`} alt={`${props.title}`} />
        <div className="health-text-icon-wrapper">
          <p className="health-news-description">
            {`${props.description}`}
          </p>
          <a href={`${props.url}`} className = "health-news-link" target="new"><img className="health-news-icon" src={`${logo}`} alt={`${props.title}`}/></a>
        </div>
      </div>
    </div>;

  if(props.description && props.confirmed){
  return (
    <div className="health-container" id={props.key}>
        {coronaCases}
        {withNews}
    </div>
  )
  } else if (!props.description && props.confirmed){
    return (
      <div id={props.key}>
        {coronaCases}
        {noNews}
      </div>
    )
  } else if(props.description && !props.confirmed){
    return (
      <div className="health-container" id={props.key}>
          {noCoronaCases}
          {withNews}
      </div>
    )
  }else{
    return (
      <div className="health-container" id={props.key}>
        {noCoronaCases}
        {noNews}
      </div>
    )

  }
  
}

export default Health;