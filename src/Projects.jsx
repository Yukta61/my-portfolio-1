import React from 'react';
import './Projects.css'; // Adjust path as needed

const projects = [
  {
    title: "E-Vehicle Services",
    image: "/src/assets/car.jpg",
    description: "Developed using Python and Django...",
    role: "Lead Developer"
  },
  {
    title: "Book Nerds",
    image: "/src/assets/booknerd.png",
    description: "A web app for book enthusiasts...",
    role: "Full-Stack Developer"
  },
  {
    title: "Personal Portfolio",
    image: "/src/assets/logo.png",
    description: "A web application of my achievements...",
    role: "Frontend Developer"
  }
];

function Projects() {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p><b>Role:</b> {project.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
