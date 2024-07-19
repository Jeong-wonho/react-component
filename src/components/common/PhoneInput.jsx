import React, { forwardRef, useImperativeHandle, useState, useEffect } from "react";
import Input from "./Input";
import { useFormContext } from "react-hook-form";

const PhoneInput = forwardRef(({ name, label, validation }, ref) => {
  const { register, setValue } = useFormContext();
  const [value, setValueState] = useState("");

  const formatPhoneNumber = (number) => {
    if (!number) return number;
    const cleaned = ("" + number).replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);
    console.log("match", match);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
    return cleaned;
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const onlyNumbers = inputValue.replace(/\D/g, ''); // 숫자만 남김
    const formattedNumber = formatPhoneNumber(onlyNumbers);
    console.log('formattedNumber', formattedNumber);
    setValueState(formattedNumber);
    console.log('name', name);
    setValue(name, formattedNumber);
  };

  useImperativeHandle(ref, () => ({
    blur: () => {
      if (value) {
        ref.current.blur();
      }
    },
  })
);

  return (
    <div>
      <label>{label}</label>
      <Input
        ref={ref}
        type="text"
        value={value}
        {...register(name, validation)}
        onChange={handleChange}
      />
    </div>
  );
});

export default PhoneInput;
