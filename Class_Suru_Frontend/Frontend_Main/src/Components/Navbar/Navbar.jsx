import React, { useEffect, useRef, useState } from "react";
import Style from "../../css/nav.module.css";

import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import logo from "../../assets/class_suru_logo.png";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import Menu from "./Menu";
import { MdMenu, MdClose } from "react-icons/md";
import { useSelector } from "react-redux";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const userStatus = useSelector((state) => state.user.status);
  const user = useSelector((state) => state.user.userData);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();
  useEffect(() => {
    const toggleSidebar = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setMenuOpen(false);
        // console.log(menuRef.current);
      }
    };
    document.addEventListener("mousedown", toggleSidebar);
    return () => {
      document.removeEventListener("mousedown", toggleSidebar);
    };
  }, []);

  return (
    <nav className={Style.navContainer}>
      <div className={Style.navUpper}>
        <div className={Style.nav}>
          <div className={Style.contactOptionContainer}>
            <a className={Style.contactOption} href="tel:+919064895938">
              <MdOutlineLocalPhone className={Style.contactIcon} />
              <div className={Style.contactText}>+91 9064895938</div>
            </a>
            <a
              className={Style.contactOption}
              href="mailto:classsuru22@gmail.com"
            >
              <MdOutlineEmail className={Style.contactIcon} />
              <div className={Style.contactText}>classsuru22@gmail.com</div>
            </a>
          </div>

          <div className={Style.socials}>
            <a
              href="https://www.facebook.com/ClassSuru?mibextid=ZbWKwL"
              target="blank"
              className={Style.socailsIcons}
            >
              <FaFacebookF />
            </a>
            <a href="#" className={Style.socailsIcons}>
              <FaXTwitter />
            </a>
            <a
              href="https://www.youtube.com/@class_suru/videos"
              target="blank"
              className={Style.socailsIcons}
            >
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
          <Link className={Style.logo} to="/">
            <img className={Style.logoImg} src={logo} alt="class suru logo" />
            <div className={Style.logoText}>Class Suru</div>
          </Link>
          <div
            className={`${Style.navLinks} ${
              menuOpen ? Style.active : Style.inactive
            }`}
            ref={menuRef}
          >
            <Link
              className={Style.navLink}
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className={Style.navLink}
              to="/about"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
            <HashLink
              className={Style.navLink}
              to="/#services"
              onClick={() => setMenuOpen(false)}
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth" })
              }
            >
              Services
            </HashLink>
            <Link
              className={Style.navLink}
              to="/courses"
              onClick={() => setMenuOpen(false)}
            >
              Courses
            </Link>
            <div
              className={Style.navLink}
              // to={userStatus ? "/exam" : "/login"}
              onClick={() => {
                setMenuOpen(false);
                if (!userStatus) {
                  const confirmLogin = window.confirm(
                    "First you need to login for exam section"
                  );
                  if (confirmLogin) {
                    localStorage.setItem("path", "/exam");
                    navigate("/login");
                  }
                } else {
                  navigate("/exam");
                }
              }}
            >
              Online Exam
            </div>
          </div>
          <div className={Style.navButtons}>
            <Button
              text="Login/Signup"
              className={`${Style.navButton} ${userStatus ? "" : Style.active}`}
              isLink={true}
              link="/login"
            />
            <div className={Style.menuSection} id="menuSection">
              <div
                className={`${Style.menu} ${!menuOpen ? Style.open : ""}`}
                onClick={() => setMenuOpen(true)}
              >
                <MdMenu />
              </div>
              <div
                className={`${Style.close} ${menuOpen ? Style.open : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                <MdClose />
              </div>
            </div>
            <div
              className={`${Style.profile} ${userStatus ? Style.active : ""}`}
              onClick={() => navigate("/user/dashboard/profile")}
            >
              <img
                className={Style.profileImg}
                src={!user?.avatar ? "/public/profile.png" : user?.avatar}
                alt="profile"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
