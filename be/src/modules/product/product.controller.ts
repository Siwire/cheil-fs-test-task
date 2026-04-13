import * as productService from "./product.service";
import { GetProductsRequest, GetProductsResponse } from "./product.interfaces";
import { NextFunction } from "express";

export const getProducts = async (
  req: GetProductsRequest,
  res: GetProductsResponse,
  next: NextFunction,
) => {
  try {
    const data = await productService.findProducts({ params: req.query });
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
