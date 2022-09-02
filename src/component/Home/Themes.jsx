import React from 'react'
import graduation from '../../img/graduation.png'
import family from '../../img/family.png'
import group from '../../img/group.png'
import kids from '../../img/kids.png'
import wedding from '../../img/wedding.png'

const Themes = () => {
  return (
    <div>
      <div id='themes'>
         <hr />
         <h1>Themes</h1>
         <p>This is the result of the caricature order to us so far.</p>
         <div className='themes-img'>
              <a href="#"><img src={graduation} alt="" /></a>
              <a href="#"><img src={wedding} alt="" /></a>
              <a href="#"><img src={family} alt="" /></a>
              <a href="#"><img src={group} alt="" /></a>
              <a href="#"><img src={kids} alt="" /></a>
         </div>
           {/* <div className='themes-img'>
              <a href="#" className='img-1'>sasas</a>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
           </div> */}
               
      </div>
      
    </div>
  )
}

export default Themes