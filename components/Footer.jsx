"use client";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
import logo2 from "../data/img/logo2.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col items-center mt-5 mb-5">
      <div className="w-[100%] flex lg:flex-row flex-col justify-around ">
        <Image src={logo2} alt="" />
        <div className="flex ">
          <div className="flex flex-col  ml-10">
            <Link className="text-[20px]" href="/about">
              About
            </Link>
            <a className="text-[16px]" href="">
              Profile
            </a>
            <a className="text-[16px]" href="">
              Services
            </a>
          </div>
          <div className="flex flex-col  ml-10">
            <Link className="text-[20px]" href="/about">
              Contact
            </Link>
            <a className="text-[16px]" href="">
              0931024123
            </a>
            <a className="text-[16px]" href="">
              sug001@msn.com
            </a>
            <a className="text-[16px]" href="">
              @LuciasMajicTouch
            </a>
          </div>
          <div className="flex flex-col  ml-10">
            <Link className="text-[20px]" href="/about">
              Address
            </Link>
            <a className="text-[16px]" href="">
              1911 N Academy Blvd, Colorado Springs, CO 80909
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
