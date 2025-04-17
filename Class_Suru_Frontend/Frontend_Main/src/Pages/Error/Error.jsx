import React from "react";
import { useRouteError } from "react-router-dom";
import errorImg from "../../assets/404.png"
import Style from "../../css/error.module.css"
import { Button } from "../../Components";

const Error = () => {
  const error = useRouteError();
  return (
    <div className={Style.error}>
      <img className={Style.errorimg} src={errorImg} alt='' />
      <h1 className={Style.errorHeading}>Someting Wents Wrong</h1>
      <p className={Style.errorMessage}>{error || "An unexpected error occurred"}</p>
      <Button isLink={true} link="/" text="Go To Home" />
    </div>
  );
};

export default Error;
