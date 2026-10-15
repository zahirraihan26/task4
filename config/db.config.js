import mongoose from "mongoose";


const DBConnection = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.error("Failed to connect to the database", err.message);
    });
};

export default DBConnection;