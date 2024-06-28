import React from 'react';
import Image from 'next/image';
import HomeBG from '../data/images/background/1.jpg';
import ImgMan from '../data/images/misc/man-2.png';

const HeroSection = () => {
  return (
    <section className="no-top jarallax">
      <div className="de-gradient-edge-top" />
      <Image
        src={HomeBG}
        className="jarallax-img"
        layout="fill"
        objectFit="cover"
        alt=""
      />
      <div className="container relative z1000">
        <div className="row align-items-center">
          <div className="col-lg-6" data-jarallax-element={-30}>
            <Image
              src={ImgMan}
              className="img-fluid wow fadeInRight"
              alt=""
            />
          </div>
          <div className="col-lg-6" data-jarallax-element={-60}>
            <h2 className="wow fadeInRight" data-wow-delay=".3s">
              We’ll Crafting <span className="id-color">Confidence</span>{" "}
              Through Sharp Style
            </h2>
            <p className="wow fadeInRight" data-wow-delay=".4s">
              We take pride in providing top-notch grooming services that
              blend classic techniques with modern trends. Step into our
              warm and inviting space, where you'll find a team of skilled
              barbers dedicated to enhancing your style and confidence.
            </p>
            <a
              href="/booking"
              className="btn-main wow fadeInRight"
              data-wow-delay=".5s"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
      <div className="de-gradient-edge-bottom" />
    </section>
  );
};

export default HeroSection;
