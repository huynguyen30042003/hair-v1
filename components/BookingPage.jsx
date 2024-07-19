"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/bootstrap.min.css";
import "../css/mdb.min.css";
import "jarallax";
import "jarallax/dist/jarallax.css";
import "../css/style.css";
import "../css/coloring.css";
import "../css/colors/scheme-01.css";
import "../css/confictStyle.css";
import Image from "next/image";
import axios from "axios";
import logo from "@data/images/logo.png";
import background6 from "@data/images/background/6.jpg";
import team1 from "@data/images/team/1.jpg";
import team2 from "@data/images/team/2.jpg";
import team3 from "@data/images/team/3.jpg";
import team4 from "@data/images/team/4.jpg";
import Link from "next/link";
import {
  getAllShowTimes,
  getCategories,
  getCombos,
  createAppointment,
} from "api/route";

const ChooseService = () => {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [combos, setCombos] = useState([]);
  const [selectedStaff, setSelectedStaff] = useState("Tinh");
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedCombos, setSelectedCombos] = useState([]);
  const [paymentInfo, setPaymentInfo] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await getCategories();
        setCategories(categoriesResponse);
        const combosResponse = await getCombos();
        setCombos(combosResponse);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchShowTime = async () => {
      if (selectedDate) {
        try {
          const response = await getAllShowTimes(selectedDate);
          console.log(response);
          setAvailableTimes(response);
        } catch (error) {
          console.error("Error fetching show times:", error);
        }
      }
    };

    fetchShowTime();
  }, [selectedDate]);

  const handleStaffChange = (event) => {
    setSelectedStaff(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(JSON.parse(event.target.value));
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleChangeServices = (event) => {
    const checked = event.target.checked;
    const value = JSON.parse(event.target.value);
    setSelectedServices((prevSelectedServices) =>
      checked
        ? [...prevSelectedServices, value]
        : prevSelectedServices.filter((service) => service._id !== value._id)
    );
  };
  const handleChangeCombos = (event) => {
    const checked = event.target.checked;
    const value = JSON.parse(event.target.value);
    setSelectedCombos((prevSelectedCombos) =>
      checked
        ? [...prevSelectedCombos, value]
        : prevSelectedCombos.filter((combo) => combo._id !== value._id)
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let total = 0;
      selectedServices.forEach((ss) => (total += ss.price));
      selectedCombos.forEach((sc) => (total += sc.price));
      await createAppointment(
        {
          date: selectedTime.date,
          timeStart: selectedTime.timeStart,
          timeEnd: selectedTime.timeEnd,
          totalPrice: total,
          salon: "668fd6f1534953474fef9ac7",
          customer: JSON.parse(localStorage.getItem("account"))?._id,
          services: selectedServices.map((ss) => ss._id),
          combos: selectedCombos.map((sc) => sc._id),
          staff: selectedTime.staff._id,
          paymentMethod: "Cash",
          paymentInfo,
        },
        localStorage.getItem("accessToken")
      );

      toast.success(
        "Chúng tôi sẽ liên hệ lại bạn thông qua số điện thoại hoặc gmail của bạn trong thời gian sớm nhất!"
      );
      setTimeout(() => {
        router.push("/history-booking");
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Có lỗi xảy ra khi gửi biểu mẫu. Vui lòng thử lại.");
    }
  };

  return (
    <body className="dark-scheme">
      <div id="de-loader"></div>
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <ToastContainer />

        <section id="subheader" className="jarallax">
          <div className="jarallax-img">
            <div id="jarallax-container-0">
              <Image src={background6} alt="" layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 text-center">
                <h1>Booking</h1>
                <div className="de-separator"></div>
              </div>
            </div>
          </div>
          <div className="de-gradient-edge-bottom"></div>
        </section>

        <section id="section-form" className="no-top">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1"></div>
              <form
                name="contactForm"
                id="contact_form"
                className="form-border"
                method="post"
                onSubmit={handleSubmit}
              >
                <div id="step-1" className="row">
                  <h3 className="s2">Choose Services</h3>

                  <div className="row">
                    {categories.map((category) => (
                      <div key={category._id} className="col-xl-3 col-lg-6">
                        <div className="sc-group">
                          <h5>{category.category}</h5>
                          {category.services.map((service) => (
                            <div key={service._id} className="form-group">
                              <input
                                type="checkbox"
                                name={`Services ${category.category}`}
                                id={`s_${service._id}`}
                                value={JSON.stringify(service)}
                                onChange={handleChangeServices}
                              />
                              <label htmlFor={`s_${service._id}`}>
                                {service.name}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}

                    <div className="col-xl-3 col-lg-6">
                      <div className="sc-group">
                        <h5>Package</h5>
                        {combos.map((combo) => (
                          <div key={combo._id} className="form-group">
                            <input
                              type="checkbox"
                              name="Services Package"
                              id={`c_${combo._id}`}
                              value={JSON.stringify(combo)}
                              onChange={handleChangeCombos}
                            />
                            <label htmlFor={`c_${combo._id}`}>
                              {combo.services?.map((s) => s.name).join(" + ")}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="spacer-single"></div>

                  <div className="row">
                    <div className="col-lg-6 mb-sm-30">
                      <h3 className="s2">Choose Staff</h3>

                      <div className="de_form de_radio">
                        <div className="radio-img">
                          <input
                            id="radio-1a"
                            name="Staff"
                            type="radio"
                            value="Tinh"
                            checked={selectedStaff === "Tinh"}
                            onChange={handleStaffChange}
                          />
                          <label htmlFor="radio-1a">
                            <Image src={team1} alt="" /> Tinh
                          </label>
                        </div>

                        <div className="radio-img">
                          <input
                            id="radio-1b"
                            name="Staff"
                            type="radio"
                            value="Minh"
                            checked={selectedStaff === "Minh"}
                            onChange={handleStaffChange}
                          />
                          <label htmlFor="radio-1b">
                            <Image src={team2} alt="" /> Minh
                          </label>
                        </div>

                        <div className="radio-img">
                          <input
                            id="radio-1c"
                            name="Staff"
                            type="radio"
                            value="Mich"
                            checked={selectedStaff === "Mich"}
                            onChange={handleStaffChange}
                          />
                          <label htmlFor="radio-1c">
                            <Image src={team3} alt="" /> Mich
                          </label>
                        </div>

                        <div className="radio-img">
                          <input
                            id="radio-1d"
                            name="Staff"
                            type="radio"
                            value="Khanh"
                            checked={selectedStaff === "Khanh"}
                            onChange={handleStaffChange}
                          />
                          <label htmlFor="radio-1d">
                            <Image src={team4} alt="" /> Khanh
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <h3 className="s2">Choose Date & Time</h3>
                      <input
                        type="date"
                        name="date"
                        id="date"
                        className="form-control"
                        onChange={handleDateChange}
                        required
                      />
                      <div className="spacer-single"></div>
                      <h3 className="s2">Select Time</h3>
                      <div className="custom_radio">
                        {availableTimes.length > 0 ? (
                          availableTimes.map((time) => (
                            <div key={time._id} className="radio-opt">
                              <input
                                type="radio"
                                id={`choose_${time.timeStart}`}
                                value={JSON.stringify(time)}
                                name="select_time"
                                checked={
                                  selectedTime?.timeStart === time.timeStart
                                }
                                onChange={handleTimeChange}
                              />
                              <label htmlFor={`choose_${time.timeStart}`}>
                                {time.timeStart.slice(
                                  0,
                                  time.timeStart.length - 3
                                )}
                              </label>
                            </div>
                          ))
                        ) : (
                          <p>No available times for the selected date.</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="spacer-single"></div>

                  <div className="row">
                    <h3 className="s2">Your details</h3>

                    <div className="col-lg-6">
                      <div id="name_error" className="error">
                        Please enter your name.
                      </div>
                      <div className="mb25">
                        <input
                          type="text"
                          name="Name"
                          id="name"
                          className="form-control"
                          placeholder="Your Name"
                          required
                          onChange={(e) =>
                            setPaymentInfo({
                              ...paymentInfo,
                              name: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div id="email_error" className="error">
                        Please enter your valid E-mail ID.
                      </div>
                      <div className="mb25">
                        <input
                          type="email"
                          name="Email"
                          id="email"
                          className="form-control"
                          placeholder="Your Email"
                          required
                          onChange={(e) =>
                            setPaymentInfo({
                              ...paymentInfo,
                              email: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div id="phone_error" className="error">
                        Please enter your phone number.
                      </div>
                      <div className="mb25">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          className="form-control"
                          placeholder="Your Phone"
                          required
                          onChange={(e) =>
                            setPaymentInfo({
                              ...paymentInfo,
                              phone: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div id="message_error" className="error">
                        Please enter your message.
                      </div>
                      <div>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          placeholder="Your Message"
                          onChange={(e) =>
                            setPaymentInfo({
                              ...paymentInfo,
                              description: e.target.value,
                            })
                          }
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div
                        className="g-recaptcha"
                        data-sitekey="copy-your-site-key-here"
                      ></div>
                      <p id="submit" className="mt20">
                        <input
                          type="submit"
                          id="send_message"
                          value="Submit Form"
                          className="btn-main"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </form>
              <div id="success_message" className="success">
                Your message has been sent successfully. Refresh this page if
                you want to send more messages.
              </div>
              <div id="error_message" className="error">
                Sorry there was an error sending your form.
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
                <a href="#">
                  <i className="fa fa-facebook fa-lg"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter fa-lg"></i>
                </a>
                <a href="#">
                  <i className="fa fa-linkedin fa-lg"></i>
                </a>
                <a href="#">
                  <i className="fa fa-pinterest fa-lg"></i>
                </a>
                <Link href="#">
                  <i className="fa fa-rss fa-lg"></i>
                </Link>
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
    </body>
  );
};

export default ChooseService;
