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
import background5 from '@data/images/background/5.jpg';
import background7 from '@data/images/background/7.jpg';

const ContactUs = () => {
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
  {/* page preloader close */}
  <div className="no-bottom no-top" id="content">
    <div id="top" />
    {/* section begin */}
    <section id="subheader" className="jarallax">
      <Image src={background5} className="jarallax-img" alt="" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 text-center">
            <h1>Contact Us</h1>
            <div className="de-separator" />
          </div>
        </div>
      </div>
      <div className="de-gradient-edge-bottom" />
    </section>
    {/* section close */}
    <section id="section-content" className="no-top" aria-label="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 text-center">
            <i className="fa fa-map-marker de-icon gradient de-hover-scale text-light mb20" />
            <p className="lead no-bottom">Our Address</p>
            <h4 className="s2">35 Lo Giang 20, Hoa Xuan, Cam Le, Da Nang</h4>
          </div>
          <div className="col-lg-4 col-md-4 text-center">
            <i className="fa fa-phone de-icon gradient de-hover-scale text-light mb20" />
            <p className="lead no-bottom">Phone Number</p>
            <h4 className="s2">070532761</h4>
          </div>
          <div className="col-lg-4 col-md-4 text-center">
            <i className="fa fa-envelope-o de-icon gradient de-hover-scale text-light mb20" />
            <p className="lead no-bottom">Email Address</p>
            <h4 className="s2">ttinh2852@gmail.com</h4>
          </div>
        </div>
      </div>
    </section>
    <section className="no-top jarallax">
      <div className="de-gradient-edge-top" />
      <Image src={background7} className="jarallax-img" alt="" />
      <div className="container position-relative z1000">
        <div className="row gx-5">
          <div className="col-lg-6 offset-lg-3">
            <div className="d-sch-table">
              <h2 className="wow fadeIn text-center">Gửi lời nhắn cho chúng tôi</h2>
              <div className="de-separator" />
              <p className="lead text-center">
              Nếu bạn có bất kỳ câu hỏi nào, xin vui lòng gửi cho chúng tôi một
              tin nhắn.
              </p>
              <form
                name="contactForm"
                id="contact_form"
                className="form-border position-relative z1000"
                method="post"
                action="#"
              >
                <div className="row">
                  <div className="col-lg-12 mb10">
                    <div className="field-set">
                      <input
                        type="text"
                        name="Name"
                        id="name"
                        className="form-control"
                        placeholder="Tên của bạn"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 mb10">
                    <div className="field-set">
                      <input
                        type="text"
                        name="Email"
                        id="email"
                        className="form-control"
                        placeholder="Email"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 mb10">
                    <div className="field-set">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        className="form-control"
                        placeholder="SĐT"
                        required=""
                      />
                    </div>
                  </div>
                </div>
                <div className="field-set mb20">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    placeholder="Lời nhắn của bạn"
                    required=""
                    defaultValue={""}
                  />
                </div>
                <div
                  className="g-recaptcha"
                  data-sitekey="copy-your-site-key-here"
                />
                <div id="submit" className="mt20">
                  <input
                    type="submit"
                    id="send_message"
                    defaultValue="Send Message"
                    className="btn-main"
                  />
                </div>
                <div id="success_message" className="success">
                  Your message has been sent successfully. Refresh this page if
                  you want to send more messages.
                </div>
                <div id="error_message" className="error">
                  Sorry there was an error sending your form.
                </div>
              </form>
              <div className="d-deco" />
            </div>
          </div>
        </div>
      </div>
      <div className="de-gradient-edge-bottom" />
    </section>
    <section aria-label="section" className="no-top sm-hide">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4>Follow Us</h4>
            <div className="spacer-20" />
            <div className="social-icons big">
              <a href="https://www.facebook.com/asdfghjktih1/" target="_blank">
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

export default ContactUs