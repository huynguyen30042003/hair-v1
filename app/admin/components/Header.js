"use client";
import { useRouter } from 'next/navigation';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold">Admin Dashboard</h1>
      <button onClick={handleLogout} className="flex items-center">
        <ArrowRightOnRectangleIcon className="h-6 w-6" />
        <span className="ml-2">Logout</span>
      </button>
    </header>
  );
};

export default Header;
