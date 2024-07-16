"use client";
import React, { useEffect } from "react";
import "wowjs/css/libs/animate.css"; // Import animate.css for Wow.js animations
import WOW from "wowjs";
import "jarallax";
import "jarallax/dist/jarallax.css"; // Import the Jarallax CSS file
import Image from "next/image";
import Head from "next/head";

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

const Home = () => {
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
  }, []);

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
                        <a href="index.html">
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
                          <a className="menu-item" href="index.html">
                            Home
                          </a>
                          <ul>
                            <li>
                              <a className="menu-item" href="index.html">
                                Home 1
                              </a>
                            </li>
                            <li>
                              <a className="menu-item" href="index-2.html">
                                Home 2
                              </a>
                            </li>
                            <li>
                              <a className="menu-item" href="index-3.html">
                                Home 3
                              </a>
                            </li>
                            <li>
                              <a className="menu-item" href="index-4.html">
                                Home 4
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="menu-item" href="services.html">
                            Services
                          </a>
                          <ul>
                            <li>
                              <a className="menu-item" href="services.html">
                                All Services
                              </a>
                            </li>
                            <li>
                              <a
                                className="menu-item"
                                href="service-single.html"
                              >
                                Service Single
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="menu-item" href="about.html">
                            About
                          </a>
                          <ul>
                            <li>
                              <a className="menu-item" href="about.html">
                                About Us
                              </a>
                            </li>
                            <li>
                              <a className="menu-item" href="team.html">
                                Our Team
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="menu-item" href="book.html">
                            Book Now
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="blog.html">
                            Blog
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="#">
                            Extras
                          </a>
                          <ul>
                            <li>
                              <a className="menu-item" href="contact.html">
                                Contact
                              </a>
                            </li>
                            <li>
                              <a className="menu-item" href="gallery.html">
                                Gallery
                              </a>
                            </li>
                            <li>
                              <a className="menu-item" href="pricing.html">
                                Pricing
                              </a>
                            </li>
                            <li>
                              <a className="menu-item" href="testimonials.html">
                                Testimonials
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="de-flex-col">
                      <div className="menu_side_area">
                        <a href="book.html" className="btn-main">
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
                  <div className="col-lg-6 item">
                    <div className="sc-wrap">
                      <h3>Haircut</h3>
                      <div className="def-list-dots">
                        <dl>
                          <dt>
                            <span>Regular Haircut</span>
                          </dt>
                          <dd>$37</dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>Scissors Haircut</span>
                          </dt>
                          <dd>$40</dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>Kids Haircut</span>
                          </dt>
                          <dd>$30</dd>
                        </dl>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 item">
                    <div className="sc-wrap">
                      <h3>Shave</h3>
                      <div className="def-list-dots">
                        <dl>
                          <dt>
                            <span>Head Shave</span>
                          </dt>
                          <dd>$27</dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>Royal Shave</span>
                          </dt>
                          <dd>$33</dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>Royal Head Shave</span>
                          </dt>
                          <dd>$33</dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>Beard Trim No Shave</span>
                          </dt>
                          <dd>$35</dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>Beard Trim Shave</span>
                          </dt>
                          <dd>$35</dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>Beard Shave Up</span>
                          </dt>
                          <dd>$30</dd>
                        </dl>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 item">
                    <div className="sc-wrap">
                      <h3>Facial</h3>
                      <div className="def-list-dots">
                        <dl>
                          <dt>
                            <span>Deep Pore Cleansing</span>
                          </dt>
                          <dd>$50</dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>Aromatherapy Facial</span>
                          </dt>
                          <dd>$45</dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>Acne Problem Facial</span>
                          </dt>
                          <dd>$60</dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>European Facial</span>
                          </dt>
                          <dd>$50</dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>Glycolic Peel Facial</span>
                          </dt>
                          <dd>$35</dd>
                        </dl>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 item">
                    <div className="sc-wrap">
                      <h3>Package</h3>
                      <div className="def-list-dots">
                        <dl>
                          <dt>
                            <span>Haircut + Shave</span>
                          </dt>
                          <dd>$50</dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>Haircut + Beard Trim</span>
                          </dt>
                          <dd>$50</dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>Haircut + Beard Trim Shave</span>
                          </dt>
                          <dd>$55</dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>Haircut + Beard Shape Up</span>
                          </dt>
                          <dd>$60</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
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
                      <h2 className="wow fadeIn">We're Open</h2>
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
                          100 Mainstreet Center, NY
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
        <script src="js/plugins.js"></script>
        <script src="js/designesia.js"></script>
      </body>
    </>
  );
};

export default Home;
