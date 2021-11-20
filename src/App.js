import React from 'react';
import About from './components/About';
import Navbar from './components/Nav';
import Portfolio  from './pages/portfolio';
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Navbar/>
      <main>
       
       <div >
        <Portfolio/>
       </div>

       <div><About/></div>
       
    
      </main>

     
      
      <Footer/>
    </div>
  );
}

export default App;
