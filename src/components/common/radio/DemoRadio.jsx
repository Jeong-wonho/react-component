import React, { useState } from "react";
import RadioGroup from "./RadioGroup";

const DemoRadio = () => {
  const [selected, setSelectedOption] = useState(" ");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const radioOptions = [
    { label: "samsung", value: "삼성 sds" },
    { label: "lg", value: "엘지 cns" },
    { label: "sk", value: "sk cnc" },
  ];
  return (
    <div className={"appStyle"}>
      <h1 className={"headerStyle"}>Select an Option</h1>
      <RadioGroup
        options={radioOptions}
        name="example"
        onChange={handleOptionChange}
      />
      <p className={"selectedOptionStyle"}>Selected Option: {selected}</p>
    </div>
  );
};

export default DemoRadio;
