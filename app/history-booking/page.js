"use client";
import React, { useEffect, useState } from "react";
import "wowjs/css/libs/animate.css"; // Import animate.css for Wow.js animations
import WOW from "wowjs";
import "../../css/bootstrap.min.css";
import "../../css/mdb.min.css";
import "jarallax";
import "jarallax/dist/jarallax.css"; // Import the Jarallax CSS file
import "../../css/plugins.css";
import "../../css/style.css";
import "../../css/coloring.css";
import "../../css/colors/scheme-01.css";
import "../../css/confictStyle.css";
import Head from "next/head";
import Image from "next/image";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import logo from "@data/images/logo.png";
import logoMobile from "@data/images/logo-mobile.png";
import background1 from "@data/images/background/1.jpg";
import Cookie from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ReactPaginate from "react-paginate";

import { GetAppointmentByAccountId } from "api/route";

const HistoryBookingPage = () => {
  const [bookings, setBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [bookingsPerPage] = useState(3); // Set the number of bookings per page
  const isLogin = localStorage.getItem("accessToken");
  const router = useRouter();

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

    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const userId = JSON.parse(localStorage.getItem("account"))?._id;
        if (userId) {
          const appointments = await GetAppointmentByAccountId(userId, token);
          setBookings(
            Array.isArray(appointments) ? appointments : [appointments]
          );
        }
      } catch (error) {
        console.error("Error fetching booking history:", error);
        toast.error("Error fetching booking history.");
      }
    };

    fetchBookings();
  }, []);

  const handleLogout = () => {
    Cookie.set("accessToken", "", { expires: -1 });
    Cookie.set("role", "", { expires: -1 });
    localStorage.clear();
    router.push("/");
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * bookingsPerPage;
  const currentBookings = bookings.slice(offset, offset + bookingsPerPage);

  return (
    <>
      <Head>
        <title>StyleCuts - Booking History</title>
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
              <Image src={background1} className="jarallax-img" alt="" />
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 offset-lg-3 text-center">
                    <h1>Booking History</h1>
                    <div className="de-separator" />
                  </div>
                </div>
              </div>
              <div className="de-gradient-edge-bottom" />
            </section>
            <section className="no-top no-bottom" aria-label="section">
              <div className="container">
                <div className="row">
                  {currentBookings.length > 0 ? (
                    currentBookings.map((booking, index) => (
                      <div
                        className={`col-lg-6 offset-lg-${
                          ((index % 2) + 1) * 2
                        } mt-80`}
                        style={{ marginBottom: "200px" }}
                        key={booking._id}
                      >
                        <div className="d-sch-table">
                          {/* <h2 className="text-center wow fadeIn">Bookings</h2>
                          <div className="de-separator" /> */}
                          <div className="sc-wrap">
                            <div key={booking._id}>
                              <h3>{booking.salon.name}</h3>
                              <div className="def-list-dots">
                                <dl>
                                  <dt>Date</dt>
                                  <dd>
                                    {new Date(
                                      booking.date
                                    ).toLocaleDateString()}
                                  </dd>
                                </dl>
                                <dl>
                                  <dt>Time</dt>
                                  <dd>
                                    {booking.timeStart} - {booking.timeEnd}
                                  </dd>
                                </dl>
                                <dl>
                                  <dt>Total Price</dt>
                                  <dd>${booking.totalPrice}</dd>
                                </dl>
                                <dl>
                                  <dt>Payment Status</dt>
                                  <dd>{booking.paymentStatus}</dd>
                                </dl>
                                <dl>
                                  <dt>Payment Method</dt>
                                  <dd>{booking.paymentMethod}</dd>
                                </dl>
                                <dl>
                                  <dt>Status</dt>
                                  <dd>{booking.status}</dd>
                                </dl>
                                <dl>
                                  <dt>Services</dt>
                                  <dd>
                                    <ul>
                                      {booking.services.map((service) => (
                                        <li key={service._id}>
                                          {service.name}
                                        </li>
                                      ))}
                                    </ul>
                                  </dd>
                                </dl>
                                <dl>
                                  <dt>Combos</dt>
                                  <dd>
                                    <ul>
                                      {booking.combos.map((combo) => (
                                        <li key={combo._id}>
                                          {combo.services
                                            ?.map((s) => s.name)
                                            .join(" + ")}
                                        </li>
                                      ))}
                                    </ul>
                                  </dd>
                                </dl>
                              </div>
                            </div>
                          </div>
                          <div className="d-deco" />
                        </div>
                      </div>
                    ))
                  ) : (
                    <h3 className="text-center">No bookings found.</h3>
                  )}
                </div>
                {bookings.length > bookingsPerPage && (
                  <div className="row">
                    <ReactPaginate
                      previousLabel={"Previous"}
                      nextLabel={"Next"}
                      breakLabel={"..."}
                      breakClassName={"break-me"}
                      pageCount={Math.ceil(bookings.length / bookingsPerPage)}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={5}
                      onPageChange={handlePageClick}
                      containerClassName={"pagination"}
                      subContainerClassName={"pages pagination"}
                      activeClassName={"active"}
                    />
                  </div>
                )}
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
          <ToastContainer />
        </div>
      </body>
    </>
  );
};

export default HistoryBookingPage;
