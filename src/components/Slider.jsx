import React from 'react'
import { Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide_img from '../assets/svg/slide_img.png'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../assets/scss/slider.scss'
import event from '../assets/svg/event.png'

const Slider = () => {
  return (
    <div className="slider_div">
        <div className="left_text_div">
            <div className="text_top">
                <h2 className='title'>2022 개정</h2>
                <h2 className='title'>교육과정 교과서</h2>
                <p className='txt'>지학사 교과서가 수업에 필요한 모든 것을 지원합니다.</p>
            </div>
            <div className='text_bottom'>
              <img src={event} alt="" />
            </div>
        </div>
        <div className="slide_img_div">
          <img src={slide_img} alt="" />
        </div>
    </div>
    
  )
}

export default Slider