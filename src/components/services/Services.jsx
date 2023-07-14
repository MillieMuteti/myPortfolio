// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Fa1} from 'react-icons/fa'
import {Fa2} from 'react-icons/fa'
import {Fa3} from 'react-icons/fa'
import './services.css'; 

const Services = () => {
  return (
    <section id="services">
      <div className="services-content">
        <h1>Services</h1>
        <div className="services-grid">
          <div className="service">
            <Fa1 />
            <h3>Frontend Development</h3>
            <p>
              I specialize in creating responsive and interactive user
              interfaces using modern web technologies like HTML, CSS, and
              JavaScript.
            </p>
          </div>
          <div className="service">
          <Fa2 />
            <h3>Mobile-Friendly Design</h3>
            <p>
              I ensure that all websites I develop are mobile-friendly and
              optimized for a seamless user experience across different devices
              and screen sizes.
            </p>
          </div>
          <div className="service">
          <Fa3 />
            <h3>SEO Optimization</h3>
            <p>
              I implement search engine optimization (SEO) techniques to improve
              website visibility and rankings on search engines, helping your
              website reach a wider audience.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Services;
