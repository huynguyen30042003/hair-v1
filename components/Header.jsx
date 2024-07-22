// app/components/Header.js
"use client";

import React from "react";
import Link from "next/link";
import {
  HomeIcon,
  UserCircleIcon,
  CalendarDaysIcon,
  PhoneIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const handleLogout = () => {
    Cookie.set("accessToken", "", { expires: -1 });
    Cookie.set("role", "", { expires: -1 });
    localStorage.clear();
    router.push("/");
  };

  return (
    <div className="flex justify-between items-center p-4 bg-[#141b2d] shadow-md w-full">
      <Typography variant="h6" className="text-[#f2f0f0]">
        StyleCut
      </Typography>
      <div className="flex space-x-4">
        <Link href="/" passHref>
          <Button
            variant="text"
            className="flex items-center text-[#d0d1d5] hover:bg-[#0c101b] hover:text-[#f2f0f0]"
          >
            <HomeIcon className="h-5 w-5 mr-1 text-[#d0d1d5]" />
            Home
          </Button>
        </Link>
        <Link href="/profiles" passHref>
          <Button
            variant="text"
            className="flex items-center text-[#d0d1d5] hover:bg-[#0c101b] hover:text-[#f2f0f0]"
          >
            <UserCircleIcon className="h-5 w-5 mr-1 text-[#d0d1d5]" />
            Profiles
          </Button>
        </Link>
        <Link href="/history-booking" passHref>
          <Button
            variant="text"
            className="flex items-center text-[#d0d1d5] hover:bg-[#0c101b] hover:text-[#f2f0f0]"
          >
            <CalendarDaysIcon className="h-5 w-5 mr-1 text-[#d0d1d5]" />
            History Booking
          </Button>
        </Link>
        <Link href="/history-booking" passHref>
          <Button
            variant="text"
            className="flex items-center text-[#d0d1d5] hover:bg-[#0c101b] hover:text-[#f2f0f0]"
          >
            <PhoneIcon className="h-5 w-5 mr-1 text-[#d0d1d5]" />
            History Contact
          </Button>
        </Link>
        <Button
          variant="gradient"
          className="flex items-center bg-red-500 text-[#f2f0f0] hover:bg-red-700"
          onClick={handleLogout}
        >
          <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2 text-[#f2f0f0]" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Header;
