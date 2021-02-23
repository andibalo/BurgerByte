import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledAdminSidebar = styled.div`
  flex: 0 0 25%;
`;

const AdminSidebar = ({ page }) => {
  return (
    <StyledAdminSidebar page={page} className="bg-primary">
      <ul>
        <li
          className={`px-5 py-8 ${page === "products" && "bg-secondary-light"}`}
        >
          <Link to="/admin/products">
            <h3
              className={`font-dosis font-bold text-2xl ${
                page === "products" && "text-primary"
              } `}
            >
              Products
            </h3>
          </Link>
        </li>
        <li
          className={`px-5 py-8 ${
            page === "createProduct" && "bg-secondary-light"
          }`}
        >
          <Link to="/admin/create-product">
            <h3
              className={`font-dosis font-bold text-2xl ${
                page === "createProduct" && "text-primary"
              } `}
            >
              Create Product
            </h3>
          </Link>
        </li>
      </ul>
    </StyledAdminSidebar>
  );
};

export default AdminSidebar;
