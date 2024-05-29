"use client";
import React, { useEffect, useState } from 'react';
import { Button } from "@material-tailwind/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Dashboard = () => {

  const { data: session } = useSession()
  
  if(session.user.role !== 'admin'){
    redirect('/login')
    return null;
  }


  const [data, setData] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/service');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result.services); // Ensure this is an array
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteService = async (id) => {
    try {
      const response = await fetch('/api/service', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Re-fetch data after deletion
      fetchData();
    } catch (error) {
      console.error('Failed to delete service:', error);
      setError(error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(data); // This should now log the array of services

  return (
    <div>
      <h1>Dashboard</h1>
        {data.map((service,index)=>(
            <div key={index} className='flex justify-around'>
            <p >{service._id}</p>
            <p >{service.decription}</p>
            <p >{service.price}</p>
            <p >{service.rate}</p>
            <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
            onClick={() => deleteService(service._id)}
          >
            <span>Delete</span>
          </Button>
            </div>
        ))}     
    </div>
  );
};

export default Dashboard;
