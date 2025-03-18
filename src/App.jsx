import React,{ useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import ShowPlace from './places';
import Contact from './contact';
import About from './aboutUs';
import Navbar from './navbar';
import Footer from './Footer';

function App() {

  return (
    <>
    
        <Routes>
          <Route path="/" element={<ShowPlace  
     description="Sugiya is a beautyful village Sheikhpura districts" />} />
          <Route path="/aboutUs" element={ <About/> } />
          <Route path="/contact" element={ <Contact/> } />
          
        </Routes>
        <Footer></Footer>
    
    </>
    
  );
}

export default App;

      