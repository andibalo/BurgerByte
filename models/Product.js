const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    // short_description: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
      text: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    images: {
      type: Array,
    },

    category: {
      type: String,
      enum: ["burger", "side", "drink"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Product = mongoose.model("product", productSchema);
