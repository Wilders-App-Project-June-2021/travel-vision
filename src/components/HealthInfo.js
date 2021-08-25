import React, { useState, useEffect } from "react";
import "./Health.css";
import Health from "./Health";
import axios from "axios";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useQuery } from "react-query";
import parse from "html-react-parser";

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
      },
      refetchOnWindowFocus: true,
      cacheTime: 600000,
      staleTime: 600000,
    }
  );

  console.log(whoop, data, isLoading);

  // travelInfo.areaAccessRestriction.declarationDocuments.text
  // travelInfo.areaAccessRestriction.declarationDocuments.travelDocumentationLink
  // travelInfo.diseaseTesting.requirement
  // travelInfo.diseaseTesting.minimumAge
  // travelInfo.diseaseTesting.testType
  // travelInfo.diseaseTesting.rules
  // travelInfo.diseaseTesting.text
  // travelInfo.diseaseVaccination.qualifiedVaccines
  // travelInfo.diseaseVaccination.acceptedCertificates
  // travelInfo.diseaseVaccination.text
  // travelInfo.entry.text
  // travelInfo.exit.text
  // travelInfo.mask
  // travelInfo.areaRestrictions[0].text

  useEffect(() => {
    getData();
  }, [props.countryName]);

  const notAvailable = (path) =>
    path === undefined ? "caching in progress" : path;

  return (
    <div>
      {apiResponse && !isLoading ? (
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
          travelDoc={parse(
            travelInfo.areaAccessRestriction.declarationDocuments.text
          )}
          travelDocLink={
            travelInfo.areaAccessRestriction.declarationDocuments
              .travelDocumentationLink
          }
          travelDocuments={parse(
            travelInfo.areaAccessRestriction.diseaseVaccination.text
          )}
          testRequirement={
            travelInfo.areaAccessRestriction.diseaseTesting.requirement
          }
          testsType={travelInfo.areaAccessRestriction.diseaseTesting.testType}
          testRequirementLink={
            travelInfo.areaAccessRestriction.diseaseTesting.rules
          }
          testRequirementDetails={parse(
            travelInfo.areaAccessRestriction.diseaseTesting.text
          )}
          vaccinesList={
            travelInfo.areaAccessRestriction.diseaseVaccination
              .qualifiedVaccines
          }
          accepetedCertificates={
            travelInfo.areaAccessRestriction.diseaseVaccination
              .acceptedCertificates
          }
          entryInfo={parse(travelInfo.areaAccessRestriction.entry.text)}
          maskInfo={parse(travelInfo.areaAccessRestriction.mask.text)}
          oneDoseVaccinated={travelInfo.areaVaccinated[0].percentage}
          fullyVaccinated={travelInfo.areaVaccinated[1].percentage}
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
        //  travelInfo &&
        // <div>
        // {/* {parse(travelInfo.areaAccessRestriction.declarationDocuments.text)} */}
        // {/* {travelInfo.areaAccessRestriction.declarationDocuments.travelDocumentationLink} */}
        // {/* {travelInfo.areaAccessRestriction.diseaseTesting.requirement} */}
        // {/* {travelInfo.areaAccessRestriction.diseaseTesting.testType} */}
        // {/* {travelInfo.areaAccessRestriction.diseaseTesting.rules}  */}
        // {/* {parse(travelInfo.areaAccessRestriction.diseaseTesting.text)} */}
        // {/* {travelInfo.areaAccessRestriction.diseaseVaccination.qualifiedVaccines.map((item)=> <p key={item} > {item}</p>)} */}
        // {/* {travelInfo.areaAccessRestriction.diseaseVaccination.acceptedCertificates.map((item)=> <p key={item} > {item}</p>)} */}
        // {parse(travelInfo.areaAccessRestriction.diseaseVaccination.text)}
        // {/* {parse(travelInfo.areaAccessRestriction.entry.text)} */}
        // {parse(travelInfo.areaAccessRestriction.exit.text)}
        // {/* {parse(travelInfo.areaAccessRestriction.mask.text)} */}
        // {parse(travelInfo.areaRestrictions[0].text)}
        // </div>
      }
    </div>
  );
}

export default HealthInfo;
