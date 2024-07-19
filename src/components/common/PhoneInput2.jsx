import React, { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage, StyledInput } from '../styles/InputStyles';

const PhoneInput = ({ name, label }) => {
  const { setValue, register, formState: { errors } } = useFormContext();
  const [value, setValueState] = useState('');

  const formatPhoneNumber = (number) => {
    const cleaned = number.replace(/[^\d-]/g, '');
    const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
    return cleaned;
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const formattedValue = formatPhoneNumber(inputValue);
    setValueState(formattedValue);
    setValue(name, formattedValue);
  };

  const handleBlur = (e) => {
    if (e.target.value) {
      console.log('targetVAlue', e.target.value);
      e.target.blur();
    }
  };

  useEffect(() => {
    setValue(name, value);
  }, [value, setValue, name]);

  const validation = {
    required: 'Phone number is required',
    pattern: {
      value: /^\d{3}-\d{4}-\d{4}$/,
      message: 'Invalid phone number format',
    },
  };

  return (
    <div>
      <label>{label}</label>
      <StyledInput
        type="text"
        value={value}
        {...register(name, validation)}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
    </div>
  );
};

export default PhoneInput;