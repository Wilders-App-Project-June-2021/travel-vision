import "./Footer.css";
import "./vivify.min.css";
import github from "./github.svg";
import linkedin from "./linkedin.svg";
import React, { useState, useEffect } from "react";

const Footer = () => {
  const [lorianne, setLorianne] = useState("./img/lorianne.jpg");
  const [salvo, setSalvo] = useState("./img/salvatore.png");
  const [natalie, setNatalie] = useState("./img/natalie.jpg");

  return (
    <div className="footer-wrapper">
      <div className="flight-link">
        <a href="https://www.skyscanner.com/" target="new" className="flight-a">
          Book a flight
        </a>
      </div>
      <div className="footer">
        <span className="made-by">
          Made by{" "}
          <a href="http://wildcodeschool.com" target="new" className="a">
            Wild Code School
          </a>{" "}
          Students
        </span>
        <div className="students">
          <div className="student-box">
            <a href="https://github.com/Grailsidhe" target="new">
              <img
                className="footer-img"
                src={lorianne}
                onMouseOver={() => setLorianne(`${github}`)}
                onMouseOut={() => setLorianne("./img/lorianne.jpg")}
                alt="Lorianne"
              />
            </a>
            <p className="names">
              <a
                href="https://www.linkedin.com/in/lorianne-aguilar/"
                target="new"
                className="a">
                Lorianne
              </a>
              <br />
              <span className="surnames">Aguilar</span>
            </p>
          </div>
          <div className="student-box">
            <a href="https://github.com/sal9110" target="new">
              <img
                className="footer-img"
                src={salvo}
                onMouseOver={() => setSalvo(`${github}`)}
                onMouseOut={() => setSalvo("./img/salvatore.png")}
                alt="Salvatore"
              />
            </a>
            <p className="names">
              <a
                href="http://linkedin.com/in/salvatore-patti-9b5198141"
                target="new"
                className="a">
                Salvatore
              </a>
              <br />
              <span className="surnames">Patti</span>
            </p>
          </div>
        </div>
        <span className="small">?? 2021 Travel Vision</span>
      </div>
    </div>
  );
};

export default Footer;
