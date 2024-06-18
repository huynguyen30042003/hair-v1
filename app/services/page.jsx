"use client";
import React, { useState } from "react";
import Image from "next/image";
import ImgService from "@data/img/serviceCuthair.jpg";  
import Banner from "@data/img/banner1.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const Services = () => {
  const dataServices = [
    {
      title: "Cắt tóc",
      img: ImgService,
      price: "Giá từ 150.000đ",
      more: "Dịch vụ cắt tóc với nhiều kiểu dáng và phong cách khác nhau.",
      view: 30,
    },
    {
      title: "Uốn định hình",
      img: ImgService,
      price: "Giá từ 379.000đ",
      more: "Uốn tóc để tạo kiểu và giữ nếp suốt thời gian dài.",
      view: 30,
    },
    {
      title: "Thay đổi màu tóc",
      img: ImgService,
      price: "Giá từ 199.000đ",
      more: "Dịch vụ nhuộm tóc với nhiều lựa chọn màu sắc và phong cách.",
      view: 30,
    },
    {
      title: "Gội đầu",
      img: ImgService,
      price: "Giá từ 100.000đ",
      more: "Dịch vụ gội đầu với các sản phẩm chăm sóc tóc chuyên nghiệp.",
      view: 30,
    },
    {
      title: "Sấy tóc",
      img: ImgService,
      price: "Giá từ 50.000đ",
      more: "Dịch vụ sấy tóc để tạo kiểu nhanh chóng và hiệu quả.",
      view: 30,
    },
    {
      title: "Massage da đầu",
      img: ImgService,
      price: "Giá từ 200.000đ",
      more: "Dịch vụ massage da đầu giúp thư giãn và kích thích tuần hoàn máu.",
      view: 30,
    },
  ];

  const dataSpaRelax = [
    {
      title: "Massage thư giãn",
      img: ImgService,
      price: "Giá từ 300.000đ",
      more: "Dịch vụ massage thư giãn để giảm căng thẳng và thư giãn cơ thể.",
      view: 20,
    },
    {
      title: "Chăm sóc da mặt",
      img: ImgService,
      price: "Giá từ 500.000đ",
      more: "Dịch vụ chăm sóc da mặt với các liệu pháp làm sạch và dưỡng ẩm.",
      view: 25,
    },
    {
      title: "Chăm sóc toàn thân",
      img: ImgService,
      price: "Giá từ 800.000đ",
      more: "Dịch vụ chăm sóc toàn thân bao gồm massage và xông hơi thư giãn.",
      view: 15,
    },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(dataServices.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return dataServices.slice(startIndex, endIndex);
  };

  const pagesWithServices = Array.from(Array(totalPages), (_, index) => index + 1)
    .filter(page => {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return dataServices.slice(startIndex, endIndex).some(service => !!service.title);
    });

  const getItemProps = (index) => ({
    variant: currentPage === index ? "filled" : "text",
    color: "gray",
    onClick: () => setCurrentPage(index),
    className: "rounded-full",
  });

  return (
    <section className="container mx-auto">
      <div className="mb-12 relative">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3000}
          className="w-full h-72 border border-gray-300 rounded-md overflow-hidden"
        >
          <div className="h-72 relative">
            <Image src={Banner} alt="image 1" layout="fill" objectFit="cover" />
          </div>
          <div className="h-72 relative">
            <Image src={Banner} alt="image 2" layout="fill" objectFit="cover" />
          </div>
          <div className="h-72 relative">
            <Image src={Banner} alt="image 3" layout="fill" objectFit="cover" />
          </div>
        </Carousel>
      </div>
      <div className="mt-12">
        <div className="max-w-6xl mx-auto px-5 lg:px-6 py-10">
          <h1 className="text-xl font-bold mb-5 relative inline-block text-center ">
            <span className="relative z-10 px-4 bg-white text-black ">Dịch Vụ Tóc Nam</span>
            <span className="absolute inset-0 z-0 bg-gradient-to-r from-blue-400 to-blue-600 transform skew-x-6 -rotate-3 opacity-75 hover:rotate-0 transition duration-300"></span>
          </h1>
          <div className="flex flex-wrap justify-center space-x-4">
            {getCurrentPageItems().map((service, index) => (
              <div key={index} className="max-w-sm rounded-lg overflow-hidden shadow-lg mb-4 border border-gray-300 hover:border-blue-500 transition duration-300">
                <div className="relative group">
                  <Image className="w-full transition duration-300 transform group-hover:scale-105" src={service.img} alt={service.title} />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{service.title}</div>
                  <div className="flex">
                    <p className="text-gray-700 text-base mr-3">{service.price}</p>
                    <a href="#" className="text-blue-500 hover:underline">Tìm hiểu thêm</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h1 className="text-xl font-bold mb-5 relative inline-block text-center mt-12">
            <span className="relative z-10 px-4 bg-white text-black">Dịch Vụ Spa và Relax</span>
            <span className="absolute inset-0 z-0 bg-gradient-to-r from-blue-400 to-blue-600 transform skew-x-6 -rotate-3 opacity-75 hover:rotate-0 transition duration-300"></span>
          </h1>
          <div className="flex flex-wrap justify-center space-x-4">
            {dataSpaRelax.map((service, index) => (
              <div key={index} className="max-w-sm rounded-lg overflow-hidden shadow-lg mb-4 border border-gray-300 hover:border-blue-500 transition duration-300">
                <div className="relative group">
                  <Image className="w-full transition duration-300 transform group-hover:scale-105" src={service.img} alt={service.title} />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{service.title}</div>
                  <div className="flex">
                    <p className="text-gray-700 text-base mr-3">{service.price}</p>
                    <a href="#" className="text-blue-500 hover:underline">Tìm hiểu thêm</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <Button
              variant="text"
              className="flex items-center gap-2 rounded-full"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
            </Button>
            <div className="flex items-center gap-2">
              {pagesWithServices.map(page => (
                <IconButton key={page} {...getItemProps(page)}>{page}</IconButton>
              ))}
            </div>
            <Button
              variant="text"
              className="flex items-center gap-2 rounded-full"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
