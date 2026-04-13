import { Schema } from "mongoose";

export const installmentSchema: Schema = new Schema({
  value: {
    type: Number,
    required: true,
  },
  period: {
    type: Number,
    required: true,
  },
});
