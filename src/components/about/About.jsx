/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./about.css"
import Me from "../../assets/me.png"
import {BsAward} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {LuFolders} from 'react-icons/lu'

const About = () => {
  return (
    <section id='about'>
    <h5>Get to Know</h5>
    <h1>About Me</h1>

    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={Me} alt='aboutImage' />
        </div>

        <div className='about__content'>
          <div className='aboutCards'>
            
            <article className='aboutCard'>
              <BsAward className='about__icon' />
              <h5>Experience</h5>
              <small>2 Years Working</small>
            </article>

            <article className='aboutCard'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>10+ Clients</small>
            </article>

            <article className='aboutCard'>
              <LuFolders className='about__icon' />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>

          <p>
          Pellentesque eget vestibulum sapien. Duis sit amet fermentum est. 
          Etiam lobortis arcu luctus, pharetra turpis a, laoreet nisl. Nullam a aliquam lorem. 
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
          Aliquam magna erat, bibendum porttitor maximus ac, pretium quis quam. 
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
    </div>
    </div>
    </section>
  )
}

export default About
