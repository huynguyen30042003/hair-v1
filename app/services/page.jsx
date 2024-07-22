"use client";
import React, { useEffect, useState } from "react";
import "wowjs/css/libs/animate.css"; // Import animate.css for Wow.js animations
import WOW from "wowjs";
import "jarallax";
import "jarallax/dist/jarallax.css"; // Import the Jarallax CSS file
import Image from "next/image";
import Head from "next/head";
import axios from "axios";
import "../../css/bootstrap.min.css";
import "../../css/mdb.min.css";
import "../../css/plugins.css";
import "../../css/style.css";
import "../../css/coloring.css";
import "../../css/colors/scheme-01.css";
import "../../css/confictStyle.css";

import logo from "@data/images/logo.png";
import logoMobile from "@data/images/logo-mobile.png";
import background1 from "@data/images/background/1.jpg";
import background2 from "@data/images/background/2.jpg";
import service1 from "@data/images/services/1.jpg";
import service2 from "@data/images/services/2.jpg";
import service3 from "@data/images/services/3.jpg";
import service4 from "@data/images/services/4.jpg";
import Cookie from "js-cookie";
import Link from "next/link";
import router from "next/navigation";
const BASE_URL = "http://localhost:5000/api";

const Home = () => {
  const [services, setServices] = useState([]);
  const isLogin = localStorage.getItem("accessToken");
  useEffect(() => {
    const wow = new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: true,
    });
    wow.init();

    if (typeof window !== "undefined") {
      const { jarallax } = require("jarallax");
      jarallax(document.querySelectorAll(".jarallax"), {
        speed: 0.2,
      });
    }

    const fetchServices = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/services`);
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
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
        <title>StyleCuts - Barbershop</title>
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
                        {isLogin && (
                          <li>
                            <a className="menu-item" href="/profiles">
                              Profiles
                            </a>
                          </li>
                        )}
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
            <div id="top"></div>

            <section id="subheader" className="jarallax">
              <Image src={background2} className="jarallax-img" alt="" />
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 offset-lg-3 text-center">
                    <h1>Services</h1>
                    <div className="de-separator"></div>
                  </div>
                </div>
              </div>
              <div className="de-gradient-edge-bottom"></div>
            </section>

            <section aria-label="section" className="no-top no-bottom">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12" data-jarallax-element="-20">
                    <p className="lead big wow fadeInUp">
                      Step into our stylish and comfortable space, where the
                      blend of vintage and contemporary decor sets the perfect
                      backdrop for your grooming journey. We pay attention to
                      every detail, from the moment you walk through our doors
                      until you leave with a fresh, confident look.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="section-pricing" aria-label="section">
              <div className="container">
                <div className="row g-5" id="gallery">
                  {services.map((service) => (
                    <div className="col-lg-6 item" key={service._id}>
                      <div className="sc-wrap">
                        <h3>{service.name}</h3>
                        <div className="def-list-dots">
                          <dl>
                            <dt>
                              <span>{service.name}</span>
                            </dt>
                            <dd>${service.price}</dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section aria-label="section" className="no-top">
              <div className="container">
                <div className="row">
                  <div
                    className="col-lg-3 text-center"
                    data-jarallax-element="-20"
                  >
                    <div className="de-box-a">
                      <div className="d-image">
                        <Image src={service1} alt="" />
                      </div>
                      <div className="d-deco-1"></div>
                      <div className="d-deco-2"></div>
                    </div>
                    <div className="spacer-20"></div>
                    <h4>Haircuts</h4>
                  </div>
                  <div
                    className="col-lg-3 text-center"
                    data-jarallax-element="-60"
                  >
                    <div className="de-box-a">
                      <div className="d-image">
                        <Image src={service2} alt="" />
                      </div>
                      <div className="d-deco-1"></div>
                      <div className="d-deco-2"></div>
                    </div>
                    <div className="spacer-20"></div>
                    <h4>Beard</h4>
                  </div>
                  <div
                    className="col-lg-3 text-center"
                    data-jarallax-element="-40"
                  >
                    <div className="de-box-a">
                      <div className="d-image">
                        <Image src={service3} alt="" />
                      </div>
                      <div className="d-deco-1"></div>
                      <div className="d-deco-2"></div>
                    </div>
                    <div className="spacer-20"></div>
                    <h4>Shaving</h4>
                  </div>
                  <div
                    className="col-lg-3 text-center"
                    data-jarallax-element="-10"
                  >
                    <div className="de-box-a">
                      <div className="d-image">
                        <Image src={service4} alt="" />
                      </div>
                      <div className="d-deco-1"></div>
                      <div className="d-deco-2"></div>
                    </div>
                    <div className="spacer-20"></div>
                    <h4>Razor Blade</h4>
                  </div>
                </div>
              </div>
            </section>

            <section className="jarallax no-top">
              <div className="de-gradient-edge-top"></div>
              <Image src={background1} className="jarallax-img" alt="" />
              <div className="container relative z1000">
                <div className="row gx-5">
                  <div
                    className="col-lg-6 text-center"
                    data-jarallax-element="-50"
                  >
                    <div className="d-sch-table">
                      <h2 className="wow fadeIn">We&apos;re Open</h2>
                      <div className="de-separator"></div>
                      <div className="d-col">
                        <div className="d-title">Mon - Thu</div>
                        <div className="d-content id-color">
                          7:30AM - 6:30PM
                        </div>
                      </div>
                      <div className="d-col">
                        <div className="d-title">Friday</div>
                        <div className="d-content id-color">
                          8:30AM - 8:30PM
                        </div>
                      </div>
                      <div className="d-col">
                        <div className="d-title">Sat - Sun</div>
                        <div className="d-content id-color">
                          9:30AM - 5:30PM
                        </div>
                      </div>
                      <div className="d-deco"></div>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 text-center"
                    data-jarallax-element="-100"
                  >
                    <div className="d-sch-table">
                      <h2 className="wow fadeIn">Location</h2>
                      <div className="de-separator"></div>
                      <div className="d-col">
                        <div className="d-title">Address</div>
                        <div className="d-content id-color">
                          100 Mainstreet Center
                        </div>
                      </div>
                      <div className="d-col">
                        <div className="d-title">Phone</div>
                        <div className="d-content id-color">
                          +1 333 8080 1000
                        </div>
                      </div>
                      <div className="d-col">
                        <div className="d-title">Email</div>
                        <div className="d-content id-color">
                          contact@blaxcut.com
                        </div>
                      </div>
                      <div className="d-deco"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="de-gradient-edge-bottom"></div>
            </section>
          </div>
          <a href="#" id="back-to-top"></a>

          <footer>
            <div className="container">
              <div className="row g-4">
                <div className="col-lg-4 text-lg-start text-center">
                  <div className="social-icons">
                    <a href="#">
                      <i className="fa fa-facebook fa-lg"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter fa-lg"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin fa-lg"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-pinterest fa-lg"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-rss fa-lg"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 text-lg-center text-center">
                  <Image src={logo} className="image" alt="" />
                </div>
                <div className="col-lg-4 text-lg-end text-center">
                  Copyright 2024 - StyleCuts BaberShop
                </div>
              </div>
            </div>
          </footer>
        </div>
        <script async src="js/plugins.js"></script>
        <script async src="js/designesia.js"></script>
      </body>
    </>
  );
};

export default Home;
