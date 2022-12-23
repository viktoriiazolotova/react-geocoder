import "./App.css";
import NewSearchForm from "./components/NewSearchForm";
import axios from "axios";
import { useState, useEffect } from "react";
import LocationList from "./components/LocationList";

function App() {
  const [locationList, setLocationList] = useState([
    { location: "Seattle", latitude: "", longitude: "" },
  ]);
  const URL = "https://us1.locationiq.com/v1/search.php";
  const LOCATIONIQ_KEY = "";

  const searchCity = (newCity) => {
    // console.log("this is new city:", newCity);
    const newLocationList = [...locationList];
    // console.log("this is list after serach function called:", newLocationList);
    // console.log(
    const newLocation = {
      location: newCity,
      latitude: "",
      longitude: "",
    };
    newLocationList.unshift(newLocation);
    setLocationList(newLocationList);
    // console.log(newLocationList);
    // console.log("this is list after set function:", locationList);
  };

  useEffect(() => {
    //   console.log("inside of use effects,", locationList);

    axios
      .get(URL, {
        params: {
          key: LOCATIONIQ_KEY,
          q: locationList[0].location,
          format: "json",
        },
      })
      .then((result) => {
        // console.log(result);
        const lat = result.data[0].lat;
        const long = result.data[0].lon;
        const locationAPIRescopy = [];
        for (const locationObejct of locationList) {
          const newLocationObject = {
            ...locationObejct,
            latitude: lat,
            longitude: long,
          };
          locationAPIRescopy.push(newLocationObject);
        }

        setLocationList(locationAPIRescopy);
      })

      .catch((err) => {
        console.log(err);
      });
  }, [locationList[0].location]);

  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>Get Latitude and Longitude</h1>
      <main>
        <NewSearchForm searchCityCallback={searchCity}></NewSearchForm>
        <h2>Results for: {locationList[0].location} </h2>
        <ul>
          <li>Latitude: {locationList[0].latitude} </li>
          <li>Longitude: {locationList[0].longitude} </li>
        </ul>
        <h1>Search History</h1>
        <LocationList locationList={locationList}></LocationList>
      </main>
    </div>
  );
}

export default App;
