import React, { useEffect } from 'react';
import 'wowjs/css/libs/animate.css'; // Import animate.css for Wow.js animations
import WOW from 'wowjs';
import '../css/bootstrap.min.css';
import '../css/mdb.min.css';
import 'jarallax';
import 'jarallax/dist/jarallax.css'; // Import the Jarallax CSS file
import '../css/plugins.css';
import '../css/style.css';
import '../css/coloring.css';
import '../css/colors/scheme-01.css';
import '../css/confictStyle.css'
import Head from 'next/head'
import Image from 'next/image';
import logo from '@data/images/logo.png';
import logoMobile from '@data/images/logo-mobile.png';
import background2 from '@data/images/background/2.jpg';



const Pricing = () => {
    useEffect(() => {
        const wow = new WOW.WOW({
          boxClass: 'wow', // Default wow class
          animateClass: 'animated', // Default animation class
          offset: 0, // Default offset
          mobile: true, // Default mobile
          live: true, // Apply WOW.js to the live website
        });
        wow.init();
      }, []);
  return (
    <>
    <body className="dark-scheme">
    <div id="wrapper">
  {/* page preloader begin */}
  <div id="de-loader" />
  <div className="no-bottom no-top" id="content">
    <div id="top" />
    <section id="subheader" className="jarallax">
      <Image src={background2} className="jarallax-img" alt="" />
      <div className="de-gradient-edge-bottom" />
    </section>
    <section className="no-top no-bottom" aria-label="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-2 mt-80">
            <div className="d-sch-table">
              <h2 className="text-center wow fadeIn">Haircut</h2>
              <div className="de-separator" />
              <div className="sc-wrap">
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
              <div className="d-deco" />
            </div>
          </div>
        </div>
        <div className="spacer-double" />
        <div className="row">
          <div className="col-lg-6 offset-lg-4">
            <div className="d-sch-table">
              <h2 className="text-center wow fadeIn">Shave</h2>
              <div className="de-separator" />
              <div className="sc-wrap">
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
              <div className="d-deco" />
            </div>
          </div>
        </div>
        <div className="spacer-double" />
        <div className="row">
          <div className="col-lg-6 offset-lg-2">
            <div className="d-sch-table">
              <h2 className="text-center wow fadeIn">Facial</h2>
              <div className="de-separator" />
              <div className="sc-wrap">
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
              <div className="d-deco" />
            </div>
          </div>
        </div>
        <div className="spacer-double" />
        <div className="row">
          <div className="col-lg-6 offset-lg-4">
            <div className="d-sch-table">
              <h2 className="text-center wow fadeIn">Package</h2>
              <div className="de-separator" />
              <div className="sc-wrap">
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
              <div className="d-deco" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  {/* content close */}
  <a href="#" id="back-to-top" />
  {/* footer begin */}
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
  {/* footer close */}
</div>
</body>
    </>
  )
}

export default Pricing