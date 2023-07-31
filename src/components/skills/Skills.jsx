// eslint-disable-next-line no-unused-vars
import React from 'react'
import './skills.css'
function Skills() {
  return (
    <section id='skills'>
        <div className='container skills-content'>
        <h2>Skills</h2>
            <div className='row'>
                <div className='col-md-6 col-sm-12'>
                    <div>
                        <div className='professional-skills'>
                            <h3>Technical Skills</h3>
                            <div className='each-skill'>
                            <div className='skill'>
                                <div className='partial'>
                                    <div className='info'>
                                        <div className='name'>JavaScript</div>

                                        <div className='percentage'>90%</div>

                                    </div>
                                    <div className='progression-bar'>

                                        <div className='percentagem' style={{width:"90%"}}></div>
                                    </div>

                                </div>
                            </div>
                            </div>

                            <div className='each-skill'>
                            <div className='skill'>
                                <div className='partial'>
                                    <div className='info'>
                                        <div className='name'>React</div>

                                        <div className='percentage'>75%</div>

                                    </div>
                                    <div className='progression-bar'>

                                        <div className='percentagem' style={{width:"75%"}}></div>
                                    </div>

                                </div>
                            </div>
                            </div>

                            <div className='each-skill'>
                            <div className='skill'>
                                <div className='partial'>
                                    <div className='info'>
                                        <div className='name'>CSS</div>

                                        <div className='percentage'>87%</div>

                                    </div>
                                    <div className='progression-bar'>

                                        <div className='percentagem' style={{width:"87%"}}></div>
                                    </div>

                                </div>
                            </div>
                            </div>

                            <div className='each-skill'>
                            <div className='skill'>
                                <div className='partial'>
                                    <div className='info'>
                                        <div className='name'>PhP</div>

                                        <div className='percentage'>40%</div>

                                    </div>
                                    <div className='progression-bar'>

                                        <div className='percentagem' style={{width:"40%"}}></div>
                                    </div>

                                </div>
                            </div>
                            </div>
                          
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-sm-12'>
                    <div className='professional-skills'>
                        <h3>Professional Skills</h3>
                        <ul className='professional-list'>
                            <li>
                                <div className='progress progress-circle'></div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Skills
