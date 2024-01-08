import React from "react";
import { Link } from "react-router-dom"
import "./Navbar.css";
import Logo from "../Component/Home/images/LOGO.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop ,faRightToBracket } from '@fortawesome/free-solid-svg-icons';
function Navbar() {

    const Links =[
        {title:"Home",path:"/"},
        {title:"Products",path:"/Products"},
        {title:"Cart",path:"/Cart"},
        {title:"LoginSignupContainer",path:"/LoginSignupContainer"},
   
    ]
    return(
        <div id="container">
        <ul class="navbar-left">
          <a href="index.html">
            <img src={Logo} alt="LOGO" />
          </a>
          <Link to={"/"}>
          <li> Medicines </li>
          </Link>
          <Link to={"/"}>
          <li> Doctor </li>
          </Link>
          <Link to={"/Products"}>
          <li> Pharmacy </li>
          </Link>
          <Link to={""}>
          <li> Other Services </li>
          </Link>
          
        </ul>
  
        <ul class="navbar-right">
         
          <Link to={"/Cart"} className="a">
           <li>
           <FontAwesomeIcon icon={faShop}/>
            </li>
          </Link>
          <Link to={"/LoginSignupContainer"} className="a">
           <li>
          <FontAwesomeIcon icon={faRightToBracket} />
            </li>
          </Link>

          <Link className="b">
          <li> Consult Now </li>
          </Link>
           
         
        </ul>
      </div>

    )
}

export { Navbar }