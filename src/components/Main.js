import {useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";
import Landing from "../pages/Landing";
import Resume from "../pages/Resume";


function Main(props) {
  const [ projects, setProjects ] = useState(null)
  const URL = "https://backendpersonalportfolio.onrender.com/projects"

  // Dark mode
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = {
    backgroundColor: "white",
    color: "black",
  };

  const darkTheme = {
    backgroundColor: "black",
    color: "white",
  };

  const toggleThemeMode = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };



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
      <main style={themeMode === "light" ? lightTheme : darkTheme}>

            <Routes>

              <Route exact path="/" element={<Landing projects={projects} createProjects={createProjects}/>} />

              <Route exact path="/resume" element={<Resume projects={projects} createProjects={createProjects}/>} />

              <Route exact path="/projects" element={<Index projects={projects} createProjects={createProjects}/>} />

              <Route path="/projects/:id" element={<Show projects={projects}
              updateProjects={updateProjects}
              deleteProjects={deleteProjects}
              />} />

            </Routes>
            <button onClick={toggleThemeMode}>Toggle Theme</button>
            
        </main>
    );
};


export default Main;