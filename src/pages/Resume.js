import React from 'react';
import "../Resume.css"
import {Link} from "react-router-dom";

const Resume = (props) => {
    return(
<>
<Link to="https://docs.google.com/document/d/1CclG29IE5DrF9kvJ-8WkTxbu2opoSbUT-gZzfi63uOg/edit?usp=sharing">View resume</Link>

<Link to="/projects">
  <div className="h2">View Project Portfolio</div>
</Link>



</>
)};


export default Resume;