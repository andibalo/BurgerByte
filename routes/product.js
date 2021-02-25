const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const slugify = require("slugify");
const Product = require("../models/Product");
const { validateAdmin, validateToken } = require("../middlewares/auth");

//@Route        /api/product/
//@Desc         Get all products
//@Access       Public

router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});

    res.json({
      status: "success",
      data: products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

//@Route        /api/product/:slug
//@Desc         Get single product by slug
//@Access       Public

router.get("/:slug", async (req, res) => {
  try {
    const product = await Product.find({ _id: req.params.slug });

    res.json({
      status: "success",
      data: product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

//@Route        /api/product/create
//@Desc         Create a product
//@Access       Admin

router.post(
  "/create",
  [
    // validateToken,
    // validateAdmin,
    [
      check("title", "title is required").notEmpty(),
      check("description", "description is required").notEmpty(),
      check("price", "price must be a number").isNumeric(),
      check("category", "category is required").notEmpty(),
    ],
  ],

  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, price, description, category, images } = req.body;

    try {
      const product = await new Product({
        title,
        description,
        price,
        category,
        images,
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

//@Route        /api/product/:slig
//@Desc         edit a product
//@Access       Admin

router.put(
  "/:slug",
  [
    // validateToken,
    // validateAdmin,
    [
      check("title", "title is required").notEmpty(),
      check("description", "description is required").notEmpty(),
      check("price", "price must be a number").isNumeric(),
      check("category", "category is required").notEmpty(),
    ],
  ],

  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, price, description, category } = req.body;

    try {
      const product = await Product.findOneAndUpdate(
        { slug: req.params.slug },
        {
          title,
          description,
          price,
          category,
          slug: slugify(title),
        },
        { new: true }
      );

      if (!product) {
        return res.status(404).json({
          status: "error",
          message: "product not found",
        });
      }

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

//@Route        /api/product/:slug
//@Desc         delete a product
//@Access       Admin

//validateToken, validateAdmin,
router.delete("/:slug", async (req, res) => {
  try {
    const product = await Product.findOneAndRemove({ slug: req.params.slug });

    if (!product) {
      return res.status(404).json({
        status: "error",
        message: "Product not found",
      });
    }

    res.json({
      status: "success",
      data: product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
