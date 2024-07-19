// app/history-booking/index.js
"use client";
import React from "react";
import Header from "../../components/Header";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const HistoryBookingPage = () => {
  const bookings = [
    { id: 1, date: "2023-07-01", service: "Haircut" },
    { id: 2, date: "2023-06-15", service: "Shave" },
    // Thêm các lịch sử khác
  ];

  return (
    <div>
      <Header />
      <div className="container mx-auto my-8">
        {bookings.map((booking) => (
          <Card key={booking.id} className="mb-4">
            <CardBody>
              <Typography variant="h6">{booking.service}</Typography>
              <Typography>Date: {booking.date}</Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HistoryBookingPage;
