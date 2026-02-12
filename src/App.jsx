import React from 'react'
import Home from './Component/Home'
import About from './Component/About'
import Contect from './Component/Contect'
import { Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />}/>
      
        <Route path="/contect" element={<Contect />} />
      </Routes>
    </>
  )
}

export default App
