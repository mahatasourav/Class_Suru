import React from "react";
import Style from "../../css/loading.module.css";

const Loading = () => {
  return (
    <>
      <div className={Style.loadingContainer}>
        <div className={Style.spinnerContainer}>
            <div className={Style.spinner}></div>
        </div>
        
      </div>
    </>
  );
};

export default Loading;
