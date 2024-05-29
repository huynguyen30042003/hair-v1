import connectMongoDB from "libs/mongodb";
import { NextResponse } from "next/server";
import User from "models/user";
import bcrypt from "bcryptjs"

export async function POST(request) {
  try {
    const {
      username,
      email,
      password,
      confirmPassword,
      role,
      fullName,
      address,
      age,
    } = await request.json();

    // Kiểm tra xác nhận mật khẩu
    // if (password !== confirmPassword) {
    //   return NextResponse.json(
    //     { error: "Password and confirm password do not match" },
    //     { status: 400 }
    //   );
    // }

    await connectMongoDB();
    const hashPassword =await bcrypt.hash(password,10)
    await User.create({
      username,
      email,
      password:hashPassword,
      role,
      fullName,
      address,
      age,
    });
    return NextResponse.json({ message: "User created" }, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Unable to create user" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const users = await User.find();
    return NextResponse.json({ users });
  } catch (error) {
    console.error("Error fetching topics:", error);
    return NextResponse.json(
      { error: "Unable to fetch topics" },
      { status: 500 }
    );
  }
}
