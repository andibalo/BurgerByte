import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import AdminSidebar from "../../components/admin/AdminSidebar";
import ProductCard from "../../components/ProductCard";
import styled from "styled-components";
import axiosInstance from "../../utils/axiosInstance";
import { Spin } from "antd";

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
  const [loading, setLoading] = useState(false);

  const handleFetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get(`/api/product/`);

      console.log(res);
      setProducts(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (slug, images) => {
    try {
      const deleteImagePromises = images.map(async (image) => {
        return await axiosInstance.delete(`/api/image/${image.id}`);
      });

      await Promise.all(deleteImagePromises);

      const res = await axiosInstance.delete(`/api/product/${slug}`);

      //console.log("Delete Product Res", res);
      handleFetchProducts();
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
          <Spin spinning={loading} size="large" tip="Loading...">
            <div className="productsGrid ">
              {products &&
                products.length > 0 &&
                products.map((product) => (
                  <ProductCard
                    key={product.slug}
                    product={product}
                    handleDeleteProduct={handleDeleteProduct}
                  />
                ))}
            </div>
          </Spin>
        </StyledAdminContainer>
      </div>
    </div>
  );
};

export default Products;
