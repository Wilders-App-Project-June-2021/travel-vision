import "./Main.css"
import './Cover.css'
import nations from "../data/nations"
import "./vivify.min.css"
import React from "react"
import Loader from "react-loader-spinner"

const Cover = (props)=>{


    return (
        <div className="wrapper">
            <div className="second-bg">
                <img className="logo swoopInTop" src="../img/landscape.png" alt="Logo" />
                <h1 className="title driveInLeft">Travel Vision</h1>
                <div className="input-wrapper">
                    <form onSubmit={(e)=>props.submitInfo(e)}>
                        <select className="input-country" id="country" placeholder= "Country" required onChange={(e)=>props.countryInputHandler(e) } >
                            <option value="">Select a Country</option>
                            {nations.map((country,i)=> <option id={country.name} key={i} value={country.code} > {country.name} </option>)}
                        </select> 
                        {props.countryCodeInput !== "" && !props.fullCitiesList &&
                        <Loader
                            type="Plane"
                            color="#00BFFF"
                            height={100}
                            width={100}
                            radius={500}
                            style={{}}
                        />} 
                        <br />
                        <input className={props.fullCitiesList? "input-city" : "none"} list="cityy" type="text" id="city"  placeholder="Enter a City" required onChange={(e)=> props.cityInputHandler(e)}/>
                        <datalist id ="cityy" >
                        {
                        props.fullCitiesList.length > 0 &&
                        props.fullCitiesList.filter((city)=>  city.name.startsWith(props.cityInput) || city.name.includes(props.cityInput)).splice(0,10)
                        .map((city,i)=> <option key={i}>{city.name}</option>)
                        }
                        </datalist> 
                        {props.error ? <h1>Sorry we couldn't find any information on this city, try again</h1>:null} <br />
                        <button className="submit" type="submit" >GO</button>
                    </form>
                </div>
            </div>
        </div>

    )
}



export default Cover