"use client";
import { useState, useEffect } from "react";
import { getServices, createService, updateService, deleteService } from "../../../api/route";
import { useSession } from "next-auth/react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Button, Input, Textarea } from "@material-tailwind/react";

const ServicesPage = () => {
  const { data: session } = useSession();
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({ name: "", description: "", price: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    if (session) {
      const fetchServices = async () => {
        const servicesData = await getServices(session.token);
        setServices(servicesData);
      };
      fetchServices();
    }
  }, [session]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await updateService(editingId, formData, session.token);
      setEditingId(null);
    } else {
      await createService(formData, session.token);
    }
    const servicesData = await getServices(session.token);
    setServices(servicesData);
    setFormData({ name: "", description: "", price: "" });
  };

  const handleEdit = (service) => {
    setEditingId(service.id);
    setFormData({ name: service.name, description: service.description, price: service.price });
  };

  const handleDelete = async (id) => {
    await deleteService(id, session.token);
    const servicesData = await getServices(session.token);
    setServices(servicesData);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Quản lý dịch vụ và sản phẩm</h1>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h2 className="text-xl font-semibold mb-2">{editingId ? "Chỉnh sửa dịch vụ" : "Tạo dịch vụ mới"}</h2>
        <form onSubmit={handleFormSubmit}>
          <Input
            type="text"
            name="name"
            label="Tên dịch vụ"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <Textarea
            name="description"
            label="Mô tả"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
          <Input
            type="number"
            name="price"
            label="Giá"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
          <Button type="submit" className="mt-2">
            {editingId ? "Cập nhật" : "Tạo mới"}
          </Button>
        </form>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Danh sách dịch vụ</h2>
        <ul>
          {services.map((service) => (
            <li key={service.id} className="flex items-center justify-between p-2 border-b">
              <div>
                <p className="font-semibold">{service.name}</p>
                <p>{service.description}</p>
                <p>Giá: {service.price}</p>
              </div>
              <div className="flex items-center">
                <PencilIcon
                  className="h-5 w-5 text-blue-500 mr-2 cursor-pointer"
                  onClick={() => handleEdit(service)}
                />
                <TrashIcon
                  className="h-5 w-5 text-red-500 cursor-pointer"
                  onClick={() => handleDelete(service.id)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServicesPage;
