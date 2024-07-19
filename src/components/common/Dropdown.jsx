import React from "react";
import "../styles/css/Dropdown.css"

const Dropdown = ({ options, value, onChange, label }) => {
  return (
    <>
      <div className="select-box">
      {label && <label className="select-label">{label}</label>}
        <select className="custom-select" name="dropbox" id="dropbox" onChange={onChange}>
          {options.map((option) => {
            return (
              <option key={option.id} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default Dropdown;
