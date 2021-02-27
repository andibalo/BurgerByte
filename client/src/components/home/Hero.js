import React, { Fragment } from "react";

import styled from "styled-components";
import { AiOutlineArrowDown } from "@react-icons/all-files/ai/AiOutlineArrowDown";
import Button from "../Button";

const StyledHeroContainer = styled.div`
  background-image: url("./images/hero-bg.jpg");
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .heroContent {
    position: relative;
    z-index: 2;
  }

  .downArrow {
    bottom: 15px;
  }
`;

const Hero = (props) => {
  return (
    <StyledHeroContainer className="h-full">
      <div className="heroContent min-h-screen flex justify-center items-center ">
        <div className="heroText flex flex-col items-center">
          <h1 className="text-white text-8xl mb-5">
            Burger<span className="text-primary">Byte</span>
          </h1>
          <h3 className="text-white font-dosis text-2xl mb-10">
            Get Your Free Burger In Our Grand Opening !
          </h3>
          <Button title="View Menu" />
        </div>
        <AiOutlineArrowDown className="text-primary text-4xl absolute downArrow" />
      </div>
    </StyledHeroContainer>
  );
};

export default Hero;
