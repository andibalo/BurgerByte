const express = require("express");
const router = express.Router();
const multer = require("multer");
const Image = require("../models/Image");
const { validateAdmin, validateToken } = require("../middlewares/auth");
const fs = require("fs");

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

//@Route        /api/image/
//@Desc         upload an image
//@Access       Admin

router.post(
  "/",
  // validateToken,
  // validateAdmin,
  upload.single("image"),
  async (req, res) => {
    try {
      const image = await new Image({
        name: req.file.filename,
        image_url: `uploads/${req.file.filename}`,
      }).save();

      res.json({
        status: "success",
        data: image,
      });
    } catch (error) {
      console.log(error);
    }
  }
);

//@Route        /api/image/:id
//@Desc         delete an image
//@Access       Admin

//validateToken, validateAdmin,
router.delete("/:id", async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);

    fs.unlink(`./client/public/${image.image_url}`, async (err) => {
      if (err) {
        return res.status(500).json({
          status: "error",
          message: "Unable to delete image",
        });
      }

      await Image.findOneAndRemove({ _id: req.params.id });
      res.json({
        status: "success",
        message: "image has been deleted !",
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

//@Route        /api/image/
//@Desc         Get all image
//@Access       Public

router.get("/", async (req, res) => {
  try {
    const images = await Image.find({});

    res.json({
      status: "success",
      data: images,
    });
  } catch (error) {}
});

module.exports = router;
