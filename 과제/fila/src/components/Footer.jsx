import React from 'react';
import '../styles/scss/Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="contact">
        <p>CS CENTER</p>
        <p>1577-3472</p>
        <p>filaonline@fila.com</p>
        <p>운영시간: 09:00 - 18:00 (점심시간 제외)</p>
      </div>
      <div className="links">
        <a href="#">배송안내</a>
        <a href="#">공지사항</a>
        <a href="#">FILA MEMBER 혜택</a>
        <a href="#">단체주문 안내</a>
        <a href="#">매장개설문의</a>
        <a href="#">FILA 멤버 안내</a>
      </div>
    </footer>
  );
}

export default Footer;
