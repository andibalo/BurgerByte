const express = require("express");
const router = express.Router();
const multer = require("multer");
const Image = require("../models/Image");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./client/public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const maxSize = 2 * 1024 * 1024; //2mb

const upload = multer({ storage, limits: { fileSize: maxSize } });

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const image = await new Image({
      name: req.file.filename,
      image_url: req.file.destination.split("./")[1],
    });

    res.json({
      status: "success",
      data: image.image_url,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
