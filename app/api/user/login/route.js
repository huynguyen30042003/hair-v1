import connectMongoDB from "libs/mongodb";
import connectDB from "libs/db";
import { NextResponse } from "next/server";
import User from "models/user";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    await connectDB();

    const user = await User.findOne({ username });
    if (!user) {
      return NextResponse.json(
        { error: "Invalid username or password" },
        { status: 400 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid username or password" },
        { status: 400 }
      );
    }

    // Optionally, you can generate a JWT token or session here

    console.log("User found:", user); // Log the user object

    return NextResponse.json(
      {
        message: "Login successful",
        user: {
          username: user.username,
          role: user.role,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error logging in:", error);
    return NextResponse.json({ error: "Unable to login" }, { status: 500 });
  }
}
