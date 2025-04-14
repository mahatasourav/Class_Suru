import React from "react";
import Style from "../../css/about.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import imageData from "../../assets/facultyData";

const About = () => {
  return (
    <div className={Style.About}>
      <div className={Style.AboutSection1}>
        <div>
          Class Suru হল একটি আধুনিক শিক্ষাকেন্দ্র যা প্রতিষ্ঠিত হয়েছে 2020
          সালে, পশ্চিমবঙ্গের ঝাড়গ্রামে। আমরা ছাত্রছাত্রীদের ভবিষ্যৎ গঠনের
          লক্ষ্যে IIT-JEE, NEET, WBJEE, JENPAS এবং বোর্ড পরীক্ষার জন্য সর্বোত্তম
          প্রস্তুতি প্রদান করে থাকি। 🎯 আমাদের লক্ষ্য: ছাত্রছাত্রীদের স্বপ্ন
          পূরণে সহায়তা করা — সঠিক দিকনির্দেশনা, মানসম্পন্ন পড়াশোনা, এবং
          বাস্তবমুখী প্রস্তুতির মাধ্যমে। 🌱 আমাদের দর্শন: “মানসম্মত শিক্ষা সবার
          জন্য” — আমরা বিশ্বাস করি, প্রত্যেক শিক্ষার্থীই একদিন সাফল্যের শিখরে
          পৌঁছাতে পারে, যদি তারা পায় সঠিক গাইডলাইন ও পরিবেশ।
        </div>
        <div>Aboutsection 1 image</div>
      </div>
      <div className={Style.AboutSection2}>
        <div className={Style.AboutSection2Heading}>
          <h2> 🌟 Meet Our Expert Faculty</h2>
        </div>
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
                    <p className={Style.instituteName}>{image.Description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className={Style.AboutSection3}>
        <div className={Style.AboutSection3Heading}>
          <h2>🏫 Our Offline Center – Learn, Connect, Grow</h2>
        </div>
        <div className={Style.AboutSection3Maps}>
          <div className={Style.AboutSection3Map1}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1744634921074!6m8!1m7!1srvxvGIi1cc4mGl5mBkNndQ!2m2!1d22.44235095168575!2d86.99768668134674!3f99.30613911105718!4f-19.852088345069916!5f0.7820865974627469"
              width="550"
              height="400"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={Style.AboutSection3Map2}>
            <h3>📍 ঠিকানা : Jhargram, West Bengal</h3>
            <p>
              Nestled in the heart of Jhargram, our offline center is a hub of
              learning and innovation. Designed to foster creativity and
              collaboration, the Class Suru campus offers a dynamic environment
              where students can:
            </p>
            <h3>🧑‍🏫 অফলাইন ক্লাসের সুবিধা:</h3>
            <ul>
              <li>🎓 অভিজ্ঞ এবং প্রফেশনাল শিক্ষকদল</li>
              <li>
                📚 বোর্ড এবং প্রতিযোগিতামূলক পরীক্ষার জন্য ডেডিকেটেড কোর্স
              </li>
              <li>🧠 ব্যক্তিগত দিকনির্দেশনা এবং ডাউট ক্লিয়ারিং সেশন</li>
              <li>🔁 প্রতিদিনের রিভিশন ও নিয়মিত মক টেস্ট</li>
            </ul>
            <h3>🧑‍🎓 আমাদের ছাত্রছাত্রীদের সফলতা: </h3>
            <ul>
              <li>
                <p>
                  IIT KGP, IIEST Shibpur, Jadavpur University, এবং অন্যান্য
                  প্রিমিয়ার ইনস্টিটিউট থেকে পড়াশোনা করা ছাত্রছাত্রী
                </p>
              </li>
            </ul>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
