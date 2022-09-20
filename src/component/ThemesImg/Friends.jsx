import React from 'react'
import '../../css/ThemesImg.css'
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../img/STAMP.png'
import { Link } from "react-router-dom";
import friends1 from '../../img/Friends/friend1.png'
import friends2 from '../../img/Friends/friend2.png'
import friends3 from '../../img/Friends/friend3.png'
import friends4 from '../../img/Friends/friend4.png'
import friends5 from '../../img/Friends/friend5.png'
import friends6 from '../../img/Friends/friend6.png'

const Friends = () => {
  return (
    <div>
      <div>
        <Navbar variant="light" className='Navbar'>
          <Container>
            <Navbar.Brand href="/">
              <img src={logo} alt="" className='logo' />
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
        <h1>Friends</h1>
        <p>This theme is for making memories with your friends</p>
      </div>
      <div className='theme-friends'>
        <div className='friends-item1'><img src={friends1} alt="" /></div>
        <div className='friends-item2'><img src={friends2} alt="" /></div>
        <div className='friends-item4'><img src={friends4} alt="" /></div>
        <div className='friends-item3'><img src={friends3} alt="" /></div>
        <div className='friends-item5'><img src={friends5} alt="" /></div>
        <div className='friends-item6'><img src={friends6} alt="" /></div>
      </div>
      <div className='order-now-box'>
        <a href="https://api.whatsapp.com/message/BIGQ27OGL3GZJ1?autoload=1&app_absent=0">Order Now</a>
      </div>
    </div>
  )
}

export default Friends