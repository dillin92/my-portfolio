import React from 'react';
import About from './components/About';
import {Carousel} from '3d-react-carousal';
import slides from './pages/about';
import Navbar from './components/Nav';
import Hero from './components/Hero';
import Portfolio  from './pages/portfolio';
import Footer from './components/Footer'
import {BrowserRouter as Router } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Navbar/> 
      <Hero/>
      <Portfolio/>

      <Carousel id="about" slides={slides} autoplay={true} interval={100000}/>
      <About/>
    
      <Footer/>
    
    </Router>
  );
}

export default App;
