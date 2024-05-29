import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: String,
    email: String,
    password: String,
    confirmPassword: String,
    role: String,
    fullName: String,
    address: String,
    age: Number,
  },
  {
    timestamps: true,
  }
);
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
