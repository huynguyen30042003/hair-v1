'use client';

import { Button, Typography } from "@material-tailwind/react";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const handleLogout = () => {
    
    console.log("Đăng xuất");
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 shadow-md w-full">
      <Typography variant="h6" color="blue-gray">
        Staff Dashboard
      </Typography>
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
  );
};

export default Header;
