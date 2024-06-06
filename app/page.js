"use client"
import Image from "next/image";
import About from "../components/About";
import TableUser from "../components/TableUser";
import TableService from "../components/TableService";
import Footer from "../components/Footer";
import ServicesHome from "../components/ServicesHome";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';
import {
  Button,
} from "@material-tailwind/react";

export default function Home() {
  const [open, setOpen] = useState(false);
  
  const notify = () => {toast.success("Wow so easy!")};
  const handleOpen = () => {
    setOpen(!open)
    console.log(open)
  };
  return (
    <>
      <button onClick={notify}>Notify!</button>
      <About />
      <ServicesHome />
      <Footer />
      <TableUser/>
      <TableService/>

    </>
  );
}
