import React from 'react';
import axios from 'axios';
import './Currency.css';
import currencies from '../data/currencies';
import {useState, useEffect} from "react";


function NewCurrency(props){
  const [amount, setAmount] = useState(0.00);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [conversions, setConversions] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");
  let countryInfoUrl = "https://api.countrystatecity.in/v1/countries/";
  let currencyKeys = Object.keys(currencies);

  useEffect(() => {
    setToCurrency(props.currency);
  }, [])
  
  // useEffect( async ()=>{
  //   try {
  //     const axiosRes = await axios({
  //       url: props.countryCode,
  //       method: "get",
  //       baseURL: countryInfoUrl,
  //       headers: {
  //         "X-CSCAPI-KEY": process.env.REACT_APP_GEO_INFO
  //       }
  //     })
  //     let currency = axiosRes.data.currency;
  //     setLocationCurrency(currency);
  //   } catch(err) {
  //     console.log(err);
  //   }
  // },[])


  // async function getCurrencyData() {
  //   try {
  //     const axiosRes = await axios({
  //       url: props.countryCode,
  //       method: "get",
  //       baseURL: countryInfoUrl,
  //       headers: {
  //         "X-CSCAPI-KEY": process.env.REACT_APP_API_GEO_INFO
  //       }
  //     })
  //     let currency = axiosRes.data.currency;
  //     setLocationCurrency(currency);
  //     console.log(currency);
  //     getConversionData(currency);
  //   } catch(err) {
  //     console.log(err);
  //   }
  // }

  async function getConversionData(currency) {
    try {
      const axiosRes = await axios({
        url: "rates",
        method: "get",
        baseURL: "https://api.vatcomply.com/",
        params: {
          base: fromCurrency
        }
      })
      if(axiosRes.data.rates) {
        let rates = axiosRes.data.rates;
        let selectedCurrencyRate = rates[fromCurrency];
        let locationCurrencyRate = rates[toCurrency];
        setConversions([selectedCurrencyRate, locationCurrencyRate]);
        let amt = parseFloat(amount);
        let rate = locationCurrencyRate;
        let converted = amt * rate;
        setConvertedAmount(converted);
      }
    } catch(err){
      console.log(err);
    }
  }

  // calculate conversion
  function convertCurrency(){
  // take amount and times it by rate[1]
  let amt = parseFloat(amount);
  let rate = conversions[1];
  console.log(conversions);
  let converted = amt * rate;
  console.log(`Amount = ${amt}, rate = ${rate}`);
  console.log(converted);
  setConvertedAmount(converted);
  }

  // determine value
  function determineValue(){
    let destinationCurrency = props.currency;
    let index = currencyKeys.findIndex((key) => key == destinationCurrency);
    if (index != -1 && toCurrency == "") {
      setToCurrency(props.currency);
      return currencyKeys[index];
    } else {
      return toCurrency;
    }
  }

  // canConvert?
  const canConvert = () => {
    let destinationCurrency = props.currency;
    let index = currencyKeys.findIndex((key) => key == destinationCurrency);
    if(index == -1) {
      return false
    } else {
      return true
    }
  }

  const swapCurrencies = () => {
    let currentTo = toCurrency;
    let currentFrom = fromCurrency;
    let currentConversions = [...conversions]
    setFromCurrency(currentTo);
    setToCurrency(currentFrom);
    let rate = 1 / currentConversions[1];
    let converted = amount * rate;
    setConvertedAmount(converted);
    let newConversions = [];
    newConversions[0] = currentConversions[0];
    newConversions[1] = rate;
    setConversions(newConversions);
  }

    return(
      <div className="currency-container">
      {/* <p>Please select your country currency to compare.</p>
      <select onChange={(e) => setSelectedCurrency(e.target.value)} value={selectedCurrency} className="input-currency">
        <option value="default">Select a Currency</option>
        {currencyKeys.map((key) => {
        let currencyObj = currencies[key];
        let symbol = currencyObj.symbol;
        let name = currencyObj.name;
        return (
          <option key={key} value={key}>{`${symbol} ${name}`}</option>
        )
      })}
      </select>
      <button className="convert" onClick={getCurrencyData}>Convert Currency</button> */}

      {/* {conversions != "" ? <p>{props.countryName} uses {locationCurrency}. {conversions[0]} {selectedCurrency} is equal to {conversions[1]} {locationCurrency}.</p> : null} */}

      {canConvert() ? <p className="uses">{props.countryName} uses {props.currency}.</p> : <p>{props.countryName} uses {props.currency}. We cannot convert to {props.currency} at this time.</p>}
      
      <div className="currency-converter-row">
        <div className="currency-converter-col">
          <p>AMOUNT</p>
          <input className="currency-input" type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
        </div>

        <div className="currency-converter-col">
          <p>FROM</p>
          <select className="select-currency" onChange={(e) => setFromCurrency(e.target.value)} value={fromCurrency}>
          <option value="default">Select a Currency</option>
          {currencyKeys.map((key) => {
          let currencyObj = currencies[key];
          let symbol = currencyObj.symbol;
          let name = currencyObj.name;
          return (
            <option key={key} value={key}>{`${symbol} ${name}`}</option>
          )
        })}
          </select>
        </div>

        <div className="currency-converter-col">
          <button className="button-swap"onClick={swapCurrencies}>Swap</button>
        </div>

        <div className="currency-converter-col">
          <p>TO</p>
          <select className="select-currency" value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          <option className="currency-input"value="default">Select a Currency</option>
          {currencyKeys.map((key) => {
          let currencyObj = currencies[key];
          let symbol = currencyObj.symbol;
          let name = currencyObj.name;
          return (
            <option key={key} value={key}>{`${symbol} ${name}`}</option>
          )
        })}
          </select>
        </div>
      </div>
      <div className="currency-converter-row">
        <button className="button-convert"onClick={getConversionData}>Convert</button>
      </div>
      

      {
        convertedAmount != "" ? (
          <div className="conversions-container">
          <div className="conversion-row">
            <p>{amount} {fromCurrency} =</p>
          </div>
          <div className="conversion-row">
            <p>{convertedAmount} {toCurrency}</p>
          </div>
          <div className="conversion-row">
            <p>{conversions[0]} {fromCurrency} = {conversions[1]} {toCurrency}</p>
          </div>
          <div className="conversion-row">
            <p>  1 {toCurrency} = {1 / conversions[1]} {fromCurrency}</p>
          </div>
          </div>) : null
      }

      </div>
    )
}

export default NewCurrency
