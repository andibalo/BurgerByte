const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcrypt");

//@Route        /api/user/
//@Desc         Signup a user
//@Access       Public

router.post(
  "/register",
  [
    check("username", "username is required").notEmpty(),
    check("email", "email is required")
      .notEmpty()
      .isEmail()
      .withMessage("Email must be in correct format"),
    check("password", "password is required")
      .notEmpty()
      .isLength({
        min: 6,
      })
      .withMessage("password must be at least 6 characters long"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        status: "error",
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await new User({
      username,
      email,
      password: hashedPassword,
    }).save();

    res.json({
      status: "success",
      data: {
        user,
      },
    });
  }
);

//@Route        /api/user/
//@Desc         login a user
//@Access       Public

router.post(
  "/login",
  [
    check("email", "email is required")
      .notEmpty()
      .isEmail()
      .withMessage("Email must be in correct format"),
    check("password", "password is required")
      .notEmpty()
      .isLength({
        min: 6,
      })
      .withMessage("password must be at least 6 characters long"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        status: "error",
        message: "Wrong email/password",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({
        status: "error",
        message: "Wrong email/password",
      });
    }

    res.json({
      status: "success",
      data: user,
    });
  }
);

module.exports = router;
