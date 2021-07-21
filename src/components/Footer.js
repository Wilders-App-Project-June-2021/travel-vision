import "./Main.css";
import "./vivify.min.css"
import React, {useState, useEffect}from "react";


const Footer = ()=> {


    return (

    <div className="footer-wrapper">
        <div className="footer">
                <span className="made-by">Made by <a href="http://wildcodeschool.com" target="new">Wild Code School</a> Students</span>
                <div className="students">
                    <div className="student-box">
                        <a href="" target="new"><img class="footer-img" src="" alt="" /></a>
                        <a href="" target="new"><p className="names">Lorianne</p></a>
                    </div>
                    <div className="student-box">
                        <a href="" target="new"><img class="footer-img" src="" alt="" /></a>
                        <a href="" target="new"><p className="names">Salvatore</p></a>
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