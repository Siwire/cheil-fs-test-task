import { query } from "express-validator";

export const getProductsValidator = [
  query("query").optional().isString().trim().escape(),

  query("page").optional().isInt({ min: 1 }).toInt(),

  query("limit").optional().isInt({ min: 1, max: 100 }).toInt(),

  query("sort").optional().isString().trim().escape(),

  query("feature").optional().isString().trim().escape(),
  query("energyClass").optional().isString().trim().escape(),
  query("capacity").optional().isString().trim().escape(),
];
