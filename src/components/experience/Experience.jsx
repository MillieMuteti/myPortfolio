// eslint-disable-next-line no-unused-vars
import React from 'react';
import './experience.css'; 

const Experience = () => {
  const experiences = [
    {
      id: 1,
      year: 'Feb 2023 - Sept,2023',
      position: 'Junior Frontend Developer',
      company: 'Deveint limited',
      description:
        'Interned as a junior dev my roles included collaborating with other devs, testing apps and writing UATs and preparing User manuals for completed projects',
    },
    {
      id: 2,
      year: 'July, 2021 - September, 2021',
      position: 'Asst Plannet',
      company: 'Narok County Governmet',
      description:
        'Worked as an attache under the Narok county planners. Helped in mapping data collection and preparing of regional development plans.',
    },
    {
      id: 3,
      year: 'May,2021 - July,2021',
      position: 'Web Designer Intern',
      company: 'Instant pickup',
      description:
        'Interned and learned web design softwares and web design standards. Used Figma for projects while working under a group of talented devs.',
    },
  ];

  return (
    <section id="experience">
      <div className="container experience-content">
        <h2>Experience</h2>
        <div className="experience-cards">
          {experiences.map((experience) => (
            <div key={experience.id} className="experience-card">
              <div className="experience-header">
                <div className="experience-year">{experience.year}</div>
                <h3 className="experience-position">{experience.position}</h3>
              </div>
              <p className="experience-company">{experience.company}</p>
              <p className="experience-description">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
