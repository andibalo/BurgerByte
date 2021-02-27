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
  }

  .steps-inner {
    max-width: 500px;
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

const FinishCheckout = (props) => {
  return (
    <StyledCheckoutContainer className="bg-secondary min-h-screen">
      <Navbar isUserNav fixed={false} />
      <div className="container py-16 ">
        <StyledStepTimeline className="text-white mb-10 ">
          <div className="steps-inner mx-auto">
            <div className="steps-inner flex justify-between ">
              <div className="flex flex-col items-center">
                <div className="circle flex bg-grey items-center justify-center mb-3">
                  <p className="font-bold text-2xl text-grey-dark">1</p>
                </div>
                <h4 className="text-grey  font-dosis font-bold">
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
                <div className="circle flex  bg-primary items-center justify-center mb-3">
                  <p className="font-bold text-2xl  text-white">3</p>
                </div>
                <h4 className="font-dosis font-bold text-primary ">Finish</h4>
              </div>
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
