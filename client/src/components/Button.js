import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineLoading } from "@react-icons/all-files/ai/AiOutlineLoading";

const StyledButton = styled.button`
  border: ${({ borderless }) =>
    borderless ? "none" : "3px solid var(--primary)"};
  border-radius: var(--border-radius);
  background-color: ${({ loading }) => (loading ? "var(--grey-dark)" : "")};
  color: ${({ loading }) => (loading ? " var(--grey)" : "")};
`;

const Button = ({
  title,
  className,
  icon,
  borderless,
  href,
  onClick,
  loading,
}) => {
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
      loading={loading}
      className={`px-8 py-2 flex items-center text-primary relative ${className}`}
    >
      {loading && (
        <AiOutlineLoading className="animate-spin text-white text-xl absolute" />
      )}

      {icon && <span className="mr-3">{icon}</span>}

      {title}
    </StyledButton>
  );
};

export default Button;
