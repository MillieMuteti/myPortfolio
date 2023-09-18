// eslint-disable-next-line no-unused-vars
import React from 'react';
import './portfolio.css'; 
import project1 from '../../assets/tubuy.png'
import project2 from '../../assets/bookMyTicket.png'
import project3 from '../../assets/pizza.png'
import project4 from '../../assets/big-shoe1.png'
import project5 from '../../assets/pickup.png'

const projects = [
  {
    id: 1,
    name: 'Tubuy',
    image: project1,
    description: 'Tubuy is an ecommerce React website designed to provide a seamless and user-friendly shopping experience. It leverages the powers of an external api to simulate the relevant data for development.',
    link: 'https://github.com/JosephMumo/Fake-store', 
  },
  {
    id: 2,
    name: 'bookMyTicket',
    image: project2,
    description: 'bookMyTicket is an innovative hospital project designed to revolutionize the way medical professionals schedule and manage operating rooms within a healthcare facility.',
    link: 'https://github.com/Mulubi/BookMyTicket',
  },
  {
    id: 3,
    name: 'Pizza Store',
    image: project3,
    description: 'It is a website for Pazzi per la pizza, pizza joint where you can place your order choose the size topping crust and quantity of pizza.You also have the option of having the pizza delivered so it prompts you to give your area',
    link: 'https://milliemuteti.github.io/pizza/', 
  },
  {
    id: 4,
    name: 'Fake Nike Store',
    image: project4,
    description: 'Nike store is a fictitious web store that showcases a variety of Nike shoes. This web store is designed using the Tailwind CSS framework to provide a clean, responsive, and user-friendly interface for customers interested in exploring and purchasing Nike footwear.',
    link: 'https://splendorous-naiad-5cee7d.netlify.app/', 
  },
  {
    id: 5,
    name: 'Instant Pickup',
    image: project5,
    description: 'Instant pickup is arevolutionary pickup and delivery project that not only provides top-notch logistics services but also takes a significant step towards building a more sustainable and eco-friendly future.',
    link: 'https://milliemuteti.github.io/instant-pickup', 
  }
]



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
