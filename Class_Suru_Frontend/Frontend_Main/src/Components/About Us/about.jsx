import React from "react";
import Style from "../../css/about.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import imageData from "../../assets/facultyData";
import imgAboutSection1 from "../../assets/imgAboutSection1.png";

const About = () => {
  return (
    <div className={Style.About}>
      <div className={Style.AboutSection1}>
        <div className={Style.AboutSection1Info}>
          <h2>
            {" "}
            📘 আমাদের সম্পর্কে –{" "}
            <span className={Style.spancolorlarge}>Class Suru</span>
          </h2>
          <h4>
            <span className={Style.spancolorlarge}>Class Suru</span> তে আমরা
            বিশ্বাস করি — “সঠিক{" "}
            <span className={Style.spancolorlarge}>direction আর support</span>{" "}
            পেলে, প্রতিটা ছাত্র-ছাত্রী সাফল্যের চূড়ায় পৌঁছতে পারে।”
          </h4>{" "}
          <div className={Style.AboutSection1Info3}>
            <h4>
              {" "}
              💡Why choose
              <span className={Style.spancolor}> Class Suru ?</span>
            </h4>
            <ul>
              <li>
                <span className={Style.spancolor}> Offline coaching</span> with
                a personal touch
              </li>
              <li>
                {" "}
                <span className={Style.spancolor}> ছোট ছোট batch,</span> so that
                every student gets focus
              </li>
              <li>
                {" "}
                <span className={Style.spancolor}>
                  {" "}
                  Regular mock tests,
                </span>{" "}
                problem-solving sessions
              </li>
              <li>
                Doubt clearing এবং{" "}
                <span className={Style.spancolor}>personalized guidance </span>{" "}
              </li>
            </ul>
          </div>
          {/* 🎯 Our Mission: শুধু পড়ানো নয়, আমরা চাই তোমার প্রতিটা পদক্ষেপে পাশে
          থাকতে — তোমার স্বপ্নকে সত্যি করার যাত্রায়। 📚 So, let’s begin your
          journey from Classroom to Competitive Success — with Class Suru beside
          you, always. */}
        </div>
        <div className={Style.AboutSection1Img}>
          <img src={imgAboutSection1} alt="aboutsection1img" srcset="" />
        </div>
      </div>
      {/* <div className={Style.AboutSection2}>
        <div className={Style.AboutSection2Heading}>
          <h2> 🌟 Meet Our Expert Faculty</h2>
        </div>
        <div className={`${Style.SwipperDiv} max-w-500 mx-auto py-10`}>
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
      </div> */}

      <div className={Style.AboutSection3}>
        <div className={Style.AboutSection3Heading}>
          <h2>🏫 Our Offline Center – Learn, Connect, Grow</h2>
        </div>
        <div className={Style.AboutSection3Maps}>
          <div className={Style.AboutSection3Map1}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1744634921074!6m8!1m7!1srvxvGIi1cc4mGl5mBkNndQ!2m2!1d22.44235095168575!2d86.99768668134674!3f99.30613911105718!4f-19.852088345069916!5f0.7820865974627469"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={Style.AboutSection3Map2}>
            <div className={Style.AboutSection3Map21}>
              <h3>📍 ঠিকানা : Jhargram, West Bengal</h3>
              <p>
                Jhargram-এর প্রাণকেন্দ্রে অবস্থিত আমাদের offline centre — একটা
                learning আর innovation-এর hub। Creativity আর collaboration
                বাড়ানোর জন্য design করা Class Suru একটা dynamic environment দেয়,
                যেখানে students নিজেদের ভবিষ্যৎ গড়ে তোলে।
              </p>
            </div>
            <div>
              <h3>⭐ Top 3 Offline Class Advantages:</h3>
              <ul>
                <li>🎓 Pro Teachers – অভিজ্ঞ স্যারদের কাছ থেকে direct শেখা।</li>

                <li>🧠 Doubt? Solved! – Instant help, personal guidance।</li>
                <li>🔁 Daily Revision ও নিয়মিত মক টেস্ট</li>
              </ul>
            </div>
            <div>
              <h3>🧑‍🎓 আমাদের ছাত্রছাত্রীদের সফলতা: </h3>
              <ul>
                <li>
                  <p>
                    IIT KGP, IIEST Shibpur, Jadavpur University, RG Kar Medical
                    College এবং অন্যান্য প্রিমিয়ার ইনস্টিটিউট থেকে পড়াশোনা করা
                    ছাত্রছাত্রী।
                  </p>
                </li>
              </ul>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
