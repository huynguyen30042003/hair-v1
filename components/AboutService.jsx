"use client";
import React, { useEffect } from "react";
import WOW from "wowjs";
import Subheader from "./Subheader";
import Vision from "./Vision";
import Mission from "./Mission";
import Team from "./Team";
import MarqueeList from "./MarqueeList";
import Footer from "./Footer";

import "../css/bootstrap.min.css";
import "../css/mdb.min.css";
import "jarallax";
import "jarallax/dist/jarallax.css";
import "../css/plugins.css";
import "../css/style.css";
import "../css/coloring.css";
import "../css/colors/scheme-01.css";
import "../css/confictStyle.css";
import Navbar from "./Navbar";

const AboutService = () => {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();

    if (typeof window !== "undefined") {
      const { jarallax } = require("jarallax");
      jarallax(document.querySelectorAll(".jarallax"), {
        speed: 0.2,
      });
    }
  }, []);

  return (
    <div className="no-bottom no-top" id="content">
      <div id="top" />
      <Navbar/>
      <Subheader />
      <Vision />
      <Mission />
      <Team />
      <MarqueeList />
      <Footer />
    </div>
  );
};

export default AboutService;
