//😎 😎 😎 😎 😎 😎 😎 😎 😎
import "./Styles.css"
import axios from "axios"
import React, {useEffect, useState} from "react"
import './Cover.css'

const Cover = ()=>{

// COUNTRY AND CITY CODES 
    const [cities, setCities]= useState("")


    // It triggers the request on button click 
    const handleCityRequest=()=>{
        axios.get("https://api.openweathermap.org/data/2.5/weather?q=Rome,IT&appid=3bc542e8c782c67d428b24c156b77cab")
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
                    <input type="text" id="country"  placeholder="Country"></input>
                    <input type="text" id="city"  placeholder="City"></input>
                </div>
                <button onClick={()=>handleCityRequest()}>GO</button>
            </div>
        </div>

    )
}


export default Cover

