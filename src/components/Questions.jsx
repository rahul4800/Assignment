import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

import "../styles/question.css";

const Questions = () => {
    return (
        <div className="question-container">
            <div className="content">
                <div className="left-side">
                    <div className="heading">
                        <span>What’s on your mind</span>
                        <h4>Ask Questions</h4>
                    </div>
                    
                </div>

                <div className="right-side">
                    <div className="question">
                        <h6>Do you offer freelancers?</h6>
                        <FiPlus />
                        
                    </div>
                    
                    <div className="question">
                        <h6>What’s the guarantee that I will be satisfied
                            with the hired talent?</h6>
                        <FiPlus />
                    </div>

                    <div className="question-3">
                        <div className="question-change">
                            <h6>Can I hire multiple talents at once?</h6>
                            <FiMinus />
                        </div>
                        <p>If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.</p>
                    </div>


                    <div className="question">
                        <h6>Why should I not go to an agency directly?</h6>
                        <FiPlus />
                    </div>

                    <div className="question">
                        <h6>Who can help me pick a right skillset
                            and duration for me?</h6>
                            <FiPlus />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Questions;