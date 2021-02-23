import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { AiOutlineInfoCircle } from "@react-icons/all-files/ai/AiOutlineInfoCircle";
import { AiOutlineEdit } from "@react-icons/all-files/ai/AiOutlineEdit";
import { AiOutlineCloseCircle } from "@react-icons/all-files/ai/AiOutlineCloseCircle";

const StyledProductCard = styled.div`
  min-height: 350px;

  .blueLine {
    height: 5px;
    width: 60%;
  }
`;

const ProductCard = (props) => {
  return (
    <StyledProductCard className="bg-secondary rounded-lg shadow-xl p-5">
      <div className="inner-card flex flex-col justify-between h-full">
        <div className="cardContent text-center">
          <FaBeer className="block text-primary mx-auto text-6xl mb-5" />
          <div>
            <h3 className="text-white font-dosis font-bold text-xl mb-1">
              Kruskal Milkshake
            </h3>
            <hr className="blueLine bg-primary mx-auto mb-3" />
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
        </div>
        <div className="cardActions flex">
          <div className="flex-grow p-3 ">
            <AiOutlineInfoCircle className="mx-auto text-3xl text-primary" />
          </div>
          <div className="flex-grow p-3">
            <AiOutlineEdit className="mx-auto text-3xl text-warning" />
          </div>
          <div className="flex-grow p-3">
            <AiOutlineCloseCircle className="mx-auto text-3xl text-danger" />
          </div>
        </div>
      </div>
    </StyledProductCard>
  );
};

ProductCard.propTypes = {};

export default ProductCard;
