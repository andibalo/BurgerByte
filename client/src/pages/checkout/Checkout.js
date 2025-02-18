import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import Button from "../../components/Button";
import { motion } from "framer-motion";
import { AiOutlineArrowLeft } from "@react-icons/all-files/ai/AiOutlineArrowLeft";
import { connect } from "react-redux";
import { formatRupiah } from "../../utils/formatRupiah";
import { emptyCart } from "../../actions/cart";

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

const Checkout = ({ history, cart, emptyCart }) => {
  const [isGoingBack, setIsGoingBack] = useState(false);

  const getTotal = () => {
    return cart.reduce((totalPrice, item) => {
      return totalPrice + item.price * item.quantity;
    }, 0);
  };

  const containerVariants = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
    },

    exit: {
      x: isGoingBack ? "100vw" : "-100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const lineVariants = {
    hidden: {
      width: 0,
    },
    visible: {
      width: "50%",
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

  const handleReturn = () => {
    setIsGoingBack(true);
    history.goBack();
  };

  const handleConfirmPayment = () => {
    localStorage.removeItem("cart");
    emptyCart();
    history.push("/checkout/finish");
  };

  return (
    <StyledCheckoutContainer className="bg-secondary min-h-screen">
      <Navbar fixed={false} brandOnly />
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
                    2
                  </motion.p>
                </motion.div>
                <motion.h4
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="font-dosis font-bold text-primary "
                >
                  Checkout
                </motion.h4>
              </div>
              <div className="flex flex-col items-center">
                <div className="circle flex bg-grey items-center justify-center mb-3">
                  <p className="font-bold text-2xl text-grey-dark">3</p>
                </div>
                <h4 className="text-grey font-dosis font-bold">Finish</h4>
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
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div
            className="flex cartRow justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="bg-secondary-light  orderSummary  p-8">
              <div className="flex flex-col h-full">
                <div className="summary mb-5">
                  <h3 className="text-white text-2xl font-dosis font-bold mb-2">
                    Order Summary
                  </h3>
                  {cart &&
                    cart.length > 0 &&
                    cart.map((product, i) => (
                      <p className="text-white" key={product._id}>
                        {`${i + 1}. ${product.title} x${
                          product.quantity
                        } = ${formatRupiah(
                          product.price * product.quantity
                        )}`}{" "}
                      </p>
                    ))}
                </div>

                <div className="total">
                  <h5 className="text-white text-lg font-dosis font-bold mb-2">
                    Total Amount
                  </h5>
                  <div className="flex">
                    <p className="text-primary font-bold text-md line-through mr-3">
                      {formatRupiah(getTotal())}
                    </p>
                    <p className="text-primary font-bold text-md">
                      {formatRupiah(0)}
                    </p>
                  </div>
                  <p className="text-danger">* Grand Opening Discount</p>
                </div>

                <Button
                  title="Confirm Payment"
                  className="justify-center mt-auto"
                  onClick={() => handleConfirmPayment()}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <Button
              title="Back To Shopping Cart"
              borderless={true}
              icon={<AiOutlineArrowLeft />}
              onClick={handleReturn}
            />
          </div>
        </motion.div>
      </div>
    </StyledCheckoutContainer>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { emptyCart })(Checkout);
