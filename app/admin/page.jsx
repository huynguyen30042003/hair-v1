"use client";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import TableService from "components/TableService";
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const page = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Revenue",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Revenue',
      },
    },
  };

  return (
    <>

      <div style={{ marginLeft: "200px", padding: "20px" }}>
        <h1>Analytics Dashboard</h1>
        <div style={{ width: "600px", height: "400px" }}>
          <Line data={data} options={options} />
        </div>
      </div>
    </>
  );
};

export default page;
