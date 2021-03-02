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

const StyledSidesCard = styled.div`
  flex: 0 0 0 50%;
  .inner-card {
    min-height: 400px;
    border-radius: var(--border-radius);
    width: 300px;
    height: 100%;
  }
  .blu {
    height: 6px;
    width: 60%;
  }

  .burgerImageCont {
    width: 120px;
    height: 120px;
  }
`;

const Sides = ({ productList, loading, addToCart }) => {
  const revealSidesHeader = useRef(null);
  const revealSidesContent = useRef(null);

  useEffect(() => {
    sr.reveal(revealSidesHeader.current, srConfig());
    sr.reveal(revealSidesContent.current, srConfig());
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
    <Section id="sides">
      <div ref={revealSidesHeader}>
        <SectionHeader title="Sides" />
      </div>
      <Spin spinning={loading} size="large">
        <div ref={revealSidesContent} className="container">
          <div className="flex flex-wrap justify-center items-stretch">
            {productList &&
              productList.length > 0 &&
              productList.map((product) => {
                if (product.category === "side") {
                  return (
                    <StyledSidesCard
                      key={product.title}
                      className="p-10 shadow-xl "
                    >
                      <div className="bg-secondary-light p-8 inner-card flex flex-col ">
                        <div className="burgerImageCont -mt-16 ml-12">
                          <img
                            src={`/${product.images[0].image_url}`}
                            alt={product.title}
                            className="burgerImage"
                          />
                        </div>

                        <div className="flex flex-col items-center flex-grow">
                          <h1 className="text-white text-center text-dosis text-bold text-2xl mt-8 mb-2">
                            {product.title}
                          </h1>
                          <hr className="blu bg-primary  w-full" />
                          <h1 className="text-white text-center font-dosis text-2md mt-6 mb-2">
                            {product.description}
                          </h1>
                          <p className="text-danger font-bold text-center text-2xl mb-5">
                            {formatRupiah(product.price)}
                          </p>
                          <Button
                            title="Add To Cart"
                            className="mt-auto"
                            onClick={() => handleAddToCart(product)}
                          />
                        </div>
                      </div>
                    </StyledSidesCard>
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
});

export default connect(mapStateToProps, { addToCart })(Sides);
