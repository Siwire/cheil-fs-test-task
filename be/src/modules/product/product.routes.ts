import { Router } from "express";
import { getProducts } from "./product.controller";
import { getProductsValidator } from "./product.validator";
import { validate } from "../../middlewares/error.middleware";

const productRouter = Router();
productRouter.get("/", getProductsValidator, validate, getProducts);

export { productRouter };
