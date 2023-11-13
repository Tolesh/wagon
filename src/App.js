import React, { useEffect, useState } from "react"
//rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

//componentes
// import Navbar from './components/NavbarAndMen';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar';
import BackGround from "./components/Background";
import { Link } from "react-scroll";
// import Menu from './NavbarAndMenu/Menu'
// import Nav from './NV/Nav/Nav'
// import './components/Background.css'

// import ThreeAnimation from './components/BackGroundAnim/ThreeAnimation';

function App() {
  
  return (
    <>
      <BrowserRouter>
       
        <Navbar />
        <BackGround />
        <Routes >
          <Route path='/' element={<Home />} />
          
          {/* <div style={{position: 'absolute'}}>
                    <div style={{"height": "400px"}}><span>Welcome!</span></div>
                    <div id="section_1" style={{"height": "500px"}}><span>Section 1</span></div>
                    <div id="section_2" style={{"height": "500px"}}><span>Section 2</span></div>
                    <div id="section_3" style={{"height": "500px"}}><span>Section 3</span></div>
          </div> */}
          {/* <Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >Test 1</Link> */}
          {/* <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} /> */}
        </Routes>
      {/* </div> */}
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;