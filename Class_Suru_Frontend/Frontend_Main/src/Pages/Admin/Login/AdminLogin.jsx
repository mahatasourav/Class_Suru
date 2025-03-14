import React, { useState } from 'react'
import Style from "../../../css/adminlogin.module.css"
import { Button } from '../../../Components'

const AdminLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();

        console.log(email, password);
        


    }
  return (
    <>
        <div className={Style.adminLoginContainer}>
            <div className={Style.adminLoginBox}>
                <div className={Style.adminLoginHeading}>
                    Admin Login
                </div>
                <form className={Style.adminLoginInputContainer}>
                    <input type="email" placeholder="Enter Your Admin Email" value={email} onChange={(e)=>setEmail(e.target.value)} className={Style.adminLoginInput} required/>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Your Password" className={Style.adminLoginInput} required/>
                    <Button text="Login" className={Style.adminLoginButton} type="submit" onClick={handleSubmit}/>
                </form>
            </div>
        </div>
    </>
  )
}

export default AdminLogin