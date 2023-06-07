import React, { useState } from 'react';
import "../Resume.css"
import {Link} from "react-router-dom";

const Resume = (props) => {
  const [activeStates, setActiveStates] = useState(Array(6).fill(false));

  const handleJobClick = (index) => {
    const newActiveStates = [...activeStates];
    newActiveStates[index] = !newActiveStates[index];
    setActiveStates(newActiveStates);
  };

  return (
    <>
      <div className="show-container">
        <div className="card-row">
          <div className="toprow">
            <div className={`job1 ${activeStates[0] ? 'active' : ''}`} onClick={() => handleJobClick(0)}>
              <div className="job1text">
                <p><strong>General Assembly</strong></p>
                <p>March 2023 - May 2023</p>
                <p>
                  Completed the Software Engineering Immersive Bootcamp through General Assembly
                </p>
              </div>
            </div>
          </div>
          <img src="https://i.ibb.co/5nWHf4r/Screen-Shot-2023-06-07-at-3-12-11-PM.png" alt="arrow" className="arrowright"></img>
          <div className="secondrow">
            <div className={`job2 ${activeStates[1] ? 'active' : ''}`} onClick={() => handleJobClick(1)}>
              <div className="job2text">
                <p><strong>Associated Property Management</strong></p>
                <p>March 2022 - November 2022</p>
                <p>Community Association Manager</p>
                <p>As a community manager, I was responsible for building and maintaining a business relationship with a portfolio of clients</p>
              </div>
            </div>
          </div>
          <img src="https://i.ibb.co/SdsQyRt/arrowleft.png" alt="arrowleft" className="arrowleft"></img>
          <div className="thirdrow">
            <div className={`job3 ${activeStates[2] ? 'active' : ''}`} onClick={() => handleJobClick(2)}>
              <div className="job3text">
                <p><strong>Associa</strong></p>
                <p>November 2020 - February 2022</p>
                <p>Community Association Manager</p>
                <p>Some responsibilities I had in this role were: addressing maintenance and financial concerns that are reported by homeowners and board members</p>
              </div>
            </div>
          </div>
          <img src="https://i.ibb.co/5nWHf4r/Screen-Shot-2023-06-07-at-3-12-11-PM.png" alt="arrow" className="arrowright"></img>
          <div className="fourthrow">
            <div className={`job4 ${activeStates[3] ? 'active' : ''}`} onClick={() => handleJobClick(3)}>
              <div className="job4text">
                <p><strong>Associa</strong></p>
                <p>August 2019 - November 2020</p>
                <p>Assistant Community Manager</p>
                <p>Responsible for customer service requests of property owners via phone and email</p>
              </div>
            </div>
          </div>
          <img src="https://i.ibb.co/SdsQyRt/arrowleft.png" alt="arrowleft" className="arrowleft"></img>
          <div className="fifthrow">
            <div className={`job5 ${activeStates[4] ? 'active' : ''}`} onClick={() => handleJobClick(4)}>
              <div className="job5text">
                <p><strong>Chili's</strong></p>
                <p>June 2018 - November 2020</p>
                <p>Server</p>
                <p>Greeting and serving guests</p>
              </div>
            </div>
          </div>
          <img src="https://i.ibb.co/5nWHf4r/Screen-Shot-2023-06-07-at-3-12-11-PM.png" alt="arrow" className="arrowright"></img>
          <div className="sixthrow">
            <div className={`job6 ${activeStates[5] ? 'active' : ''}`} onClick={() => handleJobClick(5)}>
              <div className="job6text">
                <p><strong>Next Model Management</strong></p>
                <p>May 2014 - August 2019</p>
                <p>Model</p>
                <p>Attending castings and auditions with potential clients, executing photoshoots/commercials</p>
              </div>
            </div>
          </div>
        </div>
      </div>


<Link to="https://docs.google.com/document/d/1CclG29IE5DrF9kvJ-8WkTxbu2opoSbUT-gZzfi63uOg/edit?usp=sharing">View resume</Link>

<Link to="/projects">
  <div className="h2">View Project Portfolio</div>
</Link>



</>
)};


export default Resume;

