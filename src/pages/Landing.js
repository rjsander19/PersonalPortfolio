import React from 'react';
import "../Landing.css"

const Landing = (props) => {
    return(
<>
<h1>Welcome to Roxanne's Software Engineering Portfolio</h1>
<p>Thank you so much for visiting my page. Please feel free to visit the links to my LinkedIn and Github profiles, which are displayed at the bottom of the page. Otherwise, any inquiries can be sent to me directly via email at rjsander19@gmail.com</p>
<h2>Please click on the logo at the top left of your screen to proceed to the project display page</h2>


<div className="aboutme">
        <p><img src="https://i.ibb.co/hZtYNGZ/Screen-Shot-2023-05-25-at-12-03-14-PM.png" alt="pic" className="pic"></img></p>
      <div className="bio">
        <p>My name is Roxanne Sanderson, I am a full-stack developer trained by General Assembly. I have found a passion for web creation and design, so please feel free to reach out to me if you would like to talk code or have any questions. </p>
      </div>
</div>

</>
)};


export default Landing;