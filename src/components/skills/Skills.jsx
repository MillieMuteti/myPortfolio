// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProgressBar from "@ramonak/react-progress-bar";
import Box from '@mui/joy/Box';
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
                        <Box  sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
                            <ul>
                                <li>
                                <h4>Communication</h4>                                
                                <CircularProgress 
                                determinate
                                size='lg'
                                variant="soft"
                                value= {90}
                                color='success'                            
                                />
                                </li>
                                <li>
                                    <h4>Problem Solving</h4>
                                
                                    <CircularProgress 
                                    determinate
                                    size='lg'
                                    variant="soft"
                                    value= {75}
                                    color='success'
                                    
                                    />
                                </li>
                                <li>
                                    <h4>Creativity</h4>
                                
                                    <CircularProgress 
                                    determinate
                                    size='lg'
                                    variant="soft"
                                    value= {60}
                                    color='success'
                                    animateOnRender={true}
                                    />
                                </li>
                                <li>
                                    <h4>Team Work and Leadership</h4>
                                
                                    <CircularProgress 
                                    determinate
                                    size='lg'
                                    variant="soft"
                                    value= {75}
                                    color='success'
                                    
                                    />
                                </li>
                            </ul>
                       
                        </Box>
                              
                        
                          
                    </Col>
                </Row>
            </Container>

           
        </div>
   </section>
  )
}

export default Skills