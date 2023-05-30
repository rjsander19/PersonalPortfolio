import React from 'react';
import "../Resume.css"
import {Link} from "react-router-dom";

const Resume = (props) => {
    return(
<>
<h1>Resume page</h1>

<Link to="/projects">
  <div className="h2"><strong>View Project Portfolio</strong></div>
</Link>


</>
)};


export default Resume;