
"use client";
import React from 'react';
import Header from '../../components/Header';
import { Card, CardBody, Typography } from "@material-tailwind/react";

const HistoryContactPage = () => {
  const contacts = [
    { id: 1, date: '2023-07-01', message: 'Need a haircut appointment' },
    { id: 2, date: '2023-06-15', message: 'Inquiring about services' },
    
  ];

  return (
    <div>
      <Header />
      <div className="container mx-auto my-8">
        {contacts.map((contact) => (
          <Card key={contact.id} className="mb-4">
            <CardBody>
              <Typography variant="h6">
                Message: {contact.message}
              </Typography>
              <Typography>
                Date: {contact.date}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HistoryContactPage;
