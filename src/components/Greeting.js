import "./Main.css";
import React, {useState, useEffect}from "react";
import axios from "axios"
import hello from '../data/hello'




const Greeting = (props)=>{

   
    const [currentTime, setCurrentTime]= React.useState(getTime())
    const [timeZone,getTimeZone] = useState(props.timeZone)

    useEffect(()=>{
        console.log('COMPONENT DID MOUNT')
    }, [])

    function getTime(){
        const date = new Date ()
        const time = date.toLocaleString('en-GB', { timeZone: props.timeZone }).split(",");
        const newTime =[...time[1]]
        newTime.splice(6,3)
        return newTime.join('')
    }

    const getGreeting = (code) =>{
       if(code){ const lowerCaseCode = code.toLowerCase()
        const result = hello.find((item)=> item[lowerCaseCode])
       return result[lowerCaseCode]}
     }


     console.log(interval)
     var interval = setInterval(()=> setCurrentTime(getTime()),60000);

    // useEffect(()=>{
    //    return ()=> clearInterval(interval)
    // },[props.countryCode])


    const greetingMobile = 
        <span>
            <h1 className="greeting-hello">{getGreeting(props.countryCode)}! The time in</h1>
            <p className="city-country pink" key={props.cities}>{props.cities === "" ? null : `${props.cities},`}{props.countryName}</p>
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

        <div className="greeting-container swoopInTop">
        {greetingMobile}
        </div>
    )
    }


export default Greeting

