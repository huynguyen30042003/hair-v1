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
              <Cog6ToothIcon className="h-5 w-5 mr-2" />
              <Link
                href="/admin/services"
                className="text-blue-500 hover:underline"
              >
                Service Management
              </Link>
            </li>
            <li className="mb-4 flex items-center hover:bg-gray-200 p-2 rounded-md">
              <UserCircleIcon className="h-5 w-5 mr-2" />
              <Link
                href="/admin/employees"
                className="text-blue-500 hover:underline"
              >
                Staff Management
              </Link>
            </li>
            <li className="mb-4 flex items-center hover:bg-gray-200 p-2 rounded-md">
              <UserCircleIcon className="h-5 w-5 mr-2" />
              <Link
                href="/admin/customers"
                className="text-blue-500 hover:underline"
              >
               Customer Management
              </Link>
            </li>
            <li className="mb-4 flex items-center hover:bg-gray-200 p-2 rounded-md">
              <CurrencyDollarIcon className="h-5 w-5 mr-2" />
              <Link
                href="/admin/financial"
                className="text-blue-500 hover:underline"
              >
                Financial Management
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
