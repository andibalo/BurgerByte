import React from "react";
import PropTypes from "prop-types";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import Button from "../../components/Button";
import { motion } from "framer-motion";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";

const StyledCheckoutContainer = styled.div`
  .cart,
  .orderSummary {
    border-radius: var(--border-radius);
  }

  .cartRow {
    min-height: 350px;
  }

  .orderSummary {
    flex: 0 0 30%;
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
  }

  .overlay-line {
    border: none;
    height: 100%;
    width: 50%;
  }
`;

const containerVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
  },
};

const lineVariants = {
  hidden: {
    width: "50%",
  },
  visible: {
    width: "100%",
    transition: {
      duration: 0.3,
    },
  },
};

const circleVariants = {
  hidden: {
    backgroundColor: "var(--grey)",
  },
  visible: {
    backgroundColor: "var(--primary)",
    transition: {
      delay: 0.3,
    },
  },
};

const numberVariants = {
  hidden: {
    color: "var(--grey-dark)",
  },
  visible: {
    color: "var(--white)",
    transition: {
      delay: 0.3,
    },
  },
};

const textVariants = {
  hidden: {
    color: "var(--grey)",
  },
  visible: {
    color: "var(--primary)",
    transition: {
      delay: 0.3,
    },
  },
};

const FinishCheckout = (props) => {
  return (
    <StyledCheckoutContainer className="bg-secondary min-h-screen">
      <Navbar isUserNav fixed={false} />
      <div className="container py-16 ">
        <StyledStepTimeline className="text-white mb-10 ">
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
                <div className="circle flex bg-primary items-center justify-center mb-3">
                  <p className="font-bold text-2xl text-white">2</p>
                </div>
                <h4 className="text-primary  font-dosis font-bold">Checkout</h4>
              </div>
              <div className="flex flex-col items-center">
                <motion.div
                  variants={circleVariants}
                  initial="hidden"
                  animate="visible"
                  className="circle flex  bg-primary items-center justify-center mb-3"
                >
                  <motion.p
                    variants={numberVariants}
                    className="font-bold text-2xl  text-white"
                  >
                    3
                  </motion.p>
                </motion.div>
                <motion.h4
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="font-dosis font-bold text-primary "
                >
                  Finish
                </motion.h4>
              </div>
            </div>
            <div className=" bg-grey timeline-line absolute ">
              <motion.hr
                className="overlay-line bg-primary"
                variants={lineVariants}
                initial="hidden"
                animate="visible"
              />
            </div>
          </div>
        </StyledStepTimeline>
        <motion.div
          className="flex cartRow justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-secondary-light  orderSummary  p-8">
            <div className="flex flex-col h-full">
              <div className="summary mb-5 ">
                <AiFillStar className="text-primary text-8xl mx-auto" />
              </div>

              <div className="total text-center">
                <h5 className="text-white text-2xl font-dosis font-bold mb-2">
                  Thank you for ordering at BurgerByte !
                </h5>
              </div>

              <Button title="Back To Home" className=" mt-auto" href="/" />
            </div>
          </div>
        </motion.div>
      </div>
    </StyledCheckoutContainer>
  );
};

FinishCheckout.propTypes = {};

export default FinishCheckout;
