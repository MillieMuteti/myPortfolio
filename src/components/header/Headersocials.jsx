/* eslint-disable no-unused-vars */
import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

function Headersocials() {
  return (
    <div className='header__socials'>
    <a href='https://linkedin.com' target='_blank'><BsLinkedin /></a>
    <a href='https://github.com' target='_blank'><BsGithub /></a>
    <a href='https://twitter.com' target='_blank'><BsTwitter /></a>
    <a href='https://instagram.com' target='_blank'><BsInstagram /></a>
      
    </div>
  )
}

export default Headersocials
