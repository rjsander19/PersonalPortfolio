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
                <h1>General Assembly</h1>
                    <h2>Attended General Assembly Software Engineering Immersive Bootcamp</h2>
                    <p>
                    CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1CARD1
                    </p>
                </div>
            </div>
        </div>
        <div className="secondrow">
            <div className="job2">
              <div className="job2text">
                    CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2CARD2
                </div>
            </div>
        </div>
        <div className="thirdrow">
            <div className="job3">
              <div className="job3text">
                    CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3CARD3
                </div>
            </div>
        </div>
        <div className="fourthrow">
            <div className="job4">
              <div className="job4text">
                    CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4CARD4
                </div>
            </div>
        </div>
        <div className="fifthrow">
            <div className="job5">
              <div className="job5text">
                    CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5CARD5
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

