"use client"
import React from "react";
import Image from "next/image";
import abc from "../data/img/abc.svg";
import Link from "next/link";
import { signOut,useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession()
  return (
    <div className="container m-auto ">
    <div className="container m-auto fixed ">
      <div className="flex justify-between">
        <Image src={abc} alt="âdsad" className="w-[50px]" />
        <div className="flex items-center gap-6">
          <Link href="/">Home</Link>
          {
            session && session.user.role === 'admin' ? (
              <Link href="/dashboard">Dashboard</Link>
              ) : null
              }
          <Link href="/about">About</Link>
          <Link href="/store">Store</Link>
          <div className="flex gap-1">
            {!session ? (
              <>
                <Link
                  href="/login"
                  className="p-2 rounded-md border-2 border-orange-400"
                  >
                  Login
                </Link>
                <Link href="/register" className="p-2 rounded-md bg-orange-400">
                  Register
                </Link>
              </>
            ) : (
              <>
                <p className="p-2 rounded-md">{session.user.username}</p>
                <button onClick={signOut} className="hover:drop-shadow-md p-2 rounded-md bg-orange-400">
                  Log out
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;

