import React from "react";
import Image from "next/image";
import abc from "../data/img/abc.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="container m-auto">
      <div className="flex justify-between">
        <Image src={abc} alt="âdsad" className="w-[50px]" />
        <div className="flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/store">Store</Link>
          <div className="flex gap-1">
            <Link
              href="/login"
              className="p-2 rounded-md border-2 border-orange-400"
            >
              Login
            </Link>
            <Link href="/register" className="p-2 rounded-md bg-orange-400">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
