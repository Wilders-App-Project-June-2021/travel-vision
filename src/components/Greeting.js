import "./Styles.css";
import React from 'react'


let theGreeting = "Hola";


const Greeting = (props)=>{

   
    const [currentTime, setCurrentTime]= React.useState(getTime())


    function getTime(){
        const time = new Date ()
        const newTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
        return newTime
    }
    
    setInterval(()=> setCurrentTime(getTime()),1000)
   

    return (
        <div className="">
            <h1 className="greeting">{theGreeting}! The time in</h1>
            <p className="city-country pink">{props.cities}, {props.country}</p>
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