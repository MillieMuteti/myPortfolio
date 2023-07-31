// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './contact.css'; 

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    // TODO: Send email here with form data
    alert(`Thank you for your message ${firstName}! We will get back to you as soon as possible`);
    // eslint-disable-next-line no-undef
    resetFields();
    
  };


  return (
    <section id="contact">
      <div className="container contact-content">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder='Message'
            ></textarea>
          </div>
          <button type="submit" className='btn btn-primary'>Submit</button>
        </form>
      
    
      </div>
    </section>
  );
};

export default Contact;

