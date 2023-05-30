import React from "react";
import {Link} from "react-router-dom";

const Footer = (props) => {
    return (
        <footer className="footer">
            <Link to="https://www.linkedin.com/in/roxanne-sanderson-487873a6/">
                <div className="Linkedin">
                    <p><strong>Linkedin: </strong>https://www.linkedin.com/in/roxanne-sanderson-487873a6/ </p>
                </div>
            </Link>
            <Link to="https://github.com/rjsander19">
                <div className="Github">
                    <p><img src="https://i.ibb.co/2tpdBR4/Screen-Shot-2023-05-30-at-2-31-59-PM.png" alt="githublogo" className="githublogo"/>https://github.com/rjsander19</p>
                </div>
            </Link>
                <div className="Email">
                    <p><strong>Email:</strong> rjsander19@gmail.com</p>
                </div>
        </footer>
    )
};

export default Footer;
