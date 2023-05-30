import {useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";
import Landing from "../pages/Landing";
import Resume from "../pages/Resume";


function Main(props) {
    const [ projects, setProjects ] = useState(null)
    // const URL = "http://localhost:4000/projects"
    const URL = "https://backendpersonalportfolio.onrender.com/projects"


  const getProjects = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setProjects(data || []);
  };

  const createProjects = async (project) => {
    await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
      });
    };

  const updateProjects = async (project, id) => {
    await fetch(`${URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    });
  };

  const deleteProjects = async id => {
    await fetch(`${URL}/${id}`, {
      method: "DELETE",
    });
};


useEffect(() => getProjects(), []);

    return (
        <main>
        <Routes>

            <Route exact path="/" element={<Landing projects={projects} createProjects={createProjects}/>} />

            <Route exact path="/resume" element={<Resume projects={projects} createProjects={createProjects}/>} />

            <Route exact path="/projects" element={<Index projects={projects} createProjects={createProjects}/>} />

            <Route path="/projects/:id" element={<Show projects={projects}
            updateProjects={updateProjects}
            deleteProjects={deleteProjects}
            />} />

        </Routes>
        </main>
    );
};


export default Main;