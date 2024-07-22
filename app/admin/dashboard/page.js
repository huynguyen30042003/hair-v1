"use client";

import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Line, Pie } from "react-chartjs-2";
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";
import axios from "axios";
import {
  GetFinancialStats,
  GetRegistrationStats,
  GetMostSelectedService,
  GetAverageRevenuePerAppointment,
} from "../../../api/route.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

const DashboardPage = () => {
  const [financialData, setFinancialData] = useState(null);
  const [registrationData, setRegistrationData] = useState(null);
  const [mostSelectedService, setMostSelectedService] = useState([]);
  const [averageRevenueData, setAverageRevenueData] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [fetch, setFetch] = useState(true);

  const fetchData = async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      console.error("Token not found in localStorage");
      return;
    }

    const financialResponse = await GetFinancialStats(
      startDate,
      endDate,
      token
    );
    const registrationResponse = await GetRegistrationStats(
      startDate,
      endDate,
      token
    );
    const serviceResponse = await GetMostSelectedService(
      startDate,
      endDate,
      token
    );
    const revenueResponse = await GetAverageRevenuePerAppointment(
      startDate,
      endDate,
      token
    );

    setFinancialData(financialResponse);
    setRegistrationData(registrationResponse);
    setMostSelectedService(serviceResponse);
    setAverageRevenueData(revenueResponse);
  };

  useEffect(() => {
    fetchData();
  },[fetch]);

  const handleDateChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleFetchData = () => {
    fetchData();
  };

  const lineData = {
    labels: registrationData ? registrationData.map((item) => item._id) : [],
    datasets: [
      {
        label: "Total Revenue",
        data: financialData
          ? Object.values(financialData.details).map(
              (detail) => detail.totalRevenue
            )
          : [],
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
      {
        label: "Registrations",
        data: registrationData
          ? registrationData.map((item) => item.count)
          : [],
        borderColor: "rgba(153, 102, 255, 1)",
        fill: false,
      },
    ],
  };

  const pieData = {
    labels: ["Average Actual Per Appointment", "Remaining"],
    datasets: [
      {
        data: averageRevenueData
          ? [averageRevenueData.percent, 100 - averageRevenueData.percent]
          : [],
        backgroundColor: ["rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)"],
      },
    ],
  };

  return (
    <Layout>
      <Card className="mb-6">
        <CardBody>
          <div className="flex justify-between mb-4">
            <div>
              <Typography variant="h6">Start Date</Typography>
              <input
                type="date"
                value={startDate}
                onChange={handleDateChange(setStartDate)}
                className="border p-2 rounded"
              />
            </div>
            <div>
              <Typography variant="h6">End Date</Typography>
              <input
                type="date"
                value={endDate}
                onChange={handleDateChange(setEndDate)}
                className="border p-2 rounded"
              />
            </div>
            <div className="flex items-end">
              <Button onClick={handleFetchData}>Fetch Data</Button>
            </div>
          </div>
        </CardBody>
      </Card>

      <div className="flex mb-6">
        <Card className="w-3/4 mr-4">
          <CardBody style={{ maxHeight: "450px" }}>
            <Typography variant="h5">Financial Statistics</Typography>
            {financialData && registrationData ? (
              <Line data={lineData} />
            ) : (
              <Typography>Loading...</Typography>
            )}
          </CardBody>
        </Card>

        <Card className="w-1/4">
          <CardBody>
            <Typography variant="h5">
              Average Revenue Per Appointment
            </Typography>
            {averageRevenueData ? (
              <div>
                <Pie data={pieData} />
                <Typography variant="h6" className="mt-4">
                  Average Actual:{" "}
                  {averageRevenueData.averageActualPerAppointment?.toLocaleString(
                    "vi-VN",
                    {
                      style: "currency",
                      currency: "VND",
                    }
                  )}
                </Typography>
                <Typography variant="h6">
                  Average Revenue:{" "}
                  {averageRevenueData.averageRevenuePerAppointment?.toLocaleString(
                    "vi-VN",
                    {
                      style: "currency",
                      currency: "VND",
                    }
                  )}
                </Typography>
              </div>
            ) : (
              <Typography>Loading...</Typography>
            )}
          </CardBody>
        </Card>
      </div>

      <Card>
        <CardBody>
          <Typography variant="h5">Most Selected Services</Typography>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Name</th>
                <th className="py-2">Count</th>
                <th className="py-2">Price</th>
                <th className="py-2">Duration</th>
              </tr>
            </thead>
            <tbody>
              {mostSelectedService.map((service) => (
                <tr key={service._id} className="border-t">
                  <td className="py-2">{service.name}</td>
                  <td className="py-2">{service.count}</td>
                  <td className="py-2">
                    {service.price?.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </td>
                  <td className="py-2">{service.duration} min</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </Layout>
  );
};

export default DashboardPage;
