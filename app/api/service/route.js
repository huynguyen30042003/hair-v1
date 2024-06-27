import connectMongoDB from "libs/mongodb";
import connectDB from "libs/db";

import { NextResponse } from "next/server";
import Service from "models/service";
import bcrypt from "bcryptjs"


//create a new service
export async function POST(request) {
  try {
    const {
        serviceName,
        title,
        description,
        rate,
        price,
    } = await request.json();

    await connectDB();
    await Service.create({
        serviceName,
        title,
        description,
        rate,
        price,
    });
    return NextResponse.json({ message: "Service created"}, { status: 201 });
  } catch (error) {
    console.error("Error creating Service:", error);
    return NextResponse.json(
      { error: "Unable to create service" }, 
      { status: 500 }
    );
  }
}

//get all service
export async function GET() {
  try {
    await connectDB();
    const services = await Service.find();
    return NextResponse.json({ services });
  } catch (error) {
    console.error("Error fetching services:", error); 
    return NextResponse.json(
      { error: "Unable to fetch services" }, 
      { status: 500 }
    );
  }
}

//delete service
export async function DELETE(request) {
  try {
    const { id } = await request.json();

    await connectDB();
    await Service.findByIdAndDelete(id);

    return NextResponse.json({ message: "Service deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting service:", error);
    return NextResponse.json(
      { error: "Unable to delete service" },
      { status: 500 }
    );
  }
}
