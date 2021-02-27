import React from "react";
import styled from "styled-components";

const StyledSection = styled.div`
  padding-top: 75px;
  padding-bottom: 75px;
`;

const Section = ({ children, className }) => {
  return <StyledSection className={`bg-secondary ${className}`}>{children}</StyledSection>;
};

export default Section;
