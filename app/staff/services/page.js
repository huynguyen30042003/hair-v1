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

const BASE_URL = "http://localhost:5000/api";

const SearchPage = () => {
  const [services, setServices] = useState([]);
  const [allServices, setAllServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOption, setSearchOption] = useState("name");
  const [openDialog, setOpenDialog] = useState(false);
  const [currentService, setCurrentService] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [servicesPerPage] = useState(5);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await axios.get(`${BASE_URL}/services`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setServices(response.data);
        setAllServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
        toast.error("Error fetching services.");
      }
    };

    fetchServices();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredServices = services.filter((service) => {
    if (searchOption === "name") {
      return service.name.toLowerCase().includes(searchQuery.toLowerCase());
    } else if (searchOption === "price") {
      return service.price.toString().includes(searchQuery);
    }
    console.log(service)
    return service;
  });

  const handleAddClick = () => {
    setIsEditing(false);
    setCurrentService({
      name: "",
      price: "",
      duration: "",
      description: "",
      selectedServices: [],
    });
    setOpenDialog(true);
  };

  const handleEditClick = (service) => {
    setIsEditing(true);
    setCurrentService({
      ...service,
      selectedServices: service.selectedServices || [],
    });
    setOpenDialog(true);
  };

  const handleDeleteClick = async (serviceId) => {
    try {
      const token = localStorage.getItem("accessToken");
      await axios.delete(`${BASE_URL}/services/${serviceId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setServices(services.filter((service) => service._id !== serviceId));
      toast.success("Service deleted successfully.");
    } catch (error) {
      console.error("Error deleting service:", error);
      toast.error("Error deleting service.");
    }
  };

  const handleSave = async () => {
    const token = localStorage.getItem("accessToken");
    try {
      if (isEditing) {
        await axios.put(
          `${BASE_URL}/services/${currentService._id}`,
          currentService,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setServices(
          services.map((service) =>
            service._id === currentService._id ? currentService : service
          )
        );
        toast.success("Service updated successfully.");
      } else {
        const response = await axios.post(
          `${BASE_URL}/services`,
          currentService,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setServices([...services, response.data]);
        toast.success("Service added successfully.");
      }
      setOpenDialog(false);
    } catch (error) {
      console.error("Error saving service:", error);
      toast.error("Error saving service.");
    }
  };

  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = filteredServices.slice(
    indexOfFirstService,
    indexOfLastService
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <Typography variant="h1">Services</Typography>
          <Button color="green" onClick={handleAddClick}>
            <PlusIcon className="h-5 w-5 mr-2" />
            Add Service
          </Button>
        </div>
        <div className="flex justify-center mb-4">
          <div className="flex space-x-2 items-center">
            <Select
              label="Search By"
              value={searchOption}
              onChange={(e) => setSearchOption(e)}
              className="w-full lg:w-48"
            >
              <Option value="name">Name</Option>
              <Option value="price">Price</Option>
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
                    <th className="w-1/4 px-4 py-2">Name</th>
                    <th className="w-1/4 px-4 py-2">Category</th>
                    <th className="w-1/4 px-4 py-2">Description</th>
                    <th className="w-1/4 px-4 py-2">Price</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentServices.map((service) => (
                    <tr key={service._id}>
                      <td className="border px-4 py-2">{service.name}</td>
                      <td className="border px-4 py-2">Service</td>
                      <td className="border px-4 py-2">
                        {service.description}
                      </td>
                      <td className="border px-4 py-2">{service.price}</td>
                      <td className="border px-4 py-2 flex space-x-2">
                        <Button
                          color="blue"
                          size="sm"
                          onClick={() => handleEditClick(service)}
                        >
                          <PencilIcon className="h-5 w-5" />
                        </Button>
                        <Button
                          color="red"
                          size="sm"
                          onClick={() => handleDeleteClick(service._id)}
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
                        Math.ceil(filteredServices.length / servicesPerPage)
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
            {isEditing ? "Edit Service" : "Add Service"}
          </DialogHeader>
          <DialogBody divider>
            <div className="space-y-4">
              <Input
                type="text"
                label="Name"
                value={currentService?.name || ""}
                onChange={(e) =>
                  setCurrentService({ ...currentService, name: e.target.value })
                }
              />
              <Input
                type="text"
                label="Price"
                value={currentService?.price || ""}
                onChange={(e) =>
                  setCurrentService({
                    ...currentService,
                    price: e.target.value,
                  })
                }
              />
              <Input
                type="text"
                label="Duration"
                value={currentService?.duration || ""}
                onChange={(e) =>
                  setCurrentService({
                    ...currentService,
                    duration: e.target.value,
                  })
                }
              />
              <Input
                type="text"
                label="Description"
                value={currentService?.description || ""}
                onChange={(e) =>
                  setCurrentService({
                    ...currentService,
                    description: e.target.value,
                  })
                }
              />
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

export default SearchPage;
