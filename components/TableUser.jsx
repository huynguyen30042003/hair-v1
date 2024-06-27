"use client";
import React, { useState, useEffect } from "react";
import { socket } from "app/socket";
import { toast } from "react-toastify";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Checkbox,
  Box,
} from "@mui/material";
import TableHeader from "components/TableHeader";

const TableUser = () => {
  const rowsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [id, setId] = useState(null);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [openReset, setOpenReset] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const handleOpenDelete = (_id) => {
    setOpen(!open);
    setId(_id);
  };

  const handleOpenReset = (_id) => {
    setOpenReset(!openReset);
    setId(_id);
  };

  const handleOpenEdit = (_id) => {
    setOpenEdit(!openEdit);
    setId(_id);
  };

  const fetchData = async () => {
    try {
      const response = await fetch("/api/user");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result.users); // Assuming the API returns an object with a 'users' array
      return result.users; // Return the fetched users
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error);
      return []; // Return an empty array in case of error
    }
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to Socket.IO server");
    });

    socket.on("deleteUser", (data) => {
      console.log("User deleted");
      setData(data);
      console.log(data);
      toast.info("Data updated");
    });

    return () => {
      socket.off("connect");
      socket.off("deleteUser");
    };
  }, []);

  const handleDelete = async () => {
    try {
      const res = await fetch("/api/user", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        toast.success("User successfully deleted.");
        const updatedData = await fetchData(); // Fetch the updated data and wait for completion
        console.log(updatedData); // Log the updated data
        socket.emit("deleteUser", updatedData); // Emit event with the updated data
      } else {
        const data = await res.json();
        toast.error(
          data.message || "Something went wrong while deleting the user."
        );
      }
      handleOpenDelete(null); // Reset id
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handleResetPassword = async () => {
    try {
      const res = await fetch("/api/user", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        toast.success("User successfully reset password.");
      } else {
        const data = await res.json();
        toast.error(
          data.message || "Something went wrong while resetting the password."
        );
      }
      handleOpenReset(null);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Paper style={{ padding: "16px" }}>
        <TableHeader />
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>Member/FullName</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Employed</TableCell>
                <TableCell>Last Update</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(data) &&
                data.map((row) => (
                  <TableRow key={row.username}>
                    <TableCell padding="checkbox">
                      <Checkbox />
                    </TableCell>
                    <TableCell>{row.fullName}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.role}</TableCell>
                    <TableCell>{row.age}</TableCell>
                    <TableCell>{row.createdAt}</TableCell>
                    <TableCell>{row.updatedAt}</TableCell>
                    <TableCell align="center">
                      <Box display="flex" justifyContent="space-between">
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          style={{
                            marginRight: "10px",
                            backgroundColor: "#54B4D3",
                          }}
                          onClick={() => handleOpenEdit(row._id)}
                        >
                          Edit user
                        </Button>
                        <Button
                          variant="contained"
                          color="secondary"
                          size="small"
                          style={{
                            marginRight: "10px",
                            backgroundColor: "#14A44D",
                          }}
                          onClick={() => handleOpenReset(row._id)}
                        >
                          Reset password
                        </Button>
                        <Button
                          variant="contained"
                          color="secondary"
                          size="small"
                          style={{
                            marginRight: "10px",
                            backgroundColor: "#DC4C64",
                          }}
                          onClick={() => handleOpenDelete(row._id)}
                        >
                          Delete user
                        </Button>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {open && (
        <div className="fixed bg-[#3b3b3b73] top-0 bottom-0 left-0 right-0 flex items-center justify-center">
          <div className="w-[50%] h-[50%] bg-[#fff]">
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block opacity-100"
              onClick={() => handleOpenDelete(null)}
            >
              <span>close</span>
            </Button>
            {id}
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block opacity-100"
              onClick={() => handleOpenDelete(null)}
            >
              <span>no</span>
            </Button>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block opacity-100"
              onClick={handleDelete}
            >
              <span>yes</span>
            </Button>
          </div>
        </div>
      )}

      {openReset && (
        <div className="fixed bg-[#3b3b3b73] top-0 bottom-0 left-0 right-0 flex items-center justify-center">
          <div className="w-[50%] h-[50%] bg-[#fff]">
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block opacity-100"
              onClick={() => handleOpenReset(null)}
            >
              <span>reset</span>
            </Button>
            {id}
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block opacity-100"
              onClick={() => handleOpenReset(null)}
            >
              <span>no</span>
            </Button>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block opacity-100"
              onClick={handleResetPassword}
            >
              <span>yes</span>
            </Button>
          </div>
        </div>
      )}

      {openEdit && (
        <div className="fixed bg-[#3b3b3b73] top-0 bottom-0 left-0 right-0 flex items-center justify-center">
          <div className="w-[50%] h-[50%] bg-[#fff]">
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block opacity-100"
              onClick={() => handleOpenEdit(null)}
            >
              <span>Edit</span>
            </Button>
            {id}
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block opacity-100"
              onClick={() => handleOpenEdit(null)}
            >
              <span>no</span>
            </Button>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block opacity-100"
              // onClick={handleEdit}
            >
              <span>yes</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default TableUser;
