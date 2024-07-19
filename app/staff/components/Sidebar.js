"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon, UserCircleIcon, Cog6ToothIcon, StarIcon, CalendarDaysIcon, ChartBarIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={`bg-gray-800 text-white ${isOpen ? 'w-64' : 'w-20'} h-screen transition-width duration-300`}>
      <div className="flex items-center justify-between p-4">
        <button onClick={toggleSidebar}>
          {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>
      <nav className="mt-5">
        <ul>
          <li className="flex items-center p-2 hover:bg-gray-700">
            <UserCircleIcon className="h-6 w-6" />
            {isOpen && <Link href="/staff/account" className="ml-3">Quản lý tài khoản</Link>}
          </li>
          <li className="flex items-center p-2 hover:bg-gray-700">
            <Cog6ToothIcon className="h-6 w-6" />
            {isOpen && <Link href="/staff/services" className="ml-3">Quản lý dịch vụ và sản phẩm</Link>}
          </li>
          <li className="flex items-center p-2 hover:bg-gray-700">
            <StarIcon className="h-6 w-6" />
            {isOpen && <Link href="/staff/reviews" className="ml-3">Quản lý đánh giá và rate</Link>}
          </li>
          <li className="flex items-center p-2 hover:bg-gray-700">
            <CalendarDaysIcon className="h-6 w-6" />
            {isOpen && <Link href="/staff/appointments" className="ml-3">Quản lý lịch hẹn</Link>}
          </li>
          <li className="flex items-center p-2 hover:bg-gray-700">
            <ChartBarIcon className="h-6 w-6" />
            {isOpen && <Link href="/staff/dashboard" className="ml-3">Bảng điều khiển nhân viên</Link>}
          </li>
          <li className="flex items-center p-2 hover:bg-gray-700">
            <MagnifyingGlassIcon className="h-6 w-6" />
            {isOpen && <Link href="/staff/search" className="ml-3">Chức năng tìm kiếm</Link>}
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
