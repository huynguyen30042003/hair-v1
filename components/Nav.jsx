"use client";
import React, { useEffect, useState } from 'react';
import {
  Navbar as MaterialNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { getServerSession } from "next-auth";
import SessionProvider from "../utils/SessionProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Img from "next/image"
import Link from "next/link"
import Logo from "../data/img/keyLogo.jpg"


const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [session, setSession] = useState(null);

  useEffect(() => {
    async function fetchSession() {
      const sessionData = await getServerSession();
      setSession(sessionData);
    }
    fetchSession();

    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="#" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="/page" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="#" className="flex items-center">
          Gallery
        </a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="#" className="flex items-center">
          Services
        </a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="/booking" className="flex items-center">
          Booking
        </a>
      </Typography>
    </ul>
  );

  return (
    <SessionProvider session={session}>
      <MaterialNavbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-[#9cc7db]">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Img src={Logo} alt="StyleCuts Logo" className="mr-2 w-10 h-10 rounded-full" /> {/* Image tag */}
            <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium">
              StyleCuts
            </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
               <Link href="/login-v2">
                <Button variant="text" size="sm" className="hidden lg:inline-block">
                    <span>Log In</span>
                </Button>
              </Link>
              <Button variant="gradient" size="sm" className="hidden lg:inline-block">
                <span>Sign In</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm">
              <span>Sign In</span>
            </Button>
          </div>
        </MobileNav>
      </MaterialNavbar>
      <ToastContainer />
    </SessionProvider>
  );
};

export default Navbar;