import connectDB from "libs/db";
import { NextResponse } from "next/server";
import Conversation from "models/conversation";

export async function POST(request) {
  try {
    
    const {
        userID,
        userName,
        message,
        admin_message,
       
      
    } = await request.json();


    
    await connectDB(); 

    const newConversation = await Conversation.create({
        userID,
        userName,
        message,
        admin_message
      });

    return NextResponse.json({ message: "Conversation created", Conversation: newConversation }, { status: 201 });


  } catch (error) {
    console.error("Error creating Conversation:", error);
    return NextResponse.json(
      { error: "Unable to create Conversation" },
      { status: 500 }
    );
  }
}

//get all booking
export async function GET() {
  try {
    await connectDB();
    const conversations = await Conversation.find();
    return NextResponse.json({ conversations });
  } catch (error) {
    console.error("Error fetching conversations:", error); 
    return NextResponse.json(
      { error: "Unable to fetch conversations" }, 
      { status: 500 }
    );
  }
}
