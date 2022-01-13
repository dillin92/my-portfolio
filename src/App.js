import React from 'react';
import About from './components/About';
import {Carousal} from '3d-react-carousal';
import slides from './pages/carousel/carousel';
import Navbar from './components/Nav';
import Hero from './components/Hero';
import Portfolio  from './pages/portfolio';
import Footer from './components/Footer'
import {BrowserRouter as Router } from 'react-router-dom';
import { StyledCarousel } from './pages/carousel/CarouselElements';



function App() {
  return (
    <Router>
      <Navbar/> 
      <Hero/>
      <Portfolio/>
      

      <StyledCarousal>
        <Carousal id="about" slides={slides} autoplay={true} interval={100000}/>
      </StyledCarousal>
      
      <About/>
    
      <Footer/>
    
    </Router>
  );
}

export default App;
