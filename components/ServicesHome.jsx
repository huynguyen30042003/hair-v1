import React, { useState } from "react";
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
import ServicesImg1 from "../data/img/ServicesImg1.webp";
import ServicesImg2 from "../data/img/ServicesImg2.png";
import ServicesImg3 from "../data/img/ServicesImg3.jpg";

export default function ServicesHome() {
  const images = [ServicesImg1, ServicesImg2, ServicesImg3];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 -mt-6 m-5">
      {images.map((image, index) => (
        <Card key={index} className="max-w-[24rem] shadow-lg">
          <CardHeader floated={false} color="blue-gray" className="relative">
            <div className="relative overflow-hidden">
              <Image
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-auto"
              />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
              <IconButton
                size="sm"
                color="red"
                variant="text"
                className="!absolute top-4 right-4 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </IconButton>
            </div>
          </CardHeader>
          <CardBody>
            <div className="mb-3 flex items-center justify-between">
              <Typography
                variant="h5"
                color="blue-gray"
                className="font-medium"
              >
                Wooden House, Florida
              </Typography>
              <Typography
                color="blue-gray"
                className="flex items-center gap-1.5 font-normal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="-mt-0.5 h-5 w-5 text-yellow-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                5.0
              </Typography>
            </div>
            <Typography color="gray">
              Enter a freshly updated and thoughtfully furnished peaceful home
              surrounded by ancient trees, stone walls, and open meadows.
            </Typography>
            <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
              <Tooltip content="$129 per night">
                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                      clipRule="evenodd"
                    />
                    <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
                  </svg>
                </span>
              </Tooltip>
              <Tooltip content="Free wifi">
                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 4.5a9.375 9.375 0 016.688 2.902.75.75 0 01-1.06 1.06A7.875 7.875 0 0012 6a7.875 7.875 0 00-5.626 2.462.75.75 0 11-1.06-1.06A9.375 9.375 0 0112 4.5zm0 3.75a5.625 5.625 0 014.01 1.665.75.75 0 11-1.06 1.06A4.125 4.125 0 0012 9a4.125 4.125 0 00-2.95 1.225.75.75 0 11-1.06-1.06A5.625 5.625 0 0112 8.25zm0 3.75a1.875 1.875 0 011.326.549.75.75 0 01-1.06 1.06A.375.375 0 0012 13.5a.375.375 0 00-.266.111.75.75 0 01-1.06-1.06A1.875 1.875 0 0112 12zm0 4.5c3.45 0 6.688 1.307 9.25 3.677a.75.75 0 01-1.06 1.06C15.557 18.68 13.833 18 12 18c-1.833 0-3.557.68-5.19 1.787a.75.75 0 01-1.06-1.06C5.312 17.807 8.55 16.5 12 16.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Tooltip>
              <Tooltip content="Kitchen">
                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M5 3a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1h-1v11a1 1 0 01-2 0v-6H8v6a1 1 0 01-2 0V10H5a1 1 0 01-1-1V3zm2 1v4h10V4H7z" />
                  </svg>
                </span>
              </Tooltip>
              <Tooltip content="Heating">
                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2a1 1 0 01.894.553l5 10a1 1 0 11-1.788.894L14.618 11h-5.236l-1.488 3.447a1 1 0 11-1.788-.894l5-10A1 1 0 0112 2zm0 2.618L10.236 9h3.528L12 4.618zM6 15a1 1 0 000 2h12a1 1 0 100-2H6zm0 4a1 1 0 000 2h12a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Tooltip>
            </div>
          </CardBody>
          <CardFooter className="pt-3">
            <Button size="lg" fullWidth={true} color="blue">
              Book Now
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
