import React from "react";
import "./styles/FooterStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <div class="footer">
        <div class="footer-container">
          <div class="footer-row">
            <div class="footer-col">
              <h4>All Medicine</h4>
              <ul class="footer-ul">
                <li class="footer-li">
                  <a href="#">Health & Care</a>
                </li>
                <li class="footer-li">
                  <a href="#">Beauty Care</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Doctors</h4>
              <ul class="footer-ul">
                <li class="footer-li">
                  <a href="#">Physiotherapy</a>
                </li>
                <li class="footer-li">
                  <a href="#">Heart Specialist</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Hospital</h4>
              <ul class="footer-ul">
                <li class="footer-li">
                  <a href="#">Government Listed</a>
                </li>
                <li class="footer-li">
                  <a href="#">Top Private</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
