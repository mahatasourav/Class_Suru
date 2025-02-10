import React from "react";
import ServiceData from "../../assets/ServiceData";
import Style from "../../css/Home.module.css";
import HomeSec5IMG from "../../assets/HomeSec5IMG.png";

const HomeSec4 = () => {
  return (
    <div className={Style.HomeSec5}>
      <div>
        <center>
          <h2>
            আমাদের <span className={Style.spancolor}>সেবা</span> আপনার জন্য
          </h2>
        </center>
      </div>
      <div className={Style.HomeSec52}>
        <div className={Style.HomeSec521}>
          {ServiceData.map((Service, index) => (
            <div className={Style.ServiceSection} key={index}>
              <div className={Style.ServiceInfo}>
                <h1>{Service.no}</h1>
                <div>
                  <h2 className={Style.spancolor}>{Service.heading}</h2>
                  <p className={Style.spanbold}>{Service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <img src={HomeSec5IMG} alt="HumanIMG" className={Style.HomeSec5IMG} />
      </div>
    </div>
  );
};

export default HomeSec4;
