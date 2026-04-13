import { model, Schema } from "mongoose";
import { priceSchema } from "./price.schema";
import { EnergyClass, IProduct } from "./product.interfaces";

const productSchema: Schema = new Schema({
  image: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  dimensions: {
    type: String,
    required: true,
  },
  features: {
    type: [String],
    required: true,
  },
  energyClass: {
    type: String,
    enum: Object.values(EnergyClass),
    required: true
  },
  price: priceSchema,
});

export const Product = model<IProduct>("Product", productSchema);
