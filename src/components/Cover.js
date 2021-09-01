import "./Main.css"
import './Cover.css'
import nations from "../data/nations"
import "./vivify.min.css"
import React from "react"

const Cover = (props)=>{


    return (
        <div className="wrapper">
            <div className="second-bg">
                <img className="logo swoopInTop" src="../img/landscape.png" alt="Logo" />
                <h1 className="title driveInLeft">Travel Vision</h1>
                <div className="input-wrapper">
                    <form onSubmit={(e)=>props.submitHandler(e)}>
                        <select className="input-country" id="country" placeholder= "Country" required onChange={(e)=>props.handleCountryInput(e) } >
                            <option value="">Select a Country</option>
                            {nations.map((country,i)=> <option id={country.name} key={i} value={country.code} > {country.name} </option>)}
                        </select> <br />
                        <input className="input-city" type="text" id="city"  placeholder="Enter a City" required onChange={(e)=> props.handleCityinput(e)}></input>
                        {props.error? <h1>Sorry we couldn't find this city, try again</h1>:null} <br />
                        <button className="submit" type="submit" >GO</button>
                    </form>
                </div>
            </div>
        </div>

    )
}


export default Cover