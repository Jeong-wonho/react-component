import React from "react";
import StyledButton from "../../styles/ButtonStyles";

const Button = ({ label, variant, onClick, disabled, type }) => {
  return (
    <StyledButton variant={variant} onClick={onClick} disabled={disabled} type={type}> 
      {label}
    </StyledButton>
  );
};

export default Button;
