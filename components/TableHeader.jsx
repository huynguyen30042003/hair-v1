"use client"
import React from 'react'
import { toast } from "react-toastify";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, IconButton, Box, Typography, Checkbox, Avatar } from '@mui/material';
import { Settings, Delete, Info, MoreVert } from '@mui/icons-material';
import CircleIcon from '@mui/icons-material/Circle';
const TableHeader = () => {
  return (
          <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
            <Box>
              <Typography variant="h6">All users</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <TextField label="Search for users" variant="outlined" size="small" style={{ marginRight: '16px' }} />
              <IconButton>
                <Settings />
              </IconButton>
              <IconButton>
                <Delete />
              </IconButton>
              <IconButton>
                <Info />
              </IconButton>
              <IconButton>
                <MoreVert />
              </IconButton>
              <Button variant="contained" color="primary" style={{ marginLeft: '16px' }}>
                Add user
              </Button>
              <Button variant="outlined" color="primary" style={{ marginLeft: '8px' }}>
                Export
              </Button>
            </Box>
          </Box>
        );

}

export default TableHeader