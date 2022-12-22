import "./NewSearchForm.css";
import { useState } from "react";
import PropTypes from "prop-types";

const NewSearchForm = ({ searchCityCallback }) => {
  const [formCity, setFormCity] = useState(" ");

  const onCityChange = (event) => {
    console.log("handle change called");
    console.log(
      `target name: ${event.target.name}, value: ${event.target.value} `
    );
    setFormCity(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();

    searchCityCallback({
      location: formCity,
    });

    setFormCity(" ");
  };
  //   console.log("form city is:", formCity);
  return (
    <form onSubmit={onFormSubmit}>
      <div className="search-input">
        <label htmlFor="city"></label>
        <input
          type="text"
          name="city"
          value={formCity}
          onChange={onCityChange}
        />
      </div>
      <div className="submit-search">
        <input type="submit" value="Search now!" />
      </div>
    </form>
  );
};

export default NewSearchForm;

NewSearchForm.propTypes = {
  searchCityCallback: PropTypes.func.isRequired,
};
