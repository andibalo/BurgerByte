import React from "react";
import styled from "styled-components";

const StyledSection = styled.div`
  padding-top: 75px;
  padding-bottom: 75px;
`;

const Section = ({ children, id }) => {
  return (
    <StyledSection id={id} className="bg-secondary">
      {children}
    </StyledSection>
  );
};

export default Section;
