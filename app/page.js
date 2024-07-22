"use client";
import React, { useEffect } from "react";
import "animate.css";
import { jarallax } from "jarallax";
import "jarallax/dist/jarallax.css";
import Image from "next/image";
import Head from "next/head";

import "../css/bootstrap.min.css";
import "../css/mdb.min.css";
import "../css/plugins.css";
import "../css/style.css";
import "../css/coloring.css";
import "../css/colors/scheme-01.css";
import "../css/confictStyle.css";

import logo from "@data/images/logo.png";
import logoMobile from "@data/images/logo-mobile.png";
import background1 from "@data/images/background/1.jpg";
import background2 from "@data/images/background/2.jpg";
import background8 from "@data/images/background/8.jpg";
import man2 from "@data/images/misc/man-2.png";
import man3 from "@data/images/misc/man-3.png";
import hairstyle1 from "@data/images/hairstyles/1.jpg";
import hairstyle2 from "@data/images/hairstyles/2.jpg";
import hairstyle3 from "@data/images/hairstyles/3.jpg";
import hairstyle4 from "@data/images/hairstyles/4.jpg";
import hairstyle5 from "@data/images/hairstyles/5.jpg";
import hairstyle6 from "@data/images/hairstyles/6.jpg";
import service1 from "@data/images/services/1.jpg";
import service2 from "@data/images/services/2.jpg";
import service3 from "@data/images/services/3.jpg";
import service4 from "@data/images/services/4.jpg";
import Link from "next/link";
import Cookie from "js-cookie";

const Home = () => {
  const isLogin = localStorage.getItem("accessToken");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const WOW = require("wowjs");
      const wow = new WOW.WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: true,
        live: true,
      });
      wow.init();

      jarallax(document.querySelectorAll(".jarallax"), {
        speed: 0.2,
      });
    }
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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
                          <Image className="logo-main" src={logo} alt="Logo" />
                          <Image
                            className="logo-mobile"
                            src={logoMobile}
                            alt="Logo Mobile"
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
            <div id="top"></div>
            <section
              id="section-hero"
              className="jarallax no-top no-bottom v-center"
            >
              <Image
                src={background8}
                className="jarallax-img"
                alt="Background"
              />
              <div className="container z1000">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <h1>
                      Unleash Your <span className="id-color">Best Look</span>,
                      Right in Our Chair!
                    </h1>
                    <p className="lead">
                      Established with a passion for the art of barbering, we
                      take great pride in our craft and strive to create an
                      atmosphere that feels like home.
                    </p>
                    <div className="spacer-10"></div>
                    <a className="btn-main" href="/booking">
                      Book Now
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <Image
                      src={man3}
                      className="img-fluid wow fadeInLeft"
                      data-wow-delay=".3s"
                      data-wow-duration="1.5s"
                      alt="Man"
                    />
                  </div>
                </div>
              </div>
              <div className="de-gradient-edge-bottom"></div>
            </section>

            <section aria-label="section" className="no-top no-bottom">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12" data-jarallax-element="-50">
                    <p className="lead big wow fadeInUp">
                      Established with a passion for the art of barbering, we
                      take great pride in our craft and strive to create an
                      atmosphere that feels like home. From the moment you walk
                      through our doors, you&apos;ll be greeted by friendly
                      smiles and a warm ambiance that instantly puts you at
                      ease.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="section-trending" className="pt80">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2 text-center">
                    <h2 className="wow fadeIn">Trending Styles</h2>
                    <div className="de-separator"></div>
                    <div className="spacer-single"></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12" data-jarallax-element="-20">
                    <div className="d-carousel wow fadeInRight">
                      <div
                        id="item-carousel-big"
                        className="owl-carousel no-hide owl-center"
                        data-wow-delay="1s"
                      >
                        {[
                          hairstyle1,
                          hairstyle2,
                          hairstyle3,
                          hairstyle4,
                          hairstyle5,
                          hairstyle6,
                        ].map((src, index) => (
                          <div className="c-item" key={index}>
                            <a href="#">
                              <span className="c-item_info">
                                <span className="c-item_title">
                                  Style {index + 1}
                                </span>
                                <span className="c-item_wm">#{index + 1}</span>
                              </span>
                              <div className="c-item_wrap">
                                <Image
                                  src={src}
                                  className="lazy img-fluid"
                                  alt={`Hairstyle ${index + 1}`}
                                />
                              </div>
                            </a>
                          </div>
                        ))}
                      </div>
                      <div className="d-arrow-left mod-a">
                        <i className="fa fa-angle-left"></i>
                      </div>
                      <div className="d-arrow-right mod-a">
                        <i className="fa fa-angle-right"></i>
                      </div>
                    </div>
                    <div className="spacer-double"></div>
                  </div>
                </div>
              </div>
            </section>

            <section className="no-top jarallax">
              <div className="de-gradient-edge-top"></div>
              <Image
                src={background1}
                className="jarallax-img"
                alt="Background"
              />
              <div className="container relative z1000">
                <div className="row align-items-center">
                  <div className="col-lg-6" data-jarallax-element="-30">
                    <Image
                      src={man2}
                      className="img-fluid wow fadeInRight"
                      alt="Man"
                    />
                  </div>
                  <div className="col-lg-6" data-jarallax-element="-60">
                    <h2 className="wow fadeInRight" data-wow-delay=".3s">
                      We’ll Crafting
                      <span className="id-color">Confidence</span> Through Sharp
                      Style
                    </h2>
                    <p className="wow fadeInRight" data-wow-delay=".4s">
                      We take pride in providing top-notch grooming services
                      that blend classic techniques with modern trends. Step
                      into our warm and inviting space, where you&apos;ll find a
                      team of skilled barbers dedicated to enhancing your style
                      and confidence.
                    </p>
                    <a
                      href="/booking"
                      className="btn-main wow fadeInRight"
                      data-wow-delay=".5s"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="de-gradient-edge-bottom"></div>
            </section>

            <section aria-label="section" className="no-top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <h2 className="wow fadeIn">Our Services</h2>
                    <div className="de-separator"></div>
                  </div>
                  {[service1, service2, service3, service4].map(
                    (src, index) => (
                      <div
                        className="col-lg-3 text-center"
                        data-jarallax-element={`-${(index + 1) * 20}`}
                        key={index}
                      >
                        <div className="de-box-a">
                          <div className="d-image">
                            <Image src={src} alt={`Service ${index + 1}`} />
                          </div>
                          <div className="d-deco-1"></div>
                          <div className="d-deco-2"></div>
                        </div>
                        <div className="spacer-20"></div>
                        <h4>
                          {
                            ["Haircuts", "Beard", "Shaving", "Razor Blade"][
                              index
                            ]
                          }
                        </h4>
                      </div>
                    )
                  )}
                </div>
                <div className="spacer-single"></div>
                <div className="text-center">
                  <a href="/services" className="btn-main">
                    All Services & Prices
                  </a>
                </div>
              </div>
            </section>

            <section className="jarallax no-top">
              <div className="de-gradient-edge-top"></div>
              <Image
                src={background1}
                className="jarallax-img"
                alt="Background"
              />
              <div className="container relative z1000">
                <div className="row gx-5">
                  <div
                    className="col-lg-6 text-center"
                    data-jarallax-element="-50"
                  >
                    <div className="d-sch-table">
                      <h2 className="wow fadeIn">We&apos;re Open</h2>
                      <div className="de-separator"></div>
                      {[
                        { day: "Mon - Thu", time: "7:30AM - 6:30PM" },
                        { day: "Friday", time: "8:30AM - 8:30PM" },
                        { day: "Sat - Sun", time: "9:30AM - 5:30PM" },
                      ].map((schedule, index) => (
                        <div className="d-col" key={index}>
                          <div className="d-title">{schedule.day}</div>
                          <div className="d-content id-color">
                            {schedule.time}
                          </div>
                        </div>
                      ))}
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
                      {[
                        {
                          label: "Address",
                          content: "100 Mainstreet Center",
                        },
                        { label: "Phone", content: "+1 333 8080 1000" },
                        { label: "Email", content: "contact@blaxcut.com" },
                      ].map((info, index) => (
                        <div className="d-col" key={index}>
                          <div className="d-title">{info.label}</div>
                          <div className="d-content id-color">
                            {info.content}
                          </div>
                        </div>
                      ))}
                      <div className="d-deco"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="de-gradient-edge-bottom"></div>
            </section>

            <section aria-label="section" className="no-top">
              <div className="wow fadeInRight d-flex">
                <div className="de-marquee-list wow">
                  <div className="d-item">
                    {[
                      "Haircut",
                      "Shave",
                      "Faded",
                      "Hair Dye",
                      "Beard Trim",
                      "Hair Color",
                      "Facial",
                      "Massage",
                      "Hair Wash",
                    ].map((service, index) => (
                      <React.Fragment key={index}>
                        <span className="d-item-txt">{service}</span>
                        <span className="d-item-display">
                          <i className="d-item-block"></i>
                        </span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Content close */}
          <a href="#" id="back-to-top"></a>

          {/* Footer */}
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
                  <Image src={logo} className="image" alt="Logo" />
                </div>
                <div className="col-lg-4 text-lg-end text-center">
                  Copyright 2024 - StyleCuts BaberShop
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </>
  );
};

export default Home;
