import "./Styles.css";
import React from 'react'






let theGreeting = "Hola";
let city = "Madrid";
let country = "Spain";


const Greeting = ()=>{

    let time = new Date ()
    let newTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    const [currentTime, setCurrentTime]= React.useState(newTime)

    // console.log(new Date().toLocaleString())
    
    // setInterval(()=> {},1000)


    return (
        <div className="wrapper">
            <h1>{theGreeting}! The time in</h1>
            <p className="city-country pink">{city}, {country}</p>
            <h1>is <b className="pink">{currentTime}</b></h1>
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