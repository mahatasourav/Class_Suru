import React, { useState } from 'react'
import Style from "../../../css/adminlogin.module.css"
import { Button } from '../../../Components'
import apiCall from '../../../utils/apiCall';
import { adminLoginApi } from '../../../apis';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAdminEmail, setAdminToken } from '../../../Redux/features/adminSlice';

const AdminLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const data = {
            email: email,
            password: password
        }
        setLoading(true);
        try{
            const response = await apiCall.post(adminLoginApi, data);
            
            if(response.status === 200){
                dispatch(setAdminEmail(email));
                
                
                
                navigate("/admin/login/otp");
            }
            
        }catch(err){
            console.log(err);
            alert("Invalid Credentials");
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
                    Admin Login
                </div>
                <form className={Style.adminLoginInputContainer}>
                    <input type="email" placeholder="Enter Your Admin Email" value={email} onChange={(e)=>setEmail(e.target.value)} className={Style.adminLoginInput} required/>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Your Password" className={Style.adminLoginInput} required/>
                    <Button text="Login" className={Style.adminLoginButton} type="submit" onClick={handleSubmit} isDisabled={loading} isLoading={loading}/>
                </form>
            </div>
        </div>
    </>
  )
}

export default AdminLogin