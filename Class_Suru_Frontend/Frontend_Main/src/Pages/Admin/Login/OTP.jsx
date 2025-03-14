import React from 'react'
import Style from "../../../css/adminlogin.module.css"
import { Button } from '../../../Components'

const OTP = () => {
  return (
    <>
        <div className={Style.adminLoginContainer}>
            <div className={Style.adminLoginBox}>
                <div className={Style.adminLoginHeading}>
                    Enter OTP
                </div>
                <form className={Style.adminLoginInputContainer}>
                    <input type="otp" placeholder="Enter Your 6 digit otp here" className={Style.otpInput} required/>
                    <Button text="Login" className={Style.adminLoginButton} type="submit"/>
                </form>
            </div>
        </div>
    </>
  )
}

export default OTP