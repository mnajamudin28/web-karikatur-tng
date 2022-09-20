import React from 'react'
import '../../css/ThemesImg.css'
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../img/STAMP.png'
import { Link } from "react-router-dom";
import wed1 from '../../img/Wedding/wed1.png'
import wed2 from '../../img/Wedding/wed2.png'
import wed3 from '../../img/Wedding/wed3.png'
import wed4 from '../../img/Wedding/wed4.png'
import wed5 from '../../img/Wedding/wed5.png'
import wed6 from '../../img/Wedding/wed6.png'
import wed7 from '../../img/Wedding/wed7.png'
import wed8 from '../../img/Wedding/wed8.png'
import wed9 from '../../img/Wedding/wed9.png'
import wed10 from '../../img/Wedding/wed10.png'


const Wedding = () => {
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
           <h1>Wedding</h1>
           <p>This theme is made as a gift for friends and relatives when they get married, or it can be a substitute for your wedding photos</p>
        </div>
        <div className='theme-wedding'>
           <div className='wed-item1'><img src={wed1} alt="" /></div>
           <div className='wed-item2'><img src={wed2} alt="" /></div>
           <div className='wed-item3'><img src={wed3} alt="" /></div>
           <div className='wed-item4'><img src={wed4} alt="" /></div>
           <div className='wed-item5'><img src={wed5} alt="" /></div>
           <div className='wed-item6'><img src={wed6} alt="" /></div>
           <div className='wed-item7'><img src={wed7} alt="" /></div>
           <div className='wed-item10'><img src={wed10} alt="" /></div>
           <div className='wed-item8'><img src={wed8} alt="" /></div>
           <div className='wed-item9'><img src={wed9} alt="" /></div>
        </div>
        <div className='order-now-box'>
           <a href="https://api.whatsapp.com/message/BIGQ27OGL3GZJ1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">Order Now</a>
        </div>
    </div>
  )
}

export default Wedding