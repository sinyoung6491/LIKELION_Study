import React from 'react';
import '../styles/scss/Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="logo">FILA</div>
      <nav>
        <ul>
          <li>Women</li>
          <li>Men</li>
          <li>Kids</li>
          <li>Tennis</li>
          <li>Brand</li>
        </ul>
      </nav>
      <div>
        <img src="/src/styles/img/icon1.png" alt="" />
        <img src="/src/styles/img/icon2.png" alt="" />
        <img src="/src/styles/img/icon3.png" alt="" />
        <img src="/src/styles/img/icon4.png" alt="" />
      </div>
    </header>
  );
}

export default Header;
