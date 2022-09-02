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
               <h2>Concept</h2>
               <p>Send a photo of the object to be drawn to Email/Whatsapp,
               fill in the order form and specify a draft.</p>
            </div>
              <div className='box-process box-process-pay'>
               <img src={icon2} alt="" className="img-payment"/>
               <h2 className='h2-pay'>Payment</h2>
               <p className='p-pay'>Make payment by transfer BCA/BRI/DANA or order via Tokopedia</p>
            </div>
            <div className='box-process'>
               <img src={icon3} alt="" />
               <h2>Process</h2>
               <p>Orders enter the slot and will be processed according to the queue.</p>
            </div>
            <div className='box-process'>
               <img src={icon4} alt="" />
               <h2>Revision</h2>
               <p>If the results of the image are not suitable, then revisions can be made.</p>
            </div>
            <div className='box-process'>
               <img src={icon5} alt="" />
               <h2>Final</h2>
               <p>The final image will be sent using J&T / Grab / 
                  Gojek or JPG/PNG file if only Softcopy message.</p>
            </div>
         </div>
      </div>
      
    </div>
  )
}

export default OurProcess