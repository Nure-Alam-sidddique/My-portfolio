import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios('projects.json').then(res => setProjects(res.data));
  }, [])
  console.log(projects);
    return (
      <div id="project" className="h-auto bg-gray-800 pb-2">
        <h1 className="text-4xl text-center p-5 text-white ">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {/* {Array.from({ length: 6}).map((_, idx) => (
            <ProjectCard></ProjectCard>
          ))} */}
          {projects.map(project=><ProjectCard key={project.key} project={project}></ProjectCard>)}
        </div>
      </div>
    );
};

export default Projects;