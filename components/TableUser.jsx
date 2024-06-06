"use client";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  PencilIcon,
  UserPlusIcon,
  TrashIcon,
  ReceiptRefundIcon,
} from "@heroicons/react/24/solid";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Card,
  CardHeader,
  Typography,
  CardBody,
  CardFooter,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

const TABS = [
  { label: "All", value: "all" },
  { label: "Monitored", value: "monitored" },
  { label: "Unmonitored", value: "unmonitored" },
];

const TABLE_HEAD = [
  "Member/Fullname",
  "Email",
  "Role",
  "Age",
  "Employed",
  "Edit",
  "Delele",
  "Resetpassword",
];

const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "john@creative-tim.com",
    job: "Manager",
    org: "Organization",
    online: true,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
  },
];

const TableUser = () => {
  const rowsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([{}]); // Initialize as an empty array
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/user");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result.users);
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handleDelete = async (id) => {
    try {
      console.log(id);
      const res = await fetch("/api/user", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        toast.success("User successfully deleted.");
      } else {
        const data = await res.json();
        toast.error(
          data.message || "Something went wrong while deleting the user."
        );
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleResetPassword = async (id) => {
    try {
      console.log(id);
      const res = await fetch("/api/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        toast.success("User successfully reset password.");
      } else {
        const data = await res.json();
        toast.error(
          data.message || "Something went wrong while reset the user."
        );
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Members list
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about all members
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button variant="outlined" size="sm">
                view all
              </Button>
              <Button className="flex items-center gap-3" size="sm">
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentRows.map(
                (
                  { _id, username, email, fullName, role, createdAt, age },
                  index
                ) => {
                  const isLast = index === currentRows.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={username}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          {/* <Avatar src={img} alt={name} size="sm" /> */}
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {username}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {fullName}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {email}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {role}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          {/* <Chip
                          variant="ghost"
                          size="sm"
                          value={online ? "online" : "offline"}
                          color={online ? "green" : "blue-gray"}
                        /> */}
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal "
                          >
                            {age}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {createdAt}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Edit User">
                          <IconButton variant="text">
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Delete User">
                          <IconButton
                            variant="text"
                            // onClick={() => handleDelete(_id)}
                            onClick={handleOpen}
                          >
                            <TrashIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Reset password">
                          <IconButton
                            // onClick={() => handleResetPassword(_id)}
                            onClick={handleOpen}
                            variant="text"
                          >
                            <ReceiptRefundIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page {currentPage} of {totalPages}
          </Typography>
          <div className="flex gap-2">
            <Button
              variant="outlined"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <Button
              variant="outlined"
              size="sm"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </CardFooter>
      </Card> 

      <Button
        variant="gradient"
        size="sm"
        className="hidden lg:inline-block"
        onClick={handleOpen}
      >
        <span>open</span>
      </Button>
      <div
        className={
          open
            ? "fixed bg-[#3b3b3b73] top-0 bottom-0 left-0 right-0 flex items-center justify-center"
            : "hidden"
        }
      >
        <div className="w-[50%] h-[50%] bg-[#fff]">
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block opacity-100"
            onClick={handleOpen}
          >
            <span>close</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default TableUser;
