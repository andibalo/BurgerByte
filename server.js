require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");

//Connect DB
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDb();

//Apply Middlewares
app.use(morgan("dev"));
app.use(express.json({ limit: "10mb" }));

const port = process.env.PORT || 5000;

//Routes
app.use("/api/user", require("./routes/user"));
app.use("/api/product", require("./routes/product"));
app.use("/api/image", require("./routes/image"));

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
