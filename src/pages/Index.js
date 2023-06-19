import { Link } from "react-router-dom";
import React from "react";
import '../index.css';



const Index = (props) => {
    
//   const [newForm, setNewForm] = useState({
//     name: "",
//     image: "",
//     screenshot1:"",
//     screenshot2:"",
//     screenshot3:"",
//     description: "",
//     technology: "",
//     website: "",
//     codes: "",
//     process: "",
// })
// const handleChange = (event) => {
// setNewForm({...newForm, [event.target.name]:event.target.value})
// };

// const handleSubmit = (event) => {
//   event.preventDefault();
//   props.createProjects(newForm);
//   setNewForm({
//     name: "",
//     image:"",
//     screenshot1:"",
//     screenshot2:"",
//     screenshot3:"",
//     description: "",
//     technology: "",
//     website: "",
//     codes: "",
//     process: "",
//   })
// };



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

          {/* <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newForm.name}
            name="name"
            placeholder="Name"
            className="formName"
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.image}
            name="image"
            placeholder="Image url"
            className="formImage"
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.screenshot1}
            name="screenshot1"
            placeholder="screenshot 1"
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.screenshot2}
            name="screenshot2"
            placeholder="screenshot 2"
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.screenshot3}
            name="screenshot3"
            placeholder="screenshot 3"
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.description}
            name="description"
            placeholder="Description"
            className="formDescription"
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.technology}
            name="technology"
            placeholder="Technology"
            className="formTechnology"
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.website}
            name="website"
            placeholder="Website"
            className="website"
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.codes}
            name="codes"
            placeholder="Code"
            className="codes"
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.process}
            name="process"
            placeholder="process"
            className="process"
            onChange={handleChange}
          />
          <input type="submit" value="Create Project" />
        </form> */}
        {renderTicker()}
      {props.projects ? loaded() : loading()}
    
        </section>
  )
};

export default Index;



