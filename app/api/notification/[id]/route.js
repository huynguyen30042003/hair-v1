// File: pages/api/notification/[userID].js
import connectDB from "libs/db";
import { NextResponse } from "next/server";
import Notification from "models/notification";

// Export the GET function for handling GET requests
export async function GET(request, { params }) {
  const { id } = params;
  console.log(id);
  try {
    const userID=id;
    if (!userID) {
      return NextResponse.json(
        { message: "User ID is required" },
        { status: 400 }
      );
    }

    await connectDB();
    const notification = await Notification.find({userID});

    if (!notification) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(notification, { status: 200 });
  } catch (error) {
    console.error("Error fetching notification:", error);
    return NextResponse.json(
      { error: "Unable to fetch notification" },
      { status: 500 }
    );
  }
}