import React from "react";
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <div className="header">
            <Link to="/projects">
                <div><img src="https://i.ibb.co/SPNyfjs/Roxanne-logo-light.png" id="logo" alt="logo"></img></div>
            </Link>

            <Link to="/projects">
                <div>Portfolio</div>
            </Link>

            <Link to="/resume">
                <div>Professional History</div>
            </Link>

        </div>
    )
};

export default Header;