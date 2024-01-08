import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { verifyOtp } from "../Redux/actions";

const VerifyOtp = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const email = useSelector((state) => state.email);
    const [otp, setOtp] = useState('');

    const handleVerifyOtp = async() => {

        await dispatch(verifyOtp(email, otp));
        navigate('/login');

    }

    return (
        <div>
            <h2>Verify OTP</h2>
            <p>Enter the OTP sent  to {email}:</p>
            <label htmlFor="">OTP:</label>
            <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)}/>
            <button onClick={handleVerifyOtp}>Verify OTP</button>
        </div>
    )

}

export default VerifyOtp;