"use client";
import Navbar from "components/Navbar";
import Image from "next/image";
import React from "react";
import ImgService from "@data/img/serviceCuthair.jpg";
import Banner from "@data/img/banner1.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Services = () => {
  const dataServices = [
    {
      title: "brazilian blowout",
      img: "",
      price: "$155 and up for 180 minutes",
      more: "Perfect for anyone wanting to smooth and tame frizzy hair. This is a keratin treatment will cut styling time down and leaves hair with a beautiful shine lasting up to three months.",
      view: 30,
    },
    {
      title: "Flexi Rods",
      img: "",
      price: "$155 and up for 180 minutes",
      more: "Perfect for anyone wanting to smooth and tame frizzy hair. This is a keratin treatment will cut styling time down and leaves hair with a beautiful shine lasting up to three months.",
      view: 30,
    },
    {
      title: "Double Process Color",
      img: "",
      price: "$155 and up for 180 minutes",
      more: "Perfect for anyone wanting to smooth and tame frizzy hair. This is a keratin treatment will cut styling time down and leaves hair with a beautiful shine lasting up to three months.",
      view: 30,
    },
    {
      title: "Double Process Color",
      img: "",
      price: "$155 and up for 180 minutes",
      more: "Perfect for anyone wanting to smooth and tame frizzy hair. This is a keratin treatment will cut styling time down and leaves hair with a beautiful shine lasting up to three months.",
      view: 30,
    },
    {
      title: "Double Process Color",
      img: "",
      price: "$155 and up for 180 minutes",
      more: "Perfect for anyone wanting to smooth and tame frizzy hair. This is a keratin treatment will cut styling time down and leaves hair with a beautiful shine lasting up to three months.",
      view: 30,
    },
  ];

  return (
    <div className="container m-auto relative">
      <div className="mb-12">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3000}
          className="w-full h-72"
        >
          <div className="h-72 relative">
            <Image
              src={Banner}
              alt="image 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="h-72 relative">
            <Image
              src={Banner}
              alt="image 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="h-72 relative">
            <Image
              src={Banner}
              alt="image 3"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Carousel>
      </div>
      <div className="mt-12">
        <div className="max-w-6xl mx-auto px-5 lg:px-6 py-10">
          <h1 className="text-xl font-bold mb-5 text-start">Dịch Vụ Tóc</h1>
          <div className="flex flex-wrap justify-center space-x-4">
            <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
              <Image className="w-full" src={ImgService} alt="Cắt tóc" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Cắt Tóc</div>
                <div className="flex">
                  <p className="text-gray-700 text-base mr-3">Giá từ 150.000đ</p>
                  <a href="#" className="text-blue-500 hover:underline">Tìm hiểu thêm</a>
                </div>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
              <Image className="w-full" src={ImgService} alt="Uốn định hình" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Uốn định hình</div>
                <div className="flex">
                  <p className="text-gray-700 text-base mr-3">Giá từ 379.000đ</p>
                  <a href="#" className="text-blue-500 hover:underline">Tìm hiểu thêm</a>
                </div>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
              <Image className="w-full" src={ImgService} alt="Thay đổi màu tóc" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Thay đổi màu tóc</div>
                <div className="flex">
                  <p className="text-gray-700 text-base mr-3">Giá từ 199.000đ</p>
                  <a href="#" className="text-blue-500 hover:underline">Tìm hiểu thêm</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
