const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//@Route        /api/image/
//@Desc         upload an image
//@Access       Admin

router.post(
  "/",
  // validateToken,
  // validateAdmin,

  async (req, res) => {
    try {
      const result = await cloudinary.uploader.upload(req.body.image, {
        public_id: `${Date.now()}`, //Id given to the returneed image url
        resource_type: "auto",
      });

      //console.log(req.body.image);

      console.log(result);

      res.status(200).json({
        public_id: result.public_id,
        url: result.secure_url,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        status: "error",
        message: "could not upload image",
      });
    }
  }
);

//@Route        /api/image/:id
//@Desc         delete an image
//@Access       Admin

//validateToken, validateAdmin,
router.delete("/:id", async (req, res) => {
  try {
    const image_id = req.params.id;

    cloudinary.uploader.destroy(image_id, (err, result) => {
      console.log("Error", err);
      console.log("Rsult", result);
      if (err.result !== "ok") {
        return res.status(500).json({ success: false, err });
      }

      res.status(200).send("Successfully deleted image");
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
