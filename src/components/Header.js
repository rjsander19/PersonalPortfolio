import React from "react";
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <div className="header">
            <Link to="/projects">
                <div>
                    <p>Header</p>
                </div>
            </Link>
        </div>
    )
}

export default Header