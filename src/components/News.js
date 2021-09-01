import React, { useState } from "react";
import "./News.css";
import logo from "./newspaper.svg";
import parser from "html-react-parser";

const News = ({ title, description, url, countryName, newsImg }) => {
  const [noImage, setNoImage] = useState(false);
  return (
    <div className="news fadeIn">
      <h3 className="news-title">{`${title}`}</h3>
      <div className="text-icon-wrapper">
        <img
          className="news-img"
          src={
            noImage
              ? "https://www.cityofgraham.com/wp-content/uploads/2019/12/news.jpeg"
              : `${newsImg}`
          }
          onError={() => setNoImage(true)}
          alt="News Image"
        />
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
