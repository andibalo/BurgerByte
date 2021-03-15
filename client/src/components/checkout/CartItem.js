import React from "react";
import PropTypes from "prop-types";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";
import { AiOutlineMinus } from "@react-icons/all-files/ai/AiOutlineMinus";
import styled from "styled-components";
import { formatRupiah } from "../../utils/formatRupiah";
import resolveImageUrl from "../../utils/resolveImageUrl";

const StyledCartItemRow = styled.tr`
  .productImage {
    max-width: 100px;
  }
`;

const CartItem = ({
  product,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
}) => {
  console.log(product);
  return (
    <StyledCartItemRow>
      <td className="flex items-center">
        <img
          src={resolveImageUrl(product.images[0].image_url)}
          className="productImage"
        />
        <p className="text-white ml-5">{product.title}</p>
      </td>
      <td className="text-white">
        <div className="flex items-center ">
          <AiOutlineMinus
            onClick={decreaseQuantity}
            className="text-primary cursor-pointer text-xl mr-5"
          />
          <p className="mr-5">{product.quantity}</p>
          <AiOutlinePlus
            onClick={increaseQuantity}
            className="text-primary cursor-pointer text-xl"
          />
        </div>
      </td>
      <td className="text-primary font-bold">{formatRupiah(product.price)}</td>
      <td>
        <AiOutlineClose
          onClick={removeFromCart}
          className="text-danger cursor-pointer"
        />
      </td>
    </StyledCartItemRow>
  );
};

CartItem.propTypes = {};

export default CartItem;
