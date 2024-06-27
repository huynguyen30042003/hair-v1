import mongoose, { Schema } from "mongoose";

const serviceSchema = new Schema(
  {
    serviceName:String,
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
export { serviceSchema };