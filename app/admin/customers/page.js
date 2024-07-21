"use client";
import { useState, useEffect } from "react";
import { getCustomers, createCustomer, updateCustomer, deleteCustomer } from "../../../api/route"; // Thêm các hàm API tương ứng
import { useSession } from "next-auth/react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Button, Input } from "@material-tailwind/react";

const CustomersPage = () => {
  const { data: session } = useSession();
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    if (session) {
      const fetchCustomers = async () => {
        const customersData = await getCustomers(session.token);
        setCustomers(customersData);
      };
      fetchCustomers();
    }
  }, [session]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await updateCustomer(editingId, formData, session.token);
      setEditingId(null);
    } else {
      await createCustomer(formData, session.token);
    }
    const customersData = await getCustomers(session.token);
    setCustomers(customersData);
    setFormData({ name: "", email: "", phone: "" });
  };

  const handleEdit = (customer) => {
    setEditingId(customer.id);
    setFormData({ name: customer.name, email: customer.email, phone: customer.phone });
  };

  const handleDelete = async (id) => {
    await deleteCustomer(id, session.token);
    const customersData = await getCustomers(session.token);
    setCustomers(customersData);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Quản lý khách hàng</h1>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h2 className="text-xl font-semibold mb-2">{editingId ? "Chỉnh sửa khách hàng" : "Thêm khách hàng mới"}</h2>
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
        <h2 className="text-xl font-semibold mb-2">Danh sách khách hàng</h2>
        <ul>
          {customers.map((customer) => (
            <li key={customer.id} className="flex items-center justify-between p-2 border-b">
              <div>
                <p className="font-semibold">{customer.name}</p>
                <p>Email: {customer.email}</p>
                <p>Số điện thoại: {customer.phone}</p>
              </div>
              <div className="flex items-center">
                <PencilIcon
                  className="h-5 w-5 text-blue-500 mr-2 cursor-pointer"
                  onClick={() => handleEdit(customer)}
                />
                <TrashIcon
                  className="h-5 w-5 text-red-500 cursor-pointer"
                  onClick={() => handleDelete(customer.id)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomersPage;
