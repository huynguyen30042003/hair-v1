"use client"
import React, { useEffect } from 'react';
import WOW from 'wowjs';
import Rating from './Rating';
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
import background6 from '@data/images/background/6.jpg';
import background3 from '@data/images/background/3.jpg';
import background1 from '@data/images/background/1.jpg';
import background2 from '@data/images/background/2.jpg';
import people1 from '@data/images/people/1.jpg';
import people2 from '@data/images/people/2.jpg';
import people3 from '@data/images/people/3.jpg';
import people4 from '@data/images/people/4.jpg';
import people5 from '@data/images/people/5.jpg';
import people6 from '@data/images/people/6.jpg';
import icon from '@data/images/icon.png'
const FeedbackService = () => {
  const handleRating = (rate) => {
    console.log(`Rated: ${rate} stars`);
    // You can handle the rating submission here, e.g., send to a server
  };

  return (
   <>
   <body class="dark-scheme">
  <div id="wrapper">
    {/* page preloader begin */}
    <div id="de-loader" />
    {/* page preloader close */}
    {/* header close */}
    {/* content begin */}
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
          <div className="row masonry">
            <div className="col-lg-4 item mb10">
              <div className="de_testi">
                <blockquote>
                  <p>
                    I had an amazing experience at the barbershop! The
                    atmosphere was friendly and inviting, and the staff was very
                    professional. The barber took the time to listen to what I
                    wanted and gave me an excellent haircut that exceeded my
                    expectations.
                  </p>
                  <div className="de_testi_by">
                    <Image
                      alt=""
                      className="rounded-circle"
                      src={people1}
                    />
                    <span>Elliot Richbourg</span>
                  </div>
                </blockquote>
              </div>
            </div>
            <div className="col-lg-4 item mb10">
              <div className="de_testi">
                <blockquote>
                  <p>
                    I've been going to this barbershop for years, and I wouldn't
                    trust anyone else with my hair. The barbers are skilled and
                    knowledgeable, and they always keep up with the latest
                    trends and techniques. The shop is always clean and
                    well-maintained, and they take hygiene seriously, which is
                    especially important these days. I leave feeling refreshed
                    and confident after every visit. Highly recommended!
                  </p>
                  <div className="de_testi_by">
                    <Image
                      alt=""
                      className="rounded-circle"
                      src={people2}
                    />
                    <span>Stefan Whilby</span>
                  </div>
                </blockquote>
              </div>
            </div>
            <div className="col-lg-4 item mb10">
              <div className="de_testi">
                <blockquote>
                  <p>
                    I'm so glad I found this barbershop! As someone with curly
                    hair, finding a barber who knows how to handle it properly
                    is not easy. But the barber here knew exactly what to do and
                    gave me a fantastic curly haircut. They even gave me some
                    useful tips on how to care for my curls at home.
                  </p>
                  <div className="de_testi_by">
                    <Image
                      alt=""
                      className="rounded-circle"
                      src={people3}
                    />
                    <span>Jerri Poydras</span>
                  </div>
                </blockquote>
              </div>
            </div>
            <div className="col-lg-4 item mb10">
              <div className="de_testi">
                <blockquote>
                  <p>
                    I brought my son to this barbershop for his first haircut,
                    and they made it such a memorable experience for him! The
                    barber was patient and gentle, and they had a special chair
                    just for kids, which made him feel like a little prince. The
                    haircut turned out adorable, and they even gave him a
                    lollipop afterward.
                  </p>
                  <div className="de_testi_by">
                    <Image
                      alt=""
                      className="rounded-circle"
                      src={people4}
                    />
                    <span>Sammie Maedche</span>
                  </div>
                </blockquote>
              </div>
            </div>
            <div className="col-lg-4 item mb10">
              <div className="de_testi">
                <blockquote>
                  <p>
                    I've been going to this barbershop for a long time, and I
                    can confidently say it's the best in town. The barbers are
                    not only skilled at their craft but also friendly and
                    engaging. It feels more like catching up with old friends
                    during my appointments. They also take walk-ins, and I've
                    never had to wait too long for a cut. If you want a great
                    haircut in a warm and welcoming environment, look no
                    further!"
                  </p>
                  <div className="de_testi_by">
                    <Image
                      alt=""
                      className="rounded-circle"
                      src={people5}
                    />
                    <span>Deandre Roybal</span>
                  </div>
                </blockquote>
              </div>
            </div>
            <div className="col-lg-4 item mb10">
              <div className="de_testi">
                <blockquote>
                  <p>
                    I have to say, this barbershop has the best customer service
                    I've ever experienced. From the moment I walked in, I was
                    greeted with a smile and offered a beverage while I waited.
                    The barbers are not only talented but also incredibly
                    attentive.
                  </p>
                  <div className="de_testi_by">
                    <Image
                      alt=""
                      className="rounded-circle"
                      src={people6}
                    />
                    <span>Randell Dragos</span>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="spacer-single" />
            <a className="btn-main" href="#">
              Load More Testimonials
            </a>
          </div>
        </div>
      </section>
    </div>
    {/* content close */}
    <a href="#" id="back-to-top" />
    {/* footer begin */}
    <footer>
      <div className="container">
      <Rating onRate={handleRating} />
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
  {/* Javascript Files
    ================================================== */}
</body>

   </>
  )
}

export default FeedbackService