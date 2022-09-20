import React from 'react'
import '../../css/ThemesImg.css'
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../img/STAMP.png'
import { Link } from "react-router-dom";
import fam1 from '../../img/Family/fam1.png'
import fam2 from '../../img/Family/fam2.png'
import fam3 from '../../img/Family/fam3.png'
import fam4 from '../../img/Family/fam4.png'
import fam5 from '../../img/Family/fam5.png'
import fam6 from '../../img/Family/fam6.png'
import fam7 from '../../img/Family/fam7.png'
import fam8 from '../../img/Family/fam8.png'
import fam9 from '../../img/Family/fam9.png'
import fam10 from '../../img/Family/fam10.png'


const Family = () => {
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
            <h1>Family</h1>
            <p>This theme is to make your family photos better and interesting for you to place in the living room</p>
         </div>
         <div className='theme-family'>
            <div className='fam-item1'><img src={fam1} alt="" /></div>
            <div className='fam-item2'><img src={fam2} alt="" /></div>
            <div className='fam-item3'><img src={fam3} alt="" /></div>
            <div className='fam-item4'><img src={fam4} alt="" /></div>
            <div className='fam-item5'><img src={fam5} alt="" /></div>
            <div className='fam-item6'><img src={fam6} alt="" /></div>
            <div className='fam-item7'><img src={fam7} alt="" /></div>
            <div className='fam-item8'><img src={fam8} alt="" /></div>
            <div className='fam-item9'><img src={fam9} alt="" /></div>
            <div className='fam-item10'><img src={fam10} alt="" /></div>
         </div>
         <div className='order-now-box'>
            <a href="https://api.whatsapp.com/message/BIGQ27OGL3GZJ1?autoload=1&app_absent=0">Order Now</a>
         </div>
      </div>
   )
}

export default Family