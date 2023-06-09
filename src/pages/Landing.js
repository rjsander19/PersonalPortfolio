import React from 'react';
import "../Landing.css"
import {Link} from "react-router-dom";

const Landing = (props) => {
    return(
<>
<div className="welcomemessage">Welcome to Roxanne's Software Engineering Portfolio</div>
<p>Thank you so much for visiting my portfolio website. Please feel free to visit the links to my LinkedIn and Github profiles, which are displayed at the bottom of the page. Otherwise, any inquiries can be sent to me directly via email at rjsander19@gmail.com</p>

<Link to="/projects">
  <div className="h2"><strong>View Project Portfolio</strong></div>
</Link>

<div className="aboutme">
        <p><img src="https://i.ibb.co/hZtYNGZ/Screen-Shot-2023-05-25-at-12-03-14-PM.png" alt="pic" className="pic"></img></p>
      <div className="bio">
        <p>My name is Roxanne Sanderson, I am a full-stack developer trained by General Assembly. I have found a passion for web creation and design, so please feel free to reach out to me if you would like to talk code or have any questions. </p>
      </div>
</div>

</>
)};


export default Landing;

