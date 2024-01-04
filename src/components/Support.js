import Header from "./Header";
import Icon from "../img/envelope.svg";
import { Link } from "react-router-dom";
const Support = () =>{
    const handleSubmit =(e)=>{
        e.preventDefault();
    }
    return (
        <div className="support">
            <div className="container">
                <div className="support__inner">
                    <div className="support-content">
                        <span className="contact-icon">
                            <img src={Icon} alt="icon"/>
                        </span>
                        <h2 className="title">Contact us</h2>
                        <p>Have a question or just want to know more? Feel free to reach out to us.</p>
                    </div>
                    <form className="support-form" onSubmit={handleSubmit}>
                        <h3 className="notice">You will receive response within 24 hours of time of submit.</h3>

                        <div className="data-row">
                            <div className="form-data">
                                <label for="name">
                                    Name:
                                </label>
                                <input type="text" id="name" name="name" placeholder="James" required/>
                            </div>
                            
                            <div className="form-data">
                                <label for="surname">
                                    Surname:</label>
                                <input type="text" name="surname" id="surname" placeholder="Arthur" required/>
                            </div>
                        </div>
                        <div className="form-data">
                            <label for="email"> Email:
                            </label>
                            <input type="email" name="email" id="email" placeholder="name@mail.com" required/>
                        </div>
                        
                        <div className="form-data">
                            <label for="msg">
                                Message:
                            </label>
                            <textarea name="msg" id="msg" placeholder="Your Message"></textarea>
                        </div>
                        

                        <div className="form-check">
                            <input type="checkbox" for="check" id="check-box" required/>
                            I agree with < Link to="/" className="terms">Terms & Condition</Link>.
                        </div>

                        <button type="submit" className="grey-btn submit-btn" disabled>Send a Message</button>
                        <Link to="/" className="grey-btn">Book a Meeting</Link>
                    </form>
                </div>
                <div className="chat-note">
                    <h2 className="title">Live Chat</h2>
                    <p>Don't have time to wait for the answer? Chat with us now.</p>
                </div>
            </div>
        </div>
    )
}

export default Support;