import React from 'react';
import './footer.css'; 
import {FaTwitter} from 'react-icons/fa'
import  {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-text">
          <p>&copy; 2023 Your Website. All rights reserved.</p>
        </div>
        <div className="footer-social">
          <a href="https://www.twitter.com"><FaTwitter /></a>
          <a href="https://www.linkedin.com"><FaLinkedin /></a>
          <a href="https://www.github.com"><FaGithub /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
