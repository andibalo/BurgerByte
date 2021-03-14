import React from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import Button from "../../components/Button";
import { AiOutlineDelete } from "@react-icons/all-files/ai/AiOutlineDelete";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { emptyCart, addToCart } from "../../actions/cart";
import CartItem from "../../components/checkout/CartItem";
import { formatRupiah } from "../../utils/formatRupiah";

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

const ShoppingCart = ({ auth, emptyCart, cart, addToCart, username }) => {
  const containerVariants = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
      },
    },

    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const getTotal = () => {
    return cart.reduce((totalPrice, item) => {
      return totalPrice + item.price * item.quantity;
    }, 0);
  };

  const handleEmptyCart = () => {
    localStorage.removeItem("cart");

    emptyCart();
  };

  const removeFromCart = (id) => {
    let cart = [];

    if (localStorage.getItem("cart")) {
      cart = [...JSON.parse(localStorage.getItem("cart"))];
    }

    cart = cart.filter((product) => product._id !== id);

    localStorage.setItem("cart", JSON.stringify(cart));

    addToCart(cart);
  };

  const handleQuantityChange = (productId, type) => {
    let cart = [];

    if (localStorage.getItem("cart")) {
      cart = [...JSON.parse(localStorage.getItem("cart"))];
    }

    cart = cart.map((product) => {
      if (product._id === productId) {
        product.quantity =
          type === "increment" ? ++product.quantity : --product.quantity;

        if (product.quantity < 1) {
          product.quantity = 1;
        }
      }

      return product;
    });

    // console.log(cart);

    localStorage.setItem("cart", JSON.stringify(cart));

    addToCart(cart);
  };

  return (
    <StyledShoppingCartContainer className="bg-secondary  min-h-screen">
      <Navbar
        isUserNav
        fixed={true}
        isAuthenticated={auth.isAuthenticated}
        username={username}
      />
      <div className="container py-16 ">
        <StyledStepTimeline className="text-white mb-10  mt-16">
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
          <div className="bg-secondary-light cart p-8 flex flex-col">
            <h3 className="text-white text-2xl font-dosis font-bold">
              Shopping Cart
            </h3>

            {cart && cart.length > 0 ? (
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
                  {cart.map((product) => (
                    <CartItem
                      key={product._id}
                      product={product}
                      removeFromCart={() => removeFromCart(product._id)}
                      decreaseQuantity={() =>
                        handleQuantityChange(product._id, "decrement")
                      }
                      increaseQuantity={() =>
                        handleQuantityChange(product._id, "increment")
                      }
                    />
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-white mt-5 text-md">No product in cart</p>
            )}

            <div className="mt-auto">
              <Button
                borderless
                onClick={handleEmptyCart}
                icon={<AiOutlineDelete className="text-xl" />}
                title="Empty Cart"
                className="text-danger font-bold hover:text-danger hover:bg-grey-30"
              />
            </div>
          </div>
          <div className="bg-secondary-light ml-auto orderSummary  p-8">
            <div className="flex flex-col h-full">
              <div className="summary mb-5">
                <h3 className="text-white text-2xl font-dosis font-bold mb-2">
                  Order Summary
                </h3>
                {cart &&
                  cart.length > 0 &&
                  cart.map((product, i) => (
                    <p className="text-white" key={`summary-${product._id}`}>
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
                  Total
                </h5>
                <p className="text-primary font-bold text-md">
                  {formatRupiah(getTotal())}
                </p>
              </div>

              <Button
                title={
                  auth.isAuthenticated
                    ? `Proceed To Checkout`
                    : "Login To Checkout"
                }
                className=" mt-auto"
                href={
                  auth.isAuthenticated
                    ? {
                        pathname: "/checkout",
                        state: {
                          fromCart: true,
                        },
                      }
                    : {
                        pathname: "/login",
                        state: {
                          from: "/cart",
                        },
                      }
                }
              />
            </div>
          </div>
        </motion.div>
      </div>
    </StyledShoppingCartContainer>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  cart: state.cart,
  username: state.auth.user?.username,
});

export default connect(mapStateToProps, { emptyCart, addToCart })(ShoppingCart);
