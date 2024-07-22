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
} from "@material-tailwind/react";
import Layout from "../components/Layout";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BASE_URL = "http://localhost:5000/api";

const ComboPage = () => {
  const [combos, setCombos] = useState([]);
  const [services, setServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [currentCombo, setCurrentCombo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [combosPerPage] = useState(5);

  useEffect(() => {
    const fetchCombos = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/combos`);
        setCombos(response.data);
      } catch (error) {
        console.error("Error fetching combos:", error);
        toast.error("Error fetching combos.");
      }
    };

    const fetchServices = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/services`);
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
        toast.error("Error fetching services.");
      }
    };

    fetchCombos();
    fetchServices();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCombos = combos.filter((combo) =>
    combo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddClick = () => {
    setIsEditing(false);
    setCurrentCombo({ name: "", price: "", services: [] });
    setOpenDialog(true);
  };

  const handleEditClick = (combo) => {
    setIsEditing(true);
    setCurrentCombo(combo);
    console.log(combo)
    setOpenDialog(true);
  };

  const handleDeleteClick = async (comboId) => {
    try {
      const token = localStorage.getItem("accessToken");
      await axios.delete(`${BASE_URL}/combos/${comboId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCombos(combos.filter((combo) => combo._id !== comboId));
      toast.success("Combo deleted successfully.");
    } catch (error) {
      console.error("Error deleting combo:", error);
      toast.error("Error deleting combo.");
    }
  };

  const handleSave = async () => {
    const token = localStorage.getItem("accessToken");
    try {
      if (isEditing) {
        await axios.put(
          `${BASE_URL}/combos/${currentCombo._id}`,
          currentCombo,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCombos(
          combos.map((combo) =>
            combo._id === currentCombo._id ? currentCombo : combo
          )
        );
        toast.success("Combo updated successfully.");
      } else {
        const response = await axios.post(
          `${BASE_URL}/combos`,
          currentCombo,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data)
        setCombos([...combos, { ...response.data, ...currentCombo }]);
        toast.success("Combo added successfully.");
      }
      setOpenDialog(false);
    } catch (error) {
      console.error("Error saving combo:", error);
      toast.error("Error saving combo.");
    }
  };

  const handleCheckboxChange = (serviceString) => {
    const service = JSON.parse(serviceString);
    console.log(currentCombo.services?.some(ser => ser._id === service._id))
    const updatedServices = currentCombo.services?.some(ser => ser._id === service._id)
      ? currentCombo.services.filter((ser) => ser._id !== service._id)
      : [...currentCombo.services, { ...service }];
    setCurrentCombo({ ...currentCombo, services: updatedServices });
  };

  const indexOfLastCombo = currentPage * combosPerPage;
  const indexOfFirstCombo = indexOfLastCombo - combosPerPage;
  const currentCombos = filteredCombos.slice(
    indexOfFirstCombo,
    indexOfLastCombo
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <Typography variant="h1">Combo Management</Typography>
          <Button color="green" onClick={handleAddClick}>
            <PlusIcon className="h-5 w-5 mr-2" />
            Add Combo
          </Button>
        </div>
        <div className="flex justify-center mb-4">
          <div className="flex space-x-2 items-center">
            <Input
              type="text"
              placeholder="Search by name"
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
                    <th className="w-1/4 px-4 py-2">Name</th>
                    <th className="w-1/4 px-4 py-2">Price</th>
                    <th className="w-1/2 px-4 py-2">Services</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentCombos.map((combo) => (
                    <tr key={combo._id}>
                      <td className="border px-4 py-2">{combo.name}</td>
                      <td className="border px-4 py-2">{combo.price}</td>
                      <td className="border px-4 py-2">
                        {combo.services.map(service => service.name).join(", ")}
                      </td>
                      <td className="border px-4 py-2 flex space-x-2">
                        <Button
                          color="blue"
                          size="sm"
                          onClick={() => handleEditClick(combo)}
                        >
                          <PencilIcon className="h-5 w-5" />
                        </Button>
                        <Button
                          color="red"
                          size="sm"
                          onClick={() => handleDeleteClick(combo._id)}
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
                        Math.ceil(filteredCombos.length / combosPerPage)
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
          <DialogHeader>{isEditing ? "Edit Combo" : "Add Combo"}</DialogHeader>
          <DialogBody divider>
            <div className="space-y-4">
              <Input
                type="text"
                label="Name"
                value={currentCombo?.name || ""}
                onChange={(e) =>
                  setCurrentCombo({ ...currentCombo, name: e.target.value })
                }
                className="w-full max-w-xs"
              />
              <Input
                type="text"
                label="Price"
                value={currentCombo?.price || ""}
                onChange={(e) =>
                  setCurrentCombo({ ...currentCombo, price: e.target.value })
                }
                className="w-full max-w-xs"
              />
              <div className="w-full max-w-xs">
                <label className="block text-sm font-medium text-gray-700">Services</label>
                <div className="mt-2 space-y-2">
                  {services.map((service) => (
                    <div key={service._id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={service._id}
                        name={service.name}
                        checked={Array.from(currentCombo?.services || []).some(ser => ser._id === service._id)}
                        onChange={(e) => handleCheckboxChange(JSON.stringify(service))}
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor={service._id} className="ml-2 block text-sm text-gray-900">
                        {service.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button variant="text" color="red" onClick={() => setOpenDialog(false)}>
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

export default ComboPage;
