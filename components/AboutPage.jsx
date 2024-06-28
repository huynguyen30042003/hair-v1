
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ImgMan2 from "../data/images/misc/man-3.png";
import HomeBG2 from "../data/images/background/8.jpg";

const Page = () => {
  return (
    <div className="no-bottom no-top" id="content">
      <div id="top"></div>
      <section id="section-hero" className="jarallax no-top no-bottom v-center">
        <Image src={HomeBG2} className="jarallax-img" layout="fill" objectFit="cover" alt="" />
        <div className="container z1000">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1>
                Unleash Your <span className="id-color">Best Look</span>, Right in Our Chair!
              </h1>
              <p className="lead">
                Established with a passion for the art of barbering, we take great pride in our craft and strive to create an atmosphere that feels like home.
              </p>
              <div className="spacer-10"></div>
              <a className="btn-main" href="/booking">
                Book Now
              </a>
            </div>
            <div className="col-lg-6">
              <Image
                src={ImgMan2}
                className="img-fluid wow fadeInLeft"
                data-wow-delay=".3s"
                data-wow-duration="1.5s"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="de-gradient-edge-bottom"></div>
      </section>
      <section aria-label="section" className="no-top no-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12" data-jarallax-element={-50}>
                <p className="lead big wow fadeInUp">
                  Established with a passion for the art of barbering, we take
                  great pride in our craft and strive to create an atmosphere
                  that feels like home. From the moment you walk through our
                  doors, you'll be greeted by friendly smiles and a warm
                  ambiance that instantly puts you at ease.
                </p>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default Page;
