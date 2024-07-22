"use client";
import React, { useState, useEffect } from "react";
import { Input, Button } from "@material-tailwind/react";
import {
  displayImage,
  getUserProfile,
  updateUserProfile,
  uploadImage,
  changePassword, // Import the changePassword function
} from "api/route";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WOW from "wowjs";
import "../../css/bootstrap.min.css";
import "../../css/mdb.min.css";
import "jarallax";
import "jarallax/dist/jarallax.css";
import "../../css/plugins.css";
import "../../css/style.css";
import "../../css/coloring.css";
import "../../css/colors/scheme-01.css";
import "../../css/confictStyle.css";
import Head from "next/head";
import Image from "next/image";
import logo from "@data/images/logo.png";
import logoMobile from "@data/images/logo-mobile.png";
import background2 from "@data/images/background/2.jpg";
import Cookie from "js-cookie";
import Link from "next/link";
import router from "next/navigation";

const ProfilesPage = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    avatar: "",
  });
  const [previewAvatar, setPreviewAvatar] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
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

    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const userProfile = await getUserProfile(token);
        setProfile(userProfile);
        setPreviewAvatar(await displayImage(userProfile.avatar));
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let avatarFilename = profile.avatar;
      if (avatarFile) {
        const uploadedImage = await uploadImage(avatarFile);
        avatarFilename = uploadedImage.filename; // Assuming the response contains the filename
        console.log("Uploaded image filename:", avatarFilename);
      }

      const updatedProfile = { ...profile, avatar: avatarFilename };
      const token = localStorage.getItem("accessToken");

      await updateUserProfile(updatedProfile, token);
      toast.success("Profile updated successfully!");
      setProfile(updatedProfile);
      localStorage.setItem("account", JSON.stringify(updatedProfile));
    } catch (error) {
      toast.error("Error updating profile.");
      console.error("Error updating profile:", error);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error("New Password and Confirm Password do not match.");
      return;
    }

    try {
      const token = localStorage.getItem("accessToken");
      const data = {
        oldPassword: passwordData.oldPassword,
        newPassword: passwordData.newPassword,
      };
      await changePassword(data, token);
      toast.success("Password changed successfully!");
      setPasswordData({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setShowPasswordForm(false);
    } catch (error) {
      toast.error("Password Incorrect.");
      console.error("Error changing password:", error);
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
        <title>StyleCuts - Profile</title>
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
                    <h1>Profile</h1>
                    <div className="de-separator" />
                  </div>
                </div>
              </div>
              <div className="de-gradient-edge-bottom" />
            </section>
            <section className="no-top" aria-label="section">
              <div className="container">
                <div className="flex justify-center items-center min-h-screen">
                  <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md p-8 shadow-md rounded profile-form"
                  >
                    <div className="mb-4">
                      <Input
                        label="Name"
                        name="name"
                        value={profile.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <Input
                        label="Email"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <Input
                        label="Phone"
                        name="phone"
                        value={profile.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <Input
                        label="Role"
                        name="role"
                        value={profile.role}
                        onChange={handleChange}
                        disabled
                      />
                    </div>
                    <div className="mb-4">
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarChange}
                      />
                    </div>
                    {previewAvatar && (
                      <div className="mb-4">
                        <img
                          src={previewAvatar}
                          alt="Avatar Preview"
                          className="w-32 h-32 rounded-full mx-auto"
                        />
                      </div>
                    )}
                    <Button type="submit" className="w-full">
                      Update Profile
                    </Button>
                    <Button
                      onClick={() => setShowPasswordForm(!showPasswordForm)}
                      className="mt-4 w-full"
                    >
                      Change Password
                    </Button>
                  </form>

                  {showPasswordForm && (
                    <form
                      onSubmit={handlePasswordSubmit}
                      className="ml-10 w-full max-w-md p-8 shadow-md rounded profile-form mt-4"
                      // style={{ position: "absolute" }}
                    >
                      <div className="mb-4">
                        <Input
                          type="password"
                          label="Old Password"
                          name="oldPassword"
                          value={passwordData.oldPassword}
                          onChange={handlePasswordChange}
                        />
                      </div>
                      <div className="mb-4">
                        <Input
                          type="password"
                          label="New Password"
                          name="newPassword"
                          value={passwordData.newPassword}
                          onChange={handlePasswordChange}
                        />
                      </div>
                      <div className="mb-4">
                        <Input
                          type="password"
                          label="Confirm Password"
                          name="confirmPassword"
                          value={passwordData.confirmPassword}
                          onChange={handlePasswordChange}
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Change Password
                      </Button>
                    </form>
                  )}
                  <ToastContainer />
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
      <style jsx>{`
        .profile-form {
          background: rgba(
            255,
            255,
            255,
            0.8
          ); /* Translucent white background */
          border-radius: 15px; /* Rounded corners */
        }
      `}</style>
    </>
  );
};

export default ProfilesPage;
