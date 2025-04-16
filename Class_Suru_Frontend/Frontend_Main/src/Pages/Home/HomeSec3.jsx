import Style from "../../css/Home.module.css";
import HomeSec3Img from "../../assets/HomeSec3Img.png";
import HomeSec3Img2 from "../../assets/HomeSec3Img2.png";
import Button from "../../Components/Button/Button";

const HomeSec3 = () => {
  return (
    <>
      <div className={Style.HomeSec3}>
        {/* <div className={Style.HomeSec3div1}> */}

        {/* </div> */}
        {/* <div className={Style.HomeSec3div2}> */}
          <div className={Style.HomeSec3div21}>
            <div className={Style.HomeSec3div211}>
              <div className={Style.headingSection3}>
                আমাদের <span>সম্পর্কে</span>
              </div>
              <p className={Style.homeSection3Description}>
                ক্লাস শুরু, একটি প্রতিষ্ঠান যা পশ্চিমবঙ্গের শিক্ষার্থীদের জন্য
                উচ্চমানের শিক্ষা প্রদান করতে প্রতিশ্রুতিবদ্ধ। ঝাড়গ্রামের
                কেন্দ্রে অবস্থিত, আমরা অফলাইন কোচিংয়ে একটি বিশ্বাসযোগ্য নাম,
                শিক্ষার্থীদের বোর্ড পরীক্ষা,{" "}
                <span className={Style.spanbold}>
                  JEE মেইন, JEE অ্যাডভান্সড এবং NEET UG
                </span>
                -তে সাফল্য অর্জনে সাহায্য করছি।
              </p>
              <Button
                text="Read More"
                isLink={true}
                link="/about"
                className={Style.ExploreNowButton}
              />
            </div>
            <iframe
              src="https://www.youtube.com/embed/PsVTQgKQdLI?si=WoqGwc3-csMiIndq"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className={Style.HomeSec3div21iframe}
            ></iframe>
          </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default HomeSec3;
