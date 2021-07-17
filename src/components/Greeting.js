import "./Styles.css";
import React, { useEffect, useState } from 'react'
import axios from "axios"
import userEvent from "@testing-library/user-event";


let theGreeting = "Hola";


const Greeting = (props)=>{

   
    const [currentTime, setCurrentTime]= React.useState(getTime())
    const [theGreeting,setTheGreeting] =useState ("")

    useEffect(()=>{

       
        const options = {
            method: 'POST',
            url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2',
            headers: {
              'content-type': 'application/json',
              'x-rapidapi-key': '3c33d9276emsh08b1d1a076682d7p137adajsn7feb2e848702',
              'x-rapidapi-host': 'deep-translate1.p.rapidapi.com'
            },
            data: {q: 'Hello!', source: 'en', target: `${props.countryCode}`}
          };
          
          axios.request(options).then(function (response) {
            setTheGreeting(response.data.data.translations.translatedText);
          }).catch(function (error) {
              console.error(error);
          });
    },[])
    
    function getTime(){
        const date = new Date ()
        const time =date.toLocaleString('en-GB', { timeZone: props.timeZone }).split(",");
        const newTime =[...time[1]]
        newTime.splice(6,3)
        return newTime.join('')
    }
    
    setInterval(()=> setCurrentTime(getTime()),1000)
   

    return (
        <div className="greeting-container">
            <h1 className="greeting">{theGreeting} The time in</h1>
            <p className="city-country pink">{props.cities}, {props.countryName}</p>
            <h1 className="greeting">is <b className="pink greeting">{currentTime}</b></h1>
        </div>
    )
    }


export default Greeting


/*

componentWillMount(){
    setInterval(function(){
        this.setState({
            curTime: new Date().toLocaleString()
        })
    }.bind(this), 1000);
}

*/

/*
setInterval(()=> this.setState({time:Date.now()},1000)
*/