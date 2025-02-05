import React from "react";
import Style from "../../css/nav.module.css";

import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

import logo from "../../assets/class_suru_logo.png"
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={Style.navContainer}>
      <div className={Style.navUpper}>
        <div className={Style.nav}>
          <div className={Style.contactOptionContainer}>
            <a className={Style.contactOption} href="#">
              <MdOutlineLocalPhone className={Style.contactIcon} />
              <div className={Style.contactText}>+91 9064895938</div>
            </a>
            <a className={Style.contactOption} href="#">
              <MdOutlineEmail className={Style.contactIcon} />
              <div className={Style.contactText}>classsuru22@gmail.com</div>
            </a>
          </div>

          <div className={Style.socials}>
            <a href="#" className={Style.socailsIcons}>
              <FaFacebookF />
            </a>
            <a href="#" className={Style.socailsIcons}>
              <FaXTwitter />
            </a>
            <a href="#" className={Style.socailsIcons}>
              <FaYoutube />
            </a>
            <a href="#" className={Style.socailsIcons}>
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className={Style.navLower}>
      <div className={Style.nav}>
        
          
        
        <div className={Style.logo}>
          <img className={Style.logoImg} src={logo} alt='class suru logo' />
          <div className={Style.logoText}>
            Class Suru
          </div>
        </div>
         <div className={Style.navLinks}>
          <Link className={Style.navLink} to="/">
            Home
          </Link>
          <Link className={Style.navLink} to="/about">
            About Us
          </Link>
          <Link className={Style.navLink} to="/services">
            Services
          </Link>
          <Link className={Style.navLink} to="/courses">
            Courses
          </Link>
          <Link className={Style.navLink} to="/exam">
            Online Exam
          </Link>
         </div>
         <Button text="Login/Signup" className={Style.navButton} isLink={true} link="/login" />
         </div>
      </div>
    </nav>
  );
};

export default Navbar;
