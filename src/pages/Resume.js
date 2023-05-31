import React from 'react';
import "../Resume.css"
import {Link} from "react-router-dom";

const Resume = (props) => {
    return(
<>
<div className="show-container">
    <div className="card-row">
        <div className="toprow">
          <div className="job1">
            <div className="job1text">
                <p><strong>General Assembly</strong></p>
                    <p>Attended General Assembly Software Engineering Immersive Bootcamp</p>
                    <p>
                    CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1
                    </p>
                </div>
            </div>
        </div>
        <div className="secondrow">
            <div className="job2">
              <div className="job2text">
                <p>Associated Property Management</p>
                  <p>Community Association Manager</p>
                    <p>CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2</p>
                </div>
            </div>
        </div>
        <div className="thirdrow">
            <div className="job3">
              <div className="job3text">
                  <p>Associa</p>
                    <p>Community Manager</p>
                      <p>CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3C</p>
                </div>
            </div>
        </div>
        <div className="fourthrow">
            <div className="job4">
              <div className="job4text">
                <p>Associa</p>
                  <p>Assistant Community Manager</p>
                    <p>CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CCARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4</p>
                </div>
            </div>
        </div>
        <div className="fifthrow">
            <div className="job5">
              <div className="job5text">
                <p>Chili's</p>
                  <p>Server</p>
                    <p>CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5</p>
                </div>
            </div>
        </div>
        <div className="sixthrow">
            <div className="job6">
              <div className="job6text">
                <p>Next Model Management</p>
                  <p>Model</p>
                    <p>CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARDRD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5</p>
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

