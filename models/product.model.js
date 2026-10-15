import mongoose from "mongoose";


  const productSchema = new mongoose.Schema({
  productName: String,
  price: Number,
  description: String,
  quantity: Number,
  });

const Product = mongoose.model("Product", productSchema);

export default Product;