import React from 'react'
import Me from '../../assets/me.png'
import CTA from './CTA'
import Headersocials from './Headersocials'
import "./header.css"


const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I am</h5>
        <h1>Millie Muteti</h1>
        <h5 className='text-light'>Frontend Developer</h5>
        <CTA />
        <div className='me'>
          <img src={Me} alt='me' />
        </div>
        <a href='#contact' className='scroll__down'>scroll down</a>
      </div>
      
    </header>
  )
}

export default Header
