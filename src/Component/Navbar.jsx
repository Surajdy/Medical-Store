import React from "react";
import "./styles/styles.css";
import { Component } from "react";
import Logo from "./images/LOGO.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div id="container">
      <ul class="navbar-left">
        <a href="index.html">
          <img src={Logo} alt="LOGO" />
        </a>
        <a href="">
          <li> Medicines </li>
        </a>
        <a href="">
          <li> Doctor </li>
        </a>
        <a href="">
          <li> Pharmacy </li>
        </a>
        <a href="">
          <li> Other Services </li>
        </a>
      </ul>

      <ul class="navbar-right">
        <a href="">
          <li>
            <FontAwesomeIcon icon={faCartShopping} />
          </li>
        </a>

        <a href="">
          <li> Consult Now </li>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
