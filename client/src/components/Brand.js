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
    <StyledBrand className="flex items-center">
      {!textOnly && (
        <Link to="/">
          <Logo className="logo mr-5" />
        </Link>
      )}

      {!logoOnly && (
        <h1 className="text-2xl text-white">
          Burger<span className="text-primary">Byte</span>
        </h1>
      )}
    </StyledBrand>
  );
};

export default Brand;
