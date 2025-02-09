import Style from "../../css/Home.module.css";
import HomeSec3Img from "../../assets/HomeSec3Img.png";
import HomeSec3Img2 from "../../assets/HomeSec3Img2.png";
import Button from "../../Components/Button/Button";

const HomeSec3 = () => {
  return (
    <>
      <div className={Style.HomeSec3}>
        <div className={Style.HomeSec3div1}>
          <h2>
            আমাদের <span className={Style.spancolor}>সম্পর্কে</span>
          </h2>
        </div>
        <div className={Style.HomeSec3div2}>
          <div className={Style.HomeSec3div21}>
            <p>
              ক্লাস শুরু, একটি প্রতিষ্ঠান যা পশ্চিমবঙ্গের শিক্ষার্থীদের জন্য
              উচ্চমানের শিক্ষা প্রদান করতে প্রতিশ্রুতিবদ্ধ। ঝাড়গ্রামের কেন্দ্রে
              অবস্থিত, আমরা অফলাইন কোচিংয়ে একটি বিশ্বাসযোগ্য নাম, শিক্ষার্থীদের
              বোর্ড পরীক্ষা,{" "}
              <span className={Style.spanbold}>
                JEE মেইন, JEE অ্যাডভান্সড এবং NEET UG
              </span>
              -তে সাফল্য অর্জনে সাহায্য করছি।
            </p>
            <iframe
              src="https://www.youtube.com/embed/PsVTQgKQdLI?si=WoqGwc3-csMiIndq"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className={Style.HomeSec3div21iframe}
            ></iframe>
          </div>
          <div className={Style.HomeSec3div22}>
            <img src={HomeSec3Img2} alt="" />
            <p>
              আমাদের টিমে রয়েছে অভিজ্ঞ ও বিশেষজ্ঞ শিক্ষকগণ, যারা শিক্ষার্থীদের
              বোর্ড পরীক্ষা,{" "}
              <span className={Style.spanbold}>
                JEE মেইন, JEE অ্যাডভান্সড, NEET UG,
              </span>{" "}
              এবং অন্যান্য প্রতিযোগিতামূলক পরীক্ষায় সফলতার জন্য সর্বোত্তম
              প্রস্তুতি প্রদান করেন। ক্লাস শুরু-এ আমরা শিক্ষার্থীদের জন্য একটি
              সহায়ক এবং অনুপ্রেরণাদায়ক পরিবেশ তৈরি করেছি, যেখানে তারা নিজেদের
              সক্ষমতা ও আত্মবিশ্বাস বৃদ্ধি করতে পারে।
            </p>
          </div>
          <div className={Style.HomeSec3div23}>
            <Button text="Explore Now" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSec3;
