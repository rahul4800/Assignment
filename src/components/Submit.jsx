import { FaCheckCircle } from "react-icons/fa";
import "../styles/submit.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Submit = () => {

    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 5000);
    }, []);

    return (
        <div className="submit-container">
            <div className="logo-image">
                <img src="../assets/logo.png" alt="logo" className="logo-img" />
            </div>

            <div className="submitted">
                <div className="submit-content">
                    <FaCheckCircle className="check-icon" />

                    <div className="submitted-details">
                        <h5>Success Submitted</h5>

                        <div>
                            <h2>Congratulations</h2>
                            <p>
                                Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="last">
                <p>Redirecting you to Homepage in <span>5 Seconds</span></p>
            </div>
        </div>
    );
}

export default Submit;