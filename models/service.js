import mongoose, { Schema } from "mongoose";

const serviceSchema = new Schema(
  {
    title: String,
    description: String,
    rate: Number,
    price: Number,

  },
  {
    timestamps: false
  }
);
const Service = mongoose.models.Service || mongoose.model("Service", serviceSchema);

export default Service;
