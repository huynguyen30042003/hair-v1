import connectMongoDB from "libs/mongodb";
import connectDB from "libs/db";

import { NextResponse } from "next/server";
import Service from "models/service";
import bcrypt from "bcryptjs"

export async function POST(request) {
  try {
    const {
        decription,
        rate,
        price,
    } = await request.json();

    await connectDB();
    await Service.create({
        decription,
        rate,
        price,
    });
    return NextResponse.json({ message: "Service created" }, { status: 201 });
  } catch (error) {
    console.error("Error creating Service:", error);
    return NextResponse.json(
      { error: "Unable to service user" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const services = await Service.find();
    return NextResponse.json({ services });
  } catch (error) {
    console.error("Error fetching service:", error);
    return NextResponse.json(
      { error: "Unable to fetch service" },
      { status: 500 }
    );
  }
}

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
