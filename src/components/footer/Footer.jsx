import React from 'react';
import './footer.css'; 

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-text">
          <p>&copy; 2023 Your Website. All rights reserved.</p>
        </div>
        <div className="footer-social">
          <a href="https://www.twitter.com">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.github.com">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
