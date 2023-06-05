import React, {useState} from "react";
import {Link} from "react-router-dom";
import "../Header.css"


const Header = (props) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    const toggleMode = () => {
      setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`header ${isDarkMode ? "dark-mode" : "light-mode"}`}>
            <Link to="/">
                <div><img src="https://i.ibb.co/SPNyfjs/Roxanne-logo-light.png" id="logo" alt="logo"></img></div>
            </Link>

            <Link to="/projects">
                <div className="portfoliolink">View Portfolio</div>
            </Link>

            <Link to="/resume">
                <div className="resumelink">View Professional History</div>
            </Link>

            <button onClick={toggleMode}>
                {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>

        </div>
    )
};

export default Header;