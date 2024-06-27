import mongoose, { Schema } from "mongoose"
import {serviceSchema} from "./service";

const bookingSchema = new Schema(
  {
    userBooking: String,
    serviceBooking: [serviceSchema],
    statusBooking: String,
    totalPrice: Number,
  },
  
  {
    timestamps: true
  }
);
const Booking = mongoose.models.Booking || mongoose.model("Booking", bookingSchema);

export default Booking;
