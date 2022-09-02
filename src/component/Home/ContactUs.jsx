import React from 'react'
import ig from '../../img/ig.png'
import mail from '../../img/mail.png'
import fb from '../../img/fb.png'
import wa from '../../img/wa.png'


const ContactUs = () => {
  return (
    <div>
      <div id='contact-us'>
         <h1>Contact Us</h1>
         <p>If you are interested, please order a caricature illustration from now on for the <br />
         people you care about. we are sure they will be happy.</p>
         <div className='sosmed'>
            <div className='icon-sosmed'>
               <a href=""><img src={ig} alt="" /></a> 
            </div>
            <div className='icon-sosmed'>
               <a href=""><img src={mail} alt="" /></a>
            </div>
            <div className='icon-sosmed'>
               <a href=""><img src={fb} alt="" /></a>
            </div>
            <div className='icon-sosmed'>
               <a href=""><img src={wa} alt="" /></a>
            </div>
         </div>
      </div>
    </div>
  )
}

export default ContactUs