import React from 'react'
import '../css/AboutUs.css'
import aboutus1 from '../img/aboutus1.png'
import ContactUs from '../component/Home/ContactUs'
import { Navbar, Container, Nav,} from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/img/STAMP.png'

const AboutUs = () => {
  return (
    <div id='about-us'>
      <Navbar variant="light" className='navbar'>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="" className='logo-about' />
          </Navbar.Brand>
          <div className='toggle-about'>
          </div>
          <Nav className="me-auto">
            <Link to="/" className='txt-nav-themes'>Back</Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='judul-about'>
        <h1> About Us </h1>
        <p>Caricature tng is a digital caricature illustration service that started its business in 2015, Iqdar Suwanggi as an illustrator and owner.
          Located in Kronjo District, Tangerang Regency, Banten. <br /> <br /> 
          We have served hundreds of clients and with our long experience, we always serve clients well and reliably. <br /> <br />
          We will make the shortcomings that we do as experiences that can build a better TNG Caricature in the future.
        </p>
        <img src={aboutus1} alt="" />
      </div>
      <ContactUs />
      <div className='address-about'>
        <div className='box-address-about'>
          <h1>Jl. Raya Kronjo - Balaraja</h1>
          <p>Ds. Pasilian Rt. 05 Rw.03 Kecamatan Kronjo
            Kabupaten Tangerang, Banten 15550</p>
        </div>
      </div>
      
    </div>
  )
}

export default AboutUs