import "./Footer.css";
import "./vivify.min.css"
import github from './github.svg';
import linkedin from './linkedin.svg';
import React, {useState, useEffect}from "react";


const Footer = ()=> {

    const [lorianne, setLorianne]= useState('./img/lorianne.jpg');
    const [salvo, setSalvo]= useState('./img/salvatore.png');

    return (

    <div className="footer-wrapper">
        <div className="footer">
                <span className="made-by">Made by <a href="http://wildcodeschool.com" target="new">Wild Code School</a> Students</span>
                <div className="students">
                    <div className="student-box">
                        <a href="https://github.com/Grailsidhe" target="new"><img class="footer-img" src={lorianne} onMouseOver={()=>setLorianne(`${github}`)} onMouseOut={() => setLorianne('./img/lorianne.jpg')} alt="Lorianne" /></a>
                        <a href="https://www.linkedin.com/in/lorianne-aguilar/" target="new"><p className="names">Lorianne</p></a>
                    </div>
                    <div className="student-box">
                        <a href="https://github.com/sal9110" target="new"><img class="footer-img" src={salvo} onMouseOver={()=>setSalvo(`${github}`)} onMouseOut={() => setSalvo('./img/salvatore.png')} alt="Salvatore" /></a>
                        <a href="http://linkedin.com/in/salvatore-patti-9b5198141 " target="new"><p className="names">Salvatore</p></a>
                    </div>
                    <div className="student-box">
                        <a href="" target="new"><img class="footer-img" src="" alt="" /></a>
                        <a href="" target="new"><p className="names">Natalie</p></a>
                    </div>
                </div>
                <span className="small">@ 2021 Travel Vision</span>
        </div>
        <div className="flight-link">Book a flight</div>
    </div>

    )
}

export default Footer