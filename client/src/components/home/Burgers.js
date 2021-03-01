import React from "react";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import styled from "styled-components";
import useModal from "../../hooks/useModal";
import Button from "../Button";
import { connect } from "react-redux";
import { formatRupiah } from "../../utils/formatRupiah";
import { Image, message } from "antd";
import { addToCart } from "../../actions/cart";

const StyledBurgerCard = styled.div`
  flex: 0 0 50%;

  .inner-card {
    min-height: 300px;
    border-radius: var(--border-radius);
  }

  .burgerImageCont {
    max-width: 250px;
    width: 100%;
  }
`;

const StyledBurgerImage = styled.div`
  max-width: 250px;
  width: 100%;
`;

const Burgers = ({ products, loading, addToCart }) => {
  const [openModal, closeModal] = useModal();

  const modalContent = (images, description) => (
    <div>
      <div className="flex justify-center">
        <Image.PreviewGroup>
          {images.map((image, i) => {
            return (
              <Image
                width={250}
                className="mx-auto"
                src={image.image_url}
                alt={image.name}
              />
            );
          })}
        </Image.PreviewGroup>
      </div>

      <p className="text-white text-lg mt-8">{description}</p>
    </div>
  );

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

    console.log(cart);

    localStorage.setItem("cart", JSON.stringify(cart));

    addToCart(cart);
  };

  return (
    <Section id="burgers">
      <SectionHeader title="Burgers" />
      <div className="container">
        <div className="flex flex-wrap">
          {!loading &&
            products &&
            products.length > 0 &&
            products.map((product) => {
              if (product.category === "burger") {
                return (
                  <StyledBurgerCard
                    key={product._id}
                    className="p-3 shadow-xl "
                  >
                    <div className="bg-secondary-light p-8 inner-card flex items-center">
                      <div>
                        <h1 className="text-white text-5xl mb-2">
                          {product.title}
                          {/* <br />
                          <span className="text-primary">Burger</span> */}
                        </h1>
                        <p className="text-danger font-bold text-2xl mb-5">
                          {formatRupiah(product.price)}
                        </p>
                        <Button
                          title="Add To Cart"
                          onClick={() => handleAddToCart(product)}
                        />
                      </div>
                      <div
                        className="burgerImageCont ml-auto"
                        onClick={() =>
                          openModal(() =>
                            modalContent(product.images, product.description)
                          )
                        }
                      >
                        <img
                          src={`/${product.images[0].image_url}`}
                          alt="burger1"
                          className="burgerImage"
                        />
                      </div>
                    </div>
                  </StyledBurgerCard>
                );
              }
            })}
        </div>
      </div>
    </Section>
  );
};

const mapStateToProps = (state) => ({
  products: state.product.productsList,
  loading: state.product.loading,
});

export default connect(mapStateToProps, { addToCart })(Burgers);
