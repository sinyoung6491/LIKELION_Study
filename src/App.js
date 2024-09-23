import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Slider from './components/Slider'
import Main_top from './components/MainTop'
import Main_bottom from './components/MainBottom'

const App = () => {
  return (
    <>
      <Nav />
      <Slider />
      <Main_top/>
      <Main_bottom/>
      <Footer />

    </>
  )
}

export default App