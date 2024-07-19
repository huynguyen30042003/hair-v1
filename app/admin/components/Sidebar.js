"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon, ClipboardDocumentListIcon, UserGroupIcon, UsersIcon, CurrencyDollarIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

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
            <ClipboardDocumentListIcon className="h-6 w-6" />
            {isOpen && <Link href="/admin/services" className="ml-3">Quản lý dịch vụ</Link>}
          </li>
          <li className="flex items-center p-2 hover:bg-gray-700">
            <UserGroupIcon className="h-6 w-6" />
            {isOpen && <Link href="/admin/employees" className="ml-3">Quản lý nhân viên</Link>}
          </li>
          <li className="flex items-center p-2 hover:bg-gray-700">
            <UsersIcon className="h-6 w-6" />
            {isOpen && <Link href="/admin/customers" className="ml-3">Quản lý khách hàng</Link>}
          </li>
          <li className="flex items-center p-2 hover:bg-gray-700">
            <CurrencyDollarIcon className="h-6 w-6" />
            {isOpen && <Link href="/admin/finance" className="ml-3">Quản lý tài chính</Link>}
          </li>
          <li className="flex items-center p-2 hover:bg-gray-700">
            <MagnifyingGlassIcon className="h-6 w-6" />
            {isOpen && <Link href="/admin/search" className="ml-3">Chức năng tìm kiếm</Link>}
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
