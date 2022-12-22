import "./App.css";
import NewSearchForm from "./components/NewSearchForm";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [locationList, setLocationObject] = useState(
    // {}
    {
      location: "Seattle",
      cityLatitude: "",
      cityLongitude: "",
    }
  );
  // console.log("this is location object:", locationList);
  const URL = "https://us1.locationiq.com/v1/search.php";
  const LOCATIONIQ_KEY = "";

  const searchCityCallback = (newCity) => {
    // console.log("this is new city:", newCity);

    // const newLocationList = [...locationList];
    const newLocationList = {
      location: newCity.location,
      cityLatitude: " ",
      cityLongitude: " ",
    };

    setLocationObject(newLocationList);
  };

  useEffect(() => {
    //   console.log("inside of use effects,", locationList);

    axios
      .get(URL, {
        params: {
          key: LOCATIONIQ_KEY,
          q: locationList.location,
          format: "json",
        },
      })
      .then((result) => {
        // console.log(result);
        const lat = result.data[0].lat;
        const long = result.data[0].lon;
        const locationAPIRescopy = () => {
          return {
            location: locationList.location,
            cityLatitude: lat,
            cityLongitude: long,
          };
        };

        setLocationObject(locationAPIRescopy);
      })

      .catch((err) => {
        console.log(err);
      });
  }, [locationList.location]);

  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>Get Latitude and Longitude</h1>
      <main>
        <NewSearchForm searchCityCallback={searchCityCallback}></NewSearchForm>
        <h2>Results for: {locationList.location} </h2>
        <ul>
          <li>Latitude: {locationList.cityLatitude} </li>
          <li>Longitude: {locationList.cityLongitude} </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
