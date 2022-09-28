import React from 'react'
import { Link } from "react-router-dom";
import '../../css/Home.css'



const NavMobile = () => {
  // const menuToggle = document.querySelector('.menu-toggle input');
  // const nav = document.querySelector('nav ul');

  // menuToggle.addEventListener('click', function () {
  //   nav.classList.toggle('slide')
  // })

  return (
    <div>
      <nav>
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

        {/* <div className='menu-toggle'>
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </div> dari unpas*/}
       
      </nav>
    </div>
  )
}

export default NavMobile