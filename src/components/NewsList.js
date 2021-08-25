import axios from "axios";
import React, { useEffect, useState } from "react";
import News from "./News";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const NewsList = (props) => {
  const [countryNews, setCountyNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://travel-vision.herokuapp.com/api/news/${props.cities}/${
          props.countryName
        }/${props.getDate()}/${props.getOlderDate()}`
      )
      .then((res) => {
        setCountyNews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.cities]);

  // FOR HEALTHWATCH https://newsapi.org/v2/everything?qInTitle=(${props.countryName}%20AND%20coronaVirus)&pageSize=1&language=en&sortBy=relevancy&apiKey=862d686e64564ff38a69a93c176de68e

  return (
    <div className="news-wrapper">
      {
        countryNews.length > 0 ? (
          countryNews.map((news, index) => {
            return (
              <News
                key={index}
                id={index}
                title={news.title}
                description={news.description}
                url={news.url}
                countryName={props.countryName}
                newsImg={news.urlToImage}
              />
            );
          })
        ) : (
          <div className="no-news">
            We could not find any current news articles for{" "}
            {`${props.countryName}`}.
          </div>
        )

        // <Loader
        //     type="Plane"
        //     color="#00BFFF"
        //     height={100}
        //     width={100}
        //     radius={500}
        //     timeout={4000}
        // />
      }
    </div>
  );
};

export default NewsList;
