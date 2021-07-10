//😎 😎 😎 😎 😎 😎 😎 😎 😎
import "./Styles.css"
import axios from "axios"
import React, {useEffect, useState} from "react"
import './Cover.css'
import nations from "../data/nations"

const Cover = ()=>{

// COUNTRY AND CITY CODES 
    const [cities, setCities]= useState("")
    const [country, setCountry]= useState("")


    // It triggers the request on button click 
    const handleCityRequest=()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cities},${country}&appid=3bc542e8c782c67d428b24c156b77cab`)
        .then((result) => 
            console.log(result.data))
        .catch(error => console.log('error', error))
    } 
    
    // https://openweathermap.org/api
    // Your API key is 3bc542e8c782c67d428b24c156b77cab


// GREETING IN LANGUAGE CODE

    return (
        <div className="wrapper">
            <div className="second-bg">
                <img className="logo" src="../img/landscape.png" alt="Logo" />
                <h1 className="title">Travel Vision</h1>
                <div className ="input-wrapper"> 
                    {/* <input type="text" id="country"  placeholder="Country"></input> */}
                    <select className="input-country" placeholder= "Country" onChange={(e)=> setCountry(e.target.value)} >
                        <option>Select a Country</option>
                        {nations.map((country,i)=> <option id={country.name} key={i} value={country.code} > {country.name} </option>)}
                    </select>
                    <input type="text" id="city"  placeholder="Enter a City" className="input-city" onChange={(e)=> setCities(e.target.value)}></input>
                </div>
                <button onClick={()=>handleCityRequest()}>GO</button>
            </div>
        </div>

    )
}


export default Cover

