import "./Health.css";
import React, { useState } from "react";
import parser from "html-react-parser";
import logo from "./newspaper.svg";

function Health({
  id,
  url,
  newConfirmed,
  confirmed,
  newDeaths,
  deaths,
  newRecovered,
  recovered,
  countryName,
  countryCode,
  title,
  description,
  travelInfo,
  oneDoseVaccinated,
  fullyVaccinated,
}) {
  const [showInfo, setShowInfo] = useState(false);
  const [isError, setIsError] = useState(false);

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
            <span className="bold shrink">Confirmed:</span> {`${newConfirmed}`}
          </div>
          <div className="health-case-detail pale-pink-3">{`${confirmed}`}</div>
        </div>

        <div className="health-cases-div">
          <div className="health-case-detail pale-pink-3">
            <span className="bold shrink">Deaths:</span> {`${newDeaths}`}
          </div>
          <div className="health-case-detail pale-pink-3">{`${deaths}`}</div>
        </div>

        <div className="health-cases-div">
          <div className="health-case-detail pale-pink-3">
            <span className="bold shrink">Recovered:</span> {`${newRecovered}`}
          </div>
          <div className="health-case-detail pale-pink-3">{`${recovered}`}</div>
        </div>
        <img
          className="corona-graph"
          src={`https://corona.dnsforfamily.com/graph.png?c=${countryCode}`}
        />
      </div>
    </div>
  );

  const noNews = (
    <div className="no-news pale-pink-3 fadeIn">
      We could not find any current Coronavirus news articles for{" "}
      {`${countryName}`}.
    </div>
  );

  const noTravelInfo = (
    <div className="no-news pale-pink-3 fadeIn">
      We could not find any current Travel information for {`${countryName}`}.
    </div>
  );

  const noCoronaCases = (
    <div className="no-news pale-pink-3 fadeIn">
      We could not find any current Coronavirus information for{" "}
      {`${countryName}`}.
    </div>
  );

  const withNews = (
    <div className="health-news-wrapper fadeIn">
      <div className="health-news">
        <h3 className="health-news-title pale-pink">{`${title}`}</h3>
        {/* <img className="health-news-image pale-pink-2" src={`${image}`} alt={`${title}`} /> */}
        <div className="health-text-icon-wrapper">
          <p className="health-news-description">
            {description && description.includes("<")
              ? parser(description)
              : description}
          </p>
          <a href={`${url}`} className="health-news-link" target="new">
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
          Travel information for {countryName}
        </h3>
        <div className="travel-info-details">
          <h4 className="health-travel-subtitle pale-pink-2">
            Travel Regulations
          </h4>
          <p className="health-texts top-gap">
            {travelInfo &&
              travelInfo.declarationDocuments.text &&
              parser(travelInfo.declarationDocuments.text)}
          </p>
          {travelInfo &&
            travelInfo.declarationDocuments.travelDocumentationLink && (
              <p className="health-texts">
                [
                <a
                  href={travelInfo.declarationDocuments.travelDocumentationLink}
                  target="new"
                  className="health-texts">
                  Click here for more info
                </a>
                ]
              </p>
            )}

          <p className="health-texts"> </p>
          <br />
          <p className="health-texts top-gap">
            {travelInfo &&
              travelInfo.diseaseVaccination.text &&
              parser(travelInfo.diseaseVaccination.text)}
          </p>
          {travelInfo &&
            !travelInfo.declarationDocuments.text &&
            !travelInfo.diseaseVaccination.text &&
            !travelInfo.declarationDocuments.travelDocumentationLink && (
              <span className="not-specified">Not Specified</span>
            )}
        </div>
        <div className="health-travel-central-wrapper">
          <div className="travel-info-details">
            <h4 className="health-travel-subtitle pale-pink-2">Tests</h4>
            <p className="health-texts">
              {" "}
              <b>Test requirement:</b>{" "}
              {travelInfo && travelInfo.diseaseTesting.requirement}{" "}
            </p>
            <p className="health-texts">
              {" "}
              <b>Accepted Tests:</b>{" "}
              {travelInfo && travelInfo.diseaseTesting.testType}
            </p>
            {travelInfo && travelInfo.diseaseTesting.rules && (
              <p className="health-texts">
                [
                <a
                  href={travelInfo.diseaseTesting.rules}
                  target="new"
                  className="health-texts">
                  Click here for more info
                </a>
                ]
              </p>
            )}
          </div>
          <div className="travel-info-details">
            <h4 className="health-travel-subtitle pale-pink-2">
              People Vaccinated
            </h4>
            <p className="health-texts">
              {" "}
              <b>One dose:</b>{" "}
              {oneDoseVaccinated ? (
                oneDoseVaccinated.toFixed(0) + `%`
              ) : (
                <span className="not-specified">Not Specified</span>
              )}
            </p>
            <p className="health-texts">
              {" "}
              <b>Fully:</b>{" "}
              {fullyVaccinated ? (
                fullyVaccinated.toFixed(0) + `%`
              ) : (
                <span className="not-specified">Not Specified</span>
              )}
            </p>
          </div>
          <div className="travel-info-details">
            <h4 className="health-travel-subtitle pale-pink-2">
              Valid Certification
            </h4>
            {travelInfo &&
            travelInfo.diseaseVaccination.acceptedCertificates ? (
              travelInfo.diseaseVaccination.acceptedCertificates.map((item) => (
                <p className="health-texts" key={item}>
                  {" "}
                  {item}
                </p>
              ))
            ) : (
              <span className="not-specified">Not Specified</span>
            )}
          </div>
        </div>
        <div className="health-travel-central-wrapper">
          <div className="travel-info-details">
            <h4 className="health-travel-subtitle pale-pink-2">
              Qualified Vaccines / Immunity
            </h4>
            {travelInfo && travelInfo.diseaseVaccination.qualifiedVaccines ? (
              travelInfo.diseaseVaccination.qualifiedVaccines.map((item) => (
                <p className="health-texts" key={item}>
                  {" "}
                  {item}
                </p>
              ))
            ) : (
              <span className="not-specified">Not Specified</span>
            )}
          </div>
          <div className="travel-info-details">
            <h4 className="health-travel-subtitle pale-pink-2">Masks</h4>
            <p className="health-texts top-gap">
              {travelInfo && travelInfo.mask.text ? (
                parser(travelInfo.mask.text)
              ) : (
                <span className="not-specified">Not Specified</span>
              )}
            </p>
          </div>
        </div>
        {travelInfo && travelInfo.entry.text && (
          <div className="travel-info-details">
            <h4 className="health-travel-subtitle pale-pink-2">
              Entry into the Country
            </h4>
            <p className="health-texts">
              {showInfo && travelInfo.entry && parser(travelInfo.entry.text)}
            </p>
            <button
              onClick={() => setShowInfo((prev) => !prev)}
              className="expand-btn health-texts">
              {" "}
              {showInfo ? "Show less" : "Click here to expand"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
  const coronaGraph = (
    <div className={isError ? "hidden" : "health-cases-div-container"}>
      <div className="health-cases-div-title pale-pink bold">
        Current Coronavirus Cases
      </div>
      <img
        className="corona-graph"
        onError={() => setIsError(true)}
        src={`https://corona.dnsforfamily.com/graph.png?c=${countryCode}`}
      />
    </div>
  );
  if (
    description &&
    //  confirmed
    travelInfo
  ) {
    return (
      <div className="health-container fadeIn" id={id}>
        {/* {coronaCases} */}
        {coronaGraph}
        {withNews}
        {travelRestrictions}
      </div>
    );
  } else if (
    !description &&
    //  confirmed
    travelInfo
  ) {
    return (
      <div id={id} className="fadeIn">
        {/* {coronaCases} */}
        {coronaGraph}
        {travelRestrictions}
        {noNews}
      </div>
    );
  } else if (
    description &&
    // !confirmed
    !travelInfo
  ) {
    return (
      <div className="health-container fadeIn" id={id}>
        {/* {noCoronaCases} */}
        {noTravelInfo}
        {withNews}
        {coronaGraph}
      </div>
    );
  } else {
    return (
      <div className="health-container fadeIn" id={id}>
        {/* {noCoronaCases} */}
        {coronaGraph}
        {noTravelInfo}
        {noNews}
      </div>
    );
  }
}

export default Health;
