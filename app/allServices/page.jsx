"use client";
import React, { useEffect } from 'react';
import WOW from 'wowjs';
import Image from 'next/image';
import Head from 'next/head';
import '../../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import '../../css/coloring.css';
import '../../css/confictStyle.css';
import '../../css/jquery.countdown.css';
import '../../css/mdb.min.css';
import '../../css/plugins.css';
import '../../css/colors/scheme-01.css';
import 'jarallax';
import 'jarallax/dist/jarallax.css';
import 'animate.css/animate.css';
import logo from '@data/images/logo.png';
import background2 from '@data/images/background/2.jpg';
import background1 from '@data/images/background/1.jpg';
import services1 from '@data/images/services/1.jpg';
import services2 from '@data/images/services/2.jpg';
import services3 from '@data/images/services/3.jpg';
import services4 from '@data/images/services/4.jpg';

const Page = () => {
  useEffect(() => {
    const wow = new WOW.WOW({
      boxClass: 'wow', // default
      animateClass: 'animated', // default
      offset: 0, // default
      mobile: true, // default
      live: true // default
    });
    wow.init();
    
    if (typeof window !== 'undefined') {
      const { jarallax } = require('jarallax');
      jarallax(document.querySelectorAll('.jarallax'), {
        speed: 0.2,
      });
    }
  }, []);
  
  return (
    <body class="dark-scheme">
    <div id="wrapper"></div>
      <Head>
        <title>Services</title>
        <meta name="description" content="Service page description" />
      </Head>
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section id="subheader" className="jarallax">
          <Image src={background2} className="jarallax-img" alt="Background 2" />
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
                  Step into our stylish and comfortable space, where the blend of vintage and contemporary decor sets the perfect backdrop for your grooming journey. We pay attention to every detail, from the moment you walk through our doors until you leave with a fresh, confident look.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="section-pricing" aria-label="section">
          <div className="container">
            <div className="row g-5" id="gallery">
              {/* Haircut Pricing */}
              <div className="col-lg-6 item">
                <div className="sc-wrap">
                  <h3>Haircut</h3>
                  <div className="def-list-dots">
                    <dl>
                      <dt><span>Regular Haircut</span></dt>
                      <dd>$37</dd>
                    </dl>
                    <dl>
                      <dt><span>Scissors Haircut</span></dt>
                      <dd>$40</dd>
                    </dl>
                    <dl>
                      <dt><span>Kids Haircut</span></dt>
                      <dd>$30</dd>
                    </dl>
                  </div>
                </div>
              </div>
              
              {/* Shave Pricing */}
              <div className="col-lg-6 item">
                <div className="sc-wrap">
                  <h3>Shave</h3>
                  <div className="def-list-dots">
                    <dl>
                      <dt><span>Head Shave</span></dt>
                      <dd>$27</dd>
                    </dl>
                    <dl>
                      <dt><span>Royal Shave</span></dt>
                      <dd>$33</dd>
                    </dl>
                    <dl>
                      <dt><span>Royal Head Shave</span></dt>
                      <dd>$33</dd>
                    </dl>
                    <dl>
                      <dt><span>Beard Trim No Shave</span></dt>
                      <dd>$35</dd>
                    </dl>
                    <dl>
                      <dt><span>Beard Trim Shave</span></dt>
                      <dd>$35</dd>
                    </dl>
                    <dl>
                      <dt><span>Beard Shave Up</span></dt>
                      <dd>$30</dd>
                    </dl>
                  </div>
                </div>
              </div>

              {/* Facial Pricing */}
              <div className="col-lg-6 item">
                <div className="sc-wrap">
                  <h3>Facial</h3>
                  <div className="def-list-dots">
                    <dl>
                      <dt><span>Deep Pore Cleansing</span></dt>
                      <dd>$50</dd>
                    </dl>
                    <dl>
                      <dt><span>Aromatherapy Facial</span></dt>
                      <dd>$45</dd>
                    </dl>
                    <dl>
                      <dt><span>Acne Problem Facial</span></dt>
                      <dd>$60</dd>
                    </dl>
                    <dl>
                      <dt><span>European Facial</span></dt>
                      <dd>$50</dd>
                    </dl>
                    <dl>
                      <dt><span>Glycolic Peel Facial</span></dt>
                      <dd>$35</dd>
                    </dl>
                  </div>
                </div>
              </div>

              {/* Package Pricing */}
              <div className="col-lg-6 item">
                <div className="sc-wrap">
                  <h3>Package</h3>
                  <div className="def-list-dots">
                    <dl>
                      <dt><span>Haircut + Shave</span></dt>
                      <dd>$50</dd>
                    </dl>
                    <dl>
                      <dt><span>Haircut + Beard Trim</span></dt>
                      <dd>$50</dd>
                    </dl>
                    <dl>
                      <dt><span>Haircut + Beard Trim Shave</span></dt>
                      <dd>$55</dd>
                    </dl>
                    <dl>
                      <dt><span>Haircut + Beard Shape Up</span></dt>
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
              <div className="col-lg-3 text-center" data-jarallax-element="-20">
                <div className="de-box-a">
                  <div className="d-image">
                    <Image src={services1} alt="Service 1" />
                  </div>
                  <div className="d-deco-1"></div>
                  <div className="d-deco-2"></div>
                </div>
                <div className="spacer-20"></div>
                <h4>Haircuts</h4>
              </div>

              <div className="col-lg-3 text-center" data-jarallax-element="-60">
                <div className="de-box-a">
                  <div className="d-image">
                    <Image src={services2} alt="Service 2" />
                  </div>
                  <div className="d-deco-1"></div>
                  <div className="d-deco-2"></div>
                </div>
                <div className="spacer-20"></div>
                <h4>Beard</h4>
              </div>

              <div className="col-lg-3 text-center" data-jarallax-element="-40">
                <div className="de-box-a">
                  <div className="d-image">
                    <Image src={services3} alt="Service 3" />
                  </div>
                  <div className="d-deco-1"></div>
                  <div className="d-deco-2"></div>
                </div>
                <div className="spacer-20"></div>
                <h4>Shaving</h4>
              </div>

              <div className="col-lg-3 text-center" data-jarallax-element="-10">
                <div className="de-box-a">
                  <div className="d-image">
                    <Image src={services4} alt="Service 4" />
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
          <Image src={background1} className="jarallax-img" alt="Background 1" />
          <div className="container relative z1000">
            <div className="row gx-5">
              <div className="col-lg-6 text-center" data-jarallax-element="-50">
                <div className="d-sch-table">
                  <h2 className="wow fadeIn">We're Open</h2>
                  <div className="de-separator"></div>
                  <div className="d-col">
                    <div className="d-title">Mon - Thu</div>
                    <div className="d-content id-color">7:30AM - 6:30PM</div>
                  </div>
                  <div className="d-col">
                    <div className="d-title">Friday</div>
                    <div className="d-content id-color">8:30AM - 8:30PM</div>
                  </div>
                  <div className="d-col">
                    <div className="d-title">Sat - Sun</div>
                    <div className="d-content id-color">9:30AM - 5:30PM</div>
                  </div>
                  <div className="d-deco"></div>
                </div>
              </div>

              <div className="col-lg-6 text-center" data-jarallax-element="-100">
                <div className="d-sch-table">
                  <h2 className="wow fadeIn">Location</h2>
                  <div className="de-separator"></div>
                  <div className="d-col">
                    <div className="d-title">Address</div>
                    <div className="d-content id-color">100 Mainstreet Center, NY</div>
                  </div>
                    <div className="d-col">
                    <div className="d-title">Phone</div>
                    <div className="d-content id-color">+1 333 8080 1000</div>
                  </div>
                  <div className="d-col">
                    <div className="d-title">Email</div>
                    <div className="d-content id-color">contact@blaxcut.com</div>
                  </div>
                  <div className="d-deco"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="de-gradient-edge-bottom"></div>
        </section>
      </div>
      <footer>
<div className="container">
    <div className="row g-4">
        
        <div className="col-lg-4 text-lg-start text-center">
            <div className="social-icons">
                <a href="#"><i className="fa fa-facebook fa-lg"></i></a>
                <a href="#"><i className="fa fa-twitter fa-lg"></i></a>
                <a href="#"><i className="fa fa-linkedin fa-lg"></i></a>
                <a href="#"><i className="fa fa-pinterest fa-lg"></i></a>
                <a href="#"><i className="fa fa-rss fa-lg"></i></a>
            </div>
        </div>
        <div className="col-lg-4 text-lg-center text-center flex justify-center">
            <Image src={logo} className="" alt=""/>
        </div>
        <div className="col-lg-4 text-lg-end text-center">
            Copyright 2024 - StyleCuts
        </div>
    </div>
</div>
</footer>
      </body>
  );
};
export default Page;
