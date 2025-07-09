import express from "express"

const productRouter = express.Router();

import {
  getAllProducts,
  getProductsById,
  createProductById,
  UpdateProductById,
  deleteProduct
} from "../controllers/product.controller.js"

productRouter.get("/", getAllProducts);

productRouter.get("/:id", getProductsById);

productRouter.post("/", createProductById);

productRouter.put("/:id", UpdateProductById);

productRouter.delete("/:id", deleteProduct);

export default productRouter;