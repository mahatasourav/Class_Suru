import React, { useState } from 'react'
import Style from "../../../css/adminlogin.module.css"
import { Button } from '../../../Components'
import { useDispatch, useSelector } from 'react-redux';
import apiCall from '../../../utils/apiCall';
import { adminLoginOTPApi } from '../../../apis';
import { setAdminStatus, setAdminToken } from '../../../Redux/features/adminSlice';
import { useNavigate } from 'react-router-dom';

const OTP = () => {
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const adminEmail = useSelector((state)=>state.admin.adminEmail);
    const dispatch = useDispatch();
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const data = {
            email: adminEmail,
            otp: otp
        }
        try {
            setLoading(true);
            const response = await apiCall.post(adminLoginOTPApi, data);
            if(response.status == 200){
                dispatch(setAdminStatus(true));
                dispatch(setAdminToken(response.data.token));
                navigate("/admin");
            }

            


            
        } catch (error) {
            console.log(error);

            alert(error.response.data.error);
            
        }
        finally{
            setLoading(false);
        }
        
        
    }
  return (
    <>
        <div className={Style.adminLoginContainer}>
            <div className={Style.adminLoginBox}>
                <div className={Style.adminLoginHeading}>
                    Enter OTP
                </div>
                <form className={Style.adminLoginInputContainer}>
                    <input type="otp" placeholder="Enter Your 6 digit otp here" value={otp} className={Style.adminLoginInput} onChange={(e)=>setOtp(e.target.value)} required/>
                    <Button text="Login" className={Style.adminLoginButton} type="submit" onClick={handleSubmit} isDisabled={loading} isLoading={loading}/>
                </form>
            </div>
        </div>
    </>
  )
}

export default OTP