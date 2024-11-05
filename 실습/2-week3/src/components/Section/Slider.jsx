import React from 'react'
import 'swiper/css';
import slider1 from '../../assets/img/slider1.jpg';
import slider2 from '../../assets/img/slider2.jpg';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Autoplay } from "swiper/modules";


const Slider = () => {
    const slides = [
        { id: 1, imgSrc: slider1 },
        { id: 2, imgSrc: slider2 },
      ];
  return (
    <Swiper
          spaceBetween={30}  // 슬라이드 간 간격
          pagination={{ clickable: true }}  // 페이지네이션 점 클릭 가능
          autoplay={{ delay: 3000, disableOnInteraction: false }}  // 자동 슬라이드
          loop={true}  // 슬라이드 무한 반복
          modules={[Pagination, Autoplay]}  // modules를 통해 모듈을 전달
          style={{ height: 'auto', width:'100%'}}  // 슬라이더의 높이 설정
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img src={slide.imgSrc} alt={`슬라이드 ${slide.id}`} style={{ height: '100%', width:'100%', objectFit: 'cover', objectPosition: 'center',minHeight:'341.33px',maxHeight:'560px' }} />
            </SwiperSlide>
          ))}
        </Swiper>
  )
}

export default Slider