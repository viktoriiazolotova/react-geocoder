import PropTypes from "prop-types";

import "./Location.css";

function Location(props) {
  const location = props.location;
  const latitude = props.latitude;
  const longitude = props.longitude;

  return (
    <div>
      <h2>Results for: {location}</h2>
      <ul>
        <li>Latitude: {latitude}</li>
        <li>Longitude: {longitude}</li>
      </ul>
    </div>
  );
}

Location.propTypes = {
  location: PropTypes.string.isRequired,
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
};
export default Location;
