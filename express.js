require("dotenv").config();

const express = require("express");

const app = express();

const axios = require("axios");

const qs = require("querystring");

const corsAnywhere = require("cors-anywhere");

const CORS_PROXY_PORT = 5000;

// const expressHttpProxy = require('express-http-proxy')

const cors = require("cors");

const path = require("path");

app.use(express.static(path.join(__dirname, "build")));

corsAnywhere
  .createServer({})

  .listen(
    CORS_PROXY_PORT,

    () =>
      console.log(
        `Internal CORS Anywhere server started at port ${CORS_PROXY_PORT}`
      )
  );

// app.use(expressHttpProxy(`localhost:${CORS_PROXY_PORT}`))

const APP_PORT = process.env.PORT || 8080;

app.listen(APP_PORT, () => {
  console.log(`External CORS cache server started at port ${APP_PORT}`);
});

const data = qs.stringify({
  client_id: `${process.env.REACT_APP_API_KEY_AMADEUS}`,

  client_secret: `${process.env.REACT_APP_API_SECRET_AMADEUS}`,

  grant_type: "client_credentials",
});

const config = {
  method: "post",

  url: "https://test.api.amadeus.com/v1/security/oauth2/token",

  headers: { "Content-Type": "application/x-www-form-urlencoded" },

  data: data,
};

app.get("/api/travel-info/:country", cors(), (req, res, next) => {
  const country = req.params.country;

  // res.send(country)

  axios(config)
    .then((authorization) => {
      const config2 = {
        method: "get",

        url: `https://test.api.amadeus.com/v1/duty-of-care/diseases/covid19-area-report?countryCode=${country}`,

        // url: `https://test.api.amadeus.com/v1/reference-data/airlines?airlineCodes=${country}`,

        headers: {
          Authorization: `Bearer ${authorization.data["access_token"]}`,
        },
      };

      axios(config2).then((result) => res.send(result.data));
    })

    .catch((error) => console.log("error", error));
});

app.get("/api/news/:city/:country/:date/:oldDate", cors(), (req, res, next) => {
  const { city, country, date, oldDate } = req.params;

  axios
    .get(
      `https://newsapi.org/v2/everything?qInTitle="${city}"+${country}&language=en&sortBy=popularity&to=${date}&from=${oldDate}&pageSize=3&apiKey=${process.env.REACT_APP_API_NEWS}`
    )
    .then((result1) => {
      if (result1.data.articles.length < 5) {
        axios
          .get(
            `https://newsapi.org/v2/everything?qInTitle=${country}&language=en&sortBy=popularity&to=${date}&from=${oldDate}&pageSize=${
              5 - result1.data.articles.length
            }&apiKey=${process.env.REACT_APP_API_NEWS}`
          )
          .then((result2) => {
            res.send([...result1.data.articles, ...result2.data.articles]);
          });
      } else {
        res.send(result1.data.articles);
      }
    })
    .catch((err) => console.log(err));
});

app.get("/api/health-news/:country/:date", cors(), (req, res, next) => {
  const { country, date } = req.params;

  axios
    .get(
      `https://newsapi.org/v2/everything?qInTitle=(${country}%20AND%20coronaVirus)&from=${date}pageSize=1&language=en&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_NEWS}`
    )
    .then((result2) => {
      res.send(result2.data.articles[0]);
    });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
