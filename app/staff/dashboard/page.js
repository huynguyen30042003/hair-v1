'use client';

import { useState } from 'react';
import Layout from '../components/Layout';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Button, Card, CardBody, Typography, Select, Option,
} from '@material-tailwind/react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';
import Chance from 'chance';

const chance = new Chance();

// Đăng ký các thành phần của Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const DashboardPage = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

  const years = [2021, 2022, 2023, 2024]; // Các năm cho bộ lọc
  const months = Array.from({ length: 12 }, (_, i) => i + 1); // Các tháng từ 1 đến 12

  const [employeeData, setEmployeeData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Employees',
        data: [12, 19, 3, 5, 2, 3, 9],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  });

  const [serviceData, setServiceData] = useState({
    labels: ['Haircut', 'Shave', 'Facial', 'Manicure'],
    datasets: [
      {
        label: 'Services',
        data: [55, 23, 34, 12],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
      },
    ],
  });

  const [revenueData, setRevenueData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Revenue',
        data: Array.from({ length: 7 }, () => chance.integer({ min: 1000, max: 5000 })),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  });

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    // Cập nhật dữ liệu biểu đồ theo năm
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
    // Cập nhật dữ liệu biểu đồ theo tháng
  };

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <Typography variant="h1" className="mb-4">Staff Dashboard</Typography>

        <div className="flex space-x-4 mb-6">
          <Select label="Select year" value={selectedYear} onChange={handleYearChange}>
            {years.map((year) => (
              <Option key={year} value={year}>{year}</Option>
            ))}
          </Select>
          <Select label="Select month" value={selectedMonth} onChange={handleMonthChange}>
            {months.map((month) => (
              <Option key={month} value={month}>{month}</Option>
            ))}
          </Select>
        </div>

        <Card className="mb-6">
          <CardBody>
            <Typography variant="h2">Staff statistics</Typography>
            <div className="relative h-64">
              <Bar data={employeeData} options={{ maintainAspectRatio: false }} />
            </div>
          </CardBody>
        </Card>
        <Card className="mb-6">
          <CardBody>
            <Typography variant="h2">Service statistics</Typography>
            <div className="relative h-64">
              <Pie data={serviceData} options={{ maintainAspectRatio: false }} />
            </div>
          </CardBody>
        </Card>
        <Card className="mb-6">
          <CardBody>
            <Typography variant="h2">Revenue</Typography>
            <div className="relative h-64">
              <Line data={revenueData} options={{ maintainAspectRatio: false }} />
            </div>
          </CardBody>
        </Card>
      </div>
    </Layout>
  );
};

export default DashboardPage;
