"use client"
import { socket } from "./socket";
import HomePage from "../components/HomePage";
import Footer from "../components/Footer";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../css/mdb.min.css';
// // import '../css/plugins.css';
// // import '../css/style.css';
// import '../css/coloring.css';
// import '../css/colors/scheme-01.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';

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
      <HomePage />
      <Footer />
      <ToastContainer />
    </>
  );
}