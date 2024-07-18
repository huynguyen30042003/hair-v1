"use client";
import { useState, useEffect } from "react";
import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from "../../../api/route"; // Thêm các hàm API tương ứng
import { useSession } from "next-auth/react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Button, Input } from "@material-tailwind/react";

const EmployeesPage = () => {
  const { data: session } = useSession();
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    if (session) {
      const fetchEmployees = async () => {
        const employeesData = await getEmployees(session.token);
        setEmployees(employeesData);
      };
      fetchEmployees();
    }
  }, [session]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await updateEmployee(editingId, formData, session.token);
      setEditingId(null);
    } else {
      await createEmployee(formData, session.token);
    }
    const employeesData = await getEmployees(session.token);
    setEmployees(employeesData);
    setFormData({ name: "", email: "", phone: "" });
  };

  const handleEdit = (employee) => {
    setEditingId(employee.id);
    setFormData({ name: employee.name, email: employee.email, phone: employee.phone });
  };

  const handleDelete = async (id) => {
    await deleteEmployee(id, session.token);
    const employeesData = await getEmployees(session.token);
    setEmployees(employeesData);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Quản lý nhân viên</h1>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h2 className="text-xl font-semibold mb-2">{editingId ? "Chỉnh sửa nhân viên" : "Thêm nhân viên mới"}</h2>
        <form onSubmit={handleFormSubmit}>
          <Input
            type="text"
            name="name"
            label="Tên"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <Input
            type="email"
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <Input
            type="text"
            name="phone"
            label="Số điện thoại"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <Button type="submit" className="mt-2">
            {editingId ? "Cập nhật" : "Thêm mới"}
          </Button>
        </form>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Danh sách nhân viên</h2>
        <ul>
          {employees.map((employee) => (
            <li key={employee.id} className="flex items-center justify-between p-2 border-b">
              <div>
                <p className="font-semibold">{employee.name}</p>
                <p>Email: {employee.email}</p>
                <p>Số điện thoại: {employee.phone}</p>
              </div>
              <div className="flex items-center">
                <PencilIcon
                  className="h-5 w-5 text-blue-500 mr-2 cursor-pointer"
                  onClick={() => handleEdit(employee)}
                />
                <TrashIcon
                  className="h-5 w-5 text-red-500 cursor-pointer"
                  onClick={() => handleDelete(employee.id)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmployeesPage;
