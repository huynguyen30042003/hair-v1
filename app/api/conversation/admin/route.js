import connectDB from "libs/db";
import { NextResponse } from "next/server";
import Conversation from "models/conversation";
import User from "models/user";

export async function GET() {
  try {
    await connectDB();

    // Fetch all conversations
    const conversations = await Conversation.find();
    
    // Extract unique usernames
    const uniqueUsernames = [...new Set(conversations.map(conversation => conversation.userName))];
    
    // Initialize an array to store conversations for each user
    const userConversations = [];

    // Iterate through uniqueUsernames and fetch conversations for each user
    for (const username of uniqueUsernames) {
      const userConv = await Conversation.find({ userName: username });
      userConversations.push({ userName: username, conversations: userConv });
    }

    return NextResponse.json({ userConversations });
  } catch (error) {
    console.error("Error fetching conversations:", error);
    return NextResponse.json(
      { error: "Unable to fetch conversations" }, 
      { status: 500 }
    );
  }
}
