import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import AdminSidebar from "../../components/admin/AdminSidebar";
import styled from "styled-components";
import { Input, Select, InputNumber, Upload, message, Button } from "antd";
import axiosInstance from "../../utils/axiosInstance";
import axios from "axios";
const { Option } = Select;
const { TextArea } = Input;

const StyledAdminContainer = styled.div`
  flex: 1;
`;

const CreateProduct = (props) => {
  const [fileList, setFileList] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "burger",
    price: 0,
    images: [],
  });

  const { title, description, category, price, images } = formData;

  const handleDeleteImg = async (id) => {
    const res = await axios.delete(`${process.env.BASE_URL}/api/image/${id}`);

    console.log("REMOVE RESPONSE", res);
  };

  const uploadProps = {
    name: "image",
    action: `${process.env.BASE_URL}/api/image`,
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
          images: [data.image_url, ...images],
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
          <Input
            placeholder="Product Name"
            size="large"
            name="title"
            onChange={(e) => handleChange(e)}
            value={title}
            className="block w-full p-3 mb-5 rounded-md"
          />
          <TextArea
            name="description"
            size="large"
            rows="4"
            onChange={(e) => handleChange(e)}
            value={description}
            className="block w-full p-3 mb-5 rounded-md"
            placeholder="Product Description"
          />
          <Select
            defaultValue="burger"
            size="large"
            className="block w-full  mb-5 rounded-md"
            onChange={(value) => setFormData({ ...formData, category: value })}
          >
            <Option value="burger">Burger</Option>
            <Option value="side">Side</Option>
            <Option value="drink">Drink</Option>
          </Select>
          <InputNumber
            placeholder="Product Price"
            value={price}
            min={1}
            className="block w-full  mb-5 rounded-md"
            size="large"
            onChange={(value) => setFormData({ ...formData, price: value })}
          />
          <Upload
            accept="image/*"
            maxCount={3}
            listType="picture"
            defaultFileList={[...fileList]}
            {...uploadProps}
          >
            <Button>Click to Upload</Button>
          </Upload>
          ,{JSON.stringify(formData)}
        </StyledAdminContainer>
      </div>
    </div>
  );
};

export default CreateProduct;
