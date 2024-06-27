import mongoose, { Schema } from "mongoose";

const notificationSchema = new Schema(
  {
    userID:String,
    description: String,
    title: String,
  },
  {
    timestamps: true
  }
);
const Notification = mongoose.models.Notification || mongoose.model("Notification", notificationSchema);

export default Notification;