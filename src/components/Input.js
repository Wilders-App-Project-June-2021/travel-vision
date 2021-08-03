import "./Header.css";
import "./vivify.min.css"
import React, {useState, useEffect}from "react";
import nations from "../data/nations"

const Input = (props)=> {



    return (

            <div className="input-box-desktop">
                New destination? &nbsp;

                <form onSubmit={(e)=>{props.submitInfo(e)}}>
                    <select className="input-country-desktop" id="country" placeholder="Country" required onChange={(e)=>props.countryInputHandler(e)}>
                        <option value="">Select a Country</option>
                        {nations.map((country,i)=> <option id={country.name} key={i} value={country.code}> {country.name} </option>)}
                    </select>
                    <input className={props.fullCitiesList.length > 0? "input-city-desktop" : " input-city-desktop disabled"} type="text" id="city" list="cityList" key={props.cities} placeholder="Enter a new City" required onChange={(e)=> props.cityInputHandler(e)}></input>
                    <datalist id ="cityList" >
                        {
                        props.fullCitiesList.length > 0 &&
                        props.fullCitiesList.filter((city)=> city.name.startsWith(props.cityInput)  || city.name.includes(props.cityInput)).splice(0,10)
                        .map((city,i)=> <option key={i}>{city.name}</option>)
                        }
                    </datalist>
                    <input className="go" type="submit" value= "GO"/>
                </form>
                
            </div>

    )
}


export default Input