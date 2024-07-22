"use client";
import React, { useState, useEffect } from "react";
import WOW from "wowjs";
import Rating from "./Rating";
import "../css/bootstrap.min.css";
import "../css/mdb.min.css";
import "jarallax";
import "jarallax/dist/jarallax.css";
import "../css/plugins.css";
import "../css/style.css";
import "../css/coloring.css";
import "../css/colors/scheme-01.css";
import "../css/confictStyle.css";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import logo from "@data/images/logo.png";
import logoMobile from "@data/images/logo-mobile.png";
import background2 from "@data/images/background/2.jpg";
import {
  getReviews,
  createReview,
  updateReview,
  deleteReview,
  displayImage,
} from "api/route"; // Import the API functions
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookie from "js-cookie";
import Link from "next/link";
import router from "next/navigation";

const FeedbackService = () => {
  const [reviews, setReviews] = useState([]);
  const [userReview, setUserReview] = useState(null);
  const [rating, setRating] = useState(null);
  const [review, setReview] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage] = useState(3); // Adjust the number of reviews per page
  const isLogin = localStorage.getItem("accessToken");
  const account = JSON.parse(localStorage.getItem("account"));
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const reviewsData = (await getReviews(token)).map((review) => {
          review.customer["avatarUrl"] = displayImage(review.customer.avatar);
          return review;
        });
        const userReview = reviewsData.find(
          (review) => review.customer._id === account?._id
        );
        setUserReview(userReview);
        setReviews(reviewsData);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();

    const wow = new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: true,
    });
    wow.init();
  }, []);

  const handleRating = (rate) => {
    setRating(rate);
    setShowForm(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("accessToken");
      let newReview;
      if (userReview) {
        newReview = await updateReview(
          userReview._id,
          {
            rating,
            comment: review,
            status: "pending",
          },
          token
        );
        toast.success("Your review has been updated successfully!");
      } else {
        newReview = await createReview(
          {
            rating,
            comment: review,
            customer: account?._id,
            status: "pending",
          },
          token
        );
        toast.success("Your review has been submitted successfully!");
      }
      console.log({
        ...newReview,
        customer: { ...account, avatarUrl: displayImage(account.avatar) },
      });
      setUserReview({
        ...newReview,
        customer: { ...account, avatarUrl: displayImage(account.avatar) },
      });
      setShowForm(false);
      setReview("");
      setRating(null);
    } catch (error) {
      toast.error("Sorry, there was an error submitting your review.");
      console.error("Error submitting review:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      await deleteReview(userReview._id, token);
      toast.success("Your review has been deleted successfully!");
      setUserReview(null);
      setReviews(reviews.filter((r) => r._id != userReview._id));
      setShowForm(false);
      setReview("");
      setRating(null);
    } catch (error) {
      toast.error("Sorry, there was an error deleting your review.");
      console.error("Error deleting review:", error);
    }
  };

  // Pagination logic
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleLogout = () => {
    Cookie.set("accessToken", "", { expires: -1 });
    Cookie.set("role", "", { expires: -1 });
    localStorage.clear();
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>StyleCuts - Feedback Service</title>
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
          <div id="de-loader" />
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
                    <h1>Testimonials</h1>
                    <div className="de-separator" />
                  </div>
                </div>
              </div>
              <div className="de-gradient-edge-bottom" />
            </section>
            <section className="no-top" aria-label="section">
              <div className="container">
                {userReview && (
                  <div className="row">
                    <div className="col-lg-12 item mb10">
                      <div className="de_testi">
                        <blockquote>
                          <div className="de_testi_by">
                            {userReview.customer?.avatar && (
                              <img
                                alt=""
                                className="rounded-circle"
                                src={userReview.customer.avatarUrl}
                                width={50}
                                height={50}
                              />
                            )}
                            <span>{userReview.customer.name}</span>
                          </div>
                          <p>{userReview.comment}</p>
                          <div>
                            {Array(userReview.rating)
                              .fill()
                              .map((_, i) => (
                                <i key={i} className="fa fa-star"></i>
                              ))}
                          </div>
                          <button
                            onClick={() => setShowForm(true)}
                            className="btn btn-secondary mt-2"
                          >
                            Edit Review
                          </button>
                          <button
                            onClick={handleDelete}
                            className="btn btn-danger mt-2"
                          >
                            Delete Review
                          </button>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                )}
                <div className="row masonry">
                  {currentReviews
                    .filter((review) => review._id !== userReview?._id)
                    .map((r, index) => {
                      return (
                        <div key={index} className="col-lg-4 item mb10">
                          <div className="de_testi">
                            <blockquote>
                              <p>{r.comment}</p>
                              <div className="de_testi_by">
                                {r.customer?.avatar && (
                                  <img
                                    alt=""
                                    className="rounded-circle"
                                    src={r.customer.avatarUrl}
                                    width={50}
                                    height={50}
                                  />
                                )}
                                <span>{r.customer.name}</span>
                              </div>
                              <div>
                                {Array(r.rating)
                                  .fill()
                                  .map((_, i) => (
                                    <i
                                      key={i}
                                      className={`fa fa-star`}
                                      style={{
                                        color: "#ffdf00",
                                      }}
                                    ></i>
                                  ))}
                              </div>
                            </blockquote>
                          </div>
                        </div>
                      );
                    })}
                </div>
                <div className="text-center">
                  <div className="spacer-single" />
                  <Pagination
                    reviewsPerPage={reviewsPerPage}
                    totalReviews={reviews.length}
                    paginate={paginate}
                    currentPage={currentPage}
                  />
                </div>
              </div>
            </section>
          </div>
          <a href="#" id="back-to-top" />
          <footer>
            <div className="container">
              {!userReview && <Rating onRate={handleRating} />}
              {showForm && (
                <form onSubmit={handleSubmit} style={{ marginBottom: "50px" }}>
                  <div className="form-group">
                    <label htmlFor="review">Your Review:</label>
                    <textarea
                      id="review"
                      className="form-control"
                      value={review}
                      onChange={(e) => setReview(e.target.value)}
                      placeholder="Please enter your review"
                      required
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label>Your Rating:</label>
                    <div>
                      {Array(5)
                        .fill()
                        .map((_, i) => (
                          <i
                            key={i}
                            className={`fa fa-star`}
                            style={{
                              color: i < rating ? "#ffdf00" : "#d8a47f",
                            }}
                            onClick={() => handleRating(i + 1)}
                          ></i>
                        ))}
                    </div>
                  </div>
                  <button type="submit" className="btn btn-orange mt-2">
                    Submit Review
                  </button>
                </form>
              )}
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

const Pagination = ({
  reviewsPerPage,
  totalReviews,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalReviews / reviewsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
            style={{ backgroundColor: currentPage === number ? "#ff4500" : "" }}
          >
            <a
              onClick={() => paginate(number)}
              href="#"
              className="page-link"
              style={{ color: currentPage === number ? "#fff" : "#ff4500" }}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FeedbackService;
