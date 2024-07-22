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

const ContactPage = () => {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [contactsPerPage] = useState(5);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await axios.get(`${BASE_URL}/contacts`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setContacts(response.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
        toast.error("Error fetching contacts.");
      }
    };

    fetchContacts();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddClick = () => {
    setIsEditing(false);
    setCurrentContact({ question: "", answer: "" });
    setOpenDialog(true);
  };

  const handleEditClick = (contact) => {
    setIsEditing(true);
    setCurrentContact(contact);
    setOpenDialog(true);
  };

  const handleDeleteClick = async (contactId) => {
    try {
      const token = localStorage.getItem("accessToken");
      await axios.delete(`${BASE_URL}/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setContacts(contacts.filter((contact) => contact._id !== contactId));
      toast.success("Contact deleted successfully.");
    } catch (error) {
      console.error("Error deleting contact:", error);
      toast.error("Error deleting contact.");
    }
  };

  const handleSave = async () => {
    const token = localStorage.getItem("accessToken");
    try {
      if (isEditing) {
        await axios.put(
          `${BASE_URL}/contacts/${currentContact._id}`,
          currentContact,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setContacts(
          contacts.map((contact) =>
            contact._id === currentContact._id ? currentContact : contact
          )
        );
        toast.success("Contact updated successfully.");
      } else {
        const response = await axios.post(
          `${BASE_URL}/contacts`,
          currentContact,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setContacts([...contacts, response.data]);
        toast.success("Contact added successfully.");
      }
      setOpenDialog(false);
    } catch (error) {
      console.error("Error saving contact:", error);
      toast.error("Error saving contact.");
    }
  };

  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = filteredContacts.slice(
    indexOfFirstContact,
    indexOfLastContact
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <Typography variant="h1">Contact Management</Typography>
          <Button color="green" onClick={handleAddClick}>
            <PlusIcon className="h-5 w-5 mr-2" />
            Add Contact
          </Button>
        </div>
        <div className="flex justify-center mb-4">
          <div className="flex space-x-2 items-center">
            <Input
              type="text"
              placeholder="Search by question"
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
                    <th className="px-4 py-2">Question</th>
                    <th className="px-4 py-2">Answer</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Phone</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentContacts.map((contact) => (
                    <tr key={contact._id}>
                      <td className="border px-4 py-2">{contact.question}</td>
                      <td className="border px-4 py-2">{contact.answer}</td>
                      <td className="border px-4 py-2">
                        {contact.customer?.name}
                      </td>
                      <td className="border px-4 py-2">
                        {contact.customer?.phone}
                      </td>
                      <td className="border px-4 py-2">
                        {contact.customer?.email}
                      </td>
                      <td className="border px-4 py-2 flex space-x-2">
                        <Button
                          color="blue"
                          size="sm"
                          onClick={() => handleEditClick(contact)}
                        >
                          <PencilIcon className="h-5 w-5" />
                        </Button>
                        <Button
                          color="red"
                          size="sm"
                          onClick={() => handleDeleteClick(contact._id)}
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
                        Math.ceil(filteredContacts.length / contactsPerPage)
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
            {isEditing ? "Edit Contact" : "Add Contact"}
          </DialogHeader>
          <DialogBody divider>
            <div className="space-y-4">
              <Input
                type="text"
                label="Question"
                value={currentContact?.question || ""}
                onChange={(e) =>
                  setCurrentContact({
                    ...currentContact,
                    question: e.target.value,
                  })
                }
                className="w-full max-w-xs"
              />
              <Input
                type="text"
                label="Answer"
                value={currentContact?.answer || ""}
                onChange={(e) =>
                  setCurrentContact({
                    ...currentContact,
                    answer: e.target.value,
                  })
                }
                className="w-full max-w-xs"
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

export default ContactPage;
