import connectDB from "libs/db";
import { NextResponse } from "next/server";
import Notification from "models/notification";

export async function POST(request) {
  try {
    
    const {
        userID,
        description, 
        title,
      
    } = await request.json();


    
    await connectDB(); // Kết nối đến MongoDB

    const newNotification = await Notification.create({
        userID,
        description, 
        title,
      });

    return NextResponse.json({ message: "notification created", notification: newNotification }, { status: 201 });


  } catch (error) {
    console.error("Error creating notification:", error);
    return NextResponse.json(
      { error: "Unable to create notification" },
      { status: 500 }
    );
  }
}

//get all booking
export async function GET() {
  try {
    await connectDB();
    const notifications = await Notification.find();
    return NextResponse.json({ notifications });
  } catch (error) {
    console.error("Error fetching notifications:", error); 
    return NextResponse.json(
      { error: "Unable to fetch notifications" }, 
      { status: 500 }
    );
  }
}
