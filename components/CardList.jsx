// components/ServiceList.js
import React from "react";
import Image from "next/image";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import ServicesImg1 from "../data/img/Mohican.jpg"; // Make sure the image path is correct
import ServicesImg2 from "../data/img/Undercut.jpg";
import ServicesImg3 from "../data/img/Sidepart.png";

const ServiceList = () => {
  const [active, setActive] = React.useState(1);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };
  const services = [
    {
      urlImg: ServicesImg1,
      title: "Mohican",
      description:
        "Kiểu tóc Mohican, nổi loạn, cạo ngắn hai bên, chừa dọc tóc giữa, bắt nguồn từ bộ tộc Mohawk Bắc Mỹ.",
      originalPrice: "$99",
      discountedPrice: "$79",
      author: "Natasha Wing",
    },
    {
      urlImg: ServicesImg1,
      title: "Undercut",
      description:
        "Kiểu tóc Undercut vuốt ngược, biến tấu từ Undercut, mang vẻ lịch lãm, điển trai và cuốn hút cho các bạn nam.",
      originalPrice: "$99",
      discountedPrice: "$79",
      author: "Natasha Wing",
    },
    {
      urlImg: ServicesImg1,
      title: "Sidepart",
      description:
        "Kiểu tóc side part, hay tóc rẽ ngôi lệch, mang đến vẻ thanh lịch, sang trọng và nam tính. Tóc được chia hai phần bởi đường rẽ ngôi, thường lệch sang bên trái. Mái tóc chải gọn gàng, vuốt sang một bên, tạo điểm nhấn cho khuôn mặt, phù hợp từ kiểu cổ điển đến hiện đại.",
      originalPrice: "$99",
      discountedPrice: "$79",
      author: "Natasha Wing",
    },
  ];

  return (
    <section className="px-8 py-8">
      <div className="container mx-auto mb-20 text-center">
        <p className="block antialiased font-sans text-base leading-relaxed text-blue-gray-900 mb-3 font-bold uppercase">
          Tóc Nam Thịnh Hành
        </p>
        <h1 className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-tight text-blue-gray-900 mb-2">
          Chọn Kiểu Tóc Phù Hợp Với Bạn
        </h1>
        <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mx-auto w-full px-4 !text-gray-500 lg:w-9/12">
          Hãy thử một trong những kiểu tóc nam sau đây để tạo nên phong cách độc
          đáo và ấn tượng cho bản thân.
        </p>
        <div className="mt-15 flex items-center justify-center">
          <div className="overflow-hidden block w-full lg:w-8/12">
            <nav>
              <ul
                role="tablist"
                className="flex relative bg-opacity-60 rounded-lg p-1 flex-row h-12 bg-transparent"
              >
                <li
                  role="tab"
                  className="flex items-center justify-center text-center w-full h-full relative bg-transparent py-1 px-2 antialiased font-sans text-base font-normal leading-relaxed select-none cursor-pointer !font-medium capitalize transition-all duration-300 text-white"
                  data-value="undercut"
                >
                  <div className="z-20 text-inherit">Undercut</div>
                  <div
                    className="absolute inset-0 z-10 h-full bg-white shadow !bg-gray-900 rounded-lg"
                    style={{ opacity: 1 }}
                  ></div>
                </li>
                <li
                  role="tab"
                  className="flex items-center justify-center text-center w-full h-full relative bg-transparent py-1 px-2 text-blue-gray-900 antialiased font-sans text-base font-normal leading-relaxed select-none cursor-pointer !font-medium transition-all duration-300 capitalize"
                  data-value="quiff"
                >
                  <div className="z-20 text-inherit">Quiff</div>
                </li>
                <li
                  role="tab"
                  className="flex items-center justify-center text-center w-full h-full relative bg-transparent py-1 px-2 text-blue-gray-900 antialiased font-sans text-base font-normal leading-relaxed select-none cursor-pointer !font-medium transition-all duration-300 capitalize"
                  data-value="fade"
                >
                  <div className="z-20 text-inherit">Fade</div>
                </li>
                <li
                  role="tab"
                  className="flex items-center justify-center text-center w-full h-full relative bg-transparent py-1 px-2 text-blue-gray-900 antialiased font-sans text-base font-normal leading-relaxed select-none cursor-pointer !font-medium transition-all duration-300 capitalize"
                  data-value="pompadour"
                >
                  <div className="z-20 text-inherit">Pompadour</div>
                </li>
                <li
                  role="tab"
                  className="flex items-center justify-center text-center w-full h-full relative bg-transparent py-1 px-2 text-blue-gray-900 antialiased font-sans text-base font-normal leading-relaxed select-none cursor-pointer !font-medium transition-all duration-300 capitalize"
                  data-value="buzz-cut"
                >
                  <div className="z-20 text-inherit">Buzz Cut</div>
                </li>
                <li
                  role="tab"
                  className="flex items-center justify-center text-center w-full h-full relative bg-transparent py-1 px-2 text-blue-gray-900 antialiased font-sans text-base font-normal leading-relaxed select-none cursor-pointer !font-medium transition-all duration-300 capitalize"
                  data-value="slick-back"
                >
                  <div className="z-20 text-inherit">Slick Back</div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* List Services */}
      <div className="justify-between">
      <div className="container mx-auto grid grid-cols-1 items-start gap-x-6 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none"
          >
            <div className="relative bg-clip-border rounded-xl overflow-hidden bg-gray-900 text-white shadow-gray-900/20 shadow-lg mx-0 mt-0 mb-6">
              <Image
                alt={service.title}
                loading="lazy"
                width="768"
                height="768"
                decoding="async"
                data-nimg="1"
                className="h-full w-full scale-[1.1] object-cover object-center"
                src={service.urlImg}
                style={{ color: "transparent" }}
              />
            </div>
            <div className="p-0">
              <p className="block antialiased font-sans font-light text-blue-500 mb-2 text-xs !font-semibold">
                {service.author}
              </p>
              <a href="#">
                <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-blue-gray-900 mb-3 font-bold normal-case xl:w-64">
                  {service.title}
                </h5>
              </a>
              <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-4 font-normal !text-gray-500">
                {service.description}
              </p>
              <div className="flex gap-2">
                <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 line-through">
                  {service.originalPrice}
                </h5>
                <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-red-500">
                  {service.discountedPrice}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex  gap-4 mx-auto ">
        <IconButton
          size="sm"
          variant="outlined"
          onClick={prev}
          disabled={active === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
        <div className="flex items-center gap-2">
          <IconButton {...getItemProps(1)}>1</IconButton>
          <IconButton {...getItemProps(2)}>2</IconButton>
          <IconButton {...getItemProps(3)}>3</IconButton>
          <IconButton {...getItemProps(4)}>4</IconButton>
          <IconButton {...getItemProps(5)}>5</IconButton>
        </div>
        <IconButton
          size="sm"
          variant="outlined"
          onClick={next}
          disabled={active === 10}
        >
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
      </div>
      </div>
    </section>
  );
};

export default ServiceList;
