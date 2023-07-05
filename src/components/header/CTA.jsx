/* eslint-disable no-unused-vars */

import React from 'react'
import CV from "../../assets/CV.pdf"

function CTA() {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Download CV</a>
      <a href='#contact' className='btn btn-primary'>Let us Talk</a>
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default CTA
