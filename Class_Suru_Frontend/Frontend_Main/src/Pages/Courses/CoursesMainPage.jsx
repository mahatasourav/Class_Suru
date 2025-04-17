import React from "react";
import Style from "../../css/course.module.css";
import imgCourseSection from "../../assets/imgCourseSection.png";
const CoursesMainPage = () => {
  return (
    <div className={Style.Course}>
      <div className={Style.CourseSection1}>
        <h2>
          🎓{" "}
          <span className={Style.spancolor}>
            {" "}
            Aryanak 720 – Free NEET Batch
          </span>{" "}
          | West Bengal
        </h2>
      </div>
      <div className={Style.CourseSection2}>
        <div className={Style.CourseSection21}>
          <a
            href="https://www.youtube.com/watch?v=9acc45ORiWA&ab_channel=ClassSuru"
            target="blank"
          >
            <img src={imgCourseSection} alt="" />
            <h3>🎥 Watch Aryanak 720 Lectures on YouTube</h3>
          </a>
        </div>
        <div className={Style.CourseSection22}>
          <h3>
            <span className={Style.spancolor}> Class Suru-র</span> তরফ থেকে{" "}
            <span className={Style.spancolor}>NEET </span>
            প্রস্তুতির জন্য সম্পূর্ণ ফ্রি কোর্স, এক্সক্লুসিভ ভাবে West Bengal-এর
            students দের জন্য!
          </h3>
          <h4 className={Style.spancolorlarge}>📌 Course Features:</h4>
          <ul>
            <li>
              🧑‍🏫 <span className={Style.spanbold}> Expert Educators</span> –
              Highly qualified NEET mentors
            </li>

            <li>
              🧪 Subject-wise Strategy –{" "}
              <span className={Style.spanbold}>
                {" "}
                Biology, Chemistry, Physics
              </span>{" "}
              -এর জন্য আলাদা প্রস্তুতি
            </li>
            <li>
              📊 Weekly{" "}
              <span className={Style.spanbold}>
                {" "}
                Mock Tests & Doubt Solving
              </span>{" "}
            </li>
            <li>
              💬 <span className={Style.spanbold}> Bangla</span> ভাষায় ক্লাস ও
              ব্যাখ্যা, so concepts বোঝা যায় আরও সহজে।
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CoursesMainPage;
