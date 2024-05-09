
import { BsSun } from "react-icons/bs";
import { PiRocketLaunch } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
import "../styles/Hero-section.css";
import { PiDotOutlineFill } from "react-icons/pi";

const HeroSection = () => {
    return (
        <section>
            <div className="hero-container">

                <div className="success">
                    <div className="success-story">
                        <span>Success Stories</span>
                        <p>Every success journey we’ve encountered.</p>
                    </div>
                </div>

                <div className="details">

                    <div className="left">
                        <div className="hero-content">
                            <img src="./assets/image.png" alt="image1" className="girl-img" />
                            <div className="offer">
                                <BsSun className="sun-img" />
                                <div className="offer-detail">
                                    <h4>40%</h4>
                                    <p>Achieved reduction in project execution time by optimising team availability</p>
                                </div>

                            </div>

                            <div className="days">
                                <PiRocketLaunch className="rocket-img" />

                                <div className="days-detail">
                                    <h5>10 DAYS</h5>
                                    <span>Staff Deployment</span>
                                </div>

                            </div>

                            <div className="price-info">
                                <div className="price">
                                    <h5>$0.5<span>MILLION</span></h5>
                                    
                                </div>
                                <p>Reduced client expenses by saving on hiring and employee costs.</p>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <p>Enhance fortune 50 company’s insights teams research capabilities</p>
                        <div className="dots">
                        <PiDotOutlineFill className="dots-icon" />
                        <PiDotOutlineFill className="dots-icon" />
                        <PiDotOutlineFill className="dots-icon" />
                        </div>
                        <button>Explore More <FaArrowRight /></button>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default HeroSection;
