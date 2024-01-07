import React from "react";
import "./styles/MidSection.css";
import MidBanner from "./images/pexels-павел-сорокин-2324837.jpg";

const MidSection = () => {
  return (
    <div>
      <section class="home-services" id="services">
        <h1 class="home-heading"> Best-in-Class </h1>
        <h1 class="home-services-heading">Healthcare Services</h1>
        <p class="home-services-heading-p">
          Illness and injury often strike at the most inconvenient time Thats
          why we make it easy to get care on your schedule for dozens of common
          health conditions \n that affect the body and mind. \n
        </p>
        <div class="home-box-container">
          <div class="home-box">
            <i class="fa-solid fa-stethoscope"></i>
            <h3>Online Consultation</h3>
          </div>
          <div class="home-box">
            <i class="fa-regular fa-hospital"></i>
            <h3>Hospital</h3>
          </div>
          <div class="home-box">
            <i class="fa-solid fa-flask-vial"></i>
            <h3>Pathology Tests</h3>
          </div>
          <div class="home-box">
            <i class=" fas fa-pills"></i>
            <h3>Medicines</h3>
          </div>
          <div class="home-box">
            <i class=" fas fa-procedures"></i>
            <h3>Bed Facility</h3>
          </div>
          <div class="home-box">
            <i class=" fas fa-heartbeat"></i>
            <h3>Total Care</h3>
          </div>
        </div>
      </section>

      <div class="home-experience">
        <div class="home-line">
          <div class="home-column">
            <h1>5+</h1>
            <p>Years of Experience</p>
          </div>
          <div class="home-column">
            <h1>300+</h1>
            <p>Healthcare Practitioners</p>
          </div>
          <div class="home-column">
            <h1>500+</h1>
            <p>Satisfied Clients</p>
          </div>
          <div class="home-column">
            <h1>100+</h1>
            <p>Awards</p>
          </div>
        </div>
      </div>

      <section class="home-services" id="services">
        <h1 class="home-heading"> Best-in-Class </h1>
        <h1 class="home-services-heading">Doctors Available</h1>
        <p class="home-services-heading-p">
          Experience healthcare without boundaries. Our best-in-class doctors
          bring expertise to your doorstep through telemedicine, ensuring you
          receive top-notch care anytime, anywhere.
        </p>
        <div class="home-box-container">
          <div class="home-box">
            <i class="fa-solid fa-heart"></i>
            <h3>Cardiologists</h3>
          </div>
          <div class="home-box">
            <i class="fa-solid fa-eye"></i>
            <h3>Eye Specialists</h3>
          </div>
          <div class="home-box">
            <i class="fa-solid fa-stethoscope"></i>
            <h3>Prdiatricians</h3>
          </div>
          <div class="home-box">
            <i class="fa-solid fa-brain"></i>
            <h3>Psychiatrists</h3>
          </div>
          <div class="home-box">
            <i class="fa-solid fa-tooth"></i>
            <h3>Dentists</h3>
          </div>
          <div class="home-box">
            <i class="fa-solid fa-lungs"></i>
            <h3>Pulmonologists</h3>
          </div>
        </div>
      </section>

      <div id="home-mid-banner">
        <div class="home-mid-banner-wording">
          <h1>
            Avail a free consultation and start your healthcare journey today
          </h1>
          <button id="home-register">REGISTER NOW</button>
        </div>
        <div class="home-mid-banner-image">
          <img src={MidBanner} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default MidSection;
