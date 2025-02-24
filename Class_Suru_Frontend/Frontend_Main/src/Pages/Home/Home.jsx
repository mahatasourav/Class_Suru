// This page is for Sourav
import React from "react";
import Style from "../../css/Home.module.css";
import HomeSec1 from "./HomeSec1";
import HomeSec2 from "./HomeSec2";
import HomeSec3 from "./HomeSec3";
import HomeSec4 from "./HomeSec4";
import HomeSec5 from "./HomeSec5";
import HomeSec6 from "./HomeSec6";
import Breadcrumb from "../Exam/Breadcrumb";

const Home = () => {
  return (
    <>
      <div className={Style.Homestyle}>
        <HomeSec1 />
        <HomeSec2 />
        <HomeSec3 />
        <HomeSec4 />
        <HomeSec5 />
        <HomeSec6 />
      </div>
    </>
  );
};

export default Home;
