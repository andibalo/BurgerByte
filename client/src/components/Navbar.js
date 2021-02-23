import React from "react";
import styled from "styled-components";
import Brand from "./Brand";
import { AiOutlineLogout } from "@react-icons/all-files/ai/AiOutlineLogout";
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";

const StyledNavbar = styled.div``;

const Navbar = (props) => {
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
