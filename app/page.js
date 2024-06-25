"use client"
import { socket } from "./socket";
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
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");
  
  const notify = () => {toast.success("Wow so easy!")};
  const handleOpen = () => {
    setOpen(!open)
    console.log(open)
  };
  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);

      socket.io.engine.on("upgrade", (transport) => {
        setTransport(transport.name);
      });
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);
  return (
    <>
      <About />
      <ServicesHome />
      <Footer />
      <ToastContainer />
    </>
  );
}