import React from "react";
import {Link} from "react-router-dom";

const Footer = (props) => {
    return (
        <footer className="footer">
            <Link to="https://www.linkedin.com/in/roxanne-sanderson-487873a6/">
                <div className="Linkedin">
                <p><img src="https://i.ibb.co/7zQ1wR6/Screen-Shot-2023-05-30-at-2-39-43-PM.png" alt="linkedinlogo" className="linkedinlogo"/></p>
                </div>
            </Link>
            <Link to="https://github.com/rjsander19">
                <div className="Github">
                    <p><img src="https://i.ibb.co/2tpdBR4/Screen-Shot-2023-05-30-at-2-31-59-PM.png" alt="githublogo" className="githublogo"/></p>
                </div>
            </Link>

            <button onClick={toggleThemeMode}>Toggle Theme</button>
            
        </footer>
    )
};

export default Footer;
