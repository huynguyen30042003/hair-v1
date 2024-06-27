import mongoose, { Schema } from "mongoose";

const conversationSchema = new Schema(
  {
    userID:String,
    userName:String,
    message:String,
    admin_message:String
  },
  {
    timestamps: true,
  }
);
const Conversation = mongoose.models.Conversation || mongoose.model("Conversation", conversationSchema);

export default Conversation;