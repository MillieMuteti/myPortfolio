// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProgressBar from "@ramonak/react-progress-bar";
import CircularProgress from '@mui/joy/CircularProgress';


import './skills.css'



function Skills() {

  return (
   <section id='skills'>
        <div className='container skill-content'>
            <h2>Skills</h2>
            <Container fluid>
                <Row>
                    <Col xs={12} md={6} debug>
                        <h3>Programming Languages</h3>
                        <ul>
                            <li>
                             <h4>JavaScript/TypeScript</h4>
                             <ProgressBar completed = {85} bgColor = "var( --color-primary)" animateOnRender = {true} />

                            </li>

                            <li>
                            <h4>CSS/SASS/Bootstrap</h4>
                            <ProgressBar completed = {90} bgColor = "var( --color-primary)" animateOnRender = {true} />
                           </li>

                           <li>
                           <h4>React</h4>
                           <ProgressBar completed = {74} bgColor = "var( --color-primary)" animateOnRender = {true} />

                          </li>

                          <li>
                          <h4>PHP</h4>
                          <ProgressBar completed = {33.5} bgColor = "var( --color-primary)" animateOnRender = {true} />

                         </li>
                        </ul>
                    
                    </Col>
                    <Col xs={12} md={6} debug>
                        <h3>Professional Skills</h3>
                        <ul>
                            <li>
                                <h4>Communication</h4>
                              Excellent communication skills, both written and oral.
                        
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>

           
        </div>
   </section>
  )
}

export default Skills