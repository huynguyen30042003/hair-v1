import React from 'react';
import Image from 'next/image';
import HomeBG from '../data/images/background/1.jpg';

const ScheduleLocationSection = () => {
    const scheduleData = [
        {
          day: "Mon - Thu",
          time: "7:30AM - 6:30PM",
        },
        {
          day: "Friday",
          time: "8:30AM - 8:30PM",
        },
        {
          day: "Sat - Sun",
          time: "9:30AM - 5:30PM",
        },
      ];
      
     const locationData = {
        address: "143 Võ Chí Công , Đà Nẵng",
        phone: "+197778899",
        email: "contact@haircut.com",
      };
      
  return (
    <section className="jarallax no-top">
      <div className="de-gradient-edge-top" />
      <Image
        src={HomeBG}
        className="jarallax-img"
        layout="fill"
        objectFit="cover"
        alt=""
      />
      <div className="container relative z1000">
        <div className="row gx-5">
          <div className="col-lg-6 text-center" data-jarallax-element={-50}>
            <div className="d-sch-table">
              <h2 className="wow fadeIn">We're Open</h2>
              {scheduleData.map((item, index) => (
                <div className="d-col" key={index}>
                  <div className="d-title">{item.day}</div>
                  <div className="d-content id-color">{item.time}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6 text-center" data-jarallax-element={-100}>
            <div className="d-sch-table">
              <h2 className="wow fadeIn">Location</h2>
              <div className="de-separator" />
              <div className="d-col">
                <div className="d-title">Address</div>
                <div className="d-content id-color">{locationData.address}</div>
              </div>
              <div className="d-col">
                <div className="d-title">Phone</div>
                <div className="d-content id-color">{locationData.phone}</div>
              </div>
              <div className="d-col">
                <div className="d-title">Email</div>
                <div className="d-content id-color">{locationData.email}</div>
              </div>
              <div className="d-deco" />
            </div>
          </div>
        </div>
      </div>
      <div className="de-gradient-edge-bottom" />
    </section>
  );
};

export default ScheduleLocationSection;
