"use client";
import React, { useEffect, useState } from "react";
import "../css/style.css";
import "../css/colors/scheme-01.css";
import "../css/bootstrap.min.css";
import "../css/mdb.min.css";
import "../css/coloring.css";
import "../css/confictStyle.css";
import Logo from "../data/images/logo.png";
import LogoMobile from "../data/images/logo-mobile.png";
import Image from "next/image";
import "animate.css/animate.min.css";
import WOW from "wowjs";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const wow = new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: true,
    });
    wow.init();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="transparent">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              <div className="de-flex-col">
                <div id="logo">
                  <a href="/">
                    <Image className="logo-main" src={Logo} alt="Logo" />
                    <Image className="logo-mobile" src={LogoMobile} alt="Mobile Logo" />
                  </a>
                </div>
              </div>
              <div className={`de-flex-col header-col-mid ${isMenuOpen ? "open" : ""}`}>
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
                    <a className="menu-item" href="/booking">
                      Book Now
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="/blog">
                      Blog
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
                        <a className="menu-item" href="/gallery">
                          Gallery
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
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="de-flex-col">
                <div className="menu_side_area">
                  <a href="/login-v2" className="btn-main">
                    Login
                  </a>
                  <span id="menu-btn" onClick={toggleMenu}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
