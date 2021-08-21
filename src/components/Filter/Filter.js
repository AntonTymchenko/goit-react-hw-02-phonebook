import React from "react";

const Filter = ({ onFilterChange }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" onChange={onFilterChange} />
    </label>
  );
};

export default Filter;
