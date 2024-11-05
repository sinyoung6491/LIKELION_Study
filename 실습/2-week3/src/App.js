import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Main from './components/main/Main'
import Login from './components/login/Login';
import Join from './components/login/Join';
import Commu from './components/community/Commu';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Join" element={<Join/>}/>
          <Route path="/Commu" element={<Commu/>}/>
        </Routes>
    </BrowserRouter>
    
  )
}

export default App