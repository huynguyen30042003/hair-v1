"use client";

import { useState, useEffect } from "react";
import { EyeIcon, CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Card,
  CardBody,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import Layout from "../components/Layout";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BASE_URL = "http://localhost:5000/api";

const AppointmentPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOption, setSearchOption] = useState("date");
  const [openDialog, setOpenDialog] = useState(false);
  const [currentAppointment, setCurrentAppointment] = useState(null);
  const [isViewing, setIsViewing] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [appointmentsPerPage] = useState(5);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await axios.get(`${BASE_URL}/appointments`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAppointments(response.data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
        toast.error("Error fetching appointments.");
      }
    };

    fetchAppointments();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredAppointments = appointments.filter((appointment) => {
    if (searchOption === "date") {
      return appointment.date.toLowerCase().includes(searchQuery.toLowerCase());
    } else if (searchOption === "customer") {
      return appointment.customer?.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    }
    return appointment;
  });

  const handleViewDetailsClick = (appointment) => {
    setIsViewing(true);
    setIsEditing(false);
    setCurrentAppointment({
      ...appointment,
      paymentInfo: appointment.paymentInfo || {
        name: "",
        email: "",
        phone: "",
        description: "",
      },
    });
    setOpenDialog(true);
  };

  const handleApproveClick = async (appointmentId) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.put(
        `${BASE_URL}/appointments/${appointmentId}/approve`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAppointments(
        appointments.map((appointment) =>
          appointment._id === appointmentId ? response.data : appointment
        )
      );
      toast.success("Appointment approved successfully.");
    } catch (error) {
      console.error("Error approving appointment:", error);
      toast.error("Error approving appointment.");
    }
  };

  const handleRejectClick = async (appointmentId) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.put(
        `${BASE_URL}/appointments/${appointmentId}/reject`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAppointments(
        appointments.map((appointment) =>
          appointment._id === appointmentId ? response.data : appointment
        )
      );
      toast.success("Appointment rejected successfully.");
    } catch (error) {
      console.error("Error rejecting appointment:", error);
      toast.error("Error rejecting appointment.");
    }
  };

  const handleSave = async () => {
    const token = localStorage.getItem("accessToken");
    try {
      if (isEditing) {
        await axios.put(
          `${BASE_URL}/appointments/${currentAppointment._id}`,
          currentAppointment,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAppointments(
          appointments.map((appointment) =>
            appointment._id === currentAppointment._id
              ? currentAppointment
              : appointment
          )
        );
        toast.success("Appointment updated successfully.");
      } else {
        const response = await axios.post(
          `${BASE_URL}/appointments`,
          currentAppointment,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAppointments([...appointments, response.data]);
        toast.success("Appointment added successfully.");
      }
      setOpenDialog(false);
    } catch (error) {
      console.error("Error saving appointment:", error);
      toast.error("Error saving appointment.");
    }
  };

  const handleStatusChange = async (appointment, newStatus) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.put(
        `${BASE_URL}/appointments/${appointment._id}/status`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAppointments(
        appointments.map((appt) =>
          appt._id === appointment._id ? { ...appt, status: newStatus } : appt
        )
      );
      toast.success("Appointment status updated successfully.");
    } catch (error) {
      console.error("Error updating appointment status:", error);
      toast.error("Error updating appointment status.");
    }
  };

  const indexOfLastAppointment = currentPage * appointmentsPerPage;
  const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
  const currentAppointments = filteredAppointments.slice(
    indexOfFirstAppointment,
    indexOfLastAppointment
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <div className="flex justify-center items-center mb-4">
          <div className="flex space-x-2 items-center">
            <Select
              label="Search By"
              value={searchOption}
              onChange={(value) => setSearchOption(value)}
              className="w-full lg:w-48"
            >
              <Option value="date">Date</Option>
              <Option value="customer">Customer</Option>
            </Select>
            <Input
              type="text"
              placeholder={`Search by ${searchOption}`}
              value={searchQuery}
              onChange={handleSearch}
              className="w-full lg:w-64"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Card className="w-full lg:w-3/4">
            <CardBody>
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="w-1/6 px-4 py-2">Date</th>
                    <th className="w-1/6 px-4 py-2">Time Start</th>
                    <th className="w-1/6 px-4 py-2">Time End</th>
                    <th className="w-1/6 px-4 py-2">Customer</th>
                    <th className="w-1/6 px-4 py-2">Status</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentAppointments.map((appointment) => (
                    <tr key={appointment._id}>
                      <td className="border px-4 py-2">
                        {formatDate(appointment.date)}
                      </td>
                      <td className="border px-4 py-2">
                        {appointment.timeStart}
                      </td>
                      <td className="border px-4 py-2">
                        {appointment.timeEnd}
                      </td>
                      <td className="border px-4 py-2">
                        {appointment.customer?.name || "N/A"}
                      </td>
                      <td className="border px-4 py-2">
                        <Select
                          label="Status"
                          value={appointment.status}
                          onChange={(value) =>
                            handleStatusChange(appointment, value)
                          }
                        >
                          <Option value="Pending">Pending</Option>
                          <Option value="Confirmed">Confirmed</Option>
                          <Option value="Completed">Completed</Option>
                          <Option value="Cancelled">Cancelled</Option>
                        </Select>
                      </td>
                      <td className="border px-4 py-2 flex space-x-2">
                        <Button
                          color="blue"
                          size="sm"
                          onClick={() => handleViewDetailsClick(appointment)}
                        >
                          <EyeIcon className="h-5 w-5" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-center mt-4">
                <nav>
                  <ul className="inline-flex items-center -space-x-px">
                    {[
                      ...Array(
                        Math.ceil(
                          filteredAppointments.length / appointmentsPerPage
                        )
                      ).keys(),
                    ].map((number) => (
                      <li key={number + 1}>
                        <Button
                          className={`py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                            currentPage === number + 1 ? "bg-gray-200" : ""
                          }`}
                          onClick={() => paginate(number + 1)}
                        >
                          {number + 1}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </CardBody>
          </Card>
        </div>

        <Dialog open={openDialog} handler={setOpenDialog}>
          <DialogHeader>
            {isViewing ? "View Appointment Details" : "Edit Appointment"}
          </DialogHeader>
          <DialogBody divider className="max-h-96 overflow-y-auto">
            <div className="space-y-4">
              <Input
                type="text"
                label="Date"
                value={formatDate(currentAppointment?.date) || ""}
                onChange={(e) =>
                  setCurrentAppointment({
                    ...currentAppointment,
                    date: e.target.value,
                  })
                }
                disabled={isViewing}
              />
              <Input
                type="time"
                label="Time Start"
                value={currentAppointment?.timeStart || ""}
                onChange={(e) =>
                  setCurrentAppointment({
                    ...currentAppointment,
                    timeStart: e.target.value,
                  })
                }
                disabled={isViewing}
              />
              <Input
                type="time"
                label="Time End"
                value={currentAppointment?.timeEnd || ""}
                onChange={(e) =>
                  setCurrentAppointment({
                    ...currentAppointment,
                    timeEnd: e.target.value,
                  })
                }
                disabled={isViewing}
              />
              <Input
                type="text"
                label="Customer"
                value={currentAppointment?.customer?.name || ""}
                onChange={(e) =>
                  setCurrentAppointment({
                    ...currentAppointment,
                    customer: {
                      ...currentAppointment.customer,
                      name: e.target.value,
                    },
                  })
                }
                disabled={isViewing}
              />
              <Input
                type="text"
                label="Total Price"
                value={currentAppointment?.totalPrice || ""}
                onChange={(e) =>
                  setCurrentAppointment({
                    ...currentAppointment,
                    totalPrice: e.target.value,
                  })
                }
                disabled={isViewing}
              />
              <Select
                label="Payment Status"
                value={currentAppointment?.paymentStatus || "Pending"}
                onChange={(value) =>
                  setCurrentAppointment({
                    ...currentAppointment,
                    paymentStatus: value,
                  })
                }
                disabled={isViewing}
              >
                <Option value="Pending">Pending</Option>
                <Option value="Paid">Paid</Option>
                <Option value="Failed">Failed</Option>
              </Select>
              <Select
                label="Payment Method"
                value={currentAppointment?.paymentMethod || "Cash"}
                onChange={(value) =>
                  setCurrentAppointment({
                    ...currentAppointment,
                    paymentMethod: value,
                  })
                }
                disabled={isViewing}
              >
                <Option value="Cash">Cash</Option>
                <Option value="Card">Card</Option>
              </Select>
              <Input
                type="text"
                label="Name"
                value={currentAppointment?.paymentInfo?.name || ""}
                onChange={(e) =>
                  setCurrentAppointment({
                    ...currentAppointment,
                    paymentInfo: {
                      ...currentAppointment.paymentInfo,
                      name: e.target.value,
                    },
                  })
                }
                disabled={isViewing}
              />
              <Input
                type="email"
                label="Email"
                value={currentAppointment?.paymentInfo?.email || ""}
                onChange={(e) =>
                  setCurrentAppointment({
                    ...currentAppointment,
                    paymentInfo: {
                      ...currentAppointment.paymentInfo,
                      email: e.target.value,
                    },
                  })
                }
                disabled={isViewing}
              />
              <Input
                type="text"
                label="Phone"
                value={currentAppointment?.paymentInfo?.phone || ""}
                onChange={(e) =>
                  setCurrentAppointment({
                    ...currentAppointment,
                    paymentInfo: {
                      ...currentAppointment.paymentInfo,
                      phone: e.target.value,
                    },
                  })
                }
                disabled={isViewing}
              />
              <Input
                type="text"
                label="Description"
                value={currentAppointment?.paymentInfo?.description || ""}
                onChange={(e) =>
                  setCurrentAppointment({
                    ...currentAppointment,
                    paymentInfo: {
                      ...currentAppointment.paymentInfo,
                      description: e.target.value,
                    },
                  })
                }
                disabled={isViewing}
              />
              <Input
                type="text"
                label="Status"
                value={currentAppointment?.status || "Pending"}
                onChange={(e) =>
                  setCurrentAppointment({
                    ...currentAppointment,
                    status: e.target.value,
                  })
                }
                disabled={isViewing}
              />
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={() => setOpenDialog(false)}
            >
              Close
            </Button>
            {!isViewing && (
              <Button variant="gradient" color="green" onClick={handleSave}>
                Save
              </Button>
            )}
          </DialogFooter>
        </Dialog>
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default AppointmentPage;
