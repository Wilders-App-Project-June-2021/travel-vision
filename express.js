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

app.get("/:country", cors(), (req, res, next) => {
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
    .then((result) => {
      console.log(result.data);
      res.send(result.data);
    })
    .catch((err) => console.log(err));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// const data = qs.stringify( {
//     'client_id': `B8fMDh1i59rGBJVA5VQ63272mOk7Loze`,
//     'client_secret': `T40RL9KgpUlSee2H`,
//     'grant_type': 'client_credentials'
//   })

//   const config = {
//     method: 'post',
//     url: 'https://test.api.amadeus.com/v1/security/oauth2/token',
//     headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
//     data : data
//   };

//     axios(config)
//         .then((authorization) =>{

//           const config2 = {
//             method: 'get',
//             url: 'http://0.0.0.0:8080/https://test.api.amadeus.com/v1/reference-data/airlines?airlineCodes=BA',
//             headers: { Authorization : `Bearer ${authorization.data['access_token']}` },
//           };

//           axios(config2)
//           .then(res => console.log(res.data.data))
//         })
//         .catch((error) => console.log("error", error))

// aaaa
// https://test.api.amadeus.com/v1/reference-data/airlines?airlineCodes=BA

// const data = qs.stringify( {
//   'client_id': `${process.env.REACT_APP_API_KEY_AMADEUS}`,
//   'client_secret': `${process.env.REACT_APP_API_SECRET_AMADEUS}`,
//   'grant_type': 'client_credentials'
// })

// const config = {
//   method: 'post',
//   url: 'https://test.api.amadeus.com/v1/security/oauth2/token',
//   headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
//   data : data
// };

//   axios(config)
//       .then((authorization) =>{
//           console.log(authorization)
//         // axios
//         // .get('https://test.api.amadeus.com/v2/duty-of-care/diseases/covid19-area-report',
//         // {

//         //   auth:{'Bearer': `${authorization.data['access_token']}`}
//         // })
//         // console.log(authorization.data['access_token'])
//       })
//       .catch((error) => console.log("error", error))
