import React from "react";
import Navbar from "../../components/Navbar";
import AdminSidebar from "../../components/admin/AdminSidebar";
import ProductCard from "../../components/ProductCard";
import styled from "styled-components";

const StyledAdminContainer = styled.div`
  flex: 1;

  .productsGrid {
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

const Products = (props) => {
  return (
    <div className="bg-secondary-light min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow">
        <AdminSidebar page="products" />
        <StyledAdminContainer className="p-16 ">
          <div className="productsGrid ">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </StyledAdminContainer>
      </div>
    </div>
  );
};

export default Products;
