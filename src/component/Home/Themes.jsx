import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import graduation from '../../img/graduation.png'
import family from '../../img/family.png'
import group from '../../img/group.png'
import kids from '../../img/kids.png'
import wedding from '../../img/wedding.png'
import friends from '../../img/friends.png'
import uniform from '../../img/uniform.png'

const Themes = () => {
  return (
    <div>
      <div id='themes'>
         <hr />
         <h1>Themes</h1>
         <p>This is the result of the caricature order to us so far.</p>

         <div className='themes-img'>
          <Swiper
            // install Swiper modules
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide><a href="#"><div className='box-theme'></div><img src={graduation} alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="#"><img src={wedding} alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="#"><img src={family} alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="#"><img src={group} alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="#"><img src={kids} alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="#"><img src={friends} alt="" /></a></SwiperSlide>
            <SwiperSlide><a href="#"><img src={uniform} alt="" /></a></SwiperSlide>
          </Swiper>
          
          
          
          
          
          
          
         </div>     

      </div>
      
    </div>
  )
}

export default Themes