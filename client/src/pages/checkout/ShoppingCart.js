import React from "react";
import PropTypes from "prop-types";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import Button from "../../components/Button";
import Burger1 from "../../assets/images/burger-1.png";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";
import { AiOutlineMinus } from "@react-icons/all-files/ai/AiOutlineMinus";
import { motion } from "framer-motion";

const StyledShoppingCartContainer = styled.div`
  .cart,
  .orderSummary {
    border-radius: var(--border-radius);
  }

  .cartRow {
    min-height: 450px;
  }

  .cart {
    flex: 0 0 65%;
  }

  .orderSummary {
    flex: 0 0 30%;
  }

  .productImage {
    max-width: 100px;
  }

  .cartTable {
    border-spacing: 0 15px;
  }
`;

const StyledStepTimeline = styled.div`
  .circle {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    position: relative;
    z-index: 1;
  }

  .steps-inner {
    max-width: 500px;
  }

  .timeline-line {
    height: 5px;
    border: none;
    top: 30%;
    width: 80%;
    left: 50%;
    transform: translateX(-50%);

    &::after {
      content: "";
      position: absolute;
      left: 0;
      background: var(--primary);
      width: 0;
      height: 100%;
    }
  }
`;

const ShoppingCart = (props) => {
  const containerVariants = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
    },

    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  };

  return (
    <StyledShoppingCartContainer className="bg-secondary  min-h-screen">
      <Navbar isUserNav fixed={false} />
      <div className="container py-16 ">
        <StyledStepTimeline className="text-white mb-10  ">
          <div className="steps-inner mx-auto relative">
            <div className="steps-inner flex justify-between ">
              <div className="flex flex-col items-center">
                <div className="circle flex bg-primary items-center justify-center mb-3">
                  <p className="font-bold text-2xl text-white">1</p>
                </div>
                <h4 className="text-primary font-dosis font-bold">
                  Shopping Cart
                </h4>
              </div>
              <div className="flex flex-col items-center">
                <div className="circle flex bg-grey items-center justify-center mb-3">
                  <p className="font-bold text-2xl text-grey-dark">2</p>
                </div>
                <h4 className="text-grey font-dosis font-bold">Checkout</h4>
              </div>
              <div className="flex flex-col items-center">
                <div className="circle flex bg-grey items-center justify-center mb-3">
                  <p className="font-bold text-2xl text-grey-dark">3</p>
                </div>
                <h4 className="text-grey font-dosis font-bold">Finish</h4>
              </div>
            </div>
            <hr className="bg-grey timeline-line absolute " />
          </div>
        </StyledStepTimeline>
        <motion.div
          className="flex cartRow "
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="bg-secondary-light cart p-8">
            <h3 className="text-white text-2xl font-dosis font-bold">
              Shopping Cart
            </h3>
            <table className="table-auto w-full border-separate cartTable">
              <thead>
                <tr>
                  <th></th>

                  <th className="text-grey text-xl font-light">Quantity</th>
                  <th className="text-grey text-xl font-light">Price</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="flex items-center">
                    <img src={Burger1} className="productImage" />
                    <p className="text-white ml-5">VSCode Burger</p>
                  </td>
                  <td className="text-white">
                    <div className="flex items-center ">
                      <AiOutlineMinus className="text-primary cursor-pointer text-xl mr-5" />
                      <p className="mr-5">1</p>
                      <AiOutlinePlus className="text-primary cursor-pointer text-xl" />
                    </div>
                  </td>
                  <td className="text-primary font-bold">Rp. 35.000</td>
                  <td>
                    <AiOutlineClose className="text-danger cursor-pointer" />
                  </td>
                </tr>
                <tr>
                  <td className="flex items-center">
                    <img src={Burger1} className="productImage" />
                    <p className="text-white ml-5">VSCode Burger</p>
                  </td>

                  <td className="text-white">
                    <div className="flex items-center ">
                      <AiOutlineMinus className="text-primary cursor-pointer text-xl mr-5" />
                      <p className="mr-5">1</p>
                      <AiOutlinePlus className="text-primary cursor-pointer text-xl" />
                    </div>
                  </td>
                  <td className="text-primary font-bold">Rp. 35.000</td>
                  <td>
                    <AiOutlineClose className="text-danger cursor-pointer" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-secondary-light ml-auto orderSummary  p-8">
            <div className="flex flex-col h-full">
              <div className="summary mb-5">
                <h3 className="text-white text-2xl font-dosis font-bold mb-2">
                  Order Summary
                </h3>
                <p className="text-white">1. VSCode Burger x1 = Rp.35.000</p>
                <p className="text-white">
                  2. Compiling Garlic Bread x1 = Rp.15.000
                </p>
              </div>

              <div className="total">
                <h5 className="text-white text-lg font-dosis font-bold mb-2">
                  Total
                </h5>
                <p className="text-primary font-bold text-md">Rp. 50.000</p>
              </div>

              <Button
                title="Proceed To Checkout"
                className=" mt-auto"
                href={{
                  pathname: "/checkout",
                  state: {
                    fromCart: true,
                  },
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </StyledShoppingCartContainer>
  );
};

ShoppingCart.propTypes = {};

export default ShoppingCart;
