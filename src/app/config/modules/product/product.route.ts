import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.post("/create-product", ProductControllers.createProduct);
router.get("/", ProductControllers.getAllProducts);

router.get("/:id", ProductControllers.getProductById);
router.put("/:productId", ProductControllers.updateProductById);
router.delete("/:productId", ProductControllers.deleteProductById);

export const ProductRoutes = router;
