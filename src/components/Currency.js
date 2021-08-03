import "./Currency.css";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import currencyList from "../data/currencies";

const Currency = (props)=>{
  const [baseCountryInfo, setBaseCountryInfo] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState("EUR");
  const [baseCurrencyAmount, setBaseCurrencyAmount] = useState(1);
  const [currencyRates, setCurrencyRates] = useState({});
  const [destinationCountryInfo, setDestinationCountryInfo] = useState("");
  const [exchangeValue, setExchangeValue] = useState(NaN);

  const destinationCountryCode = props.countryCode;

  const [localCountryCode, setLocalCountryCode] = useState("it");
  useEffect(() => {
    axios
      .get(`https://api.countrystatecity.in/v1/countries/${localCountryCode}`, {
        headers: {
          "X-CSCAPI-KEY": `${process.env.REACT_APP_API_GEO_INFO}`
        }
      })
      .then((result) => {
        setBaseCountryInfo(result.data);
      })
      .catch((error) => console.log(error));
  }, [localCountryCode]);

  useEffect(() => {
    axios
      .get(
        `https://api.countrystatecity.in/v1/countries/${destinationCountryCode}`,
        {
          headers: {
            "X-CSCAPI-KEY": `${process.env.REACT_APP_API_GEO_INFO}`
          }
        }
      )
      .then((result) => {
        setDestinationCountryInfo(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setBaseCurrency(baseCountryInfo.currency);
  }, [baseCountryInfo]);

  useEffect(() => {
    axios
      .get(`https://api.vatcomply.com/rates?base=${baseCurrency}`)
      .then((currencyRates) => setCurrencyRates(currencyRates.data.rates))
      .catch((error) => console.log("error", error));
  }, [baseCurrency]);

  useEffect(() => {
    setExchangeValue(getExchangeValue(destinationCountryInfo.currency));
  }, [baseCurrencyAmount]);

  const getExchangeValue = (currency = "USD") => {
    return (
      Number(baseCurrencyAmount) * Number(currencyRates[currency])
    ).toFixed(2);
  };

  const handleCurrencyChange = (e) => {
    const code =
      e.target.value[0] === "E" ? "IT" : e.target.value[0] + e.target.value[1];
    setBaseCurrency(e.target.value);
    setLocalCountryCode(code);
  };

  return (
    <div className="fadeIn">

      <div className="currencyContainerDesktop">
        <div className="currencyWrapper">
          <div className="currencyCard">
            <div className="currencyHeader">
                Base <br /> Currency
            </div>
            <div className="currencyMainSection">
              <select className="currencyFlag currencySelect" onChange={(e) => handleCurrencyChange(e)}>
                {currencyList.map((item1, n) =>
                    Object.values(currencyList[n]).map((item2) => (
                    <option id={n} value={Object.keys(item1)}>
                        {item2.flag}
                    </option>
                    ))
                )}
                {baseCountryInfo && baseCountryInfo.emoji}
              </select>
            </div>
            <div className="currencyBottomSection">
              <h1 className="currencyName">
              {baseCountryInfo && baseCountryInfo.currency}:
              </h1>
              <input
              type="number"
              className="currencyInputNumber pink"
              value={baseCurrencyAmount}
              onChange={(e) => setBaseCurrencyAmount(e.target.value)}
              />
              <h1 className="currencySymbol">
              {baseCountryInfo && baseCountryInfo.currency_symbol}
              </h1>
            </div>
          </div>

          <div className="currencyCard">
            <div className="currencyHeader">
              Destination's <br /> Currency
            </div>
            <div className="currencyMainSection">
              {destinationCountryInfo &&
              currencyList.find(
                  (item) => item[`${destinationCountryInfo.currency}`]
              )[`${destinationCountryInfo.currency}`].flag}
            </div>
            <div className="currencyBottomSection">
              <h1 className="currencyName">
              {destinationCountryInfo && destinationCountryInfo.currency}:
              </h1>
              <input
              type="number"
              className="currencyInputNumber pink"
              value={getExchangeValue(destinationCountryInfo.currency)}
              />
              <h1 className="currencySymbol">
              {destinationCountryInfo && destinationCountryInfo.currency_symbol}{" "}
              </h1>
            </div>
          </div>
        </div>

        <div className="currencyMiddle">
          Exchange Rate:&nbsp;
          <b className="pink">
          {Number(currencyRates[destinationCountryInfo.currency]).toFixed(4)}
          </b>
        </div>
      </div>




      <div className="currencyContainerMobile">
        <div className="currencyCard">
          <div className="currencyHeader">Base Currency</div>
            <div className="currencyMainSection">
              <select className="currencyFlag currencySelect" onChange={(e) => handleCurrencyChange(e)}>
                {currencyList.map((item1, n) =>
                Object.values(currencyList[n]).map((item2) => (
                    <option id={n} value={Object.keys(item1)}>
                    {item2.flag}
                    </option>
                ))
                )}
                {baseCountryInfo && baseCountryInfo.emoji}&nbsp;
              </select>
            </div>
            <div className="currencyBottomSection">
              <h1 className="currencyName">
                &nbsp;
                {baseCountryInfo && baseCountryInfo.currency}:
              </h1>
              <input
                type="number"
                className="currencyInputNumber pink"
                value={baseCurrencyAmount}
                onChange={(e) => setBaseCurrencyAmount(e.target.value)}
              />
              <h1 className="currencySymbol">
                {baseCountryInfo && baseCountryInfo.currency_symbol}
              </h1>
            </div>
          </div>

          <div className="currencyMiddle">
            Exchange Rate:&nbsp;
            <b className="pink">
            {Number(currencyRates[destinationCountryInfo.currency]).toFixed(4)}
            </b>
          </div>

          <div className="currencyCard">
            <div className="currencyHeader">Destination's Currency</div>
              <div className="currencyMainSection currencyFlag">
              {destinationCountryInfo &&
              currencyList.find(
              (item) => item[`${destinationCountryInfo.currency}`]
              )[`${destinationCountryInfo.currency}`].flag}
            </div>
          <div className="currencyBottomSection">
            <h1 className="currencyName">
              {destinationCountryInfo && destinationCountryInfo.currency}:
            </h1>
            <input
              type="number"
              className="currencyInputNumber pink"
              value={getExchangeValue(destinationCountryInfo.currency)}
            />
            <h1 className="currencySymbol">
              {destinationCountryInfo && destinationCountryInfo.currency_symbol}{" "}
            </h1>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Currency