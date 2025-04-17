import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Style from "../../css/admin.module.css";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Admin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const adminStatus = useSelector((state)=>state.admin.status);
  console.log(adminStatus);

  // useEffect(() => {
  //   if(!adminStatus)
  //   {
  //     navigate("/admin/login")
  //   }
    
  // }, [adminStatus]);

  
  return (
    <div className={Style.AdminPage}>
      <div className={Style.AdminContainer}>
        {/* <Link to="/admin/examlist" className={Style.AdminPath}>Exam List</Link> */}
        {/* <Link to="/admin/users" className={Style.AdminPath}>Users</Link> */}
        {
          !location.pathname.includes("/admin/login") && (<div className={Style.LeftNavBar}>
            <div className={Style.LeftNavBarItems}>
              <Link
                to="/admin/list"
                className={`${Style.LeftNavBarLink} ${
                  location.pathname.includes("/admin/list") && Style.active
                }`}
              >
                Manage Exams
              </Link>
              {/* <Link
                to="/admin/users"
                className={`${Style.LeftNavBarLink} ${
                  location.pathname.includes("/admin/users") && Style.active
                }`}
              >
                Users
              </Link> */}
              {/* <Link to="/admin/examlist" className={Style.LeftNavBarLink}>Exam List</Link> */}
            </div>
          </div>)
        }
        
        <div className={Style.RightContainer}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
