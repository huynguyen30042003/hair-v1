"use client";
// Import necessary dependencies
import { useState } from "react";
import Image from "next/image";
import banner from "@data/img/bannerFG.webp";
import schedule from "@data/img/lichlam.jpg";

const BookingForm = () => {
  // State variables
  const [open, setOpen] = useState(false);
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
  const [successMessage, setSuccessMessage] = useState(false);
  const [services, setServices] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);

  // Data arrays
  const technicians = ["Mích", "Tình", "Huy", "Khánh", "Minh"];
  const availableServices = [
    { name: "Cắt tóc nam + Gội", price: "70,000đ" },
    { name: "Cắt tóc + Cạo mặt + Ráy tai", price: "100,000đ" },
    { name: "Gội + Tạo Kiểu", price: "60,000đ" },
  ];
  const timeSlots = ["8:00-10:00", "10:00-12:00", "13:00-15:00", "15:00-17:00"];

  // Toggle preview image modal
  const handlePreviewClick = () => {
    setPreviewOpen(!previewOpen);
  };

  const isSunday = (date) => {
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0; // Chủ nhật là ngày 0 trong tuần
  };

  const isWithinAllowedTimeRange = (date) => {
    const hours = date.getHours();
    return (hours >= 10 && hours < 19) || (isSunday(date) && hours < 16);
  };

  const isFutureDate = (selectedDate) => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Đặt giờ về 00:00:00.0000 để so sánh ngày
    return selectedDate >= currentDate;
  };

  const handleChangedate = (e) => {
    const { name, value } = e.target;
    // Kiểm tra nếu đang thay đổi ngày đặt lịch
    if (name === "date") {
      const selectedDate = new Date(value);
      // Kiểm tra ngày đã qua
      if (!isFutureDate(selectedDate)) {
        alert("Ngày đã qua, vui lòng chọn ngày khác!");
        return;
      }
      // // Kiểm tra giờ đặt lịch
      // if (!isWithinAllowedTimeRange(selectedDate)) {
      //   alert("Thời gian đặt lịch không hợp lệ!");
      //   return;
      // }
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Add selected service to services list
  const addService = () => {
    if (formData.service) {
      const selectedService = availableServices.find(
        (service) => service.name === formData.service
      );
      if (selectedService) {
        setServices([...services, selectedService]);
        setFormData({ ...formData, service: "" });
      }
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(true); // Display success message
    setOpen(false); // Close the form after successful submission
    // Additional logic for submitting data to backend can be added here
    console.log("Form submitted:", formData, services);
    // Reset form data
    setFormData({
      phone: "",
      name: "",
      totalGuests: "",
      technician: "",
      service: "",
      date: "",
      timeSlot: "",
      notes: "",
    });
    setServices([]);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-5">
      <div className="w-full max-w-lg p-4 bg-white shadow-md rounded-lg">
        <div className="relative w-full mb-4">
          <Image
            src={banner}
            alt="Banner"
            className="w-full h-auto rounded-md"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-sm font-bold bg-black bg-opacity-50 p-2 rounded-md text-center">
              Giờ mở cửa: 10:00 - 19:30
              <br />
              Số điện thoại: 19004407
            </p>
          </div>
        </div>
        <div className="w-full mb-4 flex items-center border border-gray-300 rounded-md p-4">
          <div className="w-1/4 relative">
            <div
              className="group cursor-pointer relative"
              onClick={handlePreviewClick}
              onMouseEnter={() => setPreviewOpen(true)}
              onMouseLeave={() => setPreviewOpen(false)}
            >
              <Image
                src={schedule}
                alt="Lịch làm việc"
                className="w-full h-auto rounded-md transition duration-300 transform group-hover:scale-110"
              />
              {previewOpen && (
                <p className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold bg-black bg-opacity-50 rounded-md cursor-pointer">
                  Xem trước
                </p>
              )}
            </div>
          </div>
          <div className="w-3/4 pl-4">
            <p className="text-lg font-bold">LỊCH HOẠT ĐỘNG</p>
            <p className="text-sm">
              Giờ làm việc: 10am - 7:30pm (mỗi ngày) Ngoại trừ Thứ Tư
              <br />
              Riêng Thứ Tư: 10am - 4pm
            </p>
          </div>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Đặt Lịch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Số điện thoại
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Thông tin dịch vụ
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Yêu cầu kĩ thuật viên
              </label>
              <select
                name="technician"
                value={formData.technician}
                onChange={handleChange}
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
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Chọn dịch vụ</option>
                  {availableServices.map((service, index) => (
                    <option key={index} value={service.name}>
                      {service.name} ({service.price})
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={addService}
                  className="mt-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Thêm
                </button>
              </div>
              <ul className="mt-2 space-y-1">
                {services.map((service, index) => (
                  <li key={index} className="text-gray-700">
                    {service.name} - {service.price}
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
                onChange={handleChangedate}
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
                onChange={handleChange}
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
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <button
            type="submit"
            onClick={() => setOpen(true)}
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Đặt lịch
          </button>
        </form>
        {/* Success message modal */}
        {successMessage && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={() => setSuccessMessage(false)} // Close on click outside
          >
            <div className="max-w-lg p-4 bg-white shadow-md rounded-lg">
              <h2 className="text-xl font-bold text-center text-gray-800 mb-6">
                Cảm ơn bạn đã đặt lịch
              </h2>
              <p className="text-gray-700 mb-2">THÔNG BÁO:</p>
              <p className="text-gray-700 mb-4">
                Lịch hẹn đã được hệ thống tiếp nhận và sẽ được xác nhận sớm qua
                tin nhắn hệ thống ZALO. LH hỗ trợ 1900 4407.
              </p>
              <button
                onClick={() => setSuccessMessage(false)}
                className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Đóng
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Preview modal */}
      {previewOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handlePreviewClick} // Close preview on click outside
        >
          <div className="max-w-4xl max-h-4xl overflow-auto">
            <Image
              src={schedule}
              alt="Lịch làm việc"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
