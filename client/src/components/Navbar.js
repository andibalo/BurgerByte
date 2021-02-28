import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Brand from "./Brand";
import { AiOutlineLogout } from "@react-icons/all-files/ai/AiOutlineLogout";
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { Popover } from "antd";
import Button from "./Button";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { connect } from "react-redux";
import { logOut } from "../actions/auth";

const StyledNavbar = styled.div`
  z-index: 10;

  li a:hover {
    color: var(--primary);
  }
`;

const Navbar = ({
  isUserNav,
  fixed = true,
  brandOnly,
  isAuthenticated,
  username,
  logOut,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    const listener = window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", listener, true);
    };
  }, []);

  const popoverContent = (
    <div>
      <p className="py-3 flex justify-between items-center cursor-pointer hover:text-primary transition-all ">
        View Cart <AiOutlineShoppingCart />
      </p>
      <p
        onClick={logOut}
        className="py-3 flex justify-between items-center cursor-pointer hover:text-primary transition-all "
      >
        Log Out <AiOutlineLogout />
      </p>
    </div>
  );

  if (isUserNav) {
    return (
      <StyledNavbar
        scrolled={isScrolled}
        className={`container transition-all duration-300 ${fixed && "fixed"} ${
          isScrolled && "bg-secondary-light shadow-xl"
        } ${isScrolled ? "py-4" : "py-6"}`}
      >
        <div className="flex justify-between items-center">
          <Brand logoOnly />

          <div className="flex items-center">
            <ul className="flex text-white items-center mr-10">
              <li>
                <ScrollLink
                  to="hero"
                  smooth={true}
                  duration={500}
                  className="p-3 mr-3"
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="burgers"
                  smooth={true}
                  duration={500}
                  offset={-30}
                  className="p-3 mr-3"
                >
                  Burgers
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="sides"
                  smooth={true}
                  duration={500}
                  offset={-30}
                  className="p-3 mr-3"
                >
                  Sides
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="drinks"
                  smooth={true}
                  duration={500}
                  offset={-30}
                  className="p-3 mr-3"
                >
                  Drinks
                </ScrollLink>
              </li>
            </ul>
            <div className="flex items-center">
              <Link to="/cart">
                <AiOutlineShoppingCart className="text-white text-2xl mr-6" />
              </Link>

              {isAuthenticated ? (
                <Popover
                  placement="bottom"
                  content={popoverContent}
                  title={() => (
                    <p>
                      Logged In as:{" "}
                      <span className="font-bold">{username}</span>
                    </p>
                  )}
                >
                  <AiOutlineUser className="text-2xl text-white cursor-pointer" />
                </Popover>
              ) : (
                <Button title="Login" href="/login" />
              )}
            </div>
          </div>
        </div>
      </StyledNavbar>
    );
  }

  return (
    <StyledNavbar className="container py-6 bg-secondary shadow-xl">
      <div className="flex justify-between items-center">
        <Brand />
        {!brandOnly && (
          <div>
            <ul className="flex text-white items-center">
              <li className="p-3 flex items-center">
                <p className="mr-3">
                  Hello, <span className="text-primary">Admin BurgerByte</span>
                </p>
                <AiOutlineUser className="text-2xl" />
              </li>
              <li
                className="p-3 cursor-pointer hover:text-primary transition-all"
                onClick={logOut}
              >
                <AiOutlineLogout className="text-2xl" />
              </li>
            </ul>
          </div>
        )}
      </div>
    </StyledNavbar>
  );
};

export default connect(null, { logOut })(Navbar);
