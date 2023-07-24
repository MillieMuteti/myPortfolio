// eslint-disable-next-line no-unused-vars
import React from 'react';
import './portfolio.css'; 
import project1 from '../../assets/tubuy.png'
import project2 from '../../assets/bookMyTicket.png'

const projects = [
  {
    id: 1,
    name: 'Project 1',
    image: project1,
    description: 'Description of Project 1',
    link: 'https://www.example.com/project1', 
  },
  {
    id: 2,
    name: 'Project 2',
    image: project2,
    description: 'Description of Project 2',
    link: 'https://www.example.com/project2', // Replace with the actual project link for Project 2
  },
  // Add more projects here...
];



const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="portfolio-content">
        <h2>Portfolio</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-item">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div
                  className="project-image"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="project-name">{project.name}</div>
                </div>
              </a>
              <div className="project-description">{project.description}</div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
