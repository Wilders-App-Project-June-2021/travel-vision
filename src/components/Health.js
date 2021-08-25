import "./Health.css";
import React, { useState } from "react";
import logo from "./newspaper.svg";

function Health(props) {
  const [showInfo, setShowInfo] = useState(false);

  const coronaCases = (
    <div className="health-cases-wrapper fadeIn">
      <div className="health-cases-div-container">
        <div className="health-cases-div-title pale-pink bold">
          Current Coronavirus Cases
        </div>

        <div className="health-cases-div">
          <div className="health-case-detail bold pale-pink-2">New</div>
          <div className="health-case-detail bold pale-pink-2">Total</div>
        </div>

        <div className="health-cases-div">
          <div className="health-case-detail pale-pink-3">
            <span className="bold shrink">Confirmed:</span>{" "}
            {`${props.newConfirmed}`}
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
            <span className="bold shrink">Recovered:</span>{" "}
            {`${props.newRecovered}`}
          </div>
          <div className="health-case-detail pale-pink-3">
            {`${props.recovered}`}
          </div>
        </div>
        <img
          className="corona-graph"
          src={`https://corona.dnsforfamily.com/graph.png?c=${props.countryCode}`}
        />
      </div>
    </div>
  );

  const noNews = (
    <div className="no-news pale-pink-3 fadeIn">
      We could not find any current Coronavirus news articles for{" "}
      {`${props.countryName}`}.
    </div>
  );

  const noCoronaCases = (
    <div className="no-news pale-pink-3 fadeIn">
      We could not find any current Coronavirus information for{" "}
      {`${props.countryName}`}.
    </div>
  );

  const withNews = (
    <div className="health-news-wrapper fadeIn">
      <div className="health-news">
        <h3 className="health-news-title pale-pink">{`${props.title}`}</h3>
        {/* <img className="health-news-image pale-pink-2" src={`${props.image}`} alt={`${props.title}`} /> */}
        <div className="health-text-icon-wrapper">
          <p className="health-news-description">{`${props.description}`}</p>
          <a href={`${props.url}`} className="health-news-link" target="new">
            <span className="health-news-icon"> 🗞 </span>
          </a>
        </div>
      </div>
    </div>
  );

  const travelRestrictions = (
    <div className="health-travel-wrapper fadeIn">
      <div className="health-travel">
        <h3 className="health-travel-title pale-pink">
          Travel information {props.countryName}
        </h3>
        <div className="travel-info-details">
          <h4 className="health-travel-subtitle pale-pink-2">
            Travel regulation
          </h4>
          {props.travelDoc}
          <a href={props.travelDocLink}> Click here for more info</a>{" "}
          {props.travelDocuments}
        </div>
        <div className="health-travel-central-wrapper">
          <div className="travel-info-details">
            <h4 className="health-travel-subtitle pale-pink-2">Tests</h4>
            <p> Test requirement : {props.testRequirement} </p>
            <p> Accepeted Tests : {props.testsType}</p>
            <a href={props.testRequirementLink}>Click here for more info</a>
            {/* {props.testRequirementDetails} */}
          </div>
          <div className="travel-info-details">
            <h4 className="health-travel-subtitle pale-pink-2">
              People vaccinated
            </h4>
            <p>
              {" "}
              One dose :{" "}
              {props.oneDoseVaccinated && props.oneDoseVaccinated.toFixed(0)}%
            </p>
            <p>
              {" "}
              Fully :{" "}
              {props.fullyVaccinated && props.fullyVaccinated.toFixed(0)}%
            </p>
          </div>
          <div className="travel-info-details">
            <h4 className="health-travel-subtitle pale-pink-2">
              Valid certification
            </h4>
            {props.accepetedCertificates.map((item) => (
              <p key={item}> {item}</p>
            ))}
          </div>
        </div>
        <div className="health-travel-central-wrapper">
          <div className="travel-info-details">
            <h4 className="health-travel-subtitle pale-pink-2">
              {" "}
              Qualified vaccines / immunity
            </h4>
            {props.vaccinesList.map((item) => (
              <p key={item}> {item}</p>
            ))}
          </div>
          <div className="travel-info-details">
            <h4 className="health-travel-subtitle pale-pink-2">Mask</h4>
            {props.maskInfo}
          </div>
        </div>
        <div className="travel-info-details">
          <h4 className="health-travel-subtitle pale-pink-2">
            {" "}
            Entering in the country
          </h4>
          {showInfo && props.entryInfo}
          <button
            onClick={() => setShowInfo((prev) => !prev)}
            className="expand-btn">
            {" "}
            {showInfo ? "Show less" : "Click here to expand"}
          </button>
        </div>
      </div>
    </div>
  );
  const coronaGraph = (
    <div className="health-cases-div-container">
      <div className="health-cases-div-title pale-pink bold">
        Current Coronavirus Cases
      </div>
      <img
        className="corona-graph"
        src={`https://corona.dnsforfamily.com/graph.png?c=${props.countryCode}`}
      />
    </div>
  );
  if (
    props.description &&
    //  props.confirmed
    props.travelDoc
  ) {
    return (
      <div className="health-container" id={props.id}>
        {/* {coronaCases} */}
        {coronaGraph}
        {withNews}
        {travelRestrictions}
      </div>
    );
  } else if (
    !props.description &&
    //  props.confirmed
    props.travelDoc
  ) {
    return (
      <div id={props.id}>
        {/* {coronaCases} */}
        {coronaGraph}
        {travelRestrictions}
        {noNews}
      </div>
    );
  } else if (
    props.description &&
    // !props.confirmed
    !props.travelDoc
  ) {
    return (
      <div className="health-container" id={props.id}>
        {/* {noCoronaCases} */}
        {withNews}
        {coronaGraph}
      </div>
    );
  } else {
    return (
      <div className="health-container" id={props.id}>
        {/* {noCoronaCases} */}
        {coronaGraph}
        {noNews}
      </div>
    );
  }
}

export default Health;
