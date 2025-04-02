import React, { useContext, useEffect, useId, useState, useTransition } from "react";
import Style from "../../css/login.module.css";
import GoogleIcon from "../../assets/google.svg";
import FacebookIcon from "../../assets/facebook.svg";

import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

import { Button } from "../../Components";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { loginApi } from "../../apis";
import { useDispatch, useSelector } from "react-redux";
import { setUserId, setUserStatus } from "../../Redux/features/userSlice";
import { useNavigate } from "react-router-dom";
import apiCall from "../../utils/apiCall";
import { LoadingContext } from "../../Components/Loading/Loading";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../../utils/firebase";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const id = useId();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(false);
  const [loading, setLoading] = useState(false);

  const [isPending, startTransition] = useTransition();

  const selectorStatus = useSelector((state) => state.user.status);
  

  useEffect(()=>{

      if(selectorStatus){
        navigate("/");
      }
    },[selectorStatus]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log("email: ", email);
    console.log("password: ", password);
    
    startTransition(async ()=>{
      // setTimeout(() => {
      //   console.log("Simulating async operation");

      // }, 3000);
      const loadingToastId = toast.loading("Loading...");
      try{
        const reqBody = {
          email: email,
          password: password  
        }
        console.log(reqBody);
        
        const login_response = await apiCall.post(loginApi,reqBody);

        console.log(login_response.data);
        
  
        if(login_response.status === 200){
          
          dispatch(setUserId(login_response.data.userId));
          dispatch(setUserStatus(true));

          const token = login_response.data.token;

          localStorage.setItem("token",token);

          toast.dismiss(loadingToastId);
          toast.success("login Successful");

          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
          
        }else{
          toast.dismiss(loadingToastId);
          toast.error("Email not Found, Please Register");

        }

      }catch(error){
        toast.dismiss(loadingToastId);
        console.log(error);
        toast.error(`Email not Found, Please Register`);
      }
    })

    
  };
  const handleSubmitOAuth = async(email,password) => {

    console.log("Form Submitted");
    console.log("email: ", email);
    console.log("password: ", password);
    
    startTransition(async ()=>{
      // setTimeout(() => {
      //   console.log("Simulating async operation");

      // }, 3000);
      const loadingToastId = toast.loading("Loading...");
      try{
        const reqBody = {
          email: email,
          password: password  
        }
        console.log(reqBody);
        
        const login_response = await apiCall.post(loginApi,reqBody);

        console.log(login_response.data);
        
  
        if(login_response.status === 200){
          
          dispatch(setUserId(login_response.data.userId));
          dispatch(setUserStatus(true));

          const token = login_response.data.token;

          localStorage.setItem("token",token);

          toast.dismiss(loadingToastId);
          toast.success("login Successful");

          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
          
        }else{
          toast.dismiss(loadingToastId);
          toast.error("Email not Found, Please Register");

        }

      }catch(error){
        toast.dismiss(loadingToastId);
        console.log(error);
        toast.error(`Email not Found, Please Register`);
      }
    })

    
  };

  const handleGoogleSignIn = async () => {
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log(user);
        if(user)
        {
          await handleSubmitOAuth(user.email,user.uid);
          
        }
        
        
      } catch (error) {
        console.log(error);
        
      }
    }

  return (
    <>
      <section className={Style.loginSection}>
        <div className={Style.loginContainer}>
          <div className={Style.loginOAuthSection}>
            <div className={Style.loginHeading}>Login With</div>
            <div className={Style.loginOAuthContainer}>
              <div className={Style.loginOAuth} onClick={handleGoogleSignIn}>
                <div className={Style.loginOAuthIcon}>
                  <img src={GoogleIcon} alt="google icon" />
                </div>
                <div className={Style.loginOAuthText}>Google</div>
              </div>
              {/* <div className={Style.loginOAuth}>
                <div className={Style.loginOAuthIcon}>
                  <img src={FacebookIcon} alt="facebookIcon" />
                  
                </div>
                <div className={Style.loginOAuthText}>Facebook</div>
              </div> */}
            </div>
          </div>
          <div className={Style.orSection}>
            <div className={Style.orSectionLine}></div>
            <div className={Style.orSectionText}>or</div>
            <div className={Style.orSectionLine}></div>
          </div>
          <form className={Style.loginFormSection} onSubmit={handleSubmit}>
            <div className={Style.loginInputSection}>
              <label className={Style.loginInputLabel} htmlFor={id + "email"+"testing"}>
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
              isLoading={false}
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
        <Toaster />
      </section>
    </>
  );
};

export default Login;
