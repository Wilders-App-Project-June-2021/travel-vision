import "./Styles.css";
import React, {useState, useEffect}from "react";
import axios from "axios"




const Greeting = (props)=>{

   
    const [currentTime, setCurrentTime]= React.useState(getTime())
    const [theGreeting, setTheGreeting] = React.useState("Hello!")

    function getTime(){
        const date = new Date ()
        const time =date.toLocaleString('en-GB', { timeZone: props.timeZone }).split(",");
        const newTime =[...time[1]]
        newTime.splice(6,3)
        return newTime.join('')
    }
    setInterval(()=> setCurrentTime(getTime()),1000)
   
    const getGreeting =() => {
        axios.get(`https://fourtonfish.com/hellosalut/?lang=${props.countryLanguage}`)
        .then((result) => setTheGreeting(result.data))
        .catch((error) => console.log("error", error));
      }
      useEffect(() => {
        getGreeting();
      }, []);
    return (
        <div className="greeting-container">
            <h1 className="greeting">{theGreeting.hello}! The time in</h1>
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