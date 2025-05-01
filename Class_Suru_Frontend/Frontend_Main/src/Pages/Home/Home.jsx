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
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Class Suru | Jhargram's Best Institution for IIT-JEE, NEET, WBJEE &
          Board Exams
        </title>
        <meta
          name="title"
          content="Class Suru | Jhargram's Best Institution for IIT-JEE, NEET, WBJEE & Board Exams"
        />
        <link rel="shortcut icon" href="/class_suru_favicon.webp" type="image/webp" />
        <meta
          name="description"
          content="Class Suru is Jhargram's trusted educational platform offering expert-led coaching for IIT-JEE, NEET, WBJEE & Board Exams. Learn in Bengali & English with top mentors. Join Class Suru today!"
        />
        <meta
          name="keywords"
          content="Class Suru, EdTech, Jhargram, IIT-JEE Coaching, NEET Classes, WBJEE, Board Exam Preparation, Bengali Medium Coaching, Online Classes, Class Suru Education, Top Coaching in Jhargram"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.classsuru.in/" />
        <meta
          property="og:title"
          content="Class Suru - Jhargram's EdTech Hub for IIT-JEE, NEET, WBJEE & Boards"
        />
        <meta
          property="og:description"
          content="Boost your career with Class Suru - Jhargram's smartest learning platform for competitive and board exams. Learn better with expert teachers in Bengali & English."
        />
        <meta
          property="og:image"
          content="/class_suru_favicon.webp"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://classsuru.in/" />
        <meta
          name="twitter:title"
          content="Class Suru – Jhargram's EdTech Hub for IIT-JEE, NEET, WBJEE & Boards"
        />
        <meta
          name="twitter:description"
          content="Boost your career with Class Suru – the smartest learning platform in Jhargram. Learn with expert educators for IIT-JEE, NEET, WBJEE, and Board Exams."
        />
        <meta
          name="twitter:image"
          content="/image_card.png"
        />
      </Helmet>
      <div className={Style.Homestyle}>
        {/* <Breadcrumb /> */}
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
