import { IProduct, IProductFilters, ProductSort } from "./product.interfaces";
import { Product } from "./product.model";
import { QueryFilter } from "mongoose";

export const findProducts = async ({ params }: { params: IProductFilters }) => {
  const {
    query,
    sort,
    capacity,
    energyClass,
    feature,
    page = 1,
    limit = 5,
  } = params;

  const filter: QueryFilter<IProduct> = {};

  if (query) {
    filter.$or = [
      { name: { $regex: query, $options: "i" } },
      { code: { $regex: query, $options: "i" } },
    ];
  }

  if (capacity) {
    filter.capacity = Number(capacity);
  }

  if (energyClass) {
    filter.energyClass = energyClass;
  }

  if (feature) {
    filter.features = { $in: [feature] };
  }

  const mongooseQuery = Product.find(filter);

  if (sort) {
    if (sort === ProductSort.CAPACITY_ASC) mongooseQuery.sort({ capacity: 1 });
    if (sort === ProductSort.CAPACITY_DESC)
      mongooseQuery.sort({ capacity: -1 });
    if (sort === ProductSort.PRICE_ASC)
      mongooseQuery.sort({ "price.value": 1 });
    if (sort === ProductSort.PRICE_DESC)
      mongooseQuery.sort({ "price.value": -1 });
  }

  const [count, products] = await Promise.all([
    Product.countDocuments(filter),
    mongooseQuery
      .skip((page - 1) * limit)
      .limit(limit)
      .lean(),
  ]);

  return {
    items: products,
    totalPages: Math.ceil(count / limit),
    currentPage: page,
    totalItems: count,
  };
};
