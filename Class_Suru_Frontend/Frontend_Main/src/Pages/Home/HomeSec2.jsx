import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
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
      <div className="max-w-full mx-auto py-10 ">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={10}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 2,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true} // Enable next/prev buttons
          autoplay={{
            delay: 2500, // Delay between slides (in ms)
            disableOnInteraction: false, // Keeps autoplay running even after user interaction
          }}
          loop={true}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className={Style.customSwiper}
          breakpoints={{
            480: {
              slidesPerView: 1, // Show 2 slides on screens with max-width 720px
            },
            720: {
              slidesPerView: 2, // Show 2 slides on screens with max-width 720px
            },
            1024: {
              slidesPerView: 2, // Show 3 slides on screens with width 1024px or larger
            },
            1550: {
              slidesPerView: 3, // Show 4 slides on screens with width 1280px or larger
            },
          }}
        >
          {imageData.map((image,index) => (
            <SwiperSlide key={index} className={Style.customSlide}>
              <div className={Style.Swiperdiv}>
                <img
                  src={image.src} // Dynamically use the src from imageData.js
                  alt={image.alt}
                  loading="lazy" // Lazy loading for performance
                />
                <div>
                  <h3>{image.name}</h3>
                  <p>{image.college}</p>
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
