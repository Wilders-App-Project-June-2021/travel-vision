import "./Main.css";
import "./vivify.min.css"
import React, {useState, useEffect}from "react";


const Input = ()=> {


    return (

            <div className="input-box-desktop">
                New destination? &nbsp;

                <form onSubmit={(e)=>getCityInfo(e)}>
                    <select className="input-country-desktop" id="country" placeholder="Country" required onChange={(e)=>handleCountryInput(e)}>
                        <option value="">Select a Country</option>
                        {nations.map((country,i)=> <option id={country.name} key={i} value={country.code}> {country.name} </option>)}
                    </select>
                    <input className="input-city-desktop" type="text" id="city" placeholder="Enter a City" required onChange={(e)=> handleCityinput(e)}></input>
                    {props.error? <h1>Sorry we couldn't find this city, try again</h1>:null}
                    <button className="go" type="submit">Go</button>
                </form>
            </div>

    )
}

export default Input