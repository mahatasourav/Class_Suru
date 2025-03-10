// ExamNavbar css Avilable in nav.module.css

import React, { useEffect, useRef, useState } from "react";
import Style from "../../css/nav.module.css";
import { useParams } from "react-router-dom";
import logo from "../../assets/class_suru_logo.png";

import { Link, useNavigate } from "react-router-dom";
import { ExamNavbarRight, ExamMainNavRight } from "./ExamNavbarRightCorner";
import { MdMenu, MdClose } from "react-icons/md";
import { useSelector } from "react-redux";

const ExamNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const menuRef = useRef();
  const { examName, subjectName } = useParams(); // Get exam & subject from URL
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

  const isMainExamPage = location.pathname.includes("/MainExamPage");
  return (
    <nav className={Style.ExamnavContainer}>
      <div className={Style.navLower}>
        <div className={Style.nav}>
          <div className={Style.logo}>
            <img className={Style.logoImg} src={logo} alt="class suru logo" />
            <div className={Style.logoText}>Class Suru</div>
          </div>
          <div>
            <p> {subjectName} Mock Test</p>
          </div>
          {isMainExamPage ? <ExamMainNavRight /> : <ExamNavbarRight />}
        </div>
      </div>
    </nav>
  );
};

export default ExamNavbar;

// ExamNavbar css Avilable in nav.module.css
