import { Link } from "react-router-dom";
import React, {useState} from "react";

const Index = (props) => {
    const [newForm, setNewForm] = useState({
        name:"",
        image:"",
        description: "",
        Technologies: ""
    })

const handleChange = (event) => {
    setNewForm({...newForm, [event.target.name]:event.target.value})
};

const handleSubmit = (event) => {
    event.preventDefault();
    props.createProjects(newForm);
    setNewForm({
        name:"",
        image:"",
        description: "",
        Technologies: ""
    })
};


const loaded = () => {
  if (!Array.isArray(props.projects)) {
    return <h1>No projects available</h1>;
  }
    return props.projects.map((project) => (
        <div className="grid-container">
            <div key={project._id} className="projects">
                <Link to={`/projects/${project._id}`}>
                    <h1>{project.name}</h1>
                    <img src={project.image} alt={project.name} />
                    <h3>{project.description}</h3>
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
      <form onSubmit={handleSubmit}>
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
          value={newForm.description}
          name="description"
          placeholder="Description"
          className="formDescription"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.technologies}
          name="technologies"
          placeholder="Technologies"
          className="formTechnologies"
          onChange={handleChange}
        />
        <input type="submit" value="Create Project" />
      </form>
      {props.projects ? loaded() : loading()}
    </section>
  )
}

export default Index;



