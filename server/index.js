const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.get("/test", (req, res) => {
  res.status(200).json({ test: "success" });
});
const port = process.env.PORT || 5000;
app.listen(port, console.log(`server is running at ${port} port`));
