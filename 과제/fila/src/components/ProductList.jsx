import React from 'react';
import Slider from 'react-slick';
import '../styles/scss/ProductList.scss';

function ProductList() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  const products = [
    { imgSrc: '../styles/img/product1_1.svg', name: '<COLD WAVE> 그라데 로고 반팔 티셔츠', price: '49,000원' },
    { imgSrc: '../styles/img/product1_2.svg', name: '<COLD WAVE> 그라데 로고 반팔 티셔츠', price: '49,000원' },
    { imgSrc: '../styles/img/product1_3.svg', name: '<COLD WAVE> 그라데 로고 반팔 티셔츠', price: '49,000원' },
    { imgSrc: '../styles/img/product1_4.svg', name: '<COLD WAVE> 그라데 로고 반팔 티셔츠', price: '49,000원' },
    { imgSrc: '../styles/img/product1_5.svg', name: '<COLD WAVE> 그라데 로고 반팔 티셔츠', price: '49,000원' }
  ];

  return (
    <div className="product-list">
      <h2>지금 많이 찾는 상품</h2>
      <div className="product-categories">
        <span># 냉감티셔츠</span>
        <span># 에샤페</span>
        <span># 반팔티셔츠</span>
        <span># 페이토&샌들</span>
        <span># 인터런</span>
      </div>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div className="product" key={index}>
            <img src={product.imgSrc} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductList;
