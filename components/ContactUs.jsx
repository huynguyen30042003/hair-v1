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
import { createContact } from "api/route"; // Import the createContact function
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import logo from "@data/images/logo.png";
import logoMobile from "@data/images/logo-mobile.png";
import background5 from "@data/images/background/5.jpg";
import background7 from "@data/images/background/7.jpg";
import Cookie from "js-cookie";
import Link from "next/link";
import router from "next/navigation";

const ContactUs = () => {
  const [question, setQuestion] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
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
  }, []);

  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("accessToken");
      await createContact(
        {
          question,
          customer: JSON.parse(localStorage.getItem("account"))?._id,
          status: true,
        },
        token
      );
      setIsSubmitted(true);
      setErrorMessage("");
      toast.success("Your message has been sent successfully!");
      setTimeout(() => {
        router.push("/history-booking");
      }, 3000);
    } catch (error) {
      setErrorMessage("Sorry there was an error sending your form.");
      toast.error(errorMessage);
      console.error("Error submitting form:", error);
    }
  };

  const handleLogout = () => {
    Cookie.set("accessToken", "", { expires: -1 });
    Cookie.set("role", "", { expires: -1 });
    localStorage.clear();
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>StyleCuts - Contact Us</title>
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
              <Image src={background5} className="jarallax-img" alt="" />
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 offset-lg-3 text-center">
                    <h1>Contact Us</h1>
                    <div className="de-separator" />
                  </div>
                </div>
              </div>
              <div className="de-gradient-edge-bottom" />
            </section>
            <section
              id="section-content"
              className="no-top"
              aria-label="section"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-4 text-center">
                    <i className="fa fa-map-marker de-icon gradient de-hover-scale text-light mb20" />
                    <p className="lead no-bottom">Our Address</p>
                    <h4 className="s2">
                      35 Lo Giang 20, Hoa Xuan, Cam Le, Da Nang
                    </h4>
                  </div>
                  <div className="col-lg-4 col-md-4 text-center">
                    <i className="fa fa-phone de-icon gradient de-hover-scale text-light mb20" />
                    <p className="lead no-bottom">Phone Number</p>
                    <h4 className="s2">070532761</h4>
                  </div>
                  <div className="col-lg-4 col-md-4 text-center">
                    <i className="fa fa-envelope-o de-icon gradient de-hover-scale text-light mb20" />
                    <p className="lead no-bottom">Email Address</p>
                    <h4 className="s2">ttinh2852@gmail.com</h4>
                  </div>
                </div>
              </div>
            </section>
            <section className="no-top jarallax">
              <div className="de-gradient-edge-top" />
              <Image src={background7} className="jarallax-img" alt="" />
              <div className="container position-relative z1000">
                <div className="row gx-5">
                  <div className="col-lg-6 offset-lg-3">
                    <div className="d-sch-table">
                      <h2 className="wow fadeIn text-center">
                        Send Us a Message
                      </h2>
                      <div className="de-separator" />
                      <p className="lead text-center">
                        If you have any questions, please send us a message.
                      </p>
                      <form
                        name="contactForm"
                        id="contact_form"
                        className="form-border position-relative z1000"
                        method="post"
                        onSubmit={handleSubmit}
                      >
                        <div className="field-set mb20">
                          <textarea
                            name="message"
                            id="message"
                            className="form-control"
                            placeholder="Your message"
                            required
                            onChange={handleChange}
                          />
                        </div>
                        <div
                          className="g-recaptcha"
                          data-sitekey="copy-your-site-key-here"
                        />
                        <div id="submit" className="mt20">
                          <input
                            type="submit"
                            id="send_message"
                            value="Send Message"
                            className="btn-main"
                          />
                        </div>
                        <ToastContainer />
                        {isSubmitted && (
                          <div id="success_message" className="success">
                            Your message has been sent successfully. Refresh
                            this page if you want to send more messages.
                          </div>
                        )}
                        {errorMessage && (
                          <div id="error_message" className="error">
                            {errorMessage}
                          </div>
                        )}
                      </form>
                      <div className="d-deco" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="de-gradient-edge-bottom" />
            </section>
            <section aria-label="section" className="no-top sm-hide">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <h4>Follow Us</h4>
                    <div className="spacer-20" />
                    <div className="social-icons big">
                      <a
                        href="https://www.facebook.com/asdfghjktih1/"
                        target="_blank"
                      >
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

export default ContactUs;
