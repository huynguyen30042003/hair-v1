'use client';

import { useState } from 'react';
import Layout from '../components/Layout';
import { Bar, Line } from 'react-chartjs-2';
import {
  Button, Card, CardBody, Typography, Select, Option,
} from '@material-tailwind/react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';
import Chance from 'chance';

const chance = new Chance();

// Register components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

const FinancialPage = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [chartType, setChartType] = useState('Revenue');

  const years = [2021, 2022, 2023, 2024]; // Years for filter
  const months = Array.from({ length: 12 }, (_, i) => i + 1); // Months from 1 to 12

  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Revenue',
        data: [3000, 4000, 3200, 5000, 6100, 7000, 8200],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const profitData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Profit',
        data: [1200, 2200, 1500, 2400, 3100, 3700, 4300],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  const chartData = chartType === 'Revenue' ? revenueData : profitData;

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    // Update chart data based on the selected year
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
    // Update chart data based on the selected month
  };

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <Typography variant="h1" className="mb-4">Financial Management</Typography>

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

        <div className="flex space-x-4 mb-6">
          <Select label="Select statistics type" value={chartType} onChange={(value) => setChartType(value)}>
            <Option value="Revenue">Revenue</Option>
            <Option value="Profit">Profit</Option>
          </Select>
        </div>

        <Card className="mb-6">
          <CardBody>
            <Typography variant="h2">{chartType === 'Revenue' ? 'Revenue statistics' : 'Profit statistics'}</Typography>
            <div className="relative h-64">
              {chartType === 'Revenue' ? <Bar data={chartData} options={{ maintainAspectRatio: false }} /> : <Line data={chartData} options={{ maintainAspectRatio: false }} />}
            </div>
          </CardBody>
        </Card>
      </div>
    </Layout>
  );
};

export default FinancialPage;
