"use client";
import React from "react";
import Img1 from "../data/images/services/1.jpg"
import Img2 from "../data/images/services/2.jpg"
import Img3 from "../data/images/services/3.jpg"
import Img4 from "../data/images/services/4.jpg"
import Image from "next/image";
export default function ServicesHome() {
  return (
    <section aria-label="section" className="no-top">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="wow fadeIn">Our Services</h2>
          <div className="de-separator" />
        </div>
        <div className="col-lg-3 text-center" data-jarallax-element={-20}>
          <div className="de-box-a">
            <div className="d-image">
              <Image src={Img1} alt="Model Cut 1" />
            </div>
            <div className="d-deco-1" />
            <div className="d-deco-2" />
          </div>
          <div className="spacer-20" />
          <h4>Haircuts</h4>
        </div>
        <div className="col-lg-3 text-center" data-jarallax-element={-60}>
          <div className="de-box-a">
            <div className="d-image">
              <Image src={Img2} alt="Model Cut 2" />
            </div>
            <div className="d-deco-1" />
            <div className="d-deco-2" />
          </div>
          <div className="spacer-20" />
          <h4>Beard</h4>
        </div>
        <div className="col-lg-3 text-center" data-jarallax-element={-40}>
          <div className="de-box-a">
            <div className="d-image">
              <Image src={Img3} alt="Model Cut 3" />
            </div>
            <div className="d-deco-1" />
            <div className="d-deco-2" />
          </div>
          <div className="spacer-20" />
          <h4>Shaving</h4>
        </div>
        <div className="col-lg-3 text-center" data-jarallax-element={-10}>
          <div className="de-box-a">
            <div className="d-image">
              <Image src={Img4} alt="Model Cut 4" />
            </div>
            <div className="d-deco-1" />
            <div className="d-deco-2" />
          </div>
          <div className="spacer-20" />
          <h4>Razor Blade</h4>
        </div>
      </div>
      <div className="spacer-single" />
      <div className="text-center">
        <a href="services.html" className="btn-main">
          All Services &amp; Prices
        </a>
      </div>
    </div>
  </section>
  );
}
