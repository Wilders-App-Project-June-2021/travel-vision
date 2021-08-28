import React, { useState, useEffect } from "react";
import "./Health.css";
import Health from "./Health";
import axios from "axios";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useQuery } from "react-query";
import parser from "html-react-parser";

function HealthInfo(props) {
  const [healthInfo, setHealthInfo] = useState([]);
  const [healthNews, setHealthNews] = useState([]);
  const [apiResponse, setApiResponse] = useState(false);

  const getData = () => {
    axios
      .get(`https://api.covid19api.com/summary`)
      .then((covidData) => {
        if (covidData.data.Countries) {
          const filtered = covidData.data.Countries.filter(
            (item) => item.CountryCode === props.countryCode
          );
          setHealthInfo(filtered[0]);
        }
        // setApiResponse(true)
        axios
          .get(
            `https://travel-vision.herokuapp.com/api/health-news/${
              props.countryName
            }/${props.getDate()}`
          )
          .then((covidNews) => {
            console.log(covidNews.data);
            setHealthNews(covidNews.data);
            setApiResponse(true);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [travelInfo, setTravelInfo] = useState("");

  const getTravelInfo = async ({ queryKey }) => {
    const countryCode = queryKey[1].country;
    return await axios
      .get(`https://travel-vision.herokuapp.com/api/travel-info/${countryCode}`)
      .then((res) => res.data);
  };

  const {
    data,
    isLoading,
    error: whoop,
  } = useQuery(
    props.countryCode && ["travelInfo", { country: props.countryCode }],
    getTravelInfo,
    {
      enabled: props.countryCode.length > 0,
      onSuccess: (data) => {
        setTravelInfo(data.data);
        console.log(data, whoop, travelInfo);
        setApiResponse(true);
      },
      refetchOnWindowFocus: true,
      cacheTime: 600000,
      staleTime: 600000,
    }
  );

  if (travelInfo === "" && data) {
    setTravelInfo(data.data);
  }

  useEffect(() => {
    getData();
  }, [props.countryName]);

  const notAvailable = (path) =>
    path === undefined ? "caching in progress" : path;

  return (
    <div>
      {apiResponse || travelInfo ? (
        <Health
          key={healthInfo && healthInfo.ID}
          id={healthInfo && healthInfo.ID}
          countryName={props.countryName}
          countryCode={props.countryCode}
          confirmed={healthInfo && notAvailable(healthInfo.TotalConfirmed)}
          newConfirmed={healthInfo && notAvailable(healthInfo.NewConfirmed)}
          recovered={healthInfo && notAvailable(healthInfo.TotalRecovered)}
          newRecovered={healthInfo && notAvailable(healthInfo.NewRecovered)}
          deaths={healthInfo && notAvailable(healthInfo.TotalDeaths)}
          newDeaths={healthInfo && notAvailable(healthInfo.NewDeaths)}
          title={healthNews && healthNews.title}
          description={healthNews && healthNews.description}
          url={healthNews && healthNews.url}
          // image={healthNews && healthNews.urlToImage}

          travelInfo={travelInfo.areaAccessRestriction}
          oneDoseVaccinated={
            travelInfo && travelInfo.areaVaccinated[0].percentage
          }
          fullyVaccinated={
            travelInfo && travelInfo.areaVaccinated[1].percentage
          }
        />
      ) : (
        <Loader
          type="Plane"
          color="#00BFFF"
          height={100}
          width={300}
          radius={500}
        />
      )}
      {
        // travelDoc={
        //   travelInfo.areaAccessRestriction.declarationDocuments.text &&
        //   parser(travelInfo.areaAccessRestriction.declarationDocuments.text)
        // }
        // travelDocLink={
        //   travelInfo.areaAccessRestriction &&
        //   travelInfo.areaAccessRestriction.declarationDocuments
        //     .travelDocumentationLink
        // }
        // travelDocuments={
        //   travelInfo.areaAccessRestriction &&
        //   travelInfo.areaAccessRestriction.diseaseVaccination.text &&
        //   parser(travelInfo.areaAccessRestriction.diseaseVaccination.text)
        // }
        // testRequirement={
        //   travelInfo.areaAccessRestriction &&
        //   travelInfo.areaAccessRestriction.diseaseTesting.requirement
        // }
        // testsType={
        //   travelInfo &&
        //   travelInfo.areaAccessRestriction.diseaseTesting.testType
        // }
        // testRequirementLink={
        //   travelInfo && travelInfo.areaAccessRestriction.diseaseTesting.rules
        // }
        // testRequirementDetails={
        //   travelInfo &&
        //   parser(travelInfo.areaAccessRestriction.diseaseTesting.text)
        // }
        // vaccinesList={
        //   travelInfo.areaAccessRestriction &&
        //   travelInfo.areaAccessRestriction.diseaseVaccination
        //     .qualifiedVaccines
        // }
        // accepetedCertificates={
        //   travelInfo.areaAccessRestriction &&
        //   travelInfo.areaAccessRestriction.diseaseVaccination
        //     .acceptedCertificates
        // }
        // entryInfo={
        //   travelInfo && parser(travelInfo.areaAccessRestriction.entry.text)
        // }
        // maskInfo={
        //   travelInfo && parser(travelInfo.areaAccessRestriction.mask.text)
        // }
      }
    </div>
  );
}

export default HealthInfo;
