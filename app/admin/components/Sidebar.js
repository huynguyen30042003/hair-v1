"use client";

import { useState } from "react";
import Link from "next/link";
import { Drawer, IconButton, Typography } from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
  Cog6ToothIcon,
  UserCircleIcon,
  CurrencyDollarIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.container}>
      <IconButton onClick={toggleDrawer} className={styles.iconButton}>
        {open ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </IconButton>
      <div className={`${styles.drawer} ${open ? styles.open : styles.closed}`}>
        <div className="p-4 bg-gray-100 h-full">
          <div className="mb-6">
            <Typography variant="h5" color="blue-gray" className="text-center">
              Menu
            </Typography>
          </div>
          <ul>
            <li className="mb-4 flex items-center hover:bg-gray-200 p-2 rounded-md">
              <UserCircleIcon className="h-5 w-5 mr-2" />
              <Link
                href="/Admin/account"
                className="text-blue-500 hover:underline"
              >
                Quản lý tài khoản
              </Link>
            </li>
            <li className="mb-4 flex items-center hover:bg-gray-200 p-2 rounded-md">
              <Cog6ToothIcon className="h-5 w-5 mr-2" />
              <Link
                href="/admin/services"
                className="text-blue-500 hover:underline"
              >
                Quản lý dịch vụ
              </Link>
            </li>
            <li className="mb-4 flex items-center hover:bg-gray-200 p-2 rounded-md">
              <UserCircleIcon className="h-5 w-5 mr-2" />
              <Link
                href="/admin/appointment"
                className="text-blue-500 hover:underline"
              >
                AppointmentPage
              </Link>
            </li>
            <li className="mb-4 flex items-center hover:bg-gray-200 p-2 rounded-md">
              <UserCircleIcon className="h-5 w-5 mr-2" />
              <Link
                href="/admin/category"
                className="text-blue-500 hover:underline"
              >
                CategoryPage
              </Link>
            </li>
            <li className="mb-4 flex items-center hover:bg-gray-200 p-2 rounded-md">
              <UserCircleIcon className="h-5 w-5 mr-2" />
              <Link
                href="/admin/combo"
                className="text-blue-500 hover:underline"
              >
                ComboPage
              </Link>
            </li>
            <li className="mb-4 flex items-center hover:bg-gray-200 p-2 rounded-md">
              <UserCircleIcon className="h-5 w-5 mr-2" />
              <Link
                href="/admin/contact"
                className="text-blue-500 hover:underline"
              >
                ContactPage
              </Link>
            </li>
            <li className="mb-4 flex items-center hover:bg-gray-200 p-2 rounded-md">
              <UserCircleIcon className="h-5 w-5 mr-2" />
              <Link
                href="/admin/review"
                className="text-blue-500 hover:underline"
              >
                ReviewtPage
              </Link>
            </li>
            <li className="mb-4 flex items-center hover:bg-gray-200 p-2 rounded-md">
              <UserCircleIcon className="h-5 w-5 mr-2" />
              <Link
                href="/admin/showtime"
                className="text-blue-500 hover:underline"
              >
                ShowTimePage
              </Link>
            </li>
            <li className="mb-4 flex items-center hover:bg-gray-200 p-2 rounded-md">
              <CurrencyDollarIcon className="h-5 w-5 mr-2" />
              <Link
                href="/admin/dashboard"
                className="text-blue-500 hover:underline"
              >
                Thống kê
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
