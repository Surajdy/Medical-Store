import { useNavigate } from "react-router-dom";
import "./Login.css"
// import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
// import {  authenticateUser } from "../Redux/actions";

const Login = () => {

     const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const isAuthenticated = useSelector((state) => state.isAuthenticated);
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const handleCreateAccount = async () => {
    //     await dispatch(authenticateUser(email, password));
    //     if(isAuthenticated) {
    //         navigate('/home');
    //     } else {
    //         // Handle authentication failure
    //         console.error('Authentication failed');
    //     }
    // };
  const handleLogin=()=>{   
    navigate('/');
}
    return (
    <div className="login">
        <h1>Login</h1>
        <form action="">
            <input type={"email"} placeholder={"Email"} />
            <input type={"password"} placeholder={"Password"} />
            <button type={"submit"} onClick={handleLogin} >Login</button>
        </form>
    </div>
    )

}

export default Login;