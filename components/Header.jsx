// app/components/Header.js
'use client';

import React from "react";
import Link from "next/link";
import { HomeIcon, UserCircleIcon, CalendarDaysIcon, PhoneIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";

const Header = () => {
  const handleLogout = () => {
    // Thêm logic đăng xuất tại đây
    console.log("Đăng xuất");
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 shadow-md w-full">
      <Typography variant="h6" color="blue-gray">
        StyleCut
      </Typography>
      <div className="flex space-x-4">
        <Link href="/" passHref>
          <Button variant="text" color="blue" className="flex items-center">
            <HomeIcon className="h-5 w-5 mr-1" />
            Home
          </Button>
        </Link>
        <Link href="/profiles" passHref>
          <Button variant="text" color="blue" className="flex items-center">
            <UserCircleIcon className="h-5 w-5 mr-1" />
            Profiles
          </Button>
        </Link>
        <Link href="/history-booking" passHref>
          <Button variant="text" color="blue" className="flex items-center">
            <CalendarDaysIcon className="h-5 w-5 mr-1" />
            History Booking
          </Button>
        </Link>
        <Link href="/history-contact" passHref>
          <Button variant="text" color="blue" className="flex items-center">
            <PhoneIcon className="h-5 w-5 mr-1" />
            History Contact
          </Button>
        </Link>
        <Button
          variant="gradient"
          color="red"
          onClick={handleLogout}
          className="flex items-center"
        >
          <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2" />
          Đăng xuất
        </Button>
      </div>
    </div>
  );
};

export default Header;
