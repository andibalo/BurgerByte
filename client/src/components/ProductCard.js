import React from "react";
import styled from "styled-components";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { AiOutlineInfoCircle } from "@react-icons/all-files/ai/AiOutlineInfoCircle";
import { AiOutlineEdit } from "@react-icons/all-files/ai/AiOutlineEdit";
import { AiOutlineCloseCircle } from "@react-icons/all-files/ai/AiOutlineCloseCircle";
import { Link } from "react-router-dom";
import resolveImageUrl from "../utils/resolveImageUrl";
import useModal from "../hooks/useModal";
import { formatRupiah } from "../utils/formatRupiah";
import { Image } from "antd";

const StyledProductCard = styled.div`
  min-height: 350px;

  .blueLine {
    height: 5px;
    width: 60%;
  }

  .foodImageWrapper {
    max-width: 100px;
  }
`;

const ProductCard = ({ product, handleDeleteProduct }) => {
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
                src={resolveImageUrl(image.image_url)}
                alt={image.name}
              />
            );
          })}
        </Image.PreviewGroup>
      </div>

      <p className="text-white text-lg mt-8">{description}</p>
      <h3 className="text-danger text-xl mt-5">
        {formatRupiah(product.price)}
      </h3>
    </div>
  );

  const handleClickInfoBtn = (product) => {
    // console.log(product);

    openModal(() =>
      modalContent(product.images, product.description, product.prive)
    );
  };

  const { title, description, category, price, images, slug } = product;
  return (
    <StyledProductCard className="bg-secondary rounded-lg shadow-xl p-5">
      <div className="inner-card flex flex-col justify-between h-full">
        <div className="cardContent text-center">
          {images.length > 0 ? (
            <div className="foodImageWrapper mx-auto mb-5">
              <img
                src={resolveImageUrl(images[0].image_url)}
                className="food-image"
              />
            </div>
          ) : (
            <FaBeer className="block text-primary mx-auto text-6xl mb-5" />
          )}

          <div>
            <h3 className="text-white font-dosis font-bold text-xl mb-1">
              {title}
            </h3>
            <hr className="blueLine bg-primary mx-auto mb-3" />
            <p className="text-white">{description}</p>
          </div>
        </div>
        <div className="cardActions flex">
          <div
            className="flex-grow p-3 cursor-pointer hover:bg-secondary-light rounded-lg transition"
            onClick={() => handleClickInfoBtn(product)}
          >
            <AiOutlineInfoCircle className="mx-auto text-3xl text-primary" />
          </div>
          <div className="flex-grow p-3 cursor-pointer hover:bg-secondary-light rounded-lg transition">
            <Link to={`/admin/edit-product/${slug}`}>
              <AiOutlineEdit className="mx-auto text-3xl text-warning" />
            </Link>
          </div>
          <div
            className="flex-grow p-3 cursor-pointer hover:bg-secondary-light rounded-lg transition"
            onClick={() => handleDeleteProduct(slug, images)}
          >
            <AiOutlineCloseCircle className="mx-auto text-3xl text-danger" />
          </div>
        </div>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
