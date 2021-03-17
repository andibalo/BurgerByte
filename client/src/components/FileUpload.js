import React from "react";
import Resizer from "react-image-file-resizer";
import axios from "axios";
import { Image, Badge, message, Spin } from "antd";
import axiosInstance from "../utils/axiosInstance";
import { AiFillCamera } from "@react-icons/all-files/ai/AiFillCamera";
import resolveImageUrl from "../utils/resolveImageUrl";

const FileUpload = ({
  formData,
  setFormData,
  setLoading,
  setIsImageUploaded,
  loading,
  displayImageRow = true,
}) => {
  const uploadedImagesUri = [];

  const { images } = formData;

  const fileUploadAndResize = (e) => {
    const files = [...e.target.files];

    if (files) {
      setLoading(true);
      for (const file of files) {
        Resizer.imageFileResizer(
          file,
          720,
          720,
          "JPEG",
          100,
          0,
          async (uri) => {
            //console.log(uri);

            try {
              const res = await axiosInstance.post(
                `${process.env.REACT_APP_API_URL}/api/cloudinary`,
                { image: uri }
              );

              //console.log(res);

              uploadedImagesUri.push({
                name: res.data.public_id,
                image_url: res.data.url,
              });
              setLoading(false);
              setFormData({ ...formData, images: uploadedImagesUri });
              setIsImageUploaded(true);
            } catch (error) {
              console.log(error);
              setLoading(false);

              message.error(`Failed to upload "${file.name}"`);
            }
          },
          "base64"
        );
      }
    }
  };

  const handleRemoveImage = async (public_id) => {
    setLoading(true);
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/cloudinary/${public_id}`
      );

      //   console.log(res.data);

      const filteredImages = images.filter((image) => image.name !== public_id);

      setFormData({ ...formData, images: filteredImages });

      setLoading(false);
      message.success("Successfully deleted image");
    } catch (error) {
      console.log(error);
      setLoading(false);
      message.error("Failed to delete image");
    }
  };

  return (
    <>
      <div>
        {displayImageRow &&
          images &&
          images.map((image) => (
            <Badge
              count="X"
              className="mb-3"
              key={image.name}
              onClick={() => handleRemoveImage(image.name)}
              style={{ cursor: "pointer" }}
            >
              <Image width={200} src={resolveImageUrl(image.image_url)} />
            </Badge>
          ))}
      </div>
      <div className="mb-5">
        <label className="bg-primary px-5 py-3 rounded-md cursor-pointer inline-block text-white ">
          <div className="flex items-center">
            <AiFillCamera className="mr-2 text-xl" />
            <span>Upload Images</span>
          </div>

          <input
            type="file"
            accept="image/*"
            hidden
            multiple
            onChange={(e) => fileUploadAndResize(e)}
          />
        </label>
        <Spin className="ml-5" spinning={loading} />
      </div>
    </>
  );
};

export default FileUpload;
