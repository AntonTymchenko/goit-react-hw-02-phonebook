import React from "react";
import PropTypes from "prop-types";
import s from "./Filter.module.css";

const Filter = ({ onFilterChange }) => {
  return (
    <>
      <h2>Contacts</h2>
      <label>
        Find contacts by name
        <input
          type="text"
          onChange={onFilterChange}
          className={s.inputFilter}
          placeholder="Who are you looking for ?"
        />
      </label>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};
