import React from "react";
import styled from "styled-components";
import Brand from "./Brand";
import { AiOutlineLogout } from "@react-icons/all-files/ai/AiOutlineLogout";
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import Button from "./Button";

const StyledNavbar = styled.div`
  z-index: 10;
`;

const Navbar = ({ isUserNav, fixed = true }) => {
  if (isUserNav) {
    return (
      <StyledNavbar className={`container py-5 ${fixed && "fixed"}`}>
        <div className="flex justify-between items-center">
          <Brand logoOnly />
          <div className="flex items-center">
            <ul className="flex text-white items-center mr-10">
              <li className="p-3 flex items-center">
                <p className="mr-3">Home</p>
              </li>
              <li className="p-3">
                <p className="mr-3">Burgers</p>
              </li>
              <li className="p-3">
                <p className="mr-3">Sides</p>
              </li>
              <li className="p-3">
                <p className="mr-3">Drinks</p>
              </li>
            </ul>
            <div className="flex items-center">
              <AiOutlineShoppingCart className="text-white text-2xl mr-6" />
              <Button title="Login" />
            </div>
          </div>
        </div>
      </StyledNavbar>
    );
  }

  return (
    <StyledNavbar className="container py-5 bg-secondary shadow-xl">
      <div className="flex justify-between items-center">
        <Brand />
        <div>
          <ul className="flex text-white items-center">
            <li className="p-3 flex items-center">
              <p className="mr-3">
                Hello, <span className="text-primary">Admin BurgerByte</span>
              </p>
              <AiOutlineUser className="text-2xl" />
            </li>
            <li className="p-3">
              <AiOutlineLogout className="text-2xl" />
            </li>
          </ul>
        </div>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
