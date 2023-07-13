// eslint-disable-next-line no-unused-vars
import React from 'react';
import './about.css'; 
import Me from '../../assets/me.png'

const AboutMe = () => {
  return (
    <section id="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi there! I'm Millie Muteti, a passionate web developer with a strong
            background in front-end development. I love building creative and
            user-friendly web experiences using the latest web technologies.
          </p>
          <p>
            With several years of experience in the industry, I have worked on a
            variety of projects, ranging from small business websites to complex
            web applications. My goal is to deliver high-quality code and exceed
            client expectations.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies,
            attending tech conferences, and enjoying a good cup of coffee. Feel
            free to get in touch with me if you have any questions or if you'd
            like to collaborate on a project.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
        <div className="about-image">
          <img src={Me} alt="About Me" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
