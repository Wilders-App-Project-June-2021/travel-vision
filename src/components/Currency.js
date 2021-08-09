import React, {useState,useEffect}from "react";
import axios from "axios";
import { useQuery, useQueries } from "react-query";
import nations from "../data/nations";
import Loader from "react-loader-spinner";
import './Currency.css';


const fetchCurrencyRate = async ({ queryKey }) => {
   if (queryKey[1].baseCurr !== null ){
    const result = await axios.get(
      `https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_API_EXCHANGE_RATE}/latest/${queryKey[1].baseCurr}`
    );
    return result.data.conversion_rates;
}
  };
  
  const fetchCurrencyInfo = async ({ queryKey }) => {
    const result = await axios.get(
      `https://api.countrystatecity.in/v1/countries/${queryKey[1].country}`,
      {
        headers: {
          "X-CSCAPI-KEY": `U0dLM3pIV21QSUxYbDZQeUtOQjF0OHJOWmV0RWFCbVFkeUZnS3BKdA==`
        }
      }
    );
    return result.data;
  };
  
 const Currency= (props) => {
    const providedDestination = "CO";
  
    const [conversionRate, setConversionRate] = useState(null);
    const [amount, setAmount] = useState(1);
    const [destinationCountry, setDestinantionCountry] = useState({
        code: `${props.countryCode}`,
        unicode: null,
        name: `${props.countryName}`,
        emoji: null,
        currencyName: null,
        currencySymbol: null
    });
    
    useEffect(()=>{
        setDestinantionCountry(
            nations.find((nation) => nation.code === props.countryCode)
          )
       
    },[props.countryCode])

    const [selectedCountry, setSelectedCountry] = useState(
      {
        code: `US`,
        unicode: null,
        name: `United States`,
        emoji: null,
        currencyName: null,
        currencySymbol: null
      }
      );
    const results = useQueries([
      {
        queryKey: [
            "destinationCurrencyInfo",
            { country: destinationCountry.code }
        ],
        queryFn: fetchCurrencyInfo,
        onSuccess: (res) => {
            setDestinantionCountry({
            ...destinationCountry,
            currencyName: res.currency,
            currencySymbol: res.currency_symbol
            });
        }
      },  
      {
        queryKey: ["baseCurrencyInfo", { country: selectedCountry.code }],
        queryFn: fetchCurrencyInfo,
        enabled: Boolean(selectedCountry) ,
        onSuccess: (res) => {
          setSelectedCountry({
            ...selectedCountry,
            currencyName: res.currency,
            currencySymbol: res.currency_symbol
          });
        }
      },
      {
        queryKey: [
          ["currencyExchange", selectedCountry.currencyName],
          { baseCurr: selectedCountry.currencyName }
        ],
        queryFn: fetchCurrencyRate,
        retry: 1,
        initialData: 'EUR',
        // enabled:
        //   selectedCountry.currencyName !== null,
        onSuccess: (res) => {
          setConversionRate(res);
        }
      }
    ]);

    
  
    const getExchangeValue = (currency = "EUR") => {
      if (conversionRate) {
        return parseFloat(
          Number(amount) * Number(conversionRate[currency])
        ).toFixed(2);
      }
    };

    if(results[2].isLoading){
        return (
            <Loader
            type="Plane"
            color="#00BFFF"
            height={100}
            width={100}
            radius={500}  
        />
        )
    }
    if(results[2].isError){
        return (
           <div>
               Something went wrong... try again.
           </div>
        )
    }
  
    return (
    <div className="fadeIn">
        <div className="currencyContainerDesktop">
          <div className="currencyWrapper">
            <div className="currencyCard">
              <div className="currencyHeader">
                  Base <br /> Currency
              </div>
              <div className="currencyMainSection">
          <select
            className="currencyFlag currencySelect"
            value={selectedCountry.code}
            onChange={(e) =>
              setSelectedCountry(
                nations.find((nation) => nation.code === e.target.value)
              )
            }
          >
              <option value={null}> Select a country</option>
            {nations.map((nation) => {
              return (
                <option
                  key={nation.code}
                  id={nation.code}
                  name={nation.name}
                  value={nation.code}
                >
                  {nation.emoji}
                  {nation.name}
                </option>
              );
            })}
          </select>
        </div >
          <div className="currencyBottomSection">
          <h1 className="currencyName"> 
            {selectedCountry.currencyName}
          </h1>
            <input
              type="number"
              className="currencyInputNumber pink"
              onChange={(e) => setAmount(Number(e.target.value))}
              value={amount}
            />
            <h1 className="currencySymbol">
            {selectedCountry.currencySymbol}
            </h1>
          </div>
        </div>
        <div className="currencyCard">
          <div className="currencyHeader">
          Destination's <br /> Currency
          </div>
          <div className="currencyMainSection">
          <select
            className="currencyFlag currencySelect"
            value={destinationCountry.code}
            onChange={(e) => {
                console.log(nations.find((nation) => nation.code === e.target.value))
              setDestinantionCountry(
                nations.find((nation) => nation.code === e.target.value)
              );
            }}
          >
            {nations.map((nation) => {
              return (
                <option
                  key={nation.code}
                  id={nation.code}
                  name={nation.name}
                  value={nation.code}
                >
                  {nation.emoji}
                  {nation.name}
                </option>
              );
            })}
          </select>
          </div>
          <div className="currencyBottomSection" >
          <h1 className="currencyName">
            {destinationCountry.currencyName}
          </h1>
            <div className="currencyInputNumber pink">
                {getExchangeValue(destinationCountry.currencyName)}
            </div>
            <h1 className="currencySymbol">
            {destinationCountry.currencySymbol}
            </h1>
          </div>
        </div>
    </div>
    
    <div className="currencyMiddle">
          Exchange Rate:&nbsp;
          <b className="pink">
          {" "}
          {conversionRate && conversionRate[destinationCountry.currencyName]}
        </b>
      </div>
</div>

<div className="currencyContainerMobile">
            <div className="currencyCard">
              <div className="currencyHeader">
                  Base <br /> Currency
              </div>
              <div className="currencyMainSection">
          <select
            className="currencyFlag currencySelect"
            value={selectedCountry.code}
            onChange={(e) =>
              setSelectedCountry(
                nations.find((nation) => nation.code === e.target.value)
              )
            }
          >
              <option value={null}> Select a country</option>
            {nations.map((nation) => {
              return (
                <option
                  key={nation.code}
                  id={nation.code}
                  name={nation.name}
                  value={nation.code}
                >
                  {nation.emoji}
                  {nation.name}
                </option>
              );
            })}
          </select>
        </div >
          <div className="currencyBottomSection">
          <h1 className="currencyName"> 
            {selectedCountry.currencyName}
          </h1>
            <input
              type="number"
              className="currencyInputNumber pink"
              onChange={(e) => setAmount(Number(e.target.value))}
              value={amount}
            />
            <h1 className="currencySymbol">
            {selectedCountry.currencySymbol}
            </h1>
          </div>
        </div>

        <div className="currencyMiddle">
          Exchange Rate:&nbsp;
          <b className="pink">
          {" "}
          {conversionRate && conversionRate[destinationCountry.currencyName]}
        </b>
      </div>

        <div className="currencyCard">
          <div className="currencyHeader">
          Destination's <br /> Currency
          </div>
          <div className="currencyMainSection ">
          <select
            className="currencyFlag currencySelect"
            value={destinationCountry.code}
            onChange={(e) => {
                console.log(nations.find((nation) => nation.code === e.target.value))
              setDestinantionCountry(
                nations.find((nation) => nation.code === e.target.value)
              );
            }}
          >
            {nations.map((nation) => {
              return (
                <option
                  key={nation.code}
                  id={nation.code}
                  name={nation.name}
                  value={nation.code}
                >
                  {nation.emoji}
                  {nation.name}
                </option>
              );
            })}
          </select>
          </div>
          <div className="currencyBottomSection" >
          <h1 className="currencyName">
            {destinationCountry.currencyName}
          </h1>
            <div className="currencyInputNumber pink">
                {getExchangeValue(destinationCountry.currencyName)}
            </div>
            <h1 className="currencySymbol">
            {destinationCountry.currencySymbol}
            </h1>
          </div>
        </div>
    </div>
    
</div>
    );

 }
    export default Currency;