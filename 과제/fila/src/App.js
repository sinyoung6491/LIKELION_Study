import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import SpecialOffers from './components/SpecialOffers';
import Footer from './components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css'


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <ProductList />
      <SpecialOffers />
      <Footer />
    </div>
  );
}

export default App;
