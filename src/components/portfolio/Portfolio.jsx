// eslint-disable-next-line no-unused-vars
import React from 'react';
import './portfolio.css'; 
import project1 from '../../assets/tubuy.png'
import project2 from '../../assets/bookMyTicket.png'
import project3 from '../../assets/pizza.png'
import project4 from '../../assets/houseOfLiv.png'
import project5 from '../../assets/pickup.png'

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
    link: 'https://www.example.com/project2',
  },
  {
    id: 3,
    name: 'Project 3',
    image: project3,
    description: 'Descrip',
    link: 'https://milliemuteti.github.io/pizza/', 
  },
  {
    id: 4,
    name: 'Project 4',
    image: project4,
    description: 'Description of Project 2',
    link: 'https://www.example.com/project2', 
  },
  {
    id: 5,
    name: 'Project 5',
    image: project5,
    description: 'Description of Project 2',
    link: 'https://www.example.com/project2', 
  }
  
];



const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container portfolio-content">
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
