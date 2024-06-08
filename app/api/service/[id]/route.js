import connectDB from "libs/db";
import { NextResponse } from "next/server";
import Service from "models/service";


//update service
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { title, description, rate, price } = await request.json();

    if (!id) {
      return NextResponse.json(
        { message: "Service ID is required" },
        { status: 400 }
      );
    }

    await connectDB();
    const service = await Service.findByIdAndUpdate(
      id,
      { title, description, rate, price },
      { new: true }
    );

    if (!service) {
      return NextResponse.json(
        { message: "Service not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Service updated" }, { status: 200 });
  } catch (error) {
    console.error("Error updating service:", error);
    return NextResponse.json(
      { error: "Unable to update service" },
      { status: 500 }
    );
  }
}
