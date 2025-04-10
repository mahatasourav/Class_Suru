import Style from "../../css/Home.module.css";
import Image from "../../assets/BooksImages.png";
import HomeMainLeftDownImg from "../../assets/HomemainLeftImg.png";
import Button from "../../Components/Button/Button";

const HomeSec1 = () => {
  return (
    <>
      <div className={Style.HomeMain}>
        {/* Left Side Contents */}
        <div className={Style.HomeMainLeft}>
          <h1>
            🎯 <span>IIT-JEE,</span> NEET, <span>WBJEE,</span> JENPAS —
            <p className={Style.HomeMainLeftDreamExam}>
              স্বপ্নের পরীক্ষার সেরা প্রস্তুতি এখানেই!
            </p>
          </h1>
          <p>
            তোমার <span>স্বপ্ন পূরণের</span> পথে <span>সেরা গাইডলাইন</span>,
            সঠিক প্রস্তুতি এবং নির্ভরযোগ্য সহায়তা দিচ্ছি আমরা, যাতে{" "}
            <span>সফল ভবিষ্যৎ </span>গড়া হয়ে ওঠে আরও সহজ এবং নিশ্চিত আমাদের
            সঙ্গে এগিয়ে চলো!
          </p>
          <div className={Style.HomeMainLeftDown}>
            <img
              className={Style.HomeMainLeftDownImg}
              src={HomeMainLeftDownImg}
              alt="image"
            />
            <p>
              বাংলার <span>1k+</span> শিক্ষার্থীর আস্থার ঠিকানা।
            </p>
          </div>
          <div className={Style.HomeMainLeftButton}>
            <Button text="Get Started" />
            <Button text="About Us" />
          </div>
        </div>

        {/* Right Side Image */}
        <div>
          <img className={Style.RightImg} src={Image} alt="Education" />
        </div>
      </div>
    </>
  );
};

export default HomeSec1;
