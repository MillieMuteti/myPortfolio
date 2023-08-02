// eslint-disable-next-line no-unused-vars
import React from 'react'
import ProgressBar from '@ramonak/react-progress-bar'
import CircularProgress from '@mui/joy/CircularProgress'
import './skills.css'

const Skills = () => {
  return (
    <section id='skills'>
        <div className='container skills-content'>
            <div className='skills'>
                <div className='technical-skills'>
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
                </div>
                <div>
                <h3>Professional Skills</h3>
                    <div className='professional-skills'>
                         <div>
                   
                            <h4>Communication</h4>                                
                            <CircularProgress 
                            determinate
                            size='lg'
                            variant="soft"
                            value= {90}
                            color='success'                            
                            />
                            
                            <h4>Team Work and Leadership</h4>
                                        
                            <CircularProgress 
                                determinate
                                size='lg'
                                variant="soft"
                                value= {75}
                                color='success'
                            
                            />
              
                    </div>
                    <div>
                
                    <h4>Problem Solving</h4>
                                
                    <CircularProgress 
                    determinate
                    size='lg'
                    variant="soft"
                    value= {75}
                    color='success'
                    
                    />
                  
                    <h4>Creativity</h4>
                                
                    <CircularProgress 
                        determinate
                        size='lg'
                        variant="soft"
                        value= {60}
                        color='success'
                    />

                    
                    </div>  
                    
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills