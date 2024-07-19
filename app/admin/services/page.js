"use client";

import { useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Input,
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Layout from "../components/Layout";

const sampleData = {
  Service: [
    {
      id: 1,
      name: "Kien",
      category: "Service",
      description: "Basic haircut",
      price: 15,
    },
    {
      id: 2,
      name: "Mic",
      category: "Service",
      description: "Shampoo for all hair types",
      price: 10,
    },
  ],
};

const SearchPage = () => {
  const [items, setItems] = useState(sampleData.Service);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredItems = items.filter((item) => {
    return item.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleEditClick = (item) => {
    // Logic for editing an item
  };

  const handleDeleteClick = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <Typography variant="h1">Services</Typography>
        <div className="flex justify-between items-center mb-4">
          <Input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            className="mr-4"
          />
        </div>
        <Card>
          <CardBody>
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="w-1/4 px-4 py-2">Name</th>
                  <th className="w-1/4 px-4 py-2">Type</th>
                  <th className="w-1/2 px-4 py-2">Description</th>
                  <th className="w-1/4 px-4 py-2">Price</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item) => (
                  <tr key={item.id}>
                    <td className="border px-4 py-2">{item.name}</td>
                    <td className="border px-4 py-2">{item.category}</td>
                    <td className="border px-4 py-2">{item.description}</td>
                    <td className="border px-4 py-2">{item.price}</td>
                    <td className="border px-4 py-2 flex space-x-2">
                      <Button
                        color="blue"
                        size="sm"
                        onClick={() => handleEditClick(item)}
                      >
                        <PencilIcon className="h-5 w-5" />
                      </Button>
                      <Button
                        color="red"
                        size="sm"
                        onClick={() => handleDeleteClick(item.id)}
                      >
                        <TrashIcon className="h-5 w-5" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </Layout>
  );
};

export default SearchPage;
