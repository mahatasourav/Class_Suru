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
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "./Menu";

import { MdMenu, MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logout, setAdminEmail, setAdminStatus } from "../../Redux/features/adminSlice";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";

const AdminNavbar = () => {
  const [cookies,setCookie, removeCookie] = useCookies(['adminToken']);

  const adminStatus = useSelector((state) => state.admin.status);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(true);
  const menuRef = useRef();
  const location = useLocation();
  // useEffect(() => {
  //   const toggleSidebar = (e) => {
  //     if (!menuRef.current.contains(e.target)) {
  //       setMenuOpen(false);
  //       // console.log(menuRef.current);
  //     }
  //   };
  //   document.addEventListener("mousedown", toggleSidebar);
  //   return () => {
  //     document.removeEventListener("mousedown", toggleSidebar);
  //   };
  // }, []);

  useEffect(() => {
    
    if(!cookies['adminToken'])
    {
      
      
      navigate("/admin/login")
    }
    else
    {
      
      const data = jwtDecode(cookies['adminToken']);
      
      
      const currentTime = Date.now() / 1000;
      if(data.exp < currentTime)
      {
        
        removeCookie("adminToken");
        dispatch(logout());
        navigate("/admin/login")
      }
      else
      {
        if (location.pathname === "/admin/login" || location.pathname === "/admin/otp") {
          navigate("/admin");
        }
        dispatch(setAdminEmail(data.email));
        dispatch(setAdminStatus(true));

      }
    }
  }, []);
  return (
    <nav className={`${Style.navContainer} ${Style.adminnavContainer}`}>
      {/* <div className={Style.navUpper}>
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
      </div> */}

      <div className={Style.navLower}>
        <div className={Style.nav}>
          <div className={Style.logo}>
            <img className={Style.logoImg} src={logo} alt="class suru logo" />
            <div className={Style.logoText}>Class Suru | Admin Portal</div>
          </div>
          {/* <div
            className={`${Style.navLinks} ${
              menuOpen ? Style.active : Style.inactive
            }`}
            ref={menuRef}
          >
            <Link
              className={Style.navLink}
              to="/admin/examlist"
              onClick={() => setMenuOpen(false)}
            >
              Exam List
            </Link>
            <Link
              className={Style.navLink}
              to="/admin/users"
              onClick={() => setMenuOpen(false)}
            >
              Users
            </Link>
            
          </div> */}
          <div className={Style.navButtons}>
            {adminStatus ? (
              <Button
                text="Logout"
                onClick={()=>{
                  removeCookie("adminToken");
                  dispatch(logout());
                  navigate("/admin/login");
                }}
                // className={`${Style.navButton}`}
              />
            ) : (
              <Button
                text="Login"
                // className={`${Style.navButton}`}
                isLink={true}
                link="/admin/login"
              />
            )}

            {/* <div className={Style.menuSection} id="menuSection">
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
            </div> */}
            {/* <div className={`${Style.profile} ${userStatus?Style.active:""}`} onClick={()=>navigate("/dashboard")}>
              <img
                className={Style.profileImg}
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="profile"
              />
              
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
