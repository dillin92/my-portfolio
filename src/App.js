import React from 'react';
import About from './components/About';
import Navbar from './components/Nav';
import Portfolio  from './pages/portfolio';
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Navbar/>
      <main style={{ display: "inline-flex"}}>
       
       <div className="container col-4 ">
        <Portfolio/>
       </div>

       <div style={{ display:"grid"}}><About/></div>
       
    
      </main>

     
      
      <Footer/>
    </div>
  );
}

export default App;
