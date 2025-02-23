import React from "react";
import { Footer, Navbar } from "../Components";
import { Outlet } from "react-router-dom";
import "../css/index.css";

const Layout = () => {
  return (
    <div className="container">
      <div className="container-navbar">
        {" "}
        <Navbar> </Navbar>
      </div>
      <div className="child-container">
        {" "}
        <Outlet />
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
