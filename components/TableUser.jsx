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
  const [id, setId] = useState();
  const [data, setData] = useState([{}]); // Initialize as an empty array
  const [open, setOpen] = useState(false);
  const [openReset, setOpenReset] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  
  const handleOpenDelete = (_id) => {setOpen(!open)
    setId(_id)
  };
  const handleOpenReset = (_id) => {setOpenReset(!openReset)
    setId(_id)
  };
  const handleOpenEdit = (_id) => {setOpenEdit(!openEdit)
    setId(_id)
  };

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

  const handleDelete = async () => {
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
      fetchData()
      handleOpenDelete(0)
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleResetPassword = async () => {
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
      }handleOpenReset(0)
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
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.username}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                {/* <TableCell className="flex">
                  <Avatar src={row.avatar} />
                  {row.fullName}
                </TableCell> */}
                <TableCell>{row.fullName}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.createdAt}</TableCell>
                <TableCell>{row.updatedAt}</TableCell>
   
                <TableCell align="center">
                  <Box display="flex" justifyContent="space-between">
                    <Button variant="contained" color="primary" size="small" style={{ marginRight: '10px', backgroundColor: '#54B4D3' }}
                    onClick={()=>handleOpenEdit(row._id)}
                    >
                      Edit user
                    </Button>
                    <Button variant="contained" color="secondary" size="small" style={{ marginRight: '10px', backgroundColor: '#14A44D'  }}
                      onClick={()=>handleOpenReset(row._id)}>
                      reset password
                    </Button><Button variant="contained" color="secondary" size="small" style={{ marginRight: '10px', backgroundColor: '#DC4C64'  }}
                    onClick={()=>handleOpenDelete(row._id)}
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
            onClick={()=>handleOpenDelete(0)}
          >
            <span>close</span>
          </Button>{id}
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block opacity-100"
            onClick={()=>handleOpenDelete(0)}
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
      <div
        className={
          openReset
            ? "fixed bg-[#3b3b3b73] top-0 bottom-0 left-0 right-0 flex items-center justify-center"
            : "hidden"
        }
      >
        <div className="w-[50%] h-[50%] bg-[#fff]">
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block opacity-100"
            onClick={()=>handleOpenReset(0)}
            >
            <span>reset</span>
          </Button>{id}
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block opacity-100"
            onClick={()=>handleOpenReset(0)}
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
      <div
        className={
          openEdit
            ? "fixed bg-[#3b3b3b73] top-0 bottom-0 left-0 right-0 flex items-center justify-center"
            : "hidden"
        }
      >
        <div className="w-[50%] h-[50%] bg-[#fff]">
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block opacity-100"
            onClick={()=>handleOpenEdit(0)}
            >
            <span>Edit</span>
          </Button>{id}
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block opacity-100"
            onClick={()=>handleOpenEdit(0)}
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
    </>
  );
};

export default TableUser;