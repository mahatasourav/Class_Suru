import React from "react";
import Style from "../../css/button.module.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Button = ({
  children,
  text = "button",
  className = "",
  link = "/#",
  isLoading = false,
  isLink = false,
  isHashLink = false,
  onDualMode = false,
  isHollow = false,
  isDisabled = false,
  ...props
}) => {
  if (isLink) {
    return (
      <Link
        to={link}
        className={`${Style.button} ${
          isLoading ? Style.loading : ""
        } ${className} ${onDualMode ? isHollow? Style.inactive: Style.active: ""} ${isDisabled ? Style.disabled : ""}`}
        id="actionButton"
        disabled={isDisabled}
        {...props}
      >
        {children}
        <span className={Style.text}>{text}</span>
        <div className={Style.spinner}></div>
      </Link>
    );
  }
  if (isHashLink) {
    return (
      <HashLink
        to={link}
        className={`${Style.button} ${
          isLoading ? Style.loading : ""
        } ${className} ${onDualMode ? isHollow? Style.inactive: Style.active: ""} ${isDisabled ? Style.disabled : ""}`}
        id="actionButton"
        disabled={isDisabled}
        {...props}
      >
        {children}
        <span className={Style.text}>{text}</span>
        <div className={Style.spinner}></div>
      </HashLink>
    );
  }
  return (
    <button
      className={`${Style.button} ${
        isLoading ? Style.loading : ""
      } ${className} ${onDualMode ? isHollow? Style.inactive: Style.active: ""} ${isDisabled ? Style.disabled : ""}`}
      id="actionButton"
      disabled={isDisabled}
      {...props}
    >
      {children}
      <span className={Style.text}>{text}</span>
      <div className={Style.spinner}></div>
    </button>
  );
};

export default Button;
