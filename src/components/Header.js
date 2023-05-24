import React from "react";
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <nav className="nav">
            <Link to="/projects">
                <div>
                    <p>Header</p>
                </div>
            </Link>
        </nav>
    )
}

export default Header