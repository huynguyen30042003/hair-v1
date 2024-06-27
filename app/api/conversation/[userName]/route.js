import connectDB from "libs/db";
import { NextResponse } from "next/server";
import Conversation from "models/conversation";

export async function GET(request, { params }) {
  try {
    const { userName } = params;
    if (!userName) {
      return NextResponse.json(
        { message: "User ID is required" },
        { status: 400 }
      );
    }

    await connectDB();
    const conversations = await Conversation.find({userName});

    if (!conversations) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Conversation respone", Conversations: conversations }, { status: 200 });
  } catch (error) {
    console.error("Error fetching notification:", error);
    return NextResponse.json(
      { error: "Unable to fetch notification" },
      { status: 500 }
    );
  }
}