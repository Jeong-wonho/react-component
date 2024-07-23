import React from "react";

const RadioGroup = ({ options, name, onChange }) => {
  return (
    <div className={"radioGroupStyle"}>
      {options.map((option, index) => {
        return (
          <label key={index} className={"radioLabelStyle"}>
            <input
              type="radio"
              name={name}
              value={option.value}
              onChange={onChange}
              className={"radioInputStyle"}
            />
            {option.label}
          </label>
        );
      })}
    </div>
  );
};

export default RadioGroup;
