//😎 😎 😎 😎 😎 😎 😎 😎 😎
import "./Styles.css"
import axios from "axios"
import './Cover.css'
import nations from "../data/nations"

const Cover = (props)=>{

// GREETING IN LANGUAGE CODE

    return (
        <div className="wrapper">
            <div className="second-bg">
                <img className="logo" src="../img/landscape.png" alt="Logo" />
                <h1 className="title">Travel Vision</h1>
                <form onSubmit={(e)=>props.getCityInfo(e)}>
                    <div className ="input-wrapper"> 
                        <select className="input-country" id="country" placeholder= "Country" required onChange={(e)=>props.handleCountryInput(e) } >
                            <option value="">Select a Country</option>
                            {nations.map((country,i)=> <option id={country.name} key={i} value={country.code} > {country.name} </option>)}
                        </select>
                        <input className="input-city" type="text" id="city"  placeholder="Enter a City" required onChange={(e)=> props.handleCityinput(e)}></input>
                        {props.error? <h1>Sorry we couldn't find this city, try again</h1>:null}
                    </div>
                    <button className="submit" type="submit" >GO</button>
                </form>
            </div>
        </div>

    )
}


export default Cover