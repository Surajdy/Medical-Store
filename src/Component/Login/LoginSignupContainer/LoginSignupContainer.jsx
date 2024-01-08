import { useRef, useState } from "react";
import "./LoginSignupContainer.css"
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

const LoginSignupContainer = () => {

    const [login, setLogin] = useState(true);
    const loginSignupContainerRef = useRef(null);

    const handleClick = () => {

        setLogin(!login);

        loginSignupContainerRef.current.classList.toggle("active");

    }

    return <div className="login-signup-container" ref={loginSignupContainerRef}>

        <Login/>
        
        <div className="Login-container">
            <button type="button" onClick={handleClick}>{" "} {login ? "Sigup" : "Login"}</button>
        </div>

        <Signup/>

    </div>

}

export default LoginSignupContainer;