import connectDB from "libs/db";
import { NextResponse } from "next/server";
import User from "models/user";


//get 1 user by id
export async function GET(request, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { message: "User ID is required" },
        { status: 400 }
      );
    }

    await connectDB();
    const user = await User.findById(id);

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error fetching User:", error);
    return NextResponse.json(
      { error: "Unable to fetch User" },
      { status: 500 }
    );
  }
}
//edit
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { username,
      email,
      role,
      fullName,
      address,
      age,} = await request.json();

    if (!id) {
      return NextResponse.json(
        { message: "User ID is required" },
        { status: 400 }
      );
    }

    await connectDB();
    const user = await User.findByIdAndUpdate(id, { username,
      email,
      role,
      fullName,
      address,
      age,}, { new: true });

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error updating User:", error);
    return NextResponse.json(
      { error: "Unable to update User" },
      { status: 500 }
    );
  }
}





// reset password


