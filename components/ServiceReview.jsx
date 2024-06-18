"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import Image from "next/image";
import ServicesImg1 from "../data/img/Mohican.jpg";
import ServicesImg2 from "../data/img/Undercut.jpg";
import ServicesImg3 from "../data/img/Sidepart.png";

export default function ServicesHome() {
  const CardService = [
    {
      urlImg: ServicesImg1,
      title: "Mohican",
      description:
        "Kiểu tóc Mohican, nổi loạn, cạo ngắn hai bên, chừa dọc tóc giữa, bắt nguồn từ bộ tộc Mohawk Bắc Mỹ.",
    },
    {
      urlImg: ServicesImg2,
      title: "Undercut",
      description:
        "Kiểu tóc Undercut vuốt ngược, biến tấu từ Undercut, mang vẻ lịch lãm, điển trai và cuốn hút cho các bạn nam.",
    },
    {
      urlImg: ServicesImg3,
      title: "Sidepart",
      description:
        "Kiểu tóc side part, hay tóc rẽ ngôi lệch, mang đến vẻ thanh lịch, sang trọng và nam tính. Tóc được chia hai phần bởi đường rẽ ngôi, thường lệch sang bên trái. Mái tóc chải gọn gàng, vuốt sang một bên, tạo điểm nhấn cho khuôn mặt, phù hợp từ kiểu cổ điển đến hiện đại.",
    },
  ];

  return (
    <div className="container m-auto">
      <section className="px-8 py-10 lg:pt-0 mx-auto">
        <div className="mb-20 grid place-items-center text-center">
          <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 my-3">
            Các Kiểu Tóc Hàng Đầu
          </h2>
          <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit !text-gray-500 lg:w-6/12">
            Khám phá các kiểu tóc hàng đầu của StyleCuts.Với phong cách mới vẻ
            và năng động sẽ mang lại cho bạn một vẻ ngoài trẻ trung và mới lạ.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="flex-col bg-clip-border rounded-xl bg-gray-900 text-white shadow-gray-900/20 shadow-md relative grid h-full w-full place-items-center overflow-hidden text-center">
            <div className="absolute inset-0 h-full w-full bg-gray-900/75"></div>
            <div className="p-6 relative w-full">
              <p className="block antialiased font-sans text-white text-xs font-bold opacity-50">
                up to 40% OFF
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white mt-9">
                Bestselling Books
              </h4>
              <p className="block antialiased font-sans text-base leading-relaxed text-white mt-4 mb-14 font-normal opacity-50">
                Explore our extensive collection of textbooks, workbooks,
                novels, and more. From preschool to post-grad, we have books for
                every age and academic level.
              </p>
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
              >
                Read More
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md relative grid min-h-[12rem] w-full overflow-hidden">
              <Image
                alt="Fiction Books"
                loading="lazy"
                width="768"
                height="768"
                decoding="async"
                data-nimg="1"
                className="absolute inset-0 h-full w-full object-cover object-center"
                src={ServicesImg1}
                style={{ color: "transparent" }}
              />
              <div className="absolute inset-0 h-full w-full bg-black/70"></div>
              <div className="p-6 relative flex flex-col justify-between">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-8 w-8 text-white"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                </svg>
                <div>
                  <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-white mb-1">
                    Fiction Books
                  </h5>
                  <p className="block antialiased font-sans text-white text-xs font-bold opacity-50">
                    up to 40% OFF
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md relative grid min-h-[12rem] w-full overflow-hidden">
              <Image
                alt="School Books"
                loading="lazy"
                width="768"
                height="768"
                decoding="async"
                data-nimg="1"
                className="absolute inset-0 h-full w-full object-cover object-center"
                src={ServicesImg1}
                style={{ color: "transparent" }}
              />
              <div className="absolute inset-0 h-full w-full bg-black/70"></div>
              <div className="p-6 relative flex flex-col justify-between">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-8 w-8 text-white"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                </svg>
                <div>
                  <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-white mb-1">
                    School Books
                  </h5>
                  <p className="block antialiased font-sans text-white text-xs font-bold opacity-50">
                    up to 40% OFF
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md relative grid min-h-[12rem] w-full overflow-hidden">
              <Image
                alt="Fiction Books"
                loading="lazy"
                width="768"
                height="768"
                decoding="async"
                data-nimg="1"
                className="absolute inset-0 h-full w-full object-cover object-center"
                src={ServicesImg1}
                style={{ color: "transparent" }}
              />
              <div className="absolute inset-0 h-full w-full bg-black/70"></div>
              <div className="p-6 relative flex flex-col justify-between">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-8 w-8 text-white"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                </svg>
                <div>
                  <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-white mb-1">
                    Fiction Books
                  </h5>
                  <p className="block antialiased font-sans text-white text-xs font-bold opacity-50">
                    up to 40% OFF
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md relative grid min-h-[12rem] w-full overflow-hidden">
              <Image
                alt="School Books"
                loading="lazy"
                width="768"
                height="768"
                decoding="async"
                data-nimg="1"
                className="absolute inset-0 h-full w-full object-cover object-center"
                src={ServicesImg1}
                style={{ color: "transparent" }}
              />
              <div className="absolute inset-0 h-full w-full bg-black/70"></div>
              <div className="p-6 relative flex flex-col justify-between">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-8 w-8 text-white"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                </svg>
                <div>
                  <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-white mb-1">
                    School Books
                  </h5>
                  <p className="block antialiased font-sans text-white text-xs font-bold opacity-50">
                    up to 40% OFF
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
