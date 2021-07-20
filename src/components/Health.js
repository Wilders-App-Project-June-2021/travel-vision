import "./Health.css";
import React from "react";
import logo from './newspaper.svg'

function Health(props) {

  const coronaCases =
    <div className="health-cases-wrapper">

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
          <div className="health-case-detail">
            <span className="bold shrink">Confirmed:</span> {`${props.newConfirmed}`}
          </div>
          <div className="health-case-detail">
            {`${props.confirmed}`}
          </div>
        </div>
            
        <div className="health-cases-div">
          <div className="health-case-detail">
            <span className="bold shrink">Deaths:</span> {`${props.newDeaths}`}
          </div>
          <div className="health-case-detail">
            {`${props.deaths}`}
          </div>
        </div>
            
        <div className="health-cases-div">
          <div className="health-case-detail">
            <span className="bold shrink">Recovered:</span> {`${props.newRecovered}`}
          </div>
          <div className="health-case-detail">
            {`${props.recovered}`}
          </div>
        </div>
      </div>
    </div>;

  const noNews =
    <div className="no-news"><h2>We could not find any current Coronavirus news articles for {`${props.countryName}`}.</h2></div>;

    const noCoronaCases =
    <div className="no-news"><h2>We could not find any current Coronavirus information for {`${props.countryName}`}.</h2></div>;

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
</div>)

  }
  
}

export default Health;