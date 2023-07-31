// eslint-disable-next-line no-unused-vars
import React from 'react';
import './services.css'
import {FaGlobe, FaTabletScreenButton, FaRegHourglassHalf, FaDharmachakra, FaReact, FaUniversalAccess} from 'react-icons/fa6'

function Services() {
  return (
    <section id='services'>
        <div className='container services-content'>
        <h1>Services</h1>
        <div className='services-grid'>
            <div className='services'>
                <a><FaGlobe className='service-icon' /></a>
                <h3>Web Development</h3>
                <p>
               I design and develop visually appealing and functional websites
                using HTML, CSS, and JavaScript. This involves creating the user interface, 
                implementing interactive elements.
                </p>
            </div>
            <div className='services'>
                <a><FaTabletScreenButton className='service-icon' /></a>
                <h3>Responsive Design</h3>
                <p>
              I ensure that all websites I develop are mobile-friendly and
              optimized for a seamless user experience across different devices
              and screen sizes.
                </p>
            
            </div>
            <div className='services'>
                <a><FaRegHourglassHalf className='service-icon' /></a>
                <h3>Performance Optimization</h3>
                <p>
                Slow-loading websites can lead to user frustration and abandonment. 
                By employing various optimization techniques such as code minification, image compression, 
                caching, and lazy loading.
                </p>
            </div>
            <div className='services'>
                <a><FaDharmachakra className='service-icon' /></a>
                <h3>Cross-Browser Compatibility</h3>
                <p>
                Ensuring that websites look and function consistently across different browsers
                 (Chrome, Firefox, Safari, etc.) is vital. As a frontend developer,I test and troubleshoot compatibility issues.

                </p>
            </div>
            <div className='services'>
                <a><FaReact className='service-icon' /></a>
                <h3>Frontend Frameworks</h3>
                <p>
                I have specialized in React Framework. I can leverage these frameworks to build 
                robust, scalable, and maintainable web applications, utilizing their pre-built components and optimizing performance.
                </p>
            </div>
            <div className='services'>
                <a><FaUniversalAccess className='service-icon' /></a> 
                <h3>Accesibility</h3>
                <p>
                Accessibility ensures that websites are usable and navigable by individuals with disabilities. 
                As a frontend developer, I implement accessibility best practices.
                </p>
            </div>
            
        </div>
        </div>
      
    </section>
  )
}

export default Services
