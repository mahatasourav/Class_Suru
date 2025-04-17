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
              Established in 2020 at Jhargram, Class Suru is now a trusted name
              for coaching in{" "}
              <span className={Style.spanbold}>
                IIT-JEE, NEET, WBJEE, এবং Board Exams.
              </span>{" "}
              আমাদের highly qualified educators দের মাধ্যমে আমরা students দের
              concept-clear করার উপর জোর দিই, যাতে তারা শুধু পরীক্ষায় পাশ করে
              না, বরং subjects কে ভালোবাসে।
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
