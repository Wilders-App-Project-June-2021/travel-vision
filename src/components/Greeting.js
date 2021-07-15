import "./Styles.css";
import React from 'react'
import axios from "axios"


let theGreeting = "Hola";


const Greeting = (props)=>{

   
    const [currentTime, setCurrentTime]= React.useState(getTime())


    function getTime(){
        const time = new Date ()
        const hours= (time.getHours()).toString().length < 2? "0" + time.getHours() : time.getHours()
        const minutes =(time.getMinutes()).toString().length < 2? "0" + time.getMinutes() : time.getMinutes()
        const newTime = `${hours}:${minutes}`
        return newTime
    }
    
    setInterval(()=> setCurrentTime(getTime()),1000)
   

    return (
        <div className="">
            <h1 className="greeting">{theGreeting}! The time in</h1>
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