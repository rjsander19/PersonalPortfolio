import React from "react";
import {Link} from "react-router-dom";

const Footer = (props) => {
    return (
        <div className="footer">
            <Link to="/projects">
                <div>
                    <p>Footer</p>
                </div>
            </Link>
        </div>
    )
}

export default Footer;