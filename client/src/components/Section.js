import React from "react";
import styled from "styled-components";

const StyledSection = styled.div`
  padding-top: 75px;
  padding-bottom: 75px;
`;

const Section = ({ children, }) => {
  return <StyledSection className="bg-secondary">{children}</StyledSection>;
};

export default Section;
