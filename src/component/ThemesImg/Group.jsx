import React from 'react'
import '../../css/ThemesImg.css'
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../img/STAMP.png'
import { Link } from "react-router-dom";
import group1 from '../../img/Group/g1.png'
import group2 from '../../img/Group/g2.png'
import group3 from '../../img/Group/g3.png'
import group4 from '../../img/Group/g4.png'
import group5 from '../../img/Group/g5.png'
import group6 from '../../img/Group/g6.png'
import group7 from '../../img/Group/g7.png'
import group8 from '../../img/Group/g8.png'
import group9 from '../../img/Group/g9.png'
import group10 from '../../img/Group/g10.png'
import group11 from '../../img/Group/g11.png'
import group12 from '../../img/Group/g12.png'

const Group = () => {
  return (
    <div>
      <div>
        <div>
          <Navbar variant="light" className='Navbar'>
            <Container>
              <Navbar.Brand href="/">
                <img src={logo} alt="" className='logo-theme' />
              </Navbar.Brand>
              <div className='toggle'>
              </div>
              <Nav className="me-auto">
                <Link to="/" className='txt-nav-themes'>Back</Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
        <div className='themes-judul'>
          <h1>Group</h1>
          <p>This theme was created for your boss' retirement gift needs, your hangout group, and others</p>
        </div>
        <div className='theme-group'>
          <div className='group-item1'><img src={group1} alt="" /></div>
          <div className='group-item2'><img src={group2} alt="" /></div>
          <div className='group-item3'><img src={group3} alt="" /></div>
          <div className='group-item4'><img src={group4} alt="" /></div>
          <div className='group-item5'><img src={group5} alt="" /></div>
          <div className='group-item6'><img src={group6} alt="" /></div>
          <div className='group-item7'><img src={group7} alt="" /></div>
          <div className='group-item8'><img src={group8} alt="" /></div>
          <div className='group-item9'><img src={group9} alt="" /></div>
          <div className='group-item10'><img src={group10} alt="" /></div>
          <div className='group-item11'><img src={group11} alt="" /></div>
          <div className='group-item12'><img src={group12} alt="" /></div>
        </div>
        <div className='order-now-box'>
          <a href="https://api.whatsapp.com/message/BIGQ27OGL3GZJ1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">Order Now</a>
        </div>
      </div>
    </div>
  )
}

export default Group