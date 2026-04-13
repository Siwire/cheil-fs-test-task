import { Router } from "express";
import { productRouter } from "./modules/product/product.routes";

const router = Router();
router.use("/products", productRouter);

export { router };
