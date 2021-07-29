import "./Header.css";
import "./vivify.min.css";
import React, {useState, useEffect}from "react";
import Input from "./Input";


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
            //  getCityInfo={props.getCityInfo}
            countryName={props.countryName}
            handleCityinput={props.handleCityinput}
            handleCountryInput={props.handleCountryInput}
            error={props.error}/>
        </div>
        )

}

export default Header