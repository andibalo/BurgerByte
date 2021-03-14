import React, { useEffect, useRef } from "react";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import styled from "styled-components";
import Button from "../Button";
import { connect } from "react-redux";
import { formatRupiah } from "../../utils/formatRupiah";
import sr from "../../utils/sr";
import srConfig from "../../utils/srConfig";
import { addToCart } from "../../actions/cart";
import { message, Spin } from "antd";

const StyledDrinksCard = styled.div`
  flex: 0 0 0 50%;

  .inner-card {
    min-height: 400px;
    border-radius: var(--border-radius);
    width: 300px;
  }

  .drinksImageCont {
    width: 150px;
  }

  .blu {
    height: 6px;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Drinks = ({ productList, loading, isAuthenticated, addToCart }) => {
  const revealSectionHeader = useRef(null);
  const revealSectionContent = useRef(null);

  useEffect(() => {
    sr.reveal(revealSectionHeader.current, srConfig());
    sr.reveal(revealSectionContent.current, srConfig());
  }, []);

  const handleAddToCart = (product) => {
    let cart = [];

    if (localStorage.getItem("cart")) {
      console.log(JSON.parse(localStorage.getItem("cart")));
      cart = JSON.parse(localStorage.getItem("cart"));
    }

    let productExists = false;

    cart.forEach((item) => {
      if (item._id === product._id) {
        message.warning("This item already exists in your cart!");
        productExists = true;
      }
    });

    if (productExists) {
      return;
    }

    cart.push({
      ...product,
      quantity: 1,
    });

    // console.log(cart);

    localStorage.setItem("cart", JSON.stringify(cart));

    addToCart(cart);
  };

  return (
    <Section id="drinks">
      <div ref={revealSectionHeader}>
        <SectionHeader title="Drinks" />
      </div>
      <Spin spinning={loading} size="large">
        <div
          ref={revealSectionContent}
          className="container flex justify-center"
        >
          <div className="flex flex-wrap ">
            {productList &&
              productList.length > 0 &&
              productList.map((product) => {
                if (product.category === "drink") {
                  return (
                    <StyledDrinksCard
                      key={product.title}
                      className="p-8 shadow-xl "
                    >
                      <div className="bg-secondary-light p-8 inner-card">
                        <div className="drinksImageCont -mt-16 ml-12">
                          <img
                            src={`/${product.images[0].image_url}`}
                            alt={product.title}
                            className="drinksimage"
                          />
                        </div>
                        <div>
                          <h1 className="text-white text-center text-dosis text-bold  text-2xl mt-8 mb-2">
                            {product.title}
                          </h1>
                          <hr className="blu bg-primary" />
                          <h1 className="text-white text-center font-dosis text2md mt-6 mb-2">
                            {product.description}
                          </h1>
                          <p className="text-danger font-bold text-center text-2xl mb-5">
                            {formatRupiah(product.price)}
                          </p>
                          <div className="text-center">
                            {isAuthenticated ? (
                              <Button
                                title="Add To Cart"
                                className="mt-auto"
                                onClick={(e) => handleAddToCart(e, product)}
                              />
                            ) : (
                              <Button
                                title="Login To Add To Cart"
                                className="mt-auto"
                                href={{
                                  pathname: "/login",
                                  state: {
                                    from: "/",
                                  },
                                }}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </StyledDrinksCard>
                  );
                }
              })}
          </div>
        </div>
      </Spin>
    </Section>
  );
};

const mapStateToProps = (state) => ({
  productList: state.product.productsList,
  loading: state.product.loading,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { addToCart })(Drinks);
