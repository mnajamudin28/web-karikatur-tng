import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../img/STAMP.png'
import { Link } from "react-router-dom";
import '../../css/Home.css'

const Header = () => {
  return (
    <div id='header'>
        <Navbar variant="light" className='navbar'>
           <Container>
              <Navbar.Brand href="/">
                 <img src={logo} alt="" className='logo' />
              </Navbar.Brand>
              <div className='toggle'>
              </div>
              <Nav className="me-auto">
                 <a href="#our-process" rel="noopener noreferrer" className='txt-nav'>How to Order</a>
                 <a href="#themes" rel="noopener noreferrer" className='txt-nav txt-themes'>Themes</a>
                 <a href="#contact-us" rel="noopener noreferrer" className='txt-nav txt-themes'>Contact</a>
                 <Link to="/about-us" className='txt-nav'>About us</Link>
              </Nav>
           </Container>
        </Navbar>
    </div>
  )
}

export default Header