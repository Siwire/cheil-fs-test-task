import { Document } from "mongoose";
import { Request, Response } from "express";
import { IPagination, PaginatedResponse } from "../../shared/types/common";

export enum EnergyClass {
  A = "A",
  B = "B",
  C = "C",
}

export type Product = {
  image: string;
  code: string;
  name: string;
  color: string;
  capacity: number;
  dimensions: string;
  features: string[];
  energyClass: EnergyClass;
};

export interface IProduct extends Product, Document {}

export enum ProductSort {
  PRICE_ASC = "price_asc",
  PRICE_DESC = "price_desc",
  CAPACITY_ASC = "capacity_asc",
  CAPACITY_DESC = "capacity_desc",
}

export interface IProductFilters extends IPagination {
  query?: string;
  sort?: ProductSort;
  capacity?: string;
  energyClass?: EnergyClass;
  feature?: string;
}

export type ProductResponse = PaginatedResponse<Product>;

export type GetProductsRequest = Request<{}, {}, {}, IProductFilters>;
export type GetProductsResponse = Response<ProductResponse>;
