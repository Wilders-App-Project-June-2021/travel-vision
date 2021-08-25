import React from "react";
import "./News.css";
import logo from "./newspaper.svg";
import parser from "html-react-parser";

const News = ({ title, description, url, countryName, newsImg }) => {
  return (
    <div className="news fadeIn">
      <h3 className="news-title">{`${title}`}</h3>
      <div className="text-icon-wrapper">
        <img className="news-img" src={`${newsImg}`} alt="News Image" />
        <p className="news-description">
          {description.includes("<") ? parser(description) : description}
        </p>
        <a href={`${url}`} className="news-link" target="new">
          <span className="news-icon" alt="news-link">
            {" "}
            🗞{" "}
          </span>
        </a>
      </div>
    </div>
  );
};

export default News;
