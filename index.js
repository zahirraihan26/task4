import express from "express";
import dotenv from "dotenv";
import dbConnection from "./config/db.config.js";
import router from "./routes/product.route.js";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3001;

dbConnection();

app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});