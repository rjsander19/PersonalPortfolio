import React from "react";
import {Link} from "react-router-dom";
import "../Header.css"

const Header = (props) => {
    return (
        <div className="header">
            <Link to="/">
                <div><img src="https://i.ibb.co/SPNyfjs/Roxanne-logo-light.png" id="logo" alt="logo"></img></div>
            </Link>

            <Link to="/projects">
                <div className="portfoliolink">View Portfolio</div>
            </Link>

            <Link to="/resume">
                <div className="resumelink">View Professional History</div>
            </Link>

        </div>
    )
};

export default Header;