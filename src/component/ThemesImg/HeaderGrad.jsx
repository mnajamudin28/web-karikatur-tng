import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../img/STAMP.png'
import { Link } from "react-router-dom";
import '../../css/Home.css'

const HeaderGrad = () => {
  return (
    <div>
        <Navbar variant="light" className='Navbar'>
           <Container>
              <Navbar.Brand href="/">
                 <img src={logo} alt="" className='logo' />
              </Navbar.Brand>
              <div className='toggle'>
              </div>
              <Nav className="me-auto">
                 <Link to="/how-to-order" className='txt-nav-grad'>Order now</Link>
              </Nav>
           </Container>
        </Navbar>
    </div>
  )
}

export default HeaderGrad