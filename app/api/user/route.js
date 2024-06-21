import connectMongoDB from "libs/mongodb";
import connectDB from "libs/db";
import { NextResponse } from "next/server";
import User from "models/user";
import bcrypt from "bcryptjs";
import nodemailer from 'nodemailer';



//register
export async function POST(request) {
  const MIN_PASSWORD_LENGTH = 7;
  const MAX_PASSWORD_LENGTH = 30;
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

    await connectDB();

    // Check if username is already taken
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return NextResponse.json(
        { error: "Username is already taken" },
        { status: 400 }
      );
    }

    // Check if password meets length requirements and starts with an uppercase letter
    const passwordPattern = /^[A-Z]/;
    if (
      password.length < MIN_PASSWORD_LENGTH ||
      password.length > MAX_PASSWORD_LENGTH ||
      !passwordPattern.test(password)
    ) {
      return NextResponse.json(
        {
          error: `Password must be between ${MIN_PASSWORD_LENGTH} and ${MAX_PASSWORD_LENGTH} characters long and start with an uppercase letter`,
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

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      email,
      password: hashPassword,
      role,
      fullName,
      address,
      age,
    });

    // Set up Nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: 'gmail', // e.g., 'gmail'
      auth: {
        user: process.env.EMAIL_USER, // Use environment variables for security
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send account creation success email
    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Account Created Successfully',
      text: `Dear ${fullName},\n\nYour account has been successfully created with username ${username}.\n\nBest regards,\nYour Company`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "User created and notification email sent" }, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Unable to create user" },
      { status: 500 }
    );
  }
}




// Get all users
export async function GET() {
  try {
    await connectDB();
    const users = await User.find();
    return NextResponse.json({ users });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Unable to fetch users" },
      { status: 500 }
    );
  }
}

// Delete user by ID
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
    console.error("Error deleting user:", error);
    return NextResponse.json(
      { error: "Unable to delete user" },
      { status: 500 }
    );
  }
}

// Reset password by ID
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

// Get user by name
export async function getUserByName(request) {
  try {
    const { name } = await request.json();

    if (!name) {
      return NextResponse.json(
        { message: "User name is required" },
        { status: 400 }
      );
    }

    await connectDB();
    const user = await User.findOne({ name });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error fetching user by name:", error);
    return NextResponse.json(
      { error: "Unable to fetch user" },
      { status: 500 }
    );
  }
}

// Delete user by name
export async function deleteUserByName(request) {
  try {
    const { name } = await request.json();

    if (!name) {
      return NextResponse.json(
        { message: "User name is required" },
        { status: 400 }
      );
    }

    await connectDB();
    const user = await User.findOneAndDelete({ name });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "User deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      { error: "Unable to delete user" },
      { status: 500 }
    );
  }
}

// Update user by name
export async function updateUserByName(request) {
  try {
    const { name, updates } = await request.json();

    if (!name) {
      return NextResponse.json(
        { message: "User name is required" },
        { status: 400 }
      );
    }

    if (!updates || typeof updates !== 'object') {
      return NextResponse.json(
        { message: "Valid updates are required" },
        { status: 400 }
      );
    }

    await connectDB();
    const user = await User.findOneAndUpdate(
      { name },
      updates,
      { new: true }
    );

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { error: "Unable to update user" },
      { status: 500 }
    );
  }
}
