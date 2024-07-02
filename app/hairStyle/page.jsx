"use client";
import React, { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import WOW from 'wowjs';
import 'animate.css/animate.css';
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
import logo from '@data/images/logo.png';
import background1 from '@data/images/background/1.jpg';
import background2 from '@data/images/background/2.jpg';
import misc1 from '@data/images/misc/man-3-b.png';
import hairStyles1 from '@data/images/hairstyles/1.jpg';
import hairStyles2 from '@data/images/hairstyles/2.jpg';
import hairStyles3 from '@data/images/hairstyles/3.jpg';
import hairStyles4 from '@data/images/hairstyles/4.jpg';
import hairStyles5 from '@data/images/hairstyles/5.jpg';
import hairStyles6 from '@data/images/hairstyles/6.jpg';
const page = () => {
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
  <div className="dark-scheme">
        <div id="wrapper">
          <div id="de-loader"></div>
          {/* <header className="transparent">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="de-flex sm-pt10">
                    <div className="de-flex-col">
                      <div className="de-flex-col">
                        <div id="logo">
                          <a href="index.html">
                            <Image className="logo-main" src={background2} alt="" width={50} height={50} />
                            <Image className="logo-mobile" src="/images/logo-mobile.png" alt="" width={50} height={50} />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="de-flex-col header-col-mid">
                      <ul id="mainmenu">
                        <li><a className="menu-item" href="index.html">Home</a>
                          <ul>
                            <li><a className="menu-item" href="index.html">Home 1</a></li>
                            <li><a className="menu-item" href="index-2.html">Home 2</a></li>
                            <li><a className="menu-item" href="index-3.html">Home 3</a></li>
                            <li><a className="menu-item" href="index-4.html">Home 4</a></li>
                          </ul>
                        </li>
                        <li><a className="menu-item" href="services.html">Services</a>
                          <ul>
                            <li><a className="menu-item" href="services.html">All Services</a></li>
                            <li><a className="menu-item" href="service-single.html">Service Single</a></li>
                          </ul>
                        </li>
                        <li><a className="menu-item" href="about.html">About</a>
                          <ul>
                            <li><a className="menu-item" href="about.html">About Us</a></li>
                            <li><a className="menu-item" href="team.html">Our Team</a></li>
                          </ul>
                        </li>
                        <li><a className="menu-item" href="book.html">Book Now</a></li>
                        <li><a className="menu-item" href="blog.html">Blog</a></li>
                        <li><a className="menu-item" href="#">Extras</a>
                          <ul>
                            <li><a className="menu-item" href="contact.html">Contact</a></li>
                            <li><a className="menu-item" href="gallery.html">Gallery</a></li>
                            <li><a className="menu-item" href="pricing.html">Pricing</a></li>
                            <li><a className="menu-item" href="testimonials.html">Testimonials</a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="de-flex-col">
                      <div className="menu_side_area">
                        <a href="book.html" className="btn-main">Book Now</a>
                        <span id="menu-btn"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header> */}

          <div className="no-bottom no-top" id="content">
            <div id="top"></div>

            <section id="subheader" className="jarallax">
              <Image src={background2} className="jarallax-img" alt="" layout="fill" />
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 offset-lg-3 text-center">
                    <h1>Haircut</h1>
                    <div className="de-separator"></div>
                  </div>
                </div>
              </div>
              <div className="de-gradient-edge-bottom"></div>
            </section>

            <section aria-label="section" className="no-top no-bottom">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 offset-lg-3 text-center">
                    <Image src={misc1} className="img-fluid wow fadeInUp" alt="" width={500} height={500} />
                  </div>
                  <div className="col-lg-8 offset-lg-2 text-center" data-jarallax-element="-20">
                    <h2 className="wow fadeInUp">Blaxcut Crafting <span className="id-color">Confidence</span>, One Cut at a Time</h2>
                    <p className="lead wow fadeInUp">When it comes to personal grooming and style, a haircut can make all the difference. It's not just about trimming those unruly locks; it's an art form that can transform your entire look and boost your confidence. At our establishment, we take immense pride in offering a comprehensive range of haircut services that cater to your unique preferences and individuality.</p>
                    <p className="lead wow fadeInUp">Our commitment to excellence extends beyond the scissors and clippers. We believe in creating an environment where you can relax and unwind, a place where you can escape the hustle and bustle of everyday life. That's why we offer more than just haircuts; we provide an opportunity to rejuvenate, to chat, and to walk out feeling like the best version of yourself.</p>
                  </div>
                </div>
              </div>
            </section>

            <section aria-label="section" className="no-bottom">
              <div className="wow fadeInRight d-flex">
                <div className="de-marquee-list wow">
                  <div className="d-item">
                    <span className="d-item-txt">Slickback</span>
                    <span className="d-item-display"><i className="d-item-block"></i></span>
                    <span className="d-item-txt">Classic Quiff</span>
                    <span className="d-item-display"><i className="d-item-block"></i></span>
                    <span className="d-item-txt">Pompadour</span>
                    <span className="d-item-display"><i className="d-item-block"></i></span>
                    <span className="d-item-txt">Fringe</span>
                    <span className="d-item-display"><i className="d-item-block"></i></span>
                    <span className="d-item-txt">Beard Trim</span>
                    <span className="d-item-display"><i className="d-item-block"></i></span>
                    <span className="d-item-txt">Curly Fade</span>
                    <span className="d-item-display"><i className="d-item-block"></i></span>
                    <span className="d-item-txt">Undercut</span>
                    <span className="d-item-display"><i className="d-item-block"></i></span>
                  </div>
                </div>
              </div>
            </section>

            <section className="jarallax">
              <div className="de-gradient-edge-top"></div>
              <div className="de-gradient-edge-bottom"></div>
              <Image src={background1} className="jarallax-img" alt="" layout="fill" />
              <div className="container position-relative z1000">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2 text-center">
                    <h2 className="wow fadeInUp">Hair <span className="id-color">Styles</span></h2>
                    <div className="spacer-single"></div>
                  </div>
                </div>
                <div id="gallery" className="row g-4 wow fadeInUp">
                  <div className="col-md-4 item">
                    <div className="de-image-hover rounded">
                      <a href="/images/hairstyles/1.jpg" className="image-popup">
                        <span className="dih-title-wrap">
                          <span className="dih-title">Slickback</span>
                        </span>
                        <span className="dih-overlay"></span>
                        <Image src={hairStyles1} className="lazy img-fluid" alt="" width={500} height={500} />
                      </a>
                    </div>
                  </div>

                  <div className="col-md-4 item">
                    <div className="de-image-hover rounded">
                      <a href="/images/hairstyles/2.jpg" className="image-popup">
                        <span className="dih-title-wrap">
                          <span className="dih-title">Classic Quiff</span>
                        </span>
                        <span className="dih-overlay"></span>
                        <Image src={hairStyles2} className="lazy img-fluid" alt="" width={500} height={500} />
                      </a>
                    </div>
                  </div>

                  <div className="col-md-4 item">
                    <div className="de-image-hover rounded">
                      <a href="/images/hairstyles/3.jpg" className="image-popup">
                        <span className="dih-title-wrap">
                          <span className="dih-title">Pompadour</span>
                        </span>
                        <span className="dih-overlay"></span>
                        <Image src={hairStyles3} className="lazy img-fluid" alt="" width={500} height={500} />
                      </a>
                    </div>
                  </div>

                  <div className="col-md-4 item">
                    <div className="de-image-hover rounded">
                      <a href="/images/hairstyles/4.jpg" className="image-popup">
                        <span className="dih-title-wrap">
                          <span className="dih-title">Fringe</span>
                        </span>
                        <span className="dih-overlay"></span>
                        <Image src={hairStyles4} className="lazy img-fluid" alt="" width={500} height={500} />
                      </a>
                    </div>
                  </div>

                  <div className="col-md-4 item">
                    <div className="de-image-hover rounded">
                      <a href="/images/hairstyles/5.jpg" className="image-popup">
                        <span className="dih-title-wrap">
                          <span className="dih-title">Curly Fade</span>
                        </span>
                        <span className="dih-overlay"></span>
                        <Image src={hairStyles5} className="lazy img-fluid" alt="" width={500} height={500} />
                      </a>
                    </div>
                  </div>

                  <div className="col-md-4 item">
                    <div className="de-image-hover rounded">
                      <a href="/images/hairstyles/6.jpg" className="image-popup">
                        <span className="dih-title-wrap">
                          <span className="dih-title">Undercut</span>
                        </span>
                        <span className="dih-overlay"></span>
                        <Image src={hairStyles6} className="lazy img-fluid" alt="" width={500} height={500} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <a href="#" id="back-to-top"></a>

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
                  <Image src={logo} alt="" />
                </div>
                <div className="col-lg-4 text-lg-end text-center">
                  Copyright 2023 - Blaxcut by Designesia
                </div>
              </div>
            </div>
          </footer>
        </div>

        <script src="/js/plugins.js"></script>
        <script src="/js/designesia.js"></script>
        <script src="/js/custom-marquee.js"></script>
      </div>
  );
};

export default page;
