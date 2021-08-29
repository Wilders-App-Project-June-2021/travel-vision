import "./Main.css";
import "./Cover.css";
import nations from "../data/nations";
import "./vivify.min.css";
import React from "react";
import Loader from "react-loader-spinner";

const Cover = (props) => {
  return (
    <div className="wrapper">
      <div className="second-bg">
        <img
          className="logo swoopInTop"
          src="../img/landscape.png"
          alt="Logo"
        />
        <h1 className="title driveInLeft">Travel Vision</h1>
        <div className="input-wrapper">
          <form onSubmit={(e) => props.submitInfo(e)}>
            <select
              className="input-country"
              id="country"
              placeholder="Country"
              required
              onChange={(e) => props.countryInputHandler(e)}>
              <option value="">Select a Country</option>
              {nations.map((country, i) => (
                <option id={country.name} key={i} value={country.code}>
                  {" "}
                  {country.name} {country.emoji}{" "}
                </option>
              ))}
            </select>
            <br />
            <input
              className="input-city"
              disabled={!props.fullCitiesList ? true : false}
              list="citiesList"
              type="text"
              id="city"
              placeholder="Enter a City"
              required
              onChange={(e) => props.cityInputHandler(e)}
            />
            <datalist id="citiesList">
              {props.fullCitiesList.length > 0 &&
                props.fullCitiesList
                  .filter(
                    (city) =>
                      city.name.startsWith(props.cityInput) ||
                      city.name.includes(props.cityInput)
                  )
                  .splice(0, 10)
                  .map((city, i) => <option key={i}>{city.name}</option>)}
            </datalist>
            {props.error && (
              <h1>
                Sorry we couldn't find any information on this city, try again
              </h1>
            )}{" "}
            <br />
            <button className="submit" type="submit">
              GO
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cover;
