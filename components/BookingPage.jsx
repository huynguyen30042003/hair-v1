"use client"
import React, { useState } from 'react';
import '../css/bootstrap.min.css';
import '../css/mdb.min.css';
import 'jarallax';
import 'jarallax/dist/jarallax.css'; // Import the Jarallax CSS file
import '../css/style.css';
import '../css/coloring.css';
import '../css/colors/scheme-01.css';
import '../css/confictStyle.css';
import Head from 'next/head';
import Image from 'next/image';
import logo from '@data/images/logo.png';
import logoMobile from '@data/images/logo-mobile.png';
import background6 from '@data/images/background/6.jpg';
import team1 from '@data/images/team/1.jpg';
import team2 from '@data/images/team/2.jpg';
import team3 from '@data/images/team/3.jpg';
import team4 from '@data/images/team/4.jpg';
import icon from '@data/images/icon.png';

const ChooseService = () => {
  const handleClick=()=>{
    console.log("hanldeclick");
  }
  return (
    <>
    <button
    onClick={handleClick}
    >
      click
    </button>
    </>
//     <body className='dark-scheme'>
//     <div id="de-loader"></div>
//     <div className="no-bottom no-top" id="content">
//         <div id="top"></div>
// {/* <!-- section begin --> */}

// <section id="subheader" className="jarallax">
//       <div className="jarallax-img">
//         <div id="jarallax-container-0">
//             <Image src={background6} alt=""  layout="fill" objectFit="cover"  />
//         </div>
//       </div>
//     <div className="container">
//         <div className="row">
//             <div className="col-lg-6 offset-lg-3 text-center">
//                 <h1>Booking</h1>
//                 <div className="de-separator"></div>
//             </div>
//         </div>
//     </div>
//     <div className="de-gradient-edge-bottom"></div>
// </section>

//     <section id="section-form" className="no-top">
//       <div className="container">
//         <div className="row">

//             <div className="col-md-10 offset-md-1"></div>
//                 <form name="contactForm" id='contact_form' className="form-border" method="post">
//                     <div id="step-1" className="row">
//                         <h3 className="s2">Choose Services</h3>

//                         <div className="row">
//                             <div className="col-xl-3 col-lg-6">
//                                 <div className="sc-group">
//                                     <h5>Haircuts</h5>
//                                     <div className="form-group">
//                                       <input type="checkbox" name="Services Haircuts" id="s_a1" value="Regular Haircut"/>
//                                       <label for="s_a1">Regular Haircut</label>
//                                     </div>
//                                     <div className="form-group">
//                                       <input type="checkbox" name="Services Haircuts" id="s_a2" value="Scissors Haircut"/>
//                                       <label for="s_a2">Scissors Haircut</label>
//                                     </div>
//                                     <div className="form-group">
//                                       <input type="checkbox" name="Services Haircuts" id="s_a3" value="Kids Haircut"/>
//                                       <label for="s_a3">Kids Haircut</label>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="col-xl-3 col-lg-6">
//                                 <div className="sc-group">
//                                     <h5>Shave</h5>
//                                     <div className="form-group">
//                                       <input type="checkbox" name="Services Shave" id="s_b1" value="Head Shave"/>
//                                       <label for="s_b1">Head Shave</label>
//                                     </div>
//                                     <div className="form-group">
//                                       <input type="checkbox" name="Services Shave" id="s_b2" value="Royal Shave"/>
//                                       <label for="s_b2">Royal Shave</label>
//                                     </div>
//                                     <div className="form-group">
//                                       <input type="checkbox" name="Services Shave" id="s_b3" value="Royal Head Shave"/>
//                                       <label for="s_b3">Royal Head Shave</label>
//                                     </div>
//                                     <div className="form-group">
//                                       <input type="checkbox" name="Services Shave" id="s_b4" value="Beard Trim No Shave"/>
//                                       <label for="s_b4">Beard Trim No Shave</label>
//                                     </div>
//                                     <div className="form-group">
//                                       <input type="checkbox" name="Services Shave" id="s_b5" value="Beard Trim Shave"/>
//                                       <label for="s_b5">Beard Trim Shave</label>
//                                     </div>
//                                     <div className="form-group">
//                                       <input type="checkbox" name="Services" id="s_b6" value="Beard Shave Up"/>
//                                       <label for="s_b6">Beard Shave Up</label>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="col-xl-3 col-lg-6">
//                                 <div className="sc-group">
//                                     <h5>Facial</h5>
//                                     <div className="form-group">
//                                       <input type="checkbox" name="Services Facial" id="s_c1" value="Deep Pore Cleansing"/>
//                                       <label for="s_c1">Deep Pore Cleansing</label>
//                                     </div>
//                                     <div className="form-group">
//                                       <input type="checkbox" name="Services Facial" id="s_c2" value="Aromatherapy Facial"/>
//                                       <label for="s_c2">Aromatherapy Facial</label>
//                                     </div>
//                                     <div className="form-group">
//                                       <input type="checkbox" name="Services Facial" id="s_c3" value="Acne Problem Facial"/>
//                                       <label for="s_c3">Acne Problem Facial</label>
//                                     </div>
//                                     <div className="form-group">
//                                       <input type="checkbox" name="Services Facial" id="s_c4" value="European Facial"/>
//                                       <label for="s_c4">European Facial</label>
//                                     </div>
//                                     <div className="form-group">
//                                       <input type="checkbox" name="Services Facial" id="s_c5" value="Glycolic Peel Facial"/>
//                                       <label for="s_c5">Glycolic Peel Facial</label>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="col-xl-3 col-lg-6">
//                                 <div className="sc-group">
//                                     <h5>Package</h5>
//                                     <div className="form-group">
//                                       <input type="checkbox" name="Services Package" id="s_d1" value="Haircut + Shave"/>
//                                       <label for="s_d1">Haircut + Shave</label>
//                                     </div>
//                                     <div className="form-group">
//                                       <input type="checkbox" name="Services Package" id="s_d2" value="Haircut + Beard Trim"/>
//                                       <label for="s_d2">Haircut + Beard Trim</label>
//                                     </div>
//                                     <div className="form-group">
//                                       <input type="checkbox" name="Services Package" id="s_d3" value="Haircut + Beard Trim Shave"/>
//                                       <label for="s_d3">Haircut + Beard Trim Shave</label>
//                                     </div>
//                                     <div className="form-group">
//                                       <input type="checkbox" name="Services Package" id="s_d4" value="Haircut + Beard Shape Up"/>
//                                       <label for="s_d4">Haircut + Beard Shape Up</label>
//                                     </div>
//                                 </div>
//                             </div>

//                         </div>

//                         <div className="spacer-single"></div>

//                         {/* <!-- step 2 --> */}

//                         <div className="row">
//                       <div className="col-lg-6 mb-sm-30">
//                         <h3 className="s2">Choose Staff</h3>

//                         <div className="de_form de_radio">
                          

               

//                           <div className="radio-img">
//                             <input
//                               id="radio-1d"
//                               name="Staff"
//                               type="radio"
//                               value="Khanh"
//                               checked={selectedStaff === "Khanh"}
//                               onChange={handleStaffChange}
//                             />
//                             <label htmlFor="radio-1d">
//                               <Image src={team4} alt="" /> Khanh
//                             </label>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="col-lg-6">
//                         <h3 className="s2">Choose Date & Time</h3>
//                         <input
//                           type="date"
//                           name="date"
//                           id="date"
//                           className="form-control"
//                           min="1997-01-01"
//                           // required
//                         />
//                         <div className="spacer-single"></div>
//                         <h3 className="s2">Select Time</h3>
//                         <div className="custom_radio">
                                
                                
                               
                                
//                                 <div className="radio-opt">
//                                     <input
//                                     type="radio"
//                                     id="choose_8PM"
//                                     value="8:00 PM"
//                                     name="select_time"
//                                     checked={selectedTime === "8:00 PM"}
//                                     onChange={handleTimeChange}
//                                     />
//                                     <label htmlFor="choose_8PM">8:00 PM</label>
//                                 </div>
//                                 </div>  
//                       </div>
//                     </div>

//                         <div className="spacer-single"></div>

//                         <div className="row">
//                             <h3 className="s2">Your details</h3>


//                             <div className="col-lg-6">
//                                 <div id='name_error' className='error'>Please enter your name.</div>
//                                 <div className="mb25">
//                                     <input type='text' name='Name' id='name' className="form-control" placeholder="Your Name" required/>
//                                 </div>

//                                 <div id='email_error' className='error'>Please enter your valid E-mail ID.</div>
//                                 <div className="mb25">
//                                     <input type='email' name='Email' id='email' className="form-control" placeholder="Your Email" required/>
//                                 </div>

//                                 <div id='phone_error' className='error'>Please enter your phone number.</div>
//                                 <div className="mb25">
//                                     <input type='text' name='phone' id='phone' className="form-control" placeholder="Your Phone" required/>
//                                 </div>
//                             </div>
//                             <div className="col-lg-6">
//                                 <div id='message_error' className='error'>Please enter your message.</div>
//                                 <div>
//                                     <textarea name='message' id='message' className="form-control" placeholder="Your Message"></textarea>
//                                 </div>
//                             </div>

//                             <div className="col-lg-12">
//                                 <div className="g-recaptcha" data-sitekey="copy-your-site-key-here"></div>
//                                 <p id='' className="mt20">
//                                     <button onClick={console.log("log ")} type='' id='send_message' value='Submit Form' className="btn-main"></button>
//                                 </p>
//                             </div>
//                         </div> 
                        

//                     </div> 
//                 </form>
//                 <div id="success_message" className='success'>
//                     Your message has been sent successfully. Refresh this page if you want to send more messages.
//                 </div>
//                 <div id="error_message" className='error'>
//                     Sorry there was an error sending your form.
//                 </div>
//             </div>
//         </div>

//         <button onClick={handleClick()} className="p-5 bg-[#ccc]"
//                         >click</button>
// </section>
// </div>
// {/* <!-- content close --> */}
// <a href="#" id="back-to-top"></a>
// {/* <!-- footer begin --> */}
// <footer>
// <div className="container">
//     <div className="row g-4">
        
//         <div className="col-lg-4 text-lg-start text-center">
//             <div className="social-icons">
//                 <a href="#"><i className="fa fa-facebook fa-lg"></i></a>
//                 <a href="#"><i className="fa fa-twitter fa-lg"></i></a>
//                 <a href="#"><i className="fa fa-linkedin fa-lg"></i></a>
//                 <a href="#"><i className="fa fa-pinterest fa-lg"></i></a>
//                 <a href="#"><i className="fa fa-rss fa-lg"></i></a>
//             </div>
//         </div>
//         <div className="col-lg-4 text-lg-center text-center">
//             <Image src={logo} className="image" alt=""/>
//         </div>
//         <div className="col-lg-4 text-lg-end text-center">
//             Copyright 2024 - StyleCuts BaberShop
//         </div>
//     </div>
// </div>
// </footer>

//     {/* <script src="js/plugins.js"></script>
//     <script src="js/designesia.js"></script>
//     <script src='https://www.google.com/recaptcha/api.js' async defer></script>
//     <script src="form.js"></script> */}
//     </body>


   
  )
}

export default ChooseService
