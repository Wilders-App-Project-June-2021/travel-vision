import "./Styles.css";
import React, {useState, useEffect}from "react";
import axios from "axios"
import hello from '../data/hello'




const Greeting = (props)=>{

   
    const [currentTime, setCurrentTime]= React.useState(getTime())

    function getTime(){
        const date = new Date ()
        const time =date.toLocaleString('en-GB', { timeZone: props.timeZone }).split(",");
        const newTime =[...time[1]]
        newTime.splice(6,3)
        return newTime.join('')
    }

    const getGreeting = (code) =>{
        const lowerCaseCode= code.toLowerCase()
        const result=  hello.find((item)=> item[lowerCaseCode])
       return result[lowerCaseCode]
     }

    setInterval(()=> setCurrentTime(getTime()),1000)

    const greetingMobile = 
        <span>
            <h1 className="greeting">{getGreeting(props.countryCode)}! The time in</h1>
            <p className="city-country pink">{props.cities}, {props.countryName}</p>
            <h1 className="greeting">is <b className="pink greeting">{currentTime}</b></h1>
        </span>

    const greetingDesktop =
        <span>
            <p className="greeting-hello">{getGreeting(props.countryCode)}!</p>
            <span className="greeting"> The time in</span>
            <span className="city-country pink">{props.cities}, {props.countryName}</span>
            <span className="greeting">is <b className="pink greeting">{currentTime}</b></span>
        </span>


    return (

        <div className="greeting-container">
        {greetingDesktop}
        </div>
    )
    }


export default Greeting

