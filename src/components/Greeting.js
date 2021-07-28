import "./Main.css";
import React, {useState, useEffect}from "react";
import axios from "axios"
import hello from '../data/hello'
import Clock from 'react-live-clock';




const Greeting = (props)=>{
    const [timeZone,getTimeZone] = useState(props.timeZone)

    const getGreeting = (code) =>{
       if(code){ const lowerCaseCode = code.toLowerCase()
        const result = hello.find((item)=> item[lowerCaseCode])
       return result[lowerCaseCode]}
     }


    const greetingMobile = 
        <span>
            <h1 className="greeting-hello">{getGreeting(props.countryCode)}! The time in</h1>
            <p className="city-country pink" key={props.cities}>{props.cities === "" ? null : `${props.cities},`}{props.countryName}</p>
            <h1 className="greeting">is <b className="pink greeting">
            <Clock format={'HH:mm'} ticking={true} timezone={props.timeZone } />
                </b></h1>
        </span>

    const greetingDesktop =
        <span>
            <p className="greeting-hello">{getGreeting(props.countryCode)}!</p>
            <span className="greeting"> The time in</span>
            <span className="city-country pink">{props.cities}, {props.countryName}</span>
            <span className="greeting">is <b className="pink greeting">
                <Clock format={'HH:MM'} ticking={true} timezone={props.timeZone } />
                </b></span>
        </span>


    return (

        <div className="greeting-container swoopInTop">
        {greetingMobile}
        </div>
    )
    }


export default Greeting

