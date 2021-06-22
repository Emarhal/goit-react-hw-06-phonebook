import React from "react";
import styles from "./Filter.module.css";
import PropTypes from "prop-types";

const Filter = ({ filter, handleChange }) => {
  return (
    <div>
      <h2>Find contacts by name</h2>
      <input
        id="filter"
        name="filter"
        type="text"
        className={styles.formInput}
        onChange={handleChange}
        value={filter}
      ></input>
    </div>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
export default Filter;
