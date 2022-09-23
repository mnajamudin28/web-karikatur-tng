import React from 'react'
import '../../css/ThemesImg.css'
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../img/STAMP.png'
import { Link } from "react-router-dom";
import kids1 from '../../img/Kids/kids1.png'
import kids2 from '../../img/Kids/kids2.png'
import kids3 from '../../img/Kids/kids3.png'
import kids4 from '../../img/Kids/kids4.png'
import kids5 from '../../img/Kids/kids5.png'
import kids6 from '../../img/Kids/kids6.png'
import kids7 from '../../img/Kids/kids7.png'
import kids8 from '../../img/Kids/kids8.png'


const Kids = () => {
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
              <h1>Kids</h1>
              <p>This theme is to make children's photos more cute and adorable</p>
           </div>
           <div className='theme-kids'>
              <div className='kids-item1'><img src={kids1} alt="" /></div>
              <div className='kids-item2'><img src={kids2} alt="" /></div>
              <div className='kids-item3'><img src={kids3} alt="" /></div>
              <div className='kids-item4'><img src={kids4} alt="" /></div>
              <div className='kids-item5'><img src={kids5} alt="" /></div>
              <div className='kids-item6'><img src={kids6} alt="" /></div>
              <div className='kids-item7'><img src={kids7} alt="" /></div>
              <div className='kids-item8'><img src={kids8} alt="" /></div>
           </div>
           <div className='order-now-box'>
              <a href="https://api.whatsapp.com/message/BIGQ27OGL3GZJ1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">Order Now</a>
           </div>
        </div>
    </div>
  )
}

export default Kids