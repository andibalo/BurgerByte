const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const slugify = require("slugify");
const Product = require("../models/Product");

//@Route        /api/product/create
//@Desc         Create a product
//@Access       Admin

router.post(
  "/create",
  [
    check("title", "title is required").notEmpty(),
    check("description", "description is required").notEmpty(),
    check("price", "price must be a number").isNumeric(),
    check("category", "category is required").notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, price, description, category } = req.body;

    try {
      const product = await new Product({
        title,
        description,
        price,
        category,
        slug: slugify(title),
      }).save();

      res.json({
        status: "success",
        data: product,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "error",
        message: "server error",
      });
    }
  }
);

module.exports = router;
