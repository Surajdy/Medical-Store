// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { sendOtp } from "../Redux/actions";
import "./Signup.css"

const Signup = () => {
    
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const [email, setEmail] = useState('');

    // const handleSignUp = async() => {

    //     await(dispatch(sendOtp(email)));
    //     navigate('/verify-otp')

    // }

    return (
    <div className="signup">
        <h1>Sign Up</h1>
        <form action="">
            <input type={"email"} placeholder={"Email"} />
            <input type={"password"} placeholder={"Password"}/>
            <input type={"password"} placeholder={"Confirm password"}/>
            <button type={"submit"} >Sign Up</button>
        </form>
    </div>
    )

}

export default Signup;