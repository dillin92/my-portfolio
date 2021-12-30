import React from 'react';
import {Carousel} from '3d-react-carousal';
import slides from './pages/about';
import Navbar from './components/Nav';
import Portfolio  from './pages/portfolio';
import Footer from './components/Footer'



function App() {
  return (
    <div>
      <header><Navbar/></header>
      
      <main>
       
       <div >
        <Portfolio/>
       </div>

        <h1 style={{ textAlign: "center"}}> About Me</h1>
       <Carousel id="about" slides={slides} autoplay={true} interval={100000}/>
       
      
    
      </main>

      
     
      
      <Footer/>
    </div>
  );
}

export default App;
