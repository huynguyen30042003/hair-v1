"use client";
import {
  UserCircleIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";

const AccountPage = () => {
  const profile = {
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    phone: "0123456789",
  };
  const users = [
    { id: 1, name: "Nguyễn Văn B", email: "nguyenvanb@example.com" },
    { id: 2, name: "Trần Thị C", email: "tranthic@example.com" },
    { id: 3, name: "Lê Văn D", email: "levand@example.com" },
  ];
  const [editingProfile, setEditingProfile] = useState(false);
  const [formData, setFormData] = useState({
    name: profile.name,
    email: profile.email,
    phone: profile.phone,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleProfileUpdate = () => {
    setEditingProfile(false);
    // Cập nhật logic ở đây
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Quản lý tài khoản</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Thông tin cá nhân</h2>
        {editingProfile ? (
          <div>
            <Input
              type="text"
              name="name"
              label="Tên"
              value={formData.name}
              onChange={handleInputChange}
            />
            <Input
              type="email"
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              name="phone"
              label="Số điện thoại"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <Button onClick={handleProfileUpdate} className="mt-2">
              Cập nhật
            </Button>
            <Button
              onClick={() => setEditingProfile(false)}
              className="mt-2 ml-2"
            >
              Hủy
            </Button>
          </div>
        ) : (
          <div>
            <p>Tên: {profile.name}</p>
            <p>Email: {profile.email}</p>
            <p>Số điện thoại: {profile.phone}</p>
            <Button onClick={() => setEditingProfile(true)} className="mt-2">
              Chỉnh sửa
            </Button>
          </div>
        )}
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mt-4">
        <h2 className="text-xl font-semibold mb-2">Danh sách người dùng</h2>
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              className="flex items-center justify-between p-2 border-b"
            >
              <div className="flex items-center">
                <UserCircleIcon className="h-6 w-6 mr-2" />
                <span>
                  {user.name} - {user.email}
                </span>
              </div>
              <div className="flex items-center">
                <PencilIcon className="h-5 w-5 text-blue-500 mr-2 cursor-pointer" />
                <TrashIcon className="h-5 w-5 text-red-500 cursor-pointer" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AccountPage;
