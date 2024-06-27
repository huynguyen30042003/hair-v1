import React from 'react';
import Image from 'next/image';
import team1 from '@data/images/team/1.jpg';
import team2 from '@data/images/team/2.jpg';
import team3 from '@data/images/team/3.jpg';
import team4 from '@data/images/team/4.jpg';

const teamData = [
  { src: team1, name: 'Tran Viet Tinh' },
  { src: team2, name: 'Ho Ngoc Minh' },
  { src: team3, name: 'Dang Van Mich' },
  { src: team4, name: 'Nguyen Bao Khanh' },
];

const renderTeamMember = (team, index) => (
  <div className="col-lg-3 text-center" data-jarallax-element={-20 * (index + 1)} key={index}>
    <div className="de-box-a">
      <div className="d-image">
        <Image className="image" src={team.src} alt={team.name} />
      </div>
      <div className="d-deco-1" />
      <div className="d-deco-2" />
      <div className="d-social">
        <a href="#"><i className="fa fa-facebook" /></a>
        <a href="#"><i className="fa fa-twitter" /></a>
        <a href="#"><i className="fa fa-instagram" /></a>
      </div>
    </div>
    <div className="spacer-20" />
    <h4>{team.name}</h4>
  </div>
);

const TeamAbout = () => (
  <section aria-label="section" className="no-top">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="wow fadeIn">Our Team</h2>
          <div className="de-separator" />
        </div>
        {teamData.map(renderTeamMember)}
      </div>
    </div>
  </section>
);

export default TeamAbout;
