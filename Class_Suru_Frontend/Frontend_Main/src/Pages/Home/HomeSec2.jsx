import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import imageData from "../../assets/sildeimage";
import Style from "../../css/Home.module.css";

const HomeSec2 = () => {
  return (
    <div className={Style.HomeSec2div}>
      <center>
        <h2>
          আমাদের <span>সাফল্যতা</span>
        </h2>
      </center>
      <div className={`${Style.SwipperDiv} max-w-full mx-auto py-10`}>
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={10}
          autoplay={{
            delay: 2500, // Delay between slides (in ms)
            disableOnInteraction: false, // Keeps autoplay running even after user interaction
          }}
          loop={true}
          modules={[Autoplay]}
          className={Style.customSwiper}
          slidesPerView={5}
        >
          {" "}
          {imageData.map((image, index) => (
            <SwiperSlide key={index} className={Style.customSlide}>
              <div className={Style.Swiperdiv}>
                <img
                  src={image.src} // Dynamically use the src from imageData.js
                  alt={image.alt}
                  loading="lazy" // Lazy loading for performance
                />
                <div className={Style.infoContainer}>
                  <h3 className={Style.studentName}>{image.name}</h3>
                  <p className={Style.instituteName}>{image.college}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSec2;
