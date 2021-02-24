import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 3px solid var(--primary);
  border-radius: var(--border-radius);
`;

const Button = ({ title, className }) => {
  return (
    <StyledButton className={`px-8 py-2 text-primary ${className}`}>
      {title}
    </StyledButton>
  );
};

export default Button;
