"use client";
import { useState, useEffect } from "react";
import { getUsers, getAppointments } from "../../../api/route";
import { useSession } from "next-auth/react";
import {
  ChartBarIcon,
  UserCircleIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

const DashboardPage = () => {
  const { data: session } = useSession();
  const [users, setUsers] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (session) {
      const fetchUsers = async () => {
        const usersData = await getUsers(session.token);
        setUsers(usersData);
      };

      const fetchAppointments = async () => {
        const appointmentsData = await getAppointments(session.token);
        setAppointments(appointmentsData);
      };

      fetchUsers();
      fetchAppointments();
    }
  }, [session]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Bảng điều khiển nhân viên</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <UserCircleIcon className="h-12 w-12 text-blue-500 mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Tổng số người dùng</h2>
            <p className="text-2xl">{users.length}</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <CalendarDaysIcon className="h-12 w-12 text-green-500 mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Tổng số lịch hẹn</h2>
            <p className="text-2xl">{appointments.length}</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <ChartBarIcon className="h-12 w-12 text-yellow-500 mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Doanh thu tháng này</h2>
            <p className="text-2xl">$10,000</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mt-4">
        <h2 className="text-xl font-semibold mb-2">
          Danh sách lịch hẹn sắp tới
        </h2>
        <ul>
          {appointments.slice(0, 5).map((appointment) => (
            <li
              key={appointment.id}
              className="flex items-center justify-between p-2 border-b"
            >
              <div>
                <p className="font-semibold">{appointment.title}</p>
                <p>
                  {appointment.date} - {appointment.time}
                </p>
              </div>
              <div className="flex items-center">
                <CalendarDaysIcon className="h-5 w-5 text-gray-500 mr-2" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardPage;
