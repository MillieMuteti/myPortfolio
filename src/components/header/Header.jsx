/* eslint-disable no-unused-vars */
import React from 'react'
import Meee from '../../assets/Meee.png'
import CTA from './CTA'
import Headersocials from './Headersocials'
import "./header.css"


const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I am</h5>
        <h1>Millie Muteti</h1>
        <h5 
        className='text-light'>Frontend Developer</h5>
        <CTA />
        <Headersocials />
        <div className='me'>
          <img src={Meee} alt='me' />
        </div>
        <a href='#contact' 
        className='scroll__down'>scroll down</a>
        
      </div>
      
    </header>
  )
}

export default Header
