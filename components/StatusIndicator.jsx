"use client";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, IconButton, Box, Typography, Checkbox, Avatar } from '@mui/material';
import { Settings, Delete, Info, MoreVert } from '@mui/icons-material';
import CircleIcon from '@mui/icons-material/Circle';


const StatusIndicator = ({ status }) => {
    const color = status === 'Active' ? 'green' : 'red';
    return (
      <Box display="flex" alignItems="center">
        <CircleIcon style={{ color, fontSize: 'small', marginRight: '4px' }} />
        {status}
      </Box>
    );
  };
export default StatusIndicator