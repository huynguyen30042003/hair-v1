import connectDB from "libs/db";
import { NextResponse } from "next/server";
import Booking from "models/booking";

export async function POST(request) {
  try {
    
    const {
      userBooking,
      serviceBooking, 
      statusBooking,
      
    } = await request.json();
    
    if (!userBooking || !Array.isArray(serviceBooking) || !statusBooking) {
      return NextResponse.json(
        { error: "Invalid input data" },
        { status: 400 }
      );
    }

    // Calculate total price
    const totalPrice = serviceBooking.reduce((acc, service) => acc + service.price, 0);

    await connectDB(); // Kết nối đến MongoDB

    const newBooking = await Booking.create({
        userBooking,
        serviceBooking,
        statusBooking,
        totalPrice
      });

    return NextResponse.json({ message: "Booking created", booking: newBooking }, { status: 201 });


  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json(
      { error: "Unable to create booking" },
      { status: 500 }
    );
  }
}

//get all booking
export async function GET() {
  try {
    await connectDB();
    const bookings = await Booking.find();
    return NextResponse.json({ bookings });
  } catch (error) {
    console.error("Error fetching bookings:", error); 
    return NextResponse.json(
      { error: "Unable to fetch bookings" }, 
      { status: 500 }
    );
  }
}
