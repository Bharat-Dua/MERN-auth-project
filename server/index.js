const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connect_DB = require("./connect DB/connect_DB");
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
// app.get("/test", (req, res) => {
//   res.status(200).json({ test: "success" });
// });
app.use("/user",require("./User-Routes/User-Routes.js"))
const port = process.env.PORT || 5000;
app.listen(port, async () => {
  await connect_DB();
  console.log(`server is running at ${port} port`);
});
