const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("PRODUCT ROUTE");
});

module.exports = router;
