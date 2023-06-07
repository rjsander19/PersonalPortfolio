import { Link } from "react-router-dom";
import React from "react";
import '../index.css';



const Index = (props) => {

  const tickerText = "Experienced with:   JavaScript,   Node.JS,   React,   CSS,   HTML,   Python,   MongoDB,   Postman,   JQuery,   Django,   and learning new things everyday!";

  const renderTicker = () => {
    return (
      <div className="ticker">
        <span className="ticker-text">{tickerText}</span>
      </div>
    );
  };


const renderDescription = (project) => {
    return (
      <div className="project-description">
        <h3>{project.description}</h3>
      </div>
    );
  };


const loaded = () => {
  if (!Array.isArray(props.projects)) {
    return <h1>No projects available</h1>;
  }
    return props.projects.map((project) => (
        <div className="grid-container">
            <div key={project._id} className="projects">
                <Link to={`/projects/${project._id}`}>
                    <h1 className="name">{project.name}</h1>
                    <img src={project.image} alt={project.name} />
                    
                  {renderDescription(project)} 
                </Link>
            </div>
        </div>
    ))
};

const loading = () => {
    return <h1>Loading</h1>
};

return (
    <section>
   {renderTicker()}
      {props.projects ? loaded() : loading()}
    </section>
  )
};

export default Index;



