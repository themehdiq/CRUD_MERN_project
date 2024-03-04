const express = require("express");
const app = express();
const dotenv = require("dotenv");
const router = require("./routes/router");
dotenv.config();

app.use(express.json());

const PORT = process.env.PORT;
const connectDB = require("./config/db");
connectDB();

app.use("/animes", router);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
