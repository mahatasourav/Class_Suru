// This page is for Sourav
import React from "react";
import Style from "../../css/Home.module.css";
import Image from "../../assets/BooksImages.png";
import HomeMainLeftDownImg from "../../assets/HomeMainLeftDownImg.png";

const Home = () => {
  return (
    <div className={Style.HomeMain}>
      {/* Left Side Content */}
      <div className={Style.HomeMainLeft}>
        <h1>তোমার স্বপ্ন পূরণের শুরু এখানেই!সঠিক প্রস্তুতি, সেরা সাফল্য!</h1>
        <p>
          তোমার স্বপ্ন পূরণের পথে সেরা গাইডলাইন, সঠিক প্রস্তুতি এবং নির্ভরযোগ্য
          সহায়তা দিচ্ছি আমরা, যাতে সফল ভবিষ্যৎ গড়া হয়ে ওঠে আরও সহজ এবং
          নিশ্চিত আমাদের সঙ্গে এগিয়ে চলো!!!!
        </p>
        <div className={Style.HomeMainLeftDown}>
          <img
            className={Style.HomeMainLeftDownImg}
            src={HomeMainLeftDownImg}
            alt="image"
          />
          <p>বাংলার 1k+ শিক্ষার্থীর আস্থার ঠিকানা।</p>
          <h4>Class Suru</h4>
        </div>
        <div className={Style.HomeMainLeftButton}>
          <button>Get Started</button>
          <button>About Us</button>
        </div>
      </div>

      {/* Right Side Image */}
      <div>
        <img className={Style.RightImg} src={Image} alt="Education" />
      </div>
    </div>
  );
};

export default Home;
