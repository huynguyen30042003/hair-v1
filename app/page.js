"use client";

import About from "../components/About";
import TableUser from "../components/TableUser";
import TableService from "../components/TableService";
import Footer from "../components/Footer";
import ServicesHome from "../components/ServicesHome";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';
import React, { useEffect, useState } from 'react';
import {
  Button,
} from "@material-tailwind/react";

export default function Home() {
  const [open, setOpen] = useState(false);
  
  const notify = () => {
    toast.success("Wow so easy!");
  };

  const handleOpen = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
      <div className="container">
      <button onClick={notify}>Notify!</button>
      <About />
      <ServicesHome />
      <Footer />
      <ToastContainer />
      </div>
  );
}
