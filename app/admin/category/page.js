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

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [categoriesPerPage] = useState(5);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/categories`);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
        toast.error("Error fetching categories.");
      }
    };

    fetchCategories();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCategories = categories.filter((category) =>
    category.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddClick = () => {
    setIsEditing(false);
    setCurrentCategory({ category: "" });
    setOpenDialog(true);
  };

  const handleEditClick = (category) => {
    setIsEditing(true);
    setCurrentCategory(category);
    setOpenDialog(true);
  };

  const handleDeleteClick = async (categoryId) => {
    try {
      const token = localStorage.getItem("accessToken");
      await axios.delete(`${BASE_URL}/categories/${categoryId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategories(categories.filter((category) => category._id !== categoryId));
      toast.success("Category deleted successfully.");
    } catch (error) {
      console.error("Error deleting category:", error);
      toast.error("Error deleting category.");
    }
  };

  const handleSave = async () => {
    const token = localStorage.getItem("accessToken");
    try {
      if (isEditing) {
        await axios.put(
          `${BASE_URL}/categories/${currentCategory._id}`,
          currentCategory,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCategories(
          categories.map((category) =>
            category._id === currentCategory._id ? currentCategory : category
          )
        );
        toast.success("Category updated successfully.");
      } else {
        const response = await axios.post(
          `${BASE_URL}/categories`,
          currentCategory,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCategories([...categories, response.data]);
        toast.success("Category added successfully.");
      }
      setOpenDialog(false);
    } catch (error) {
      console.error("Error saving category:", error);
      toast.error("Error saving category.");
    }
  };

  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = filteredCategories.slice(
    indexOfFirstCategory,
    indexOfLastCategory
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <Typography variant="h1">Category Management</Typography>
          <Button color="green" onClick={handleAddClick}>
            <PlusIcon className="h-5 w-5 mr-2" />
            Add Category
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
              <table className="min-w-full bg-white text-center">
                <thead>
                  <tr>
                    <th className="w-1/2 px-4 py-2">Name</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentCategories.map((category) => (
                    <tr key={category._id}>
                      <td className="border px-4 py-2">{category.category}</td>
                      <td className="border px-4 py-2 flex justify-center space-x-2">
                        <Button
                          color="blue"
                          size="sm"
                          onClick={() => handleEditClick(category)}
                        >
                          <PencilIcon className="h-5 w-5" />
                        </Button>
                        <Button
                          color="red"
                          size="sm"
                          onClick={() => handleDeleteClick(category._id)}
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
                        Math.ceil(filteredCategories.length / categoriesPerPage)
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
          <DialogHeader>{isEditing ? "Edit Category" : "Add Category"}</DialogHeader>
          <DialogBody divider>
            <div className="space-y-4">
              <Input
                type="text"
                label="Name"
                value={currentCategory?.category || ""}
                onChange={(e) =>
                  setCurrentCategory({ ...currentCategory, category: e.target.value })
                }
                className="w-full max-w-xs"
                size="small"  // Add this line
              />
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

export default CategoryPage;
