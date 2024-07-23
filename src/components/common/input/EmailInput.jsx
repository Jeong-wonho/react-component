import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage, StyledInput } from '../../styles/InputStyles';

const EmailInput = ({ name, label }) => {
  const {
    register,
    formState: { errors },
    trigger
  } = useFormContext();

  const validation = {
    required: 'Email is required',
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: 'Invalid email address',
    },
  };

  const handleBlur = (e) => {
    if (e.target.value) {
      e.target.blur();
    }
  };

  const handleKeyDown = async (e) => {
    if (e.key === 'Tab') {
      await trigger(name);
    }
  };
  
  return (
    <div>
      <label>{label}</label>
      <StyledInput
        type="text"
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        {...register(name, validation)}
      />
      {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
    </div>
  );
};

export default EmailInput;