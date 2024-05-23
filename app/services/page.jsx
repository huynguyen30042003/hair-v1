import Navbar from "components/Navbar";
import Image from "next/image";
import React from "react";
import services from "@data/img/Services.svg"

const Services = () => {
  const dataServices = [
    {
      title: "brazilian blowout",
      img: "",
      price: "$155 and up for 180 minutes",
      more: "Perfect for anyone wanting to smooth and tame frizzy hair.  This is a keratin treatment will cut styling time down and leaves hair with a beautiful shine lasting up to three months.",
      view: 30,
    },
    {
      title: "Flexi Rods",
      img: "",
      price: "$155 and up for 180 minutes",
      more: "Perfect for anyone wanting to smooth and tame frizzy hair.  This is a keratin treatment will cut styling time down and leaves hair with a beautiful shine lasting up to three months.",
      view: 30,
    },
    {
      title: "Double Process Color",
      img: "",
      price: "$155 and up for 180 minutes",
      more: "Perfect for anyone wanting to smooth and tame frizzy hair.  This is a keratin treatment will cut styling time down and leaves hair with a beautiful shine lasting up to three months.",
      view: 30,
    },
    {
      title: "Double Process Color",
      img: "",
      price: "$155 and up for 180 minutes",
      more: "Perfect for anyone wanting to smooth and tame frizzy hair.  This is a keratin treatment will cut styling time down and leaves hair with a beautiful shine lasting up to three months.",
      view: 30,
    },
    {
      title: "Double Process Color",
      img: "",
      price: "$155 and up for 180 minutes",
      more: "Perfect for anyone wanting to smooth and tame frizzy hair.  This is a keratin treatment will cut styling time down and leaves hair with a beautiful shine lasting up to three months.",
      view: 30,
    },
  ];
  return <>
    <Navbar />
    <div className="container m-auto">
      <div className="flex flex-col items-center">
        <div className="relative text-center w-[100%] h-[80px]  ">
          <p className="absolute text-center w-[100%] leading-[75px] text-[#7797EE] bottom-0 opacity-15 text-[100px] border-b-4 border-dashed border-black">Services</p>
          <p className="absolute text-center w-[100%] leading-[50px] text-[#4B5A69] bottom-0  text-[50px] ">Services</p>
        </div>
        <p className=" text-[36px]">“You can trust me with Your Hair”</p>
      </div>
    </div>
  </>;
};

export default Services;
