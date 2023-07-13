import React from 'react';
import './testimonials.css'; 
import avatar from "../../assets/avatar1.jpg"

const Testimonial = () => {
  return (
    <section id="testimonial">
      <div className="testimonial-content">
        <h2>Testimonial</h2>
        <div className="testimonial">
          <div className="testimonial-text">
            <p>
              <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.</q>
            </p>
            <p>- John Doe</p>
          </div>
          <div className="testimonial-image">
            <img src={avatar} alt="Testimonial" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
