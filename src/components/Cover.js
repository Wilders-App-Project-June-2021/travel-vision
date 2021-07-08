
import "./Styles.css"
import axios from "axios"
import React, {useEffect, useState} from "react"

const Cover = ()=>{

const [cities,setCities]= useState("")

// It triggers the request on button click 
const handleCityRequest=()=>{
    axios.get("https://api.countrystatecity.in/v1/countries/IT/cities", {
        headers:{
            'X-CSCAPI-KEY':'U0dLM3pIV21QSUxYbDZQeUtOQjF0OHJOWmV0RWFCbVFkeUZnS3BKdA=='
        }
    })
    
    .then(result => setCities(result.data))
    .catch(error => console.log('error', error))
}


console.log(cities)

return (
    <div className="wrapper">

        <img className="logo" src="../img/landscape.png" alt="Logo" />

        <div> 
        <input type="text" placeholder="Enter your destination"></input>
            <select>
            <option>1</option>
            </select>
        <button onClick={()=>handleCityRequest()}>GO</button>
        </div>


    </div>

)}


export default Cover
