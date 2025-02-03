import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import imageData from "../../assets/sildeimage";
import Style from "../../css/Home.module.css";

const HomeSec2 = () => {
  return (
    <div className={Style.HomeSec2div}>
      <div className="max-w-full mx-auto py-10 ">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2} // Always show 2 slides
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
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="custom-swiper"
        >
          {imageData.map((image) => (
            <SwiperSlide key={image.id} className={Style.customSlide}>
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
