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
    </header>
  );
}

export default Header;
