import "./Header.css";
import "./vivify.min.css";
import Input from "./Input.js";
import React, {useState, useEffect}from "react";


const Header = (props)=> {


    return (
        
        <div className="header-wrapper">
            <div className="header-desktop">
                <div className="header-filter">
                    <div className="logo-desktop">
                        <img className="logo-img-desktop jumpInLeft" src="../img/landscape.png" alt="" />
                        <b className="title-desktop popInTop">Travel Vision</b>
                    </div>
                </div>
            </div>
        <Input 
        countryInputHandler={props.countryInputHandler}
        cityInputHandler={props.cityInputHandler}
        submitInfo={props.submitInfo}
        countryName={props.countryName}         
        error={props.error}
        
        citiesList={props.citiesList}
        fullCitiesList={props.fullCitiesList}
        cityInput={props.cityInput}
        countryCodeInput={props.countryCodeInput}
        />
        
        

        
        </div>
        )

}

export default Header