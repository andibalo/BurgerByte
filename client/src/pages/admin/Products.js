import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import AdminSidebar from "../../components/admin/AdminSidebar";
import ProductCard from "../../components/ProductCard";
import styled from "styled-components";
import axiosInstance from "../../utils/axiosInstance";

const StyledAdminContainer = styled.div`
  flex: 1;

  .productsGrid {
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
  }
`;

const Products = (props) => {
  const [products, setProducts] = useState([]);

  const handleFetchProducts = async () => {
    try {
      const res = await axiosInstance.get(`/api/product/`);

      console.log(res);
      setProducts(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetchProducts();
  }, []);

  return (
    <div className="bg-secondary-light min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow">
        <AdminSidebar page="products" />
        <StyledAdminContainer className="p-16 ">
          <div className="productsGrid ">
            {products &&
              products.length > 0 &&
              products.map((product) => <ProductCard product={product} />)}
          </div>
        </StyledAdminContainer>
      </div>
    </div>
  );
};

export default Products;
