import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineLoading } from "@react-icons/all-files/ai/AiOutlineLoading";
import { Link as ScrollLink } from "react-scroll";

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
  scrollLink,
}) => {
  if (href || scrollLink) {
    return (
      <StyledButton
        onClick={onClick}
        borderless={borderless}
        className={`hover:bg-primary transition-all  ${className}`}
      >
        {href ? (
          <Link
            to={href}
            className={`px-8 py-2  text-primary flex items-center hover:text-white transition-all  justify-center`}
          >
            {icon && <span className="mr-3">{icon}</span>}
            {title}
          </Link>
        ) : (
          <ScrollLink
            to={scrollLink}
            smooth={true}
            duration={500}
            offset={-30}
            className={`px-8 py-2  text-primary flex items-center hover:text-white transition-all  justify-center`}
          >
            {icon && <span className="mr-3">{icon}</span>}
            {title}
          </ScrollLink>
        )}
      </StyledButton>
    );
  }

  return (
    <StyledButton
      onClick={onClick}
      borderless={borderless}
      loading={loading}
      className={`px-8 py-2 flex items-center text-primary relative hover:bg-primary transition-all hover:text-white ${className}`}
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
