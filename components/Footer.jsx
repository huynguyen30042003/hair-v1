import React from "react";
import Image from "next/image";
import logo from "../data/images/logo.png";

const Footer = () => {
  return (
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
            Copyright 2024 - StyleCuts BaberShop
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
