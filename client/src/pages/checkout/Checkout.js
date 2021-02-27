import React from "react";
import PropTypes from "prop-types";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import Button from "../../components/Button";
import { Table } from "antd";
import Burger1 from "../../assets/images/burger-1.png";
import { AiOutlineArrowLeft } from "@react-icons/all-files/ai/AiOutlineArrowLeft";

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

const Checkout = (props) => {
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
                <div className="circle flex  bg-primary items-center justify-center mb-3">
                  <p className="font-bold text-2xl  text-white">2</p>
                </div>
                <h4 className="font-dosis font-bold text-primary ">Checkout</h4>
              </div>
              <div className="flex flex-col items-center">
                <div className="circle flex bg-grey items-center justify-center mb-3">
                  <p className="font-bold text-2xl text-grey-dark">3</p>
                </div>
                <h4 className="text-grey font-dosis font-bold">Finish</h4>
              </div>
            </div>
          </div>
        </StyledStepTimeline>
        <div className="flex cartRow justify-center">
          <div className="bg-secondary-light  orderSummary  p-8">
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
                  Total Amount
                </h5>
                <p className="text-primary font-bold text-md">Rp. 50.000</p>
              </div>

              <Button
                title="Confirm Payment"
                className=" mt-auto"
                href="/checkout/finish"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Button
            title="Back To Shopping Cart"
            borderless={true}
            icon={<AiOutlineArrowLeft />}
            href="/cart"
          />
        </div>
      </div>
    </StyledCheckoutContainer>
  );
};

Checkout.propTypes = {};

export default Checkout;
