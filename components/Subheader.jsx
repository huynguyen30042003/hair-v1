import React from 'react';
import Image from 'next/image';
import background3 from '@data/images/background/3.jpg';

const Subheader = () => (
  <section id="subheader" className="jarallax">
    <Image src={background3} className="jarallax-img" alt="" />
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3 text-center">
          <h1>About Us</h1>
          <div className="de-separator" />
        </div>
      </div>
    </div>
    <div className="de-gradient-edge-bottom" />
  </section>
);

export default Subheader;
