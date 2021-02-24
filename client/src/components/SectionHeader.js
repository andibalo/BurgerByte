import React from "react";
import styled from "styled-components";

const StyledSectionHeader = styled.div`
  .headerUnderline {
    height: 10px;
    width: 70%;
  }
`;

const SectionHeader = ({ title }) => {
  return (
    <StyledSectionHeader className="flex justify-center mb-10">
      <div className="flex flex-col items-center">
        <h1 className="text-white text-5xl mb-3">{title}</h1>
        <hr className="bg-primary headerUnderline" />
      </div>
    </StyledSectionHeader>
  );
};

export default SectionHeader;
