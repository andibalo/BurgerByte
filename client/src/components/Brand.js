import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const StyledBrand = styled.div`
  .logo {
    width: 40px;
    height: 40px;
  }
`;

const Brand = ({ logoOnly, textOnly }) => {
  return (
    <StyledBrand>
      <Link to="/" className="flex items-center">
        {!textOnly && <Logo className="logo mr-5" />}

        {!logoOnly && (
          <h1 className="text-2xl text-white">
            Burger<span className="text-primary">Byte</span>
          </h1>
        )}
      </Link>
    </StyledBrand>
  );
};

export default Brand;
