import React from "react";
import Style from "../../css/footer.module.css";
import logo from "../../assets/class_suru_logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
const Footer = () => {
  return (
    <div className={Style.Footer}>
      <div className={Style.FooterUpper}>
        <div className={Style.FooterUpperSec1}>
          <div className={Style.FooterUpperSec11}>
            <div className={Style.logoContiner}>
              <img src={logo} alt="Class_Suru_Logo" className={Style.logo} />
            </div>
            
            <h2>Class Suru</h2>
          </div>
          <div className={Style.FooterUpperSec12}>
            <p>
              Class শুরু, established in 2020, Jhargram, offers premier coaching
              for IIT JEE, NEET, WBJEE, and board exams, ensuring success
            </p>
            <p>
              {" "}
              <MdOutlineLocalPhone />
              +91 9064895938
            </p>
            <p>
              <MdOutlineEmail />
              classsuru22@gmail.com{" "}
            </p>
          </div>
        </div>

        <div className={Style.FooterUpperSec2}>
          <h2 className={Style.FooterUpperSec21}>Useful Links</h2>
          <div className={Style.FooterUpperSec22}>
            <p>
              {" "}
              <a
                href="https://www.youtube.com/@class_suru/videos"
                target="blank"
              >
                <FaYoutube />
                Youtube
              </a>
            </p>
            <p>
              {" "}
              <a
                href="https://www.facebook.com/ClassSuru?mibextid=ZbWKwL"
                target="blank"
              >
                <FaInstagram />
                Instagram
              </a>
            </p>
            <p>
              {" "}
              <a
                href="https://www.facebook.com/ClassSuru?mibextid=ZbWKwL"
                target="blank"
              >
                <FaFacebookF />
                facebook
              </a>
            </p>
            <p>
              <a
                href="https://www.facebook.com/ClassSuru?mibextid=ZbWKwL"
                target="blank"
              >
                <FaLinkedin />
                Linkdin
              </a>
            </p>
            <p>
              {" "}
              <a
                href="https://www.facebook.com/ClassSuru?mibextid=ZbWKwL"
                target="blank"
              >
                <FaXTwitter />
                Twitter
              </a>
            </p>
          </div>
        </div>
        <div className={Style.FooterUpperSec3}>
          
        </div>
      </div>
      <div className={Style.FooterLower}>
        <p>@copyright All Right Reserved 2024, Education</p>
      </div>
    </div>
  );
};

export default Footer;
