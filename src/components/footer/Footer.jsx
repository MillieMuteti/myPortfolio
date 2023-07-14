// eslint-disable-next-line no-unused-vars
import React from 'react';
import './footer.css'; 
import {FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-text">
          <p>&copy; 2023 Millie Muteti. All rights reserved.</p>
        </div>
        <div className="footer-social">
          <a href="https://www.twitter.com" target='_blank' rel="noreferrer"><FaTwitter /></a>
          <a href="https://www.linkedin.com" target='_blank' rel="noreferrer"><FaLinkedin /></a>
          <a href="https://www.github.com" target='_blank' rel="noreferrer"><FaGithub /></a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
