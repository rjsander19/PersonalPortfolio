import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import '../Show.css';


const Show = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const projects = props.projects
  console.log(id);
  
  const project = projects ? projects.find((p) => p._id === id ) : null



  const loaded = () => {
    return (
      <>
      <div className="show-container">
        <div className="card-row">
          <div className="toprow">

          <div className="card1">
            <h3>Description: </h3>
              {project.description}
          </div>

            <div class="card2">
                <h1>{project.name}</h1>
                <img 
                    className="avatar-image" 
                    src={project.image} 
                    alt={project.name} 
                    />
            </div>

            <div className="card7">
                <h3>Technologies used for this project:</h3>
                    {project.technology}
            </div>
          


        </div>

          <div className="card6">
            <h3>My thoughts on this project:</h3>
              {project.process}
          </div>
      </div>
      <div className="links">
            <div className="card4">
                <h3>Link to this project's live site:</h3>
                <a href={project.website} target="_blank" rel="noopener noreferrer">{project.website}</a>
            </div>

            <div className="card5">
                <h3>Link to code for this project:</h3>
                <a href={project.codes} target="_blank" rel="noopener noreferrer">{project.codes}</a>
            </div>
          </div>
        </div>
      </>
    );
  };


  const loading = () => {
    return <h1>Loading ...</h1>;
  };

  return (
    <div className="project">
      { project ? loaded() : loading() }
    </div>
  )
};


export default Show;

