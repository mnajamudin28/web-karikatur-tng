import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper';
import { Link } from "react-router-dom";
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

         <div className='img-container'>
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
            <SwiperSlide>
              <Link style={{ textDecoration: 'none' }} to='/graduation'>
                <div className='img-theme'>
                  <img src={graduation} alt="" />
                </div>
                <div className='text-img'> <h3>Graduation <br /> Caricatures</h3> 
                </div>  
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link style={{ textDecoration: 'none' }} to='/wedding'>
                <div className='img-theme'>
                  <img src={wedding} alt="" />
                </div>
                <div className='text-img'> <h3>Wedding <br /> Caricatures</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link style={{ textDecoration: 'none' }} to='/family'>
                <div className='img-theme'>
                  <img src={family} alt="" />
                </div>
                <div className='text-img'> <h3>Family <br /> Caricatures</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link style={{ textDecoration: 'none' }} to='/group'>
                <div className='img-theme'>
                  <img src={group} alt="" />
                </div>
                <div className='text-img'> <h3>Group <br /> Caricatures</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link style={{ textDecoration: 'none' }} to='/kids'>
                <div className='img-theme'>
                  <img src={kids} alt="" />
                </div>
                <div className='text-img'> <h3>Kids <br /> Caricatures</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link style={{ textDecoration: 'none' }} to='/friends'>
                <div className='img-theme'>
                  <img src={friends} alt="" />
                </div>
                <div className='text-img'> <h3>Friends <br /> Caricatures</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link style={{ textDecoration: 'none' }} to='/uniform'>
                <div className='img-theme'>
                  <img src={uniform} alt="" />
                </div>
                <div className='text-img'> <h3>Uniform <br /> Caricatures</h3>
                </div>
              </Link>
            </SwiperSlide>
            
          </Swiper>
         </div>     
      </div>    
    </div> 
  )
}

export default Themes