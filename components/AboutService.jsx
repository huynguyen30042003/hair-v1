"use client";
import React, { useEffect } from "react";
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
import logo from "@data/images/logo.png";
import logoMobile from "@data/images/logo-mobile.png";
import background3 from "@data/images/background/3.jpg";
import background1 from "@data/images/background/1.jpg";
import team1 from "@data/images/team/1.jpg";
import team2 from "@data/images/team/2.jpg";
import team3 from "@data/images/team/3.jpg";
import team4 from "@data/images/team/4.jpg";
import Cookie from "js-cookie";
import Link from "next/link";
import router from "next/navigation";

const AboutService = () => {
  const isLogin = localStorage.getItem("accessToken");

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

  const handleLogout = () => {
    Cookie.set("accessToken", "", { expires: -1 });
    Cookie.set("role", "", { expires: -1 });
    localStorage.clear();
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>StyleCuts - About Us</title>
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
              <Image src={background3} className="jarallax-img" alt="" />
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 offset-lg-3 text-center">
                    <h1>About Us</h1>
                    <div className="de-separator" />
                  </div>
                </div>
              </div>
              <div className="de-gradient-edge-bottom" />
            </section>
            <section aria-label="section" className="no-top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12" data-jarallax-element={-20}>
                    <p className="lead big wow fadeInUp">
                      Immerse yourself in the ambience of our thoughtfully
                      designed space, where modern aesthetics merge harmoniously
                      with classic elements. We believe that a barbershop should
                      be more than just a place to get a haircut; it should be a
                      sanctuary where you can unwind, engage in great
                      conversation, and leave feeling invigorated.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="jarallax no-top">
              <div className="de-gradient-edge-top" />
              <Image src={background1} className="jarallax-img" alt="" />
              <div className="container relative z1000">
                <div className="row gx-5">
                  <div className="col-lg-6" data-jarallax-element={-50}>
                    <div className="d-sch-table">
                      <h2 className="wow fadeIn text-center">Our Vision</h2>
                      <div className="de-separator" />
                      <p>
                        At the heart of our vision is a commitment to preserving
                        the time-honored traditions of barbering while
                        seamlessly blending them with contemporary techniques
                        and trends. We envision a space where heritage and
                        innovation coexist harmoniously, creating an environment
                        that appeals to the modern man seeking both classic
                        sophistication and cutting-edge styles.
                      </p>
                      <div className="d-deco" />
                    </div>
                  </div>
                  <div className="col-lg-6" data-jarallax-element={-100}>
                    <div className="d-sch-table">
                      <h2 className="wow fadeIn text-center">Our Mission</h2>
                      <div className="de-separator" />
                      <p>
                        Our mission is to empower men to feel confident,
                        stylish, and authentic in their appearance. Through our
                        commitment to excellence, personalized service, inviting
                        atmosphere, and a harmonious blend of tradition and
                        innovation, we aspire to become the ultimate grooming
                        destination for the modern gentleman.
                      </p>
                      <div className="d-deco" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="de-gradient-edge-bottom" />
            </section>
            <section aria-label="section" className="no-top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <h2 className="wow fadeIn">Our Team</h2>
                    <div className="de-separator" />
                  </div>
                  <div
                    className="col-lg-3 text-center"
                    data-jarallax-element={-20}
                  >
                    <div className="de-box-a">
                      <div className="d-image">
                        <Image className="image" src={team1} alt="" />
                      </div>
                      <div className="d-deco-1" />
                      <div className="d-deco-2" />
                      <div className="d-social">
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                      </div>
                    </div>
                    <div className="spacer-20" />
                    <h4>Tran Viet Tinh</h4>
                  </div>
                  <div
                    className="col-lg-3 text-center"
                    data-jarallax-element={-60}
                  >
                    <div className="de-box-a">
                      <div className="d-image">
                        <Image src={team2} alt="" />
                      </div>
                      <div className="d-deco-1" />
                      <div className="d-deco-2" />
                      <div className="d-social">
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                      </div>
                    </div>
                    <div className="spacer-20" />
                    <h4>Ho Ngoc Minh</h4>
                  </div>
                  <div
                    className="col-lg-3 text-center"
                    data-jarallax-element={-40}
                  >
                    <div className="de-box-a">
                      <div className="d-image">
                        <Image src={team3} alt="" />
                      </div>
                      <div className="d-deco-1" />
                      <div className="d-deco-2" />
                      <div className="d-social">
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                      </div>
                    </div>
                    <div className="spacer-20" />
                    <h4>Dang Van Mich</h4>
                  </div>
                  <div
                    className="col-lg-3 text-center"
                    data-jarallax-element={-10}
                  >
                    <div className="de-box-a">
                      <div className="d-image">
                        <Image src={team4} alt="" />
                      </div>
                      <div className="d-deco-1" />
                      <div className="d-deco-2" />
                      <div className="d-social">
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                      </div>
                    </div>
                    <div className="spacer-20" />
                    <h4>Nguyen Bao Khanh</h4>
                  </div>
                </div>
              </div>
            </section>
            <section aria-label="section" className="wow fadeInRight no-top">
              <div className="d-flex">
                <div className="de-marquee-list wow">
                  <div className="d-item">
                    <span className="d-item-txt">Haircut</span>
                    <span className="d-item-display">
                      <i className="d-item-block" />
                    </span>
                    <span className="d-item-txt">Shave</span>
                    <span className="d-item-display">
                      <i className="d-item-block" />
                    </span>
                    <span className="d-item-txt">Faded</span>
                    <span className="d-item-display">
                      <i className="d-item-block" />
                    </span>
                    <span className="d-item-txt">Hair Dye</span>
                    <span className="d-item-display">
                      <i className="d-item-block" />
                    </span>
                    <span className="d-item-txt">Beard Trim</span>
                    <span className="d-item-display">
                      <i className="d-item-block" />
                    </span>
                    <span className="d-item-txt">Hair Color</span>
                    <span className="d-item-display">
                      <i className="d-item-block" />
                    </span>
                    <span className="d-item-txt">Facial</span>
                    <span className="d-item-display">
                      <i className="d-item-block" />
                    </span>
                    <span className="d-item-txt">Massage</span>
                    <span className="d-item-display">
                      <i className="d-item-block" />
                    </span>
                    <span className="d-item-txt">Hair Wash</span>
                    <span className="d-item-display">
                      <i className="d-item-block" />
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <>
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
            </>
          </div>
        </div>
        <script async src="js/plugins.js"></script>
        <script async src="js/designesia.js"></script>
        <script async src="js/custom-marquee.js"></script>
      </body>
    </>
  );
};

export default AboutService;
