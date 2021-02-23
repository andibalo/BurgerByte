import React from "react";
import Navbar from "../../components/Navbar";
import AdminSidebar from "../../components/admin/AdminSidebar";

const CreateProduct = (props) => {
  return (
    <div className="bg-secondary-light min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow">
        <AdminSidebar page="createProduct" />
      </div>
    </div>
  );
};

export default CreateProduct;
