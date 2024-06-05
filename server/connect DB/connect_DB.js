const mongoose = require("mongoose");

const connect_DB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("mongodb connected successfully!");
  } catch (error) {
    console.log("Server unavailable", error.message);
  }
};

module.exports = connect_DB;
