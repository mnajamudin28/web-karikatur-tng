import React from 'react'
import icon1 from '../../img/icon-1.png'
import icon2 from '../../img/icon-2.png'
import icon3 from '../../img/icon-3.png'
import icon4 from '../../img/icon-4.png'
import icon5 from '../../img/icon-5.png'

const OurProcess = () => {
  return (
    <div>
      <div id='our-process'>
         <h1>Our Process</h1>
         <p className='p-process'>The ordering process at Karikatur TNG has the following stages.</p>
         <div className='main-box'>
            <div className='box-process'>
               <img src={icon1} alt="" />
               <h2>concept</h2>
               <p>Send a photo of the object to be drawn to Email/Whatsapp,
               fill in the order form and specify a draft.</p>
            </div>
            <div className='box-process'>
               <img src={icon2} alt="" />
               <h2>concept</h2>
               <p>Send a photo of the object to be drawn to Email/Whatsapp,
                  fill in the order form and specify a draft.</p>
            </div>
            <div className='box-process'>
               <img src={icon3} alt="" />
               <h2>concept</h2>
               <p>Send a photo of the object to be drawn to Email/Whatsapp,
                  fill in the order form and specify a draft.</p>
            </div>
            <div className='box-process'>
               <img src={icon4} alt="" />
               <h2>concept</h2>
               <p>Send a photo of the object to be drawn to Email/Whatsapp,
                  fill in the order form and specify a draft.</p>
            </div>
            <div className='box-process'>
               <img src={icon5} alt="" />
               <h2>concept</h2>
               <p>Send a photo of the object to be drawn to Email/Whatsapp,
                  fill in the order form and specify a draft.</p>
            </div>
         </div>
      </div>
      
    </div>
  )
}

export default OurProcess