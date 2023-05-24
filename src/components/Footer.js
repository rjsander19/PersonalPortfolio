import React from "react";
import {Link} from "react-router-dom";

const Footer = (props) => {
    return (
        <footer className="footer">
            <Link to="https://www.linkedin.com/in/roxanne-sanderson-487873a6/">
                <div className="Linkedin">
                    <p>https://www.linkedin.com/in/roxanne-sanderson-487873a6/ </p>
                </div>
            </Link>
            <Link to="https://github.com/rjsander19">
                <div className="Github">
                    <p>https://github.com/rjsander19</p>
                </div>
            </Link>
            <div className="Email">
                    <p>Email: rjsander19@gmail.com</p>
                </div>
        </footer>
    )
};

export default Footer;
