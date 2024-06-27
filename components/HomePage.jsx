import React, { useEffect } from "react";
import WOW from "wowjs";
import "../css/style.css";
import "../css/colors/scheme-01.css";
import "../css/bootstrap.min.css";
import "../css/mdb.min.css";
import "../css/coloring.css";
import Head from "next/head";
import HeroSection from "./HeroSection";
import ScheduleLocationSection from "./ScheduleLocationSection";
import AboutPage from "./AboutPage";
import GalleryPage from "./GalleryPage";
import ServicesHome from "./ServicesHome";

const Navbar = () => {
  useEffect(() => {
    const wow = new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: true,
    });
    wow.init();
  }, []);

  return (
    <div className="header-center transparent header">
      <Head>
        <title>Your Website Title</title>
      </Head>
      {/* Navbar and header content */}
      <AboutPage />
      <GalleryPage />
      <HeroSection/>
      <ServicesHome />
      <ScheduleLocationSection/>
      {/* Add more pages/components as needed */}
    </div>
  );
};

export default Navbar;
