import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


const Navigation = () => {

  const [showMenu, setShowMenu] = useState(false)

  let menu
  

  if(showMenu){
    menu =
    <div className='menu-toggle'>
        <ul>
          <li>
            <a href="#our-process" rel="noopener noreferrer" className='txt-nav'>How to Order</a>
          </li>
          <li>
            <a href="#themes" rel="noopener noreferrer" className='txt-nav txt-themes'>Themes</a>
          </li>
          <li>
            <a href="#contact-us" rel="noopener noreferrer" className='txt-nav txt-themes'>Contact</a>
          </li>
          <li>
            <Link to="/about-us" className='txt-nav'>About us</Link>
          </li>
        </ul>
    </div>
   
  }


  return (
    <nav>
      <span className='text-xl'>
        <FontAwesomeIcon
        icon={faBars}
        onClick={() => setShowMenu(!showMenu)}/>
      </span>

      {menu}
    </nav>
  )
}

export default Navigation