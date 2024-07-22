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
import Layout from "../../admin/components/Layout";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { displayImage, createUser } from "api/route";

const BASE_URL = "http://localhost:5000/api";

const AccountPage = () => {
  const [accounts, setAccounts] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentAccounts, setCurrentAccounts] = useState([]);

  const [currentAccount, setCurrentAccount] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [accountsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCriteria, setSearchCriteria] = useState("name");
  const [countFilteredAccounts, setCountFilteredAccounts] = useState(0);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await axios.get(`${BASE_URL}/accounts`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAccounts(response.data);
      } catch (error) {
        console.error("Error fetching accounts:", error);
        toast.error("Error fetching accounts.");
      }
    };

    fetchAccounts();
  }, []);

  const handleAddClick = () => {
    setIsEditing(false);
    setCurrentAccount({
      name: "",
      email: "",
      phone: "",
      password: "",
      role: "Customer",
      avatar: "",
    });
    setOpenDialog(true);
  };

  const handleEditClick = async (account) => {
    setIsEditing(true);
    setCurrentAccount(account);
    setOpenDialog(true);
  };

  const handleDeleteClick = async (accountId) => {
    try {
      const token = localStorage.getItem("accessToken");
      await axios.delete(`${BASE_URL}/accounts/${accountId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAccounts(accounts.filter((account) => account._id !== accountId));
      toast.success("Account deleted successfully.");
    } catch (error) {
      console.error("Error deleting account:", error);
      toast.error("Error deleting account.");
    }
  };

  const handleSave = async () => {
    const token = localStorage.getItem("accessToken");
    try {
      if (isEditing) {
        await axios.put(
          `${BASE_URL}/accounts/${currentAccount._id}`,
          currentAccount,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAccounts(
          accounts.map((acc) =>
            acc._id === currentAccount._id ? currentAccount : acc
          )
        );
        toast.success("Account updated successfully.");
      } else {
        const response = await createUser(currentAccount, token);
        setAccounts((prev) => [...prev, response.data]);
        toast.success("Account added successfully.");
      }
      setOpenDialog(false);
    } catch (error) {
      console.error("Error saving account:", error);
      toast.error("Error saving account.");
    }
  };

  const handleAvatarUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(`${BASE_URL}/images`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      setCurrentAccount({ ...currentAccount, avatar: response.data.filename });
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Error uploading image.");
    }
  };
  const indexOfLastAccount = currentPage * accountsPerPage;
  const indexOfFirstAccount = indexOfLastAccount - accountsPerPage;

  useEffect(() => {
    const filteredAccounts = accounts.filter((account) => {
      if (searchCriteria === "name") {
        return account?.name.toLowerCase().includes(searchQuery.toLowerCase());
      } else if (searchCriteria === "email") {
        return account?.email.toLowerCase().includes(searchQuery.toLowerCase());
      } else if (searchCriteria === "phone") {
        return account?.phone.includes(searchQuery);
      } else if (searchCriteria === "role") {
        return account?.role.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return false;
    });
    setCountFilteredAccounts(filteredAccounts.length);
    setCurrentAccounts(
      filteredAccounts.slice(indexOfFirstAccount, indexOfLastAccount)
    );
  }, [accounts,searchQuery]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <Typography variant="h1">Account Management</Typography>
          <Button color="green" onClick={handleAddClick}>
            <PlusIcon className="h-5 w-5 mr-2" />
            Add Account
          </Button>
        </div>
        <div className="flex justify-center mb-4">
          <div className="flex space-x-2 items-center">
            <Select
              label="Search By"
              value={searchCriteria}
              onChange={(value) => setSearchCriteria(value)}
              className="w-full lg:w-48"
            >
              <Option value="name">Name</Option>
              <Option value="email">Email</Option>
              <Option value="phone">Phone Number</Option>
              <Option value="role">Role</Option>
            </Select>
            <Input
              type="text"
              placeholder={`Search by ${searchCriteria}`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
                    <th className="w-1/6 px-4 py-2">Avatar</th>
                    <th className="w-1/6 px-4 py-2">Name</th>
                    <th className="w-1/6 px-4 py-2">Email</th>
                    <th className="w-1/6 px-4 py-2">Phone Number</th>
                    <th className="w-1/6 px-4 py-2">Role</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentAccounts?.map((account) => (
                    <tr key={account._id}>
                      <td className="border px-4 py-2">
                        <img
                          src={displayImage(account?.avatar)}
                          alt="Avatar"
                          className="w-12 h-12 rounded-full"
                        />
                      </td>
                      <td className="border px-4 py-2">{account.name}</td>
                      <td className="border px-4 py-2">{account.email}</td>
                      <td className="border px-4 py-2">{account.phone}</td>
                      <td className="border px-4 py-2">{account.role}</td>
                      <td className="border px-4 py-2 flex space-x-2">
                        <Button
                          color="blue"
                          size="sm"
                          onClick={() => handleEditClick(account)}
                        >
                          <PencilIcon className="h-5 w-5" />
                        </Button>
                        <Button
                          color="red"
                          size="sm"
                          onClick={() => handleDeleteClick(account._id)}
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
                        Math.ceil(countFilteredAccounts / accountsPerPage)
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
            {isEditing ? "Edit Account" : "Add Account"}
          </DialogHeader>
          <DialogBody divider>
            <div className="space-y-4">
              <Input
                type="text"
                label="Name"
                value={currentAccount?.name || ""}
                onChange={(e) =>
                  setCurrentAccount({ ...currentAccount, name: e.target.value })
                }
              />
              <Input
                type="email"
                label="Email"
                value={currentAccount?.email || ""}
                onChange={(e) =>
                  setCurrentAccount({
                    ...currentAccount,
                    email: e.target.value,
                  })
                }
              />
              <Input
                type="text"
                label="Phone Number"
                value={currentAccount?.phone || ""}
                onChange={(e) =>
                  setCurrentAccount({
                    ...currentAccount,
                    phone: e.target.value,
                  })
                }
              />
              <Input
                type="text"
                label="PassWord"
                value={currentAccount?.password || ""}
                onChange={(e) =>
                  setCurrentAccount({
                    ...currentAccount,
                    password: e.target.value,
                  })
                }
              />
              <Select
                label="Role"
                value={currentAccount?.role || "Customer"}
                onChange={(value) =>
                  setCurrentAccount({ ...currentAccount, role: value })
                }
              >
                <Option value="Admin">Admin</Option>
                <Option value="Staff">Staff</Option>
                <Option value="Customer">Customer</Option>
              </Select>
              <Input type="file" label="Avatar" onChange={handleAvatarUpload} />
              {currentAccount?.avatar && (
                <img
                  src={displayImage(currentAccount.avatar)}
                  alt="Avatar"
                  className="w-24 h-24 rounded-full mt-4"
                />
              )}
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

export default AccountPage;
