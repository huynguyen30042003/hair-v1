"use client";
import { useState, useEffect } from "react";
import { getAppointments, createAppointment, updateAppointment, deleteAppointment } from "../../../api/route";
import { useSession } from "next-auth/react";
import { Button, Input } from "@material-tailwind/react";
import { PlusCircleIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

const AppointmentsPage = () => {
  const { data: session } = useSession();
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({ title: "", date: "", time: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    if (session) {
      const fetchAppointments = async () => {
        const data = await getAppointments(session.token);
        setAppointments(data);
      };
      fetchAppointments();
    }
  }, [session]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await updateAppointment(editingId, formData, session.token);
      setEditingId(null);
    } else {
      await createAppointment(formData, session.token);
    }
    const data = await getAppointments(session.token);
    setAppointments(data);
    setFormData({ title: "", date: "", time: "" });
  };

  const handleEdit = (appointment) => {
    setEditingId(appointment.id);
    setFormData({ title: appointment.title, date: appointment.date, time: appointment.time });
  };

  const handleDelete = async (id) => {
    await deleteAppointment(id, session.token);
    const data = await getAppointments(session.token);
    setAppointments(data);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Quản lý lịch hẹn</h1>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h2 className="text-xl font-semibold mb-2">{editingId ? "Chỉnh sửa lịch hẹn" : "Tạo lịch hẹn"}</h2>
        <form onSubmit={handleFormSubmit}>
          <Input
            type="text"
            name="title"
            label="Tiêu đề"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
          <Input
            type="date"
            name="date"
            label="Ngày"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
          <Input
            type="time"
            name="time"
            label="Giờ"
            value={formData.time}
            onChange={handleInputChange}
            required
          />
          <Button type="submit" className="mt-2">
            {editingId ? "Cập nhật" : "Tạo mới"}
          </Button>
        </form>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Danh sách lịch hẹn</h2>
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id} className="flex items-center justify-between p-2 border-b">
              <div>
                <p className="font-semibold">{appointment.title}</p>
                <p>{appointment.date} - {appointment.time}</p>
              </div>
              <div className="flex items-center">
                <PencilIcon className="h-5 w-5 text-blue-500 mr-2 cursor-pointer" onClick={() => handleEdit(appointment)} />
                <TrashIcon className="h-5 w-5 text-red-500 cursor-pointer" onClick={() => handleDelete(appointment.id)} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AppointmentsPage;
