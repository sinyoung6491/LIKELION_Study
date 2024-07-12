import React from 'react';
import Slider from 'react-slick';
import '../styles/scss/Banner.scss';

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="banner">
      <Slider {...settings}>
        <div>
          <img src="/src/styles/img/banner1.png" alt="Banner 1" />
        </div>
        <div>
          <img src="../styles/img/banner2.svg" alt="Banner 2" />
        </div>
        <div>
          <img src="../styles/img/banner3.svg" alt="Banner 3" />
        </div>
      </Slider>
      <div className="banner-text">
        <h1>Pink Blossom</h1>
        <p>24SS FILA NEW INTERUN</p>
        <button>24 NEW 인터런</button>
      </div>
    </div>
  );
}

export default Banner;
