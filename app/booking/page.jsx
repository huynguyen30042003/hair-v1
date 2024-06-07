"use client";
import { useState } from "react";

const BookingForm = () => {
  const [open,setOpen] =useState(false)
  // const [value,setValue] =useState()

  const [formData, setFormData] = useState({
    phone: "",
    name: "",
    totalGuests: "",
    technician: "",
    service: "",
    date: "",
    timeSlot: "",
    notes: "",
  });

  const [services, setServices] = useState([]);
  const technicians = [
    "Kỹ thuật viên 1",
    "Kỹ thuật viên 2",
    "Kỹ thuật viên 3",
  ];
  const availableServices= [
    "Dịch vụ 1",
    "Dịch vụ 2",
    "Dịch vụ 3",
  ];
  const timeSlots =[
    "8:00-10:00",
    "10:00-12:00",
    "13:00-15:00",
    "15:00-17:00",
  ];

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleAddService = () => {
  //   setServices([...services, formData.service]);
  //   setFormData({ ...formData, service: "" });
  // };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // alert("Đặt lịch thành công!");
    setOpen(!open)

  };
  const handleOpen=()=>{
    setOpen(!open)
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-5">
      <div className="w-full max-w-lg p-4 bg-white shadow-md rounded-lg">
        <form 
        // onSubmit={setOpen(!open)} 
        className="space-y-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Đặt Lịch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Số điện thoại
              </label>
              <input
                type="text"
                name="phone"
                // value={formData.phone}
                // onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Họ và tên
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                // onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tổng số khách
              </label>
              <input
                type="number"
                name="totalGuests"
                value={formData.totalGuests}
                // onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Thông tin dịch vụ</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Yêu cầu kĩ thuật viên
              </label>
              <select
                  name="technician"
                  value={formData.technician}
                // onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Chọn kỹ thuật viên</option>
                {technicians.map((technician, index) => (
                  <option key={index} value={technician}>
                    {technician}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Dịch vụ
              </label>
              <div className="flex space-x-2">
                <select
                  name="service"
                  value={formData.service}
                  // onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Chọn dịch vụ</option>
                  {availableServices.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  // onClick={handleAddService}
                  className="mt-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Thêm
                </button>
              </div>
              <ul className="mt-2 space-y-1">
                {services.map((service, index) => (
                  <li key={index} className="text-gray-700">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Ngày đặt lịch
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                // onChange={handleChange}

                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Chọn khung giờ dịch vụ
              </label>
              <select
                name="timeSlot"
                value={formData.timeSlot}
                onChange={(e)=>setValue(e.target.value)}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Chọn khung giờ</option>
                {timeSlots.map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Ghi chú
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                // onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <button
            type="submit"
            onClick={handleOpen}
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Đặt lịch
          </button>
        </form>
      </div>
      <div className={open ? "w-full max-w-lg p-4 bg-white shadow-md rounded-lg mt-8 md:mt-0 md:ml-8" : "hidden"}>
        <h2 className="text-xl font-bold text-center text-gray-800 mb-6">Bill của bạn</h2>
        <div className="border border-gray-300 rounded-md p-4 bg-gray-50">
          <p className="text-gray-700 mb-2">
            Lịch hẹn:{" "}
            <span className="font-bold">
              {formData.date} {formData.timeSlot}
            </span>
          </p>
          <p className="text-gray-700 mb-2">
            Dịch vụ: <span className="font-bold">{services.join(", ")}</span>
          </p>
          <p className="text-gray-700 mb-2">
            Số người:{" "}
            <span className="font-bold">{formData.totalGuests}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default BookingForm

