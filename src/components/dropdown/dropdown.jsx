import React from "react";
import css from "./dropdown.module.scss";

const Dropdown = ({ options, selectedOption, handleChange }) => {
  return (
    <select
      className={css.dropdown}
      value={selectedOption}
      onChange={(e) => handleChange(e.target.value)}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
