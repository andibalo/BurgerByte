const resolveImageUrl = (image_url) => {
  if (image_url.includes("cloudinary")) {
    return image_url;
  }

  return `/${image_url}`;
};

export default resolveImageUrl;
