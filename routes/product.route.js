import { Router } from "express";
import {
  createProduct,
  getproducts,
  updateProduct,
  deleteProduct,
} from "../controllers/controllers.js";

const router = Router();

// Routes (mounted at /api/v1)
router.post("/product", createProduct);
router.get("/product", getproducts);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);


export default router;