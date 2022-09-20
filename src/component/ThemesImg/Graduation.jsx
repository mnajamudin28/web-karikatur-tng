import React from 'react'
import '../../css/ThemesImg.css'
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../img/STAMP.png'
import { Link } from "react-router-dom";
import grad1 from '../../img/Graduation/grad1.png'
import grad2 from '../../img/Graduation/grad2.png'
import grad3 from '../../img/Graduation/grad3.png'
import grad4 from '../../img/Graduation/grad4.png'
import grad5 from '../../img/Graduation/grad5.png'
import grad6 from '../../img/Graduation/grad6.png'
import grad7 from '../../img/Graduation/grad7.png'
import grad8 from '../../img/Graduation/grad8.png'
import grad9 from '../../img/Graduation/grad9.png'
import grad10 from '../../img/Graduation/grad10.png'
import grad11 from '../../img/Graduation/grad11.png'


const Graduation = () => {
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
        <h1>Graduation</h1>
        <p>This theme is made as a graduation gift for your spouse and friends or your family</p>
      </div>
      <div className='theme-graduation'>
        <div className='grad-item1'><img src={grad1} alt="" /></div>
        <div className='grad-item2'><img src={grad2} alt="" /></div>
        <div className='grad-item3'><img src={grad3} alt="" /></div>
        <div className='grad-item4'><img src={grad4} alt="" /></div>
        <div className='grad-item5'><img src={grad5} alt="" /></div>
        <div className='grad-item6'><img src={grad6} alt="" /></div>
        <div className='grad-item7'><img src={grad7} alt="" /></div>
        <div className='grad-item8'><img src={grad8} alt="" /></div>
        <div className='grad-item9'><img src={grad9} alt="" /></div>
        <div className='grad-item10'><img src={grad10} alt="" /></div>
        <div className='grad-item11'><img src={grad11} alt="" /></div>
      </div>
      <div className='order-now-box'>
        <a href="https://api.whatsapp.com/message/BIGQ27OGL3GZJ1?autoload=1&app_absent=0">Order Now</a>
      </div>
    </div>
    
  )
}

export default Graduation