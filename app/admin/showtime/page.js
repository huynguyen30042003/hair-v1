"use client";

import { useState, useEffect } from "react";
import { PencilIcon, TrashIcon, PlusIcon } from "@heroicons/react/24/outline";
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
import { getUsers } from "api/route";

const BASE_URL = "http://localhost:5000/api";

const ShowTimePage = () => {
  const [showTimes, setShowTimes] = useState([]);
  const [users, setUsers] = useState([]); // New state for user data
  const [searchQuery, setSearchQuery] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [currentShowTime, setCurrentShowTime] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showTimesPerPage] = useState(5);
  const [minDate, setMinDate] = useState('');
  const formatDateForInput = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
    const year = today.getFullYear();
    setMinDate(`${year}-${month}-${day}`);
  }, []);
  useEffect(() => {
    const fetchShowTimes = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/show-times`);
        setShowTimes(response.data);
      } catch (error) {
        console.error("Error fetching show times:", error);
        toast.error("Error fetching show times.");
      }
    };

    fetchShowTimes();
  }, []);

  // Fetch users from the API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await getUsers(token);
        setUsers(response.filter(re => re.role == "Staff"));
      } catch (error) {
        console.error("Error fetching users:", error);
        toast.error("Error fetching users.");
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredShowTimes = showTimes.filter((showTime) =>
    showTime.date.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddClick = () => {
    setIsEditing(false);
    setCurrentShowTime({ date: "", timeStart: "", timeEnd: "", userId: "" });
    setOpenDialog(true);
  };

  const handleEditClick = (showTime) => {
    setIsEditing(true);
    setCurrentShowTime(showTime);
    setOpenDialog(true);
  };

  const handleDeleteClick = async (showTimeId) => {
    try {
      const token = localStorage.getItem("accessToken");
      await axios.delete(`${BASE_URL}/show-times/${showTimeId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setShowTimes(showTimes.filter((showTime) => showTime._id !== showTimeId));
      toast.success("Show time deleted successfully.");
    } catch (error) {
      console.error("Error deleting show time:", error);
      toast.error("Error deleting show time.");
    }
  };

  const handleSave = async () => {
    const token = localStorage.getItem("accessToken");
    try {
      if (isEditing) {
        await axios.put(
          `${BASE_URL}/show-times/${currentShowTime._id}`,
          { ...currentShowTime, staff: currentShowTime.staff._id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setShowTimes(
          showTimes.map((showTime) =>
            showTime._id === currentShowTime._id ? { ...currentShowTime, staff: currentShowTime.staff } : showTime
          )
        );
        toast.success("Show time updated successfully.");
      } else {
        const response = await axios.post(
          `${BASE_URL}/show-times`,
          { ...currentShowTime, staff: currentShowTime.staff._id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setShowTimes([...showTimes, { ...response.data, ...currentShowTime }]);
        toast.success("Show time added successfully.");
      }
      setOpenDialog(false);
    } catch (error) {
      console.error("Error saving show time:", error);
      toast.error("Error saving show time.");
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const indexOfLastShowTime = currentPage * showTimesPerPage;
  const indexOfFirstShowTime = indexOfLastShowTime - showTimesPerPage;
  const currentShowTimes = filteredShowTimes.slice(
    indexOfFirstShowTime,
    indexOfLastShowTime
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <Typography variant="h1">Show Time Management</Typography>
          <Button color="green" onClick={handleAddClick}>
            <PlusIcon className="h-5 w-5 mr-2" />
            Add Show Time
          </Button>
        </div>
        <div className="flex justify-center mb-4">
          <div className="flex space-x-2 items-center">
            <Input
              type="text"
              placeholder="Search by date"
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
                    <th className="w-1/3 px-4 py-2">Staff</th>
                    <th className="w-1/3 px-4 py-2">Date</th>
                    <th className="w-1/3 px-4 py-2">Time Start</th>
                    <th className="w-1/3 px-4 py-2">Time End</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentShowTimes.map((showTime) => (
                    <tr key={showTime._id}>
                      <td className="border px-4 py-2">{showTime.staff?.name}</td>
                      <td className="border px-4 py-2">
                        {formatDate(showTime.date)}
                      </td>
                      <td className="border px-4 py-2">{showTime.timeStart}</td>
                      <td className="border px-4 py-2">{showTime.timeEnd}</td>
                      <td className="border px-4 py-2 flex space-x-2">
                        <Button
                          color="blue"
                          size="sm"
                          onClick={() => handleEditClick(showTime)}
                        >
                          <PencilIcon className="h-5 w-5" />
                        </Button>
                        <Button
                          color="red"
                          size="sm"
                          onClick={() => handleDeleteClick(showTime._id)}
                        >
                          <TrashIcon className="h-5 w-5" />
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
                        Math.ceil(filteredShowTimes.length / showTimesPerPage)
                      ).keys(),
                    ].map((number) => (
                      <li key={number + 1}>
                        <Button
                          className={`py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${currentPage === number + 1 ? "bg-gray-200" : ""
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
            {isEditing ? "Edit Show Time" : "Add Show Time"}
          </DialogHeader>
          <DialogBody divider>
            <div className="space-y-4">
              <Input
                type="date"
                label="Date"
                value={currentShowTime?.date}
                onChange={(e) =>
                  setCurrentShowTime({
                    ...currentShowTime,
                    date: e.target.value,
                  })
                }
                className="w-full max-w-xs"
              />
              <Input
                type="time"
                label="Time Start"
                value={currentShowTime?.timeStart || ""}
                onChange={(e) =>
                  setCurrentShowTime({
                    ...currentShowTime,
                    timeStart: e.target.value,
                  })
                }
                className="w-full max-w-xs"
              />
              <Input
                type="time"
                label="Time End"
                value={currentShowTime?.timeEnd || ""}
                onChange={(e) =>
                  setCurrentShowTime({
                    ...currentShowTime,
                    timeEnd: e.target.value,
                  })
                }
                className="w-full max-w-xs"
              />
              <Select
                label="Select User"
                value={currentShowTime?.staff || ""}
                onChange={(e) =>
                  setCurrentShowTime({
                    ...currentShowTime,
                    staff: e,
                  })
                }
                className="w-full max-w-xs"
              >
                {users.map((user) => (
                  <Option key={user._id} value={user}>
                    {user.name}
                  </Option>
                ))}
              </Select>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={() => setOpenDialog(false)}
            >
              Cancel
            </Button>
            <Button variant="gradient" color="green" onClick={handleSave}>
              Save
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default ShowTimePage;
