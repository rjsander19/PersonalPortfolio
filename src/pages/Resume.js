import React, { useState } from 'react';
import "../Resume.css"
import {Link} from "react-router-dom";

const Resume = (props) => {
  const [isActive, setIsActive] = useState(false);

  const handleJobClick = () => {
    setIsActive(!isActive);
  };

  return(
<>
<div className="show-container">
    <div className="card-row">
        <div className="toprow">
          <div className="job1">
            <div className="job1text">
                <p><strong>General Assembly</strong></p>
                    <p>March 2023 - May 2023</p>
                      <p>
                      Completed the Software Engineering Immersive Bootcamp through General Assembly
                      </p>
                </div>
            </div>
        </div>
        <div className="secondrow">
            <div className="job2">
              <div className="job2text">
                <p><strong>Associated Property Management</strong></p>
                  <p>March 2022 - November 2022</p>
                    <p>Community Association Manager</p>
                      <p>As a community manager I was responsible for building and maintaining a business relationship with a portfolio of clients</p>
                </div>
            </div>
        </div>
        <div className="thirdrow">
            <div className="job3">
              <div className="job3text">
                  <p><strong>Associa</strong></p>
                    <p>November 2020 - February 2022</p>
                      <p>Community Association Manager</p>
                        <p>Some responsibilities I had in this role were: addressing maintenance and financial concerns that are reported by homeowners and board members</p>
                </div>
            </div>
        </div>
        <div className="fourthrow">
            <div className="job4">
              <div className="job4text">
                <p><strong>Associa</strong></p>
                  <p>August 2019 - November 2020</p>
                    <p>Assistant Community Manager</p>
                      <p>Responsible for customer service requests of property owners via phone and email</p>
                </div>
            </div>
        </div>
        <div className="fifthrow">
            <div className="job5">
              <div className="job5text">
                <p><strong>Chili's</strong></p>
                  <p>June 2018 - November 2020</p>
                    <p>Server</p>
                      <p>Greeting and serving guests</p>
                </div>
            </div>
        </div>
        <div className={`sixthrow ${isActive ? 'active' : ''}`} onClick={handleJobClick}>
            <div className="job6">
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

