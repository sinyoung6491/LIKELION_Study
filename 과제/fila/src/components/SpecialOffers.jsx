import React from 'react';
import '../styles/scss/SpecialOffers.scss';

function SpecialOffers() {
  return (
    <div className="special-offers">
      <div className="offer">
        <img src="../styles/img/special1.svg" alt="Offer" />
        <p>AXILUS 3</p>
      </div>
      <div className="offer">
        <img src="../styles/img/special2.svg" alt="Offer" />
        <p>Pertex Life</p>
      </div>
    </div>
  );
}

export default SpecialOffers;
