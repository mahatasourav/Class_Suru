import React from 'react'
import Style from "../../../css/adminlogin.module.css"
import { Button } from '../../../Components'

const AdminLogin = () => {
  return (
    <>
        <div className={Style.adminLoginContainer}>
            <div className={Style.adminLoginBox}>
                <div className={Style.adminLoginHeading}>
                    Admin Login
                </div>
                <form className={Style.adminLoginInputContainer}>
                    <input type="email" placeholder="Enter Your Admin Email" className={Style.adminLoginInput} required/>
                    <input type="password" placeholder="Enter Your Password" className={Style.adminLoginInput} required/>
                    <Button text="Login" className={Style.adminLoginButton} type="submit"/>
                </form>
            </div>
        </div>
    </>
  )
}

export default AdminLogin