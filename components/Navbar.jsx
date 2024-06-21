"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar as MaterialNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { getServerSession } from "next-auth";
import SessionProvider from "../utils/SessionProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Img from "next/image";
import Link from "next/link";
import Logo from "../data/img/keyLogo.jpg";


const Navbar = () => {
  const [session, setSession] = useState(null);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    async function fetchSession() {
      const response = await fetch('/api/get-session');
      if (response.ok) {
        const data = await response.json();
        setSession(data.session);
      }
    }
    fetchSession();
  }, []);

  

  

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/page" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Gallery
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/services" className="flex items-center">
          Services
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/booking" className="flex items-center">
          Booking
        </a>
      </Typography>
    </ul>
  );

  return (    
      <nav>          
    <SessionProvider session={session}>
      <MaterialNavbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-[#9cc7db]">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Img
            src={Logo}
            alt="StyleCuts Logo"
            className="mr-2 w-10 h-10 rounded-full"
          />
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Link href="/login-v2">
                <Button
                  variant="text"
                  size="sm"
                  className="hidden lg:inline-block"
                >
                  <span>Log In</span>
                </Button>
              </Link>
              <Link href="/register">
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block"
                >
                  <span>Sign In</span>
                </Button>
              </Link>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              <button onClick={() => setOpenNav(!openNav)}>
        {openNav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            {/* SVG path for close icon */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            {/* SVG path for menu icon */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
      {openNav && (
        <div className="nav-content">
          {/* Your navigation content here */}
          </div>
      )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Link href="/login-v2">
              <Button fullWidth variant="text" size="sm">
                <span>Log In</span>
              </Button>
            </Link>
            <Link href="/register">
              <Button fullWidth variant="gradient" size="sm">
                <span>Sign In</span>
              </Button>
            </Link>
          </div>
        </MobileNav>
      </MaterialNavbar>
      <ToastContainer />
    </SessionProvider>
    </nav>
  );
};

export default Navbar;


