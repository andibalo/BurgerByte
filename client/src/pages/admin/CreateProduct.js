import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import AdminSidebar from "../../components/admin/AdminSidebar";
import styled from "styled-components";
import { Input, Select, InputNumber,  message, Button } from "antd";
import axiosInstance from "../../utils/axiosInstance";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions/product";
import FileUpload from "../../components/FileUpload";

const { Option } = Select;
const { TextArea } = Input;

const StyledAdminContainer = styled.div`
  flex: 1;

  .ant-upload-list-item-name {
    color: var(--white) !important;
  }

  .ant-upload-list-item-card-actions svg {
    color: var(--danger) !important;
  }
`;

const CreateProduct = ({ fetchProducts, history }) => {
  const [fileList, setFileList] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "burger",
    price: "",
    images: [],
  });
  const [loading, setLoading] = useState(false);
  const [isImageUploaded, setIsImageUploaded] = useState(false);

  const { title, description, category, price, images } = formData;

  const uploadActionUrl = `${process.env.REACT_APP_API_URL}/api/image`;

  const handleDeleteImg = async (id) => {
    const res = await axiosInstance.delete(`/api/image/${id}`);

    console.log("REMOVE RESPONSE", res);
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const res = await axiosInstance.post("/api/product/create", formData);

      setFormData({
        title: "",
        description: "",
        category: "burger",
        price: 0,
        images: [],
      });

      setFileList([]);
      setIsImageUploaded(false);

      fetchProducts();
      setLoading(false);

      // history.push("/admin/products");
    } catch (error) {
      //console.log(error);
      setFormData({
        title: "",
        description: "",
        category: "burger",
        price: 0,
        images: [],
      });

      setLoading(false);
    }
  };

  const uploadProps = {
    name: "image",
    action: uploadActionUrl,
    headers: {
      authorization: "multipart/form-data",
    },
    onRemove(file) {
      console.log(file);

      handleDeleteImg(file.response.data._id);
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }

      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
        const { data } = info.file.response;

        setFormData({
          ...formData,
          images: [{ id: data._id, image_url: data.image_url }, ...images],
        });
        setFileList([
          {
            uid: data._id,
            name: data.name,
            status: "done",
            url: `./${data.image_url}`,
            thumbUrl: `./${data.image_url}`,
          },
          ...fileList,
        ]);

        setIsImageUploaded(true);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-secondary-light min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow">
        <AdminSidebar page="createProduct" />
        <StyledAdminContainer className="p-16 ">
         
          <FileUpload
            setFormData={setFormData}
            formData={formData}
            setLoading={setLoading}
            setIsImageUploaded={setIsImageUploaded}
            loading={loading}
          />
          <Input
            placeholder="Product Name"
            size="large"
            name="title"
            onChange={(e) => handleChange(e)}
            value={title}
            className="block w-full p-3 my-5 rounded-md"
            disabled={!isImageUploaded}
          />
          <TextArea
            name="description"
            size="large"
            rows="4"
            onChange={(e) => handleChange(e)}
            value={description}
            className="block w-full p-3 mb-5 rounded-md"
            placeholder="Product Description"
            disabled={!isImageUploaded}
          />
          <Select
            defaultValue="burger"
            value={category}
            size="large"
            disabled={!isImageUploaded}
            className="block w-full  mb-5 rounded-md"
            onChange={(value) => setFormData({ ...formData, category: value })}
          >
            <Option value="burger">Burger</Option>
            <Option value="side">Side</Option>
            <Option value="drink">Drink</Option>
          </Select>
          <InputNumber
            disabled={!isImageUploaded}
            placeholder="Product Price"
            value={price}
            min={1}
            className="block w-full  mb-5 rounded-md"
            size="large"
            onChange={(value) => setFormData({ ...formData, price: value })}
          />

          <Button
            disabled={!isImageUploaded}
            size="large"
            className="rounded-md"
            type="primary"
            onClick={handleSubmit}
            loading={loading}
          >
            Create Product
          </Button>
        </StyledAdminContainer>
      </div>
    </div>
  );
};

export default connect(null, { fetchProducts })(CreateProduct);
