const express = require("express");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const cors = require("cors");

app.use(cors());
app.use(morgan("dev"));
const port = process.env.PORT || 8000;
app.listen(port, console.log(`server is running at port ${port}`));
