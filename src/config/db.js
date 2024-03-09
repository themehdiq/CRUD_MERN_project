const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.URI_animeDB);
    // const connect = await mongoose.connect("mongodb://localhost:27017/db123");
    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
