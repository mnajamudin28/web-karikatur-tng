import React from 'react'
import '../../css/ThemesImg.css'
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../img/STAMP.png'
import { Link } from "react-router-dom";
import uniform1 from '../../img/Uniform/uni1.png'
import uniform2 from '../../img/Uniform/uni2.png'
import uniform3 from '../../img/Uniform/uni3.png'
import uniform4 from '../../img/Uniform/uni4.png'
import uniform5 from '../../img/Uniform/uni5.png'
import uniform6 from '../../img/Uniform/uni6.png'
import uniform7 from '../../img/Uniform/uni7.png'
import uniform8 from '../../img/Uniform/uni8.png'
import uniform9 from '../../img/Uniform/uni9.png'
import uniform10 from '../../img/Uniform/uni10.png'
import uniform11 from '../../img/Uniform/uni11.png'
import uniform12 from '../../img/Uniform/uni12.png'
import uniform13 from '../../img/Uniform/uni13.png'
import uniform14 from '../../img/Uniform/uni14.png'
import uniform15 from '../../img/Uniform/uni15.png'
import uniform16 from '../../img/Uniform/uni16.png'

const Uniform = () => {
  return (
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
        <h1>Uniform</h1>
        <p>This theme is to make a picture with your pride uniform</p>
      </div>
      <div className='theme-uniform'>
        <div className='uniform-item1'><img src={uniform1} alt="" /></div>
        <div className='uniform-item2'><img src={uniform2} alt="" /></div>
        <div className='uniform-item3'><img src={uniform3} alt="" /></div>
        <div className='uniform-item4'><img src={uniform4} alt="" /></div>
        <div className='uniform-item5'><img src={uniform5} alt="" /></div>
        <div className='uniform-item6'><img src={uniform6} alt="" /></div>
        <div className='uniform-item7'><img src={uniform7} alt="" /></div>
        <div className='uniform-item8'><img src={uniform8} alt="" /></div>
        <div className='uniform-item9'><img src={uniform9} alt="" /></div>
        <div className='uniform-item10'><img src={uniform10} alt="" /></div>
        <div className='uniform-item11'><img src={uniform11} alt="" /></div>
        <div className='uniform-item12'><img src={uniform12} alt="" /></div>
        <div className='uniform-item13'><img src={uniform13} alt="" /></div>
        <div className='uniform-item14'><img src={uniform14} alt="" /></div>
        <div className='uniform-item15'><img src={uniform15} alt="" /></div>
        <div className='uniform-item16'><img src={uniform16} alt="" /></div>
      </div>
      <div className='order-now-box'>
        <a href="https://api.whatsapp.com/message/BIGQ27OGL3GZJ1?autoload=1&app_absent=0">Order Now</a>
      </div>
    </div>
  )
}

export default Uniform