import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import styled from "styled-components";
import {
  Input,
  Select,
  InputNumber,
  Upload,
  message,
  Button as AntButton,
  Spin,
  Image,
} from "antd";
import axiosInstance from "../../utils/axiosInstance";
import { AiOutlineCamera } from "@react-icons/all-files/ai/AiOutlineCamera";
import { AiOutlineArrowLeft } from "@react-icons/all-files/ai/AiOutlineArrowLeft";
import { AiFillCloseCircle } from "@react-icons/all-files/ai/AiFillCloseCircle";

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

  .deleteImageIcon {
    top: -10px;
    right: -10px;
  }
`;

const EditProduct = ({ match, history }) => {
  const { slug } = match.params;

  const [product, setProduct] = useState({});
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

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get(`/api/product/${slug}`);

      console.log("FETCH PRODUCT", res);

      const { category, title, description, price, images } = res.data.data;

      setProduct(res.data.data);

      setFormData({
        ...formData,
        category,
        title,
        description,
        price,
        images,
      });

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleDeleteImg = async (id) => {
    setLoading(true);

    try {
      const res = await axiosInstance.delete(`/api/image/${id}`);
      console.log("REMOVE RESPONSE", res);

      setLoading(false);
    } catch (error) {
      console.log(error);

      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const res = await axiosInstance.put(
        `/api/product/${product.slug}`,
        formData
      );

      console.log("EDIT PRODUCT", res);

      setFormData({
        title: "",
        description: "",
        category: "burger",
        price: 0,
        images: [],
      });

      setFileList([]);
      setIsImageUploaded(false);
      setLoading(false);

      history.push("/admin/products");
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
      <Spin spinning={loading} tip="Loading..." size="large">
        <div className="flex flex-grow">
          <StyledAdminContainer className="container py-16">
            <div>
              <Button
                href="/admin/products"
                borderless
                title="Return To Dashboard"
                className="mb-10 pl-0"
                icon={<AiOutlineArrowLeft className="text-lg" />}
              />
            </div>
            <Image.PreviewGroup>
              {formData.images &&
                formData.images.length > 0 &&
                formData.images.map((image) => (
                  <div className="relative inline-block ">
                    <Image width={200} src={`/${image.image_url}`} />
                    <button onClick={() => handleDeleteImg(image.id)}>
                      <AiFillCloseCircle className="text-2xl text-danger absolute  deleteImageIcon" />
                    </button>
                  </div>
                ))}
            </Image.PreviewGroup>
            <Upload
              className="block mt-5"
              accept="image/*"
              maxCount={3}
              listType="picture"
              defaultFileList={[...fileList]}
              {...uploadProps}
            >
              <AntButton
                className="flex items-center"
                icon={<AiOutlineCamera className="mr-2 text-lg" />}
              >
                Upload Image
              </AntButton>
            </Upload>

            <Input
              placeholder="Product Name"
              size="large"
              name="title"
              onChange={(e) => handleChange(e)}
              value={title}
              className="block w-full p-3 my-5 rounded-md"
              // disabled={!isImageUploaded}
            />
            <TextArea
              name="description"
              size="large"
              rows="4"
              onChange={(e) => handleChange(e)}
              value={description}
              className="block w-full p-3 mb-5 rounded-md"
              placeholder="Product Description"
              // disabled={!isImageUploaded}
            />
            <Select
              defaultValue="burger"
              value={category}
              size="large"
              // disabled={!isImageUploaded}
              className="block w-full  mb-5 rounded-md"
              onChange={(value) =>
                setFormData({ ...formData, category: value })
              }
            >
              <Option value="burger">Burger</Option>
              <Option value="side">Side</Option>
              <Option value="drink">Drink</Option>
            </Select>
            <InputNumber
              // disabled={!isImageUploaded}
              placeholder="Product Price"
              value={price}
              min={1}
              className="block w-full  mb-5 rounded-md"
              size="large"
              onChange={(value) => setFormData({ ...formData, price: value })}
            />

            <AntButton
              // disabled={!isImageUploaded}
              size="large"
              className="rounded-md"
              type="primary"
              onClick={handleSubmit}
              loading={loading}
            >
              Edit Product
            </AntButton>
          </StyledAdminContainer>
        </div>
      </Spin>
    </div>
  );
};

export default EditProduct;
