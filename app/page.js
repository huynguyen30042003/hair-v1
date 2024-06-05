"use client";
import Image from "next/image";
import About from "../components/About";
import Footer from "../components/Footer";
import ServicesHome from "../components/ServicesHome";

export default function Home() {
  return (
    <>
      <About />
      <ServicesHome />
      <Footer />
    </>
  );
}
