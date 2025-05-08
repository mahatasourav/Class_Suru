// import Style from "../../css/Home.module.css";
import Style from "../../css/HomeSec1.module.css";
import Style2 from "../../css/Home.module.css";
import Image from "../../assets/BooksImages.png";
import HomeMainLeftDownImg from "../../assets/HomemainLeftImg.png";
import Button from "../../Components/Button/Button";

import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";

import { FaCirclePlay } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Marquee from "react-fast-marquee";
import { useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { BiLogoPlayStore } from "react-icons/bi";

const HomeSec1 = () => {
  const [openPromo, setOpenPromo] = useState(false);
  const promoRef = useRef(null);
  const handleClickOutside = (event) => {
    if (promoRef.current && !promoRef.current.contains(event.target)) {
      setOpenPromo(false);
    }
  };
  return (
    <>
      <div className={Style.HomeMain}>
        <div className={Style.HomeMainLeft}>
          <div className={Style.HomeMainLeftHeading}>
            <b>IIT-JEE , NEET, WBJEE</b> থেকে <b>Board</b> সবার জন্য সঠিক
            প্রস্তুতি, সেরা সাফল্য!
          </div>
          <div className={Style.HomeMainLeftSubHeading}>
            Class suru <b> শুধু স্বপ্ন দেখায় না</b> নয়, <b>স্বপ্ন পূরণও</b>{" "}
            করে। সঠিক দিকনির্দেশনা আর সাহায্যের মাধ্যমে আমরা পাশে থাকি সব সময়।
            চলো, একসাথে এগিয়ে চলি তোমার ভবিষ্যতের দিকে, যেখানে আছে সাফল্যের
            নতুন পথ!
          </div>
          {/* <div className={Style2.HomeMainLeftDown}>
            <img
              className={Style2.HomeMainLeftDownImg}
              src={HomeMainLeftDownImg}
              alt="image"
            />
            <p>
              বাংলার <span>1k+</span> শিক্ষার্থীর আস্থার ঠিকানা।
            </p>
          </div> */}
          <div className={Style.buttonSection}>
            <Button
              text="Get Started"
              className={Style.button}
              isLink={true}
              link="/exam"
            />
            <Button
              text="Download App"
              isLink={true}
              link="https://play.google.com/store/apps/details?id=co.learnol.ypfnn&pcampaignid=web_share"
              target="_blank"
              className={Style.button}
              // onClick={() => setOpenPromo(true)}
            >
              <BiLogoPlayStore />
            </Button>
          </div>
        </div>
        <div className={Style.HomeMainRight}>
          <Swiper
            // effect={"coverflow"}
            // grabCursor={true}
            // slidesPerView={"auto"}
            // centeredSlides={true}
            // spaceBetween={0}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // coverflowEffect={{
            //   rotate: 50,
            //   stretch: 0,
            //   depth: 100,
            //   modifier: 1,
            //   // slideShadows: true,
            // }}
            slidesPerView={1}
            spaceBetween={30}
            // loop={true}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            // modules={[EffectCoverflow, Autoplay]}
            loop={true}
            className={Style.AutoplaySwiperContainer}
          >
            <SwiperSlide className={Style.AutoplaySwiperSlide}>
              <img src={thumbnail1} />
            </SwiperSlide>
            <SwiperSlide className={Style.AutoplaySwiperSlide}>
              <img src={thumbnail2} />
            </SwiperSlide>
            <SwiperSlide className={Style.AutoplaySwiperSlide}>
              <img src={thumbnail3} />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* {openPromo && (
          <div
            className={Style.PromoVideoSection}
            onClick={(e) => handleClickOutside(e)}
          >
            <div className={Style.PromoVideoContainer} ref={promoRef}>

            
            <iframe
              className={Style.promoVideo}
              src="https://www.youtube.com/embed/PsVTQgKQdLI?si=WoqGwc3-csMiIndq"
              title="YouTube video player"
              // frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              // className={Style.HomeSec3div21iframe}
            ></iframe>
            <div
              className={Style.PromoVideoClose}
              onClick={() => setOpenPromo(false)}
            >
              <IoClose />
            </div>
            </div>
          </div>
        )} */}
      </div>

      {/* <div className={Style.UpdatesSection}> */}
      <Marquee
        className={Style.UpdatesSection}
        pauseOnHover={true}
        autoFill={true}
      >
        <div>{`>`}</div>
        <a
          className={Style.UpdatesSectionText}
          href="https://wa.me/+918597005604"
          target="_blank"
        >
          Admission is open , <b>Enroll Now</b>
        </a>
        <div>{`>`}</div>
        <a
          className={Style.UpdatesSectionText}
          href="https://youtu.be/92pP4lV4ox0?si=N1gK3o-UIqbyfRzW"
          target="_blank"
        >
          Watch out our latest video on Youtube
        </a>
      </Marquee>
      {/* </div> */}
    </>
  );
};

export default HomeSec1;
