import connectMongoDB from "libs/mongodb";
import connectDB from "libs/db";
import { NextResponse } from "next/server";
import User from "models/user";
import bcrypt from "bcryptjs";

// register
export async function POST(request) {
  const MIN_PASSWORD_LENGTH = 7;
  const MAX_PASSWORD_LENGTH = 30
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

    // Check if username is already taken
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return NextResponse.json(
        { error: "Username is already taken" },
        { status: 400 }
      );
    }

    // Check if password meets length requirements
    if (
      password.length < MIN_PASSWORD_LENGTH ||
      password.length > MAX_PASSWORD_LENGTH
    ) {
      return NextResponse.json(
        {
          error: `Password must be between ${MIN_PASSWORD_LENGTH} and ${MAX_PASSWORD_LENGTH} characters long`,
        },
        { status: 400 }
      );
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: "Password and confirm password do not match" },
        { status: 400 }
      );
    }

    await connectDB();
    const hashPassword = await bcrypt.hash(password, 10);
    await User.create({
      username,
      email,
      password: hashPassword,
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

//get All users
export async function GET() {
  try {
    await connectDB();
    const users = await User.find();
    return NextResponse.json({ data: users,message:"" },{ status: 200});
  } catch (error) {
    console.error("Error fetching topics:", error);
    return NextResponse.json(
      { error: "Unable to fetch topics" },
      { status: 500 }
    );
  }
}

//delete user by id
export async function DELETE(request) {
  try {
    const { id } = await request.json();

    await connectDB();
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "User deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting User:", error);
    return NextResponse.json(
      { error: "Unable to delete User" },
      { status: 500 }
    );
  }
}

// export default async function DELETE(request) {
//   try {
//     const { id } = await request.json();

//     await connectDB();
//     const user = await User.findByIdAndDelete(id);

//     if (!user) {
//       return new Response(
//         JSON.stringify({ message: "User not found" }),
//         { status: 404, headers: { 'Content-Type': 'application/json' } }
//       );
//     }

//     const deletedUserData = { id: user._id }; // Trả về id của người dùng đã bị xóa
//     const message = { message: "User deleted successfully", deletedUserData };
    
//     return new Response(
//       JSON.stringify(message),
//       { status: 200, headers: { 'Content-Type': 'application/json' } }
//     );
//   } catch (error) {
//     console.error("Error deleting User:", error);
//     return new Response(
//       JSON.stringify({ error: "Unable to delete User" }),
//       { status: 500, headers: { 'Content-Type': 'application/json' } }
//     );
//   }
// }


//reset password by id
export async function PUT(request) {
  try {
    const { id } = await request.json();
    const newPassword = "12345";

    if (!id) {
      return NextResponse.json(
        { message: "User ID is required" },
        { status: 400 }
      );
    }

    await connectDB();
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    const user = await User.findByIdAndUpdate(
      id,
      { password: hashedPassword },
      { new: true }
    );

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error resetting password:", error);
    return NextResponse.json(
      { error: "Unable to reset password" },
      { status: 500 }
    );
  }
}
