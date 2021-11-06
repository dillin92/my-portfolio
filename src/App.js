import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio  from './pages/portfolio';
import Footer from './components/Footer'
import styles from './App.css';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Nav/>
      <main>
       
       <div className="container col-4 ">
        <Portfolio/>
       </div>
    
        <Resume/>
        <About/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
