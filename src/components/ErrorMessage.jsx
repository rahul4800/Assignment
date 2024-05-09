
import { RiErrorWarningFill } from "react-icons/ri";
import "../styles/errorMessage.css";

const ErrorMessage = () => {
    return (
        <div className="error-msg">
            <RiErrorWarningFill className="error-icon" />
            <p>
                Enter a valid email address
            </p>
        </div>
    );
};

export default ErrorMessage;