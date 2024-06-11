"use client";
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { toast } from "react-toastify";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, IconButton, Box, Typography, Checkbox, Avatar } from '@mui/material';
import { Settings, Delete, Info, MoreVert } from '@mui/icons-material';
import CircleIcon from '@mui/icons-material/Circle';
import TableHeader from "components/TableHeader";
import StatusIndicator from "./StatusIndicator";


const  SOCKET_SERVER_URL = 'http://localhost:3000'
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

  useEffect(() => {
    const socket = io(SOCKET_SERVER_URL);

    socket.on('connect', () => {
      console.log('Connected to Socket.IO server');
    });

    // Listen for updates from the server
    socket.on('updateData', (newData) => {
      setData(newData);
      toast.info('Data updated');
    });

    // Clean up the connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

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
  };console.log(data);
  return (
    <>
      <Paper style={{ padding: '16px' }}>
      <TableHeader/>
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
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.username}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell component="th" scope="row" style={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar alt={row.username} src={row.avatar} style={{ marginRight: '8px' }} />
                  <Box>
                    <Typography variant="body2">{row.username}</Typography>
                    <Typography variant="caption">{row.email}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.createdAt}</TableCell>
                <TableCell>{row.updateAt}</TableCell>
                <TableCell>
                  <StatusIndicator status={row.status} />
                </TableCell>
                <TableCell align="center">
                  <Box display="flex" justifyContent="space-between">
                    <Button variant="contained" color="primary" size="small" style={{ marginRight: '10px' }}>
                      Edit user
                    </Button>
                    <Button variant="contained" color="secondary" size="small">
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