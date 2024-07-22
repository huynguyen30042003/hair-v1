"use client";
import React, { useEffect, useState } from "react";
import "wowjs/css/libs/animate.css"; // Import animate.css for Wow.js animations
import WOW from "wowjs";
import "../css/bootstrap.min.css";
import "../css/mdb.min.css";
import "jarallax";
import "jarallax/dist/jarallax.css"; // Import the Jarallax CSS file
import "../css/plugins.css";
import "../css/style.css";
import "../css/coloring.css";
import "../css/colors/scheme-01.css";
import "../css/confictStyle.css";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import logo from "@data/images/logo.png";
import logoMobile from "@data/images/logo-mobile.png";
import background2 from "@data/images/background/2.jpg";
import Cookie from "js-cookie";
import Link from "next/link";
import router from "next/router";

const BASE_URL = "http://localhost:5000/api"; // Base URL for the API

const Pricing = () => {
  const [categories, setCategories] = useState([]);
  const [combos, setCombos] = useState([]);
  const isLogin = localStorage.getItem("accessToken");

  useEffect(() => {
    const wow = new WOW.WOW({
      boxClass: "wow", // Default wow class
      animateClass: "animated", // Default animation class
      offset: 0, // Default offset
      mobile: true, // Default mobile
      live: true, // Apply WOW.js to the live website
    });
    wow.init();

    if (typeof window !== "undefined") {
      const { jarallax } = require("jarallax");
      jarallax(document.querySelectorAll(".jarallax"), {
        speed: 0.2,
      });
    }

    const fetchData = async () => {
      try {
        const categoriesResponse = await axios.get(`${BASE_URL}/categories`);
        setCategories(categoriesResponse.data);
        const combosResponse = await axios.get(`${BASE_URL}/combos`);
        setCombos(combosResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Error fetching data");
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    Cookie.set("accessToken", "", { expires: -1 });
    Cookie.set("role", "", { expires: -1 });
    localStorage.clear();
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>StyleCuts - Pricing</title>
        <link
          rel="icon"
          href="/images/icon.png"
          type="image/gif"
          sizes="16x16"
        />
        <meta content="text/html;charset=utf-8" http-equiv="Content-Type" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta
          content="Blaxcut - Barbershop Website Template"
          name="description"
        />
      </Head>
      <body className="dark-scheme">
        <div id="wrapper">
          <div id="de-loader"></div>
          <header className="transparent">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="de-flex sm-pt10">
                    <div className="de-flex-col">
                      <div id="logo">
                        <a href="/">
                          <Image className="logo-main" src={logo} alt="" />
                          <Image
                            className="logo-mobile"
                            src={logoMobile}
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="de-flex-col header-col-mid">
                      <ul id="mainmenu">
                        <li>
                          <a className="menu-item" href="/">
                            Home
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="/services">
                            Services
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="/about">
                            About
                          </a>
                        </li>
                      
                        <li>
                          <a className="menu-item" href="#">
                            Extras
                          </a>
                          <ul>
                            <li>
                              <a className="menu-item" href="/contact">
                                Contact
                              </a>
                            </li>
                            <li>
                              <a className="menu-item" href="/pricing">
                                Pricing
                              </a>
                            </li>
                            <li>
                              <a className="menu-item" href="/feedback">
                                Feedback
                              </a>
                            </li>

                            <li>
                              <a className="menu-item" href="/history-booking">
                                History-booking
                              </a>
                            </li>
                          </ul>
                        </li>
                        {isLogin && (
                          <li>
                            <a className="menu-item" href="/profiles">
                              Profiles
                            </a>
                          </li>
                        )}
                        {!isLogin ? (
                          <li>
                            <a
                              className="menu-item"
                              href="/login-v2"
                              style={{
                                color: "#FF4500",
                              }}
                            >
                              Login
                            </a>
                          </li>
                        ) : (
                          <li>
                            <Link
                              href="/"
                              passHref
                              className="menu-item"
                              onClick={handleLogout}
                              style={{
                                color: "#FF4500",
                              }}
                            >
                              Logout
                            </Link>
                          </li>
                        )}
                      </ul>
                    </div>
                    <div className="de-flex-col">
                      <div className="menu_side_area">
                        <a href="/booking" className="btn-main">
                          Book Now
                        </a>
                        <span id="menu-btn"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="no-bottom no-top" id="content">
            <div id="top" />
            <section id="subheader" className="jarallax">
              <Image src={background2} className="jarallax-img" alt="" />
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 offset-lg-3 text-center">
                    <h1>Pricing</h1>
                    <div className="de-separator" />
                  </div>
                </div>
              </div>
              <div className="de-gradient-edge-bottom" />
            </section>
            <section className="no-top no-bottom" aria-label="section">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 offset-lg-2 mt-80">
                    <div className="d-sch-table">
                      <h2 className="text-center wow fadeIn">Categories</h2>
                      <div className="de-separator" />
                      <div className="sc-wrap">
                        {categories.map((category) => (
                          <div key={category._id}>
                            <h3>{category.category}</h3>
                            <div className="def-list-dots">
                              {category.services.map((service) => (
                                <dl key={service._id}>
                                  <dt>
                                    <span>{service.name}</span>
                                  </dt>
                                  <dd>${service.price}</dd>
                                </dl>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="d-deco" />
                    </div>
                  </div>
                </div>
                <div className="spacer-double" />
                <div className="row">
                  <div className="col-lg-6 offset-lg-4">
                    <div className="d-sch-table">
                      <h2 className="text-center wow fadeIn">Combos</h2>
                      <div className="de-separator" />
                      <div className="sc-wrap">
                        <div className="def-list-dots">
                          {combos.map((combo) => (
                            <dl key={combo._id}>
                              <dt>
                                <span>
                                  {combo.services
                                    ?.map((s) => s.name)
                                    .join(" + ")}
                                </span>
                              </dt>
                              <dd>${combo.price}</dd>
                            </dl>
                          ))}
                        </div>
                      </div>
                      <div className="d-deco" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <a href="#" id="back-to-top" />
          <footer>
            <div className="container">
              <div className="row g-4">
                <div className="col-lg-4 text-lg-start text-center">
                  <div className="social-icons">
                    <a href="#">
                      <i className="fa fa-facebook fa-lg" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter fa-lg" />
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin fa-lg" />
                    </a>
                    <a href="#">
                      <i className="fa fa-pinterest fa-lg" />
                    </a>
                    <a href="#">
                      <i className="fa fa-rss fa-lg" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 text-lg-center text-center">
                  <Image src={logo} className="image" alt="" />
                </div>
                <div className="col-lg-4 text-lg-end text-center">
                  Copyright 2024 - StyleCuts Barbershop
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </>
  );
};

export default Pricing;
