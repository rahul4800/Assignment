import { useState } from "react";
import "../styles/navbar.css";
import { useNavigate, Link } from "react-router-dom";
import Login from "./Login";

const Navbar = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/login');
    }
    //     const [redirectToLogin, setRedirectToLogin] = useState(false);

    //   const handleButtonClick = () => {
    //     setRedirectToLogin(true);
    //   };

    //   if (redirectToLogin) {
    //     return <Login />;
    //   }

    return (
        <div className="navbar">
            
            <div className="logo">
                <img src="../assets/logo.png" alt="logo" className="logo-img" />
            </div>
            <div className="nav-items">
                <Link to="/login">
                    <button className="btn1" onClick={handleButtonClick} >
                        Get Projects
                    </button>
                </Link>
                <button className="btn2">
                    Onboard Talent
                </button>
            </div>
        </div>
    );
}

export default Navbar;


