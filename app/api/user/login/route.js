import connectMongoDB from "libs/mongodb";
import connectDB from "libs/db";
import { NextResponse } from "next/server";
import User from "models/user";
import bcrypt from "bcryptjs";
import { serialize } from "cookie";
import jwt from "jsonwebtoken";

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

    const token = jwt.sign(
      { username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    const serializedCookie = serialize("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    const response = NextResponse.json(
      {
        message: "Login successful",
        user: {
          username: user.username,
          role: user.role,
        },
      },
      { status: 201 }
    );

    console.log("User found:", user); 
    response.headers.set("Set-Cookie", serializedCookie);
    return response;

  } catch (error) {
    console.error("Error logging in:", error);
    return NextResponse.json({ error: "Unable to login" }, { status: 500 });
  }
}
