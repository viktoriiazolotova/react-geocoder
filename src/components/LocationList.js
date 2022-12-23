import PropTypes from "prop-types";

import Location from "./Location";

function LocationList(props) {
  const locationComponents = [];
  const locationList = props.locationList;
  //   console.log(locationList);

  for (const city of locationList) {
    locationComponents.push(
      <Location
        // key={city.location}
        // id={city.id}
        location={city.location}
        latitude={city.latitude}
        longitude={city.longitude}
      />
    );
  }

  return <div>{locationComponents}</div>;
}

LocationList.propTypes = {
  locationList: PropTypes.arrayOf(
    PropTypes.shape({
      //   id: PropTypes.number.isRequired,
      location: PropTypes.string.isRequired,
      latitude: PropTypes.string.isRequired,
      longitude: PropTypes.string.isRequired,
    })
  ),
};

export default LocationList;
