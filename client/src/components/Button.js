import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled.button`
  border: ${({ borderless }) =>
    borderless ? "none" : "3px solid var(--primary)"};
  border-radius: var(--border-radius);
`;

const Button = ({ title, className, icon, borderless, href, onClick }) => {
  if (href) {
    return (
      <StyledButton
        onClick={onClick}
        borderless={borderless}
        className={` ${className}`}
      >
        <Link
          to={href}
          className={`px-8 py-2  text-primary flex items-center justify-center`}
        >
          {icon && <span className="mr-3">{icon}</span>}
          {title}
        </Link>
      </StyledButton>
    );
  }

  return (
    <StyledButton
      onClick={onClick}
      borderless={borderless}
      className={`px-8 py-2 flex items-center text-primary ${className}`}
    >
      {icon && <span className="mr-3">{icon}</span>}

      {title}
    </StyledButton>
  );
};

export default Button;
