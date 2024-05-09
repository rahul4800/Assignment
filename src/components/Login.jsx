import { RxCross2 } from "react-icons/rx";
import "../styles/login.css";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
const Login = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    

    const navigate = useNavigate();

    const handleNameChange = (e) =>{
        const value = e.target.value;
        setName(value);
        setIsButtonDisabled(value === "" || email === "");
    }

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setIsButtonDisabled(name === "" || value === "");
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        if (name.trim() === "") {
            setError("Please enter your name");
            return;
        }

        if(!/\S+@\S+\.\S+/.test(email)){
            setError(true);
            return;
        } else {
            setError(false);
            navigate("/submit");
            //console.log("done submit");
        }
    }

    const handleCrossButton = () =>{
        navigate("/");
    }

    return (
        <div className="Register">
            <div className="login-nav">
                <img src="../assets/logo.png" alt="logo" className="logo-img"/>
                <button className="cross" onClick={handleCrossButton}><RxCross2 /></button>
            </div>

            <section >
                <div className="form-container">
                    <div className="head">
                        <h5>Registration Form</h5>
                        <p>Start your success Journey here!</p>
                    </div>
                    <form className="sign-up">
                        <div className="inputs">
                            <input type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={handleNameChange}
                            />
                            <input type="email" placeholder="Enter your email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            {error && <ErrorMessage />}
                        </div>
                        <button className="btn-submit" type="submit"
                            onClick={handleSubmit}
                            disabled={isButtonDisabled}
                        >Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Login;