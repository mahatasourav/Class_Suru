import React, { useId, useState, useTransition } from "react";
import Style from "../../css/login.module.css";
import GoogleIcon from "../../assets/google.svg";
import FacebookIcon from "../../assets/facebook.svg";

import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

import { Button } from "../../Components";

const Login = () => {
  const id = useId();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(false);

  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log("email: ", email);
    console.log("password: ", password);

    // startTransition(async ()=>{
    //   setTimeout(() => {
    //     console.log("Simulating async operation");

    //   }, 3000);
    // })
  };

  return (
    <>
      <section className={Style.loginSection}>
        <div className={Style.loginContainer}>
          <div className={Style.loginOAuthSection}>
            <div className={Style.loginHeading}>Login With</div>
            <div className={Style.loginOAuthContainer}>
              <div className={Style.loginOAuth}>
                <div className={Style.loginOAuthIcon}>
                  <img src={GoogleIcon} alt="google icon" />
                </div>
                <div className={Style.loginOAuthText}>Google</div>
              </div>
              <div className={Style.loginOAuth}>
                <div className={Style.loginOAuthIcon}>
                  <img src={FacebookIcon} alt="facebookIcon" />
                  {/* <FacebookIcon/> */}
                </div>
                <div className={Style.loginOAuthText}>Facebook</div>
              </div>
            </div>
          </div>
          <div className={Style.orSection}>
            <div className={Style.orSectionLine}></div>
            <div className={Style.orSectionText}>or</div>
            <div className={Style.orSectionLine}></div>
          </div>
          <form className={Style.loginFormSection} onSubmit={handleSubmit}>
            <div className={Style.loginInputSection}>
              <label className={Style.loginInputLabel} htmlFor={id + "email"}>
                Email
              </label>
              <input
                className={Style.loginInput}
                type="email"
                name="email"
                id={id + "email"}
                placeholder="jhon.doe@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={Style.loginInputSection}>
              <label
                className={Style.loginInputLabel}
                htmlFor={id + "password"}
              >
                Password
              </label>
              <div className={Style.passwordContainer}>
                <input
                  className={Style.loginInput}
                  type={eye ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  id={id + "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div
                  className={`${Style.eye} ${eye ? Style.active : ""}`}
                  onClick={() => setEye(!eye)}
                >
                  {eye ? <FiEye /> : <FiEyeOff />}
                </div>
              </div>
            </div>
            <Button
              text="Login Now"
              className={Style.formBtn}
              type="submit"
              isLoading={isPending}
            />
          </form>
          <div className={Style.otherOption}>
            <div className={Style.otherOptionText}>Dont' have any account?</div>
            <Button
              text="Register Now"
              className={Style.registerBtn}
              isLink={true}
              link="/register"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
