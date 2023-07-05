// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./nav.css"
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBookmarkStar} from 'react-icons/bs'
import {BsBookmarkHeart} from 'react-icons/bs'
import {BiMessageDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  
  return (
    <nav>
      <a href='#' className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about'><AiOutlineUser /></a>
      <a href='#experience'><BsBookmarkStar /></a>
      <a href='#portfolio'><BsBookmarkHeart /></a>
      <a href='#contact'><BiMessageDetail/></a>
    </nav>
  )
}

export default Nav
