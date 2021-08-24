import "./Health.css";
import React, { useState } from "react";
import logo from './newspaper.svg'

function Health(props) {

const [showInfo,setShowInfo]= useState(false)

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
        <h3 className="health-news-title pale-pink">{`${props.title}`}</h3>
        {/* <img className="health-news-image pale-pink-2" src={`${props.image}`} alt={`${props.title}`} /> */}
        <div className="health-text-icon-wrapper">
          <p className="health-news-description">
            {`${props.description}`}
          </p>
          <a href={`${props.url}`} className="health-news-link" target="new"><span className="health-news-icon" > 🗞 </span></a>
        </div>
      </div>
    </div>;

    const travelRestrictions= 
    <div className="health-travel-wrapper fadeIn">
      <div className="health-travel">
        <h3 className="health-travel-title pale-pink">
          Travel information for {props.countryName} 
        </h3>
        <div className="travel-info-details">
          <h4 className="health-travel-subtitle pale-pink-2">Travel Regulations</h4>
          <p className="health-texts top-gap">{props.travelDoc}</p>
          <p className="health-texts">[<a href={props.travelDocLink} target="new" className="health-texts">Click here for more info</a>]</p>
          <p className="health-texts">{" "}</p>
          <br />
          <p className="health-texts top-gap">{props.travelDocuments}</p>
        </div>
       <div className="health-travel-central-wrapper">
        <div className="travel-info-details">
          <h4 className="health-travel-subtitle pale-pink-2">Tests</h4>
          <p className="health-texts"> <b>Test requirement:</b> {props.testRequirement} </p>
          <p className="health-texts"> <b>Accepeted Tests:</b> {props.testsType}</p>
          <p className="health-texts">[<a href={props.testRequirementLink} target="new" className="health-texts">Click here for more info</a>]</p>
          {/* {props.testRequirementDetails} */}
        </div>
        <div className="travel-info-details">
          <h4 className="health-travel-subtitle pale-pink-2">People Vaccinated</h4>
          <p className="health-texts"> <b>One dose:</b> {props.oneDoseVaccinated && props.oneDoseVaccinated.toFixed(0)}%</p>
          <p className="health-texts"> <b>Fully:</b> {props.fullyVaccinated && props.fullyVaccinated.toFixed(0)}%</p>
        </div>
        <div className="travel-info-details">
          <h4 className="health-travel-subtitle pale-pink-2">Valid Certification</h4>
          {props.accepetedCertificates.map((item)=><p className="health-texts" key={item}> {item}</p>)} 
        </div>
        </div>
      <div className="health-travel-central-wrapper">
        <div className="travel-info-details">
          <h4 className="health-travel-subtitle pale-pink-2">Qualified Vaccines / Immunity</h4>
          {props.vaccinesList.map((item)=><p className="health-texts" key={item}> {item}</p>)}
        </div>
        <div className="travel-info-details">
          <h4 className="health-travel-subtitle pale-pink-2">Masks</h4>
          <p className="health-texts top-gap">{props.maskInfo}</p>
        </div>
      </div>
        <div className="travel-info-details">
          <h4 className="health-travel-subtitle pale-pink-2">Entry into the Country</h4>
          <p className="health-texts">{showInfo && props.entryInfo}</p>
          <button onClick={()=>setShowInfo(prev => !prev)} className="expand-btn health-texts"> {showInfo? 'Show less':'Click here to expand'}</button>
        </div>
      </div>
    </div>

  if(props.description &&
    //  props.confirmed
    props.travelDoc
     ){
  return (
    <div className="health-container" id={props.id}>
        {/* {coronaCases} */}
        
        {withNews}
        {travelRestrictions}
    </div>
  )
  } else if (!props.description &&
    //  props.confirmed
    props.travelDoc
     ){
    return (
      <div id={props.id}>
        {/* {coronaCases} */}
        {travelRestrictions}
        {noNews}
      </div>
    )
  } else if(props.description && 
    // !props.confirmed
    !props.travelDoc
    ){
    return (
      <div className="health-container" id={props.id}>
          {/* {noCoronaCases} */}
          {withNews}
      </div>
    )
  }else{
    return (
      <div className="health-container" id={props.id}>
        {/* {noCoronaCases} */}
        {noNews}
      </div>
    )

  }
  
}

export default Health;