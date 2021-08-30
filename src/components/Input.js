import "./Header.css";
import "./vivify.min.css";
import React, { useState, useEffect } from "react";
import nations from "../data/nations";

const Input = (props) => {
  return (
    <div className="input-box-desktop">
      New destination? &nbsp;
      <form
        onSubmit={(e) => {
          props.submitInfo(e);
        }}>
        <select
          className="input-country-desktop"
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
        <input
          className="input-city-desktop"
          disabled={!props.fullCitiesList ? true : false}
          list="cityList"
          type="text"
          id="city"
          placeholder="Enter a City"
          required
          onChange={(e) => props.cityInputHandler(e)}
        />
        <datalist id="cityList">
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
        <button className="go" type="submit">
          GO
        </button>
      </form>
    </div>
  );
};

export default Input;
