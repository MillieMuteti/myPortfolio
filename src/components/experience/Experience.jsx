import React from 'react';
import './Experience.css'; // Import the CSS file for styling

const Experience = () => {
  const experiences = [
    {
      id: 1,
      year: '2018 - Present',
      position: 'Frontend Developer',
      company: 'ABC Company',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      year: '2016 - 2018',
      position: 'UI Designer',
      company: 'XYZ Agency',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      year: '2014 - 2016',
      position: 'Web Developer',
      company: '123 Web Solutions',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <section id="experience">
      <div className="experience-content">
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
