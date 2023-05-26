import { Link } from "react-router-dom";
import React, {useState} from "react";
import '../index.css'

const Index = (props) => {
    const [newForm, setNewForm] = useState({
        name: "",
        image: "",
        description: "",
        technology: "",
        website: "",
        codes: "",
        process: "",
    })

const handleChange = (event) => {
    setNewForm({...newForm, [event.target.name]:event.target.value})
};

const handleSubmit = (event) => {
    event.preventDefault();
    props.createProjects(newForm);
    setNewForm({
        name: "",
        image:"",
        description: "",
        technology: "",
        website: "",
        codes: "",
        process: "",
    })
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

// return (
//     <section>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={newForm.name}
//           name="name"
//           placeholder="Name"
//           className="formName"
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           value={newForm.image}
//           name="image"
//           placeholder="Image url"
//           className="formImage"
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           value={newForm.description}
//           name="description"
//           placeholder="Description"
//           className="formDescription"
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           value={newForm.technology}
//           name="technology"
//           placeholder="Technology"
//           className="formTechnology"
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           value={newForm.website}
//           name="website"
//           placeholder="Website"
//           className="website"
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           value={newForm.codes}
//           name="codes"
//           placeholder="Code"
//           className="codes"
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           value={newForm.process}
//           name="process"
//           placeholder="process"
//           className="process"
//           onChange={handleChange}
//         />
//         <input type="submit" value="Create Project" />
//       </form>
//       {props.projects ? loaded() : loading()}
//     </section>
//   )
};

export default Index;



