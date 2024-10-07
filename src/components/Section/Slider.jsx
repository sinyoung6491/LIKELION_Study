import React from 'react'
import 'swiper/css';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Autoplay } from "swiper/modules"; // 최신 버전에서는 이렇게 importimport slider2 from '../../assets/img/png/slider02.png'
import slider1 from '../../assets/img/png/slider01.png'
import slider2 from '../../assets/img/png/slider02.png'
import slider3 from '../../assets/img/png/slider03.png'
import slider4 from '../../assets/img/png/slider04.png'


const Slider = () => {
    const slides = [
        { id: 1, imgSrc: slider1 },
        { id: 2, imgSrc: slider2 },
        { id: 3, imgSrc: slider3 },
        { id: 4, imgSrc: slider4 },
      ];
    
      return (
        <Swiper
          spaceBetween={30}  // 슬라이드 간 간격
          pagination={{ clickable: true }}  // 페이지네이션 점 클릭 가능
          autoplay={{ delay: 3000, disableOnInteraction: false }}  // 자동 슬라이드
          loop={true}  // 슬라이드 무한 반복
          modules={[Pagination, Autoplay]}  // modules를 통해 모듈을 전달
          style={{ height: '140px', width:'375px'}}  // 슬라이더의 높이 설정
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img src={slide.imgSrc} alt={`슬라이드 ${slide.id}`} style={{ height: '100%', width:'100%', objectFit: 'cover', objectPosition: 'center' }} />
            </SwiperSlide>
          ))}
        </Swiper>
      );
}

export default Slider