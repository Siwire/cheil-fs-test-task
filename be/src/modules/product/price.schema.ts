import { Schema } from "mongoose";
import { installmentSchema } from "./installment.schema";

export const priceSchema: Schema = new Schema({
  value: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
    default: "zł",
  },
  validFrom: {
    type: Date,
    required: true,
  },
  validTo: {
    type: Date,
    required: true,
  },
  installment: installmentSchema,
});
