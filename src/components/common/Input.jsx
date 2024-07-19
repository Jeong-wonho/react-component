import React, { forwardRef } from "react";
import { ErrorMessage, StyledInput } from "../styles/InputStyles";
import { useFormContext } from "react-hook-form";

const Input = forwardRef(
  ({ name, label, type = "text", value, onChange, validation = {} }, ref) => {
    const {
      register,
      formState: { errors },
    } = useFormContext();
    
    return (
      <div>
        <label>{label}</label>
        <StyledInput
          ref={ref}
          type={type}
          value={value}
          {...register(name, validation)}
          onChange={onChange}
        />
        {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
      </div>
    );
  }
);

export default Input;
